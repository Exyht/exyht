window.Exyht = Ember.Application.create({
    currentPath: '',
    BaseURL: '/blog/',
    gravatarVersion: 'identicon'
});

Exyht.deferReadiness();

Exyht.currentBaseUri = window.location.protocol+"//"+window.location.hostname+Exyht.BaseURL;

function addCss(cssString) {
  try{
    var head = document.getElementsByTagName('head')[0];

    var newCss = document.createElement('style');
    newCss.type = "text/css";
    newCss.innerHTML = cssString;
    head.appendChild(newCss);
  } catch(err) { return; }
} 
		
var currentDate = new Date();
Exyht.currentYear = currentDate.getFullYear();

$.ajaxSetup({
    headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
});
Ember.Handlebars.helper('format-markdown', function(input) {

// Add this part
   if (typeof input == 'undefined')  return;
   
var markdown = new Markdown.getSanitizingConverter();
//var markdown = new Markdown.Converter();
emoji.sheet_path = Exyht.PathToLibraries+'/libraries/js/sheet_twitter_72.png';
emoji.use_sheet = true;

// show the short-name as a `title` attribute for css/img emoji
emoji.include_title = true;
emoji.init_env();

function urlX(url) { if(/^https?:\/\//.test(url)) { return url; }}
  
   return new Ember.Handlebars.SafeString(emoji.replace_colons(html_sanitize(markdown.makeHtml(input), urlX)));
});

Ember.Handlebars.helper('format-archive-date', function(input) {
  return moment(input).format('DD MMM YYYY');
});

Ember.Handlebars.helper('format-comment-number', function(input) {
  return (input == 1)?' Comment':' Comments';
});
Exyht.Router.map(function() {
  this.route('index', {path: Exyht.BaseURL});
  this.route('post', {path: Exyht.BaseURL+'post/:post_slug/:post_id'});
});

Exyht.Router.reopen({
  location: 'history'
});

Exyht.IndexRoute = Ember.Route.extend({
  model: function()
    {
      return Ember.$.getJSON(Exyht.currentBaseUri+'getBlogPosts').then(function(data) {
        return data;
      });
    },
  redirect: function() {
        // this redirects / to /index
        this.transitionTo('index');
    }
});

Exyht.PostRoute = Ember.Route.extend({
  model: function(params)
    {
      return Ember.$.getJSON(Exyht.currentBaseUri+'getPostTitle/'+params.post_id).then(function(data) {

        $('title').html(data.title);

        return data;
      });
    },
    setupController: function (controller, model) {
        Ember.$.getJSON(Exyht.currentBaseUri+'postComments/'+model.id).then(function(data) {
          Ember.run(function() {
            controller.set('model', data);
          });

          $('title').html(data.title);
        });
  },
  serialize: function(model, params) {
    var slug = model.title.substring(0, 60).replace(/[^A-Za-z0-9\s+]/g, '').replace(/\s+/g, '-').toLowerCase();
    return { post_slug: slug, post_id: model.id };
  }  
});
Exyht.AutoExpandingTextAreaComponent = Ember.TextArea.extend({
  didInsertElement: function(){
 
    Ember.run.next(function() {
      var isInCode = false;
      function check(text) {
          var match;
          match = text.match(/`{3,}/g);
          if (match && match.length % 2) {
              isInCode = true;
          } else {
              match = text.match(/`/g);
              if (match && match.length % 2) {
                  isInCode = true;
              } else {
                  isInCode = false;
              }
          }
      }
      // Focus the text area
      this.$().focus();
        
      this.$().textcomplete([
      { // emoji strategy
        match: /\B:([\-+\w]*)$/,
        search: function (term, callback) {
            callback($.map(emojies, function (emoji) {
                return emoji.indexOf(term) === 0 ? emoji : null;
            }));
        },
        template: function (value) {
            return new Ember.Handlebars.SafeString(emoji.replace_colons(':'+value.toLowerCase()+':') +' :'+ value+':');
        },
        replace: function (value) {
            return ':' + value + ': ';
        },
        index: 1,
        context: function (text) {
            check(text);
            return !isInCode;
        }
      },
      { // words strategy
        match: /\b(\w{2,})$/,
        search: function (term, callback) {
            callback($.map(words, function (word) {
                return word.indexOf(term) === 0 ? word : null;
            }));
        },
        index: 1,
        replace: function (word) {
            return word + ' ';
        },
        context: function () { return isInCode; }
      }
]);

  this.$().scroll(function() {

      var scroll = $(this).scrollTop();

      if(scroll === 0){
        scroll  = scroll;
      }else{
        scroll += 5; 
      }

      $('div#typingCommentDiv').stop().animate({ scrollTop: scroll }, 500);
  });

  }.bind(this));
}
});
Exyht.TimeAgoComponent = Ember.Component.extend({
  timeAgo: '',
  
  clock: function() {
  	timezone = jstz.determine();
  	timezoneName = timezone.name();
    var newTimeAgo =  moment.tz(this.get('createdAt'), timezoneName).fromNow();
    this.set('timeAgo', newTimeAgo);
    
    Ember.run.later(this, this.clock, 1000 * 60);
  }.on('didInsertElement') 
});
Exyht.ApplicationController = Ember.ArrayController.extend({
  needs: "post",
  isReplying: false,
  isHideAddComment: false,
  isCommentDivShown: false,
  sendingCommentOn: false,
  actualTitleForAddComment: '',
  actualPostIdForAddComment: '',
  actualOnlyCurrentSlug: '',
  newCurrentComment: '',
  newCommentLength: '',
  showNewCommentLength: false,
  currentCommentIdToReply: '',
  currentCommenterNameToReply: '',
  currentCommenterGravaterToReply: '',
  valueForSpam: '',
  postKey: function(){
  
    var getNewCommentLength = this.get('typeComment').length;
    var leastNewCommentLength = Math.abs(20 - getNewCommentLength);
  
    if(getNewCommentLength === 0 || getNewCommentLength < 20){
  
      this.set('showNewCommentLength', true);
    
    }else{
  
      this.set('showNewCommentLength', false);
    }
  
    this.set('newCommentLength', leastNewCommentLength);
  }.observes('typeComment'),

  hasLogo: function(){
    return Ember.get('Exyht.BlogSettings.has_logo');
  }.property('Exyht.BlogSettings.has_logo'),

  blogLogo: function(){
    var blog_logo = Ember.get('Exyht.BlogSettings.logo');
    return (blog_logo !== '')?blog_logo:'';
  }.property('Exyht.BlogSettings.logo'),

  blogTitle: function(){
    return Ember.get('Exyht.BlogSettings.blog_title');
  }.property('Exyht.BlogSettings.blog_title'),

  blogSubTitle: function(){
    return Ember.get('Exyht.BlogSettings.blog_sub_title');
  }.property('Exyht.BlogSettings.blog_sub_title'),

  bodyBgColor: function(){
    var bgClr = Ember.get('Exyht.BlogStyle.body_bg_clr');
    return (bgClr !== "")?"background-color: "+bgClr:"background-color: #ffffff";
  }.property('Exyht.BlogStyle.body_bg_clr'),

  readOnlyMode: function(){
    return Ember.get('Exyht.BlogSettings.isReadOnlyMode');
  }.property('Exyht.BlogSettings.isReadOnlyMode'),

  commentFeature: function(){
    return Ember.get('Exyht.BlogSettings.hasCommentFeature');
  }.property('Exyht.BlogSettings.hasCommentFeature'),

  hasNavbar: function(){
    return Ember.get('Exyht.BlogSettings.hasNavbar');
  }.property('Exyht.BlogSettings.hasNavbar'),

  blogLinks: function(){
    return Ember.get('Exyht.BlogLinks');
  }.property('Exyht.BlogLinks'),

  navBgColor: function(){
    var bgClr = Ember.get('Exyht.BlogStyle.nav_bg_clr');
    return (bgClr !== "")?"background-color: "+bgClr:"background-color: #428bca";
  }.property('Exyht.BlogStyle.nav_bg_clr'),

  currentYear: function(){
    return Ember.get('Exyht.currentYear');
  }.property('Exyht.currentYear'),

  footerBgColor: function(){
    var bgClr = Ember.get('Exyht.BlogStyle.footer_bg_clr');
    return (bgClr !== "")?"background-color: "+bgClr:"";
  }.property('Exyht.BlogStyle.footer_bg_clr'),

  sidebarBgColor: function(){
    var bgClr = Ember.get('Exyht.BlogStyle.sidebar_bg_clr');
    return (bgClr !== "")?"background-color: "+bgClr:"background-color: #ffffff";
  }.property('Exyht.BlogStyle.sidebar_bg_clr'),

  sidebarAuthor: function(){
    return Ember.get('Exyht.SidebarInfo.sidebar_info.author');
  }.property('Exyht.SidebarInfo.sidebar_info.author'),

  sidebarArchive: function(){
    return Ember.get('Exyht.SidebarInfo.sidebar_info.archive');
  }.property('Exyht.SidebarInfo.sidebar_info.archive'),
  
  actions: {
    addComment: function(){
      var name = this.get('name');
      
      var addedComment = this.get('typeComment');
      
      var postId = this.get('actualPostIdForAddComment');
      var email = this.get('email');
      var replyingCommentId = this.get('currentCommentIdToReply');
      var valueForSpamBot = this.get('valueForSpam');
      
      if ((!addedComment || addedComment.length < 20) || !name || !email) {
         this.set('isCommentDivShown', true);
         return false;
      }
      if (!addedComment.trim()) { return; }
      
      this.set('sendingCommentOn', true);
      
      var self = this;
         
      $.post(Exyht.BaseURL+"addComment",
        {
         postId: postId,
         comment: addedComment,
         name: name,
         email: email,
         spam_bot: valueForSpamBot,
         replyToCommentId: replyingCommentId
        },function(data){

             // Remove previous meta tag with old csrf-token
              $('meta[name="csrf-token"]').remove();
              // Append new meta tag with new csrf-token
              $('head').append( '<meta name="csrf-token" content="'+data.token+'">' );
              // Update headers 'X-CSRF-Token' with new csrf-token
              $.ajaxSetup({
                headers: {
                    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                }
              });


          if(data.controller_response == "saved")
            {
              //alert("Data: " + data + "\nStatus: " + status);
              self.set('isCommentDivShown', false);
            
              var gravatarEmail = CryptoJS.MD5(self.get('email').trim().toLowerCase());
              
              var repliedToCommenterName = self.get('currentCommenterNameToReply');
              var repliedToCommenterGravater = self.get('currentCommenterGravaterToReply');
              
              if(self.get('isReplying') === true){
              self.get('newCurrentComment').pushObject({
                name: name,
                email: gravatarEmail,
                comment: addedComment,
                replyToComment: Ember.Object.create({
                  commentHasReply: true,
                  name: repliedToCommenterName,
                  email: repliedToCommenterGravater
                })
              });
              }
              else
              {
              self.get('newCurrentComment').pushObject({
                name: name,
                email: gravatarEmail,
                comment: addedComment,
                replyToComment: []
              });
              }
              self.set('name', '');
              self.set('email', '');
              self.set('typeComment', '');
              self.set('actualPostIdForAddComment', '');
              self.set('actualTitleForAddComment', '');
              self.set('actualOnlyCurrentSlug', '');
              self.set('isReplying', false);
              self.set('currentCommentIdToReply', '');
              self.set('currentCommenterNameToReply', '');
              self.set('currentCommenterGravaterToReply', '');
            }else if(data.read_only_mode === 1){
              $("#showError").addClass("alert alert-danger");
              $("#showError").html(data.controller_response);
            }else
            {
             $("#showError").html(data.error_msg);
            }
            self.set('sendingCommentOn', false);
        },"json");
   
    },
    cancelAddComment: function(){
      var typedComment = this.get('typeComment');
      
      if(typeof typedComment == 'undefined' || typedComment.length === 0)
      {
          this.set('name', '');
          this.set('email', '');
          this.set('isCommentDivShown', false);
          this.set('actualPostIdForAddComment', '');
          this.set('actualTitleForAddComment', '');
          this.set('actualOnlyCurrentSlug', '');
          this.set('isReplying', false);
          this.set('currentCommentIdToReply', '');
          this.set('currentCommenterNameToReply', '');
          this.set('currentCommenterGravaterToReply', '');
      }
      else
      {
        var confirmCanceling = confirm("Want to cancel?");
        if (confirmCanceling === true) {
          this.set('name', '');
          this.set('email', '');
          this.set('typeComment', '');
          this.set('isCommentDivShown', false);
          this.set('actualPostIdForAddComment', '');
          this.set('actualTitleForAddComment', '');
          this.set('actualOnlyCurrentSlug', '');
          this.set('isReplying', false);
          this.set('currentCommentIdToReply', '');
          this.set('currentCommenterNameToReply', '');
          this.set('currentCommenterGravaterToReply', '');
        }
      }
    },
    hideAddComment: function(){
      var addedComment = this.get('typeComment');
      
      if(typeof addedComment == 'undefined' || addedComment.length === 0)
      {
        this.set('isCommentDivShown', false);
        this.set('isHideAddComment', false);
        this.set('name', '');
        this.set('email', '');
        this.set('actualPostIdForAddComment', '');
        this.set('actualTitleForAddComment', '');
        this.set('actualOnlyCurrentSlug', '');
        this.set('isReplying', false);
        this.set('currentCommentIdToReply', '');
        this.set('currentCommenterNameToReply', '');
        this.set('currentCommenterGravaterToReply', '');
      }
      else
      {
        this.set('isCommentDivShown', false);
        this.set('isHideAddComment', true);
        $("div.container-full").css({"margin-top":"50px"});
      }
    },
    showAddComment: function(){
      this.set('isCommentDivShown', true);
      this.set('isHideAddComment', false);
      $("div.container-full").css({"margin-top":"0"});
    },
    
    // Editor tools
    insertBold: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + " **bold** ");
    },
    insertItalic: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + " *italic* ");
    },
    insertLink: function(){
     var textarea = $('textarea');
     if (textarea.val() === '')
     {
      textarea.val(textarea.val() + "[Link description](http://example.com)");
     }
     else
     {
      textarea.val(textarea.val() + "\n [Link description](http://example.com)");
     }
    },
    insertQuote: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + "\n > your quote here");
    },
    insertCode: function(){
     var textarea = $('textarea');
     if (textarea.val() === '')
     {
      textarea.val(textarea.val() + "`For inline code` \n\n\tFor pre code");
     }
     else
     {
      textarea.val(textarea.val() + "\n\n`For inline code` \n\n\tFor pre code");
     }
    },
    insertOrderedlist: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + "Indent one space after the dot \'.\'\n\n1. Ordered list1\n2. Ordered list2");
    },
    insertUnorderedlist: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + "Indent one space after the + or -.\n\n- Unordered list1\n\t+ Nested list");
    },
    insertHorizontalrule: function(){
     var textarea = $('textarea');
     if (textarea.val() === '')
     {
      textarea.val(textarea.val() + "-----\nNew line");
     }
     else
     {
      textarea.val(textarea.val() + "\n\n-----\nNew line");
     }
    },
    insertStrikethrough: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + "<del>Strike through</del>");
    },
    insertSubscript: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + "Sub<sub>script</sub>");
    },
    insertSuperscript: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + "Sub<sup>script</sup>");
    },
    insertHeading1: function(){
     var textarea = $('textarea');
     if (textarea.val() === '')
     {
      textarea.val(textarea.val() + "# Heading1\n");
     }
     else
     {
      textarea.val(textarea.val() + "\n# Heading1\n");
     }
    },
    insertHeading2: function(){
     var textarea = $('textarea');
     if (textarea.val() === '')
     {
      textarea.val(textarea.val() + "## Heading2\n");
     }
     else
     {
      textarea.val(textarea.val() + "\n## Heading2\n");
     }
    },
    insertHeading3: function(){
     var textarea = $('textarea');
     if (textarea.val() === '')
     {
      textarea.val(textarea.val() + "### Heading3\n");
     }
     else
     {
      textarea.val(textarea.val() + "\n### Heading3\n");
     }
    }
  }
});
Exyht.CommentsController = Ember.ObjectController.extend({

needs: ["application", "post"],

commentFeature: Ember.computed.oneWay("controllers.application.commentFeature"),
readOnlyMode: Ember.computed.oneWay("controllers.application.readOnlyMode"),
addReplyCommentBtn: Ember.computed.alias("controllers.application.isCommentDivShown"),
getIsHideAddComment: Ember.computed.alias("controllers.application.isHideAddComment"),
setIsReplying: Ember.computed.alias("controllers.application.isReplying"),
actualPostId: Ember.computed.alias("controllers.application.actualPostIdForAddComment"),
actualPostIdFromPostController: Ember.computed.alias("controllers.post.id"),
newComment: Ember.computed.alias("controllers.application.newCurrentComment"),
getCommentsArrayFromPostController: Ember.computed.alias("controllers.post.comments"),
setcommentIdToReply: Ember.computed.alias("controllers.application.currentCommentIdToReply"),
setcommenterNameToReply: Ember.computed.alias("controllers.application.currentCommenterNameToReply"),
setcommenterGravaterToReply: Ember.computed.alias("controllers.application.currentCommenterGravaterToReply"),
addActualTitle: Ember.computed.alias("controllers.application.actualTitleForAddComment"),
addOnlyCurrentSlug: Ember.computed.alias("controllers.application.actualOnlyCurrentSlug"),
  actions: {
    replyToCommentTrue: function(){
      this.set('addReplyCommentBtn', true);
      this.set('getIsHideAddComment', false);
      this.set('setIsReplying', true);
      var actualPostIdForReplyCommmentHere = this.get('actualPostIdFromPostController');
      this.set('actualPostId', actualPostIdForReplyCommmentHere);
      var getCommentsArrayFromPost = this.get('getCommentsArrayFromPostController');
      this.set('newComment', getCommentsArrayFromPost);
      var getCommentId = this.get('id');
      this.set('setcommentIdToReply', getCommentId);
      var getCommenterName = this.get('name');
      this.set('setcommenterNameToReply', getCommenterName);
      var getCommenterGravater = this.get('email');
      this.set('setcommenterGravaterToReply', getCommenterGravater);
      this.set('addActualTitle', '');
      this.set('addOnlyCurrentSlug', '');
    },
    flagComment: function(){
      var commentId = this.get('id');
      var self = this;
      $.ajax({
          type: "POST",
          url: Exyht.BaseURL+"flagComment",
          data: {commentId: commentId},
          success: function(msg){
            self.set('isFlagged', true);
          }
      });
    }
  }
});
Exyht.IndexController = Ember.ObjectController.extend({
  	postBgColor: function(){
  		var bgClr = Ember.get('Exyht.BlogStyle.post_bg_clr');
    	return (bgClr !== "")?"background-color: "+bgClr:"background-color: #ffffff";
  	}.property('Exyht.BlogStyle.post_bg_clr'),
});
Exyht.PostController = Ember.ObjectController.extend({
  needs: ["application", "index"],
  postBgColor: Ember.computed.oneWay("controllers.index.postBgColor"),
  commentFeature: Ember.computed.oneWay("controllers.application.commentFeature"),
  readOnlyMode: Ember.computed.oneWay("controllers.application.readOnlyMode"),
  addCommentBtn: Ember.computed.alias("controllers.application.isCommentDivShown"),
  getIsHideAddComment: Ember.computed.alias("controllers.application.isHideAddComment"),
  getIsReplying: Ember.computed.alias("controllers.application.isReplying"),
  addActualTitle: Ember.computed.alias("controllers.application.actualTitleForAddComment"),
  addActualPostId: Ember.computed.alias("controllers.application.actualPostIdForAddComment"),
  addOnlyCurrentSlug: Ember.computed.alias("controllers.application.actualOnlyCurrentSlug"),
  newComment: Ember.computed.alias("controllers.application.newCurrentComment"),
  setcommentIdToReply: Ember.computed.alias("controllers.application.currentCommentIdToReply"),
  setcommenterNameToReply: Ember.computed.alias("controllers.application.currentCommenterNameToReply"),
  setcommenterGravaterToReply: Ember.computed.alias("controllers.application.currentCommenterGravaterToReply"),
  hasPost: function() {
    var postId = this.get("model.id");
    var response;
    if(typeof postId == 'undefined' || postId === 0){
      response = false;
    }else{
      response = true; 
    }
    return response;
  }.property("model.id"),
  actions: {
    addCommentTrue: function(){
      this.set('addCommentBtn', true);
      this.set('getIsHideAddComment', false);
      this.set('getIsReplying', false);
      var actualPostIdForAddCommmentHere = this.get('model.id');
      var actualTitleForAddCommmentHere = this.get('model.title').substring(0, 60);
      var currentSlug = this.get('model.title').substring(0, 60).replace(/[^A-Za-z0-9\s+]/g, '').replace(/\s+/g, '-').toLowerCase();
      
      this.set('addActualTitle', actualTitleForAddCommmentHere);
      this.set('addActualPostId', actualPostIdForAddCommmentHere);
      this.set('addOnlyCurrentSlug', currentSlug);
      var getCommentsArray = this.get('model.comments');
      this.set('newComment', getCommentsArray);
      this.set('setcommentIdToReply', '');
      this.set('setcommenterNameToReply', '');
      this.set('setcommenterGravaterToReply', '');
    }
  }
});
Exyht.ApplicationView = Ember.View.extend({
  
  templateName: "application",

  ngravatarUrl: (function() {
    return "http://www.gravatar.com/avatar/"+this.get("controller.currentCommenterGravaterToReply") + '?d='+Exyht.gravatarVersion+'&s=20';
  }).property("controller.currentCommenterGravaterToReply")
});
Exyht.CommentsView = Ember.View.extend({
  
  templateName: "comments",

  cgravatarUrl: (function() {
    return "http://www.gravatar.com/avatar/"+this.get("controller.email") + '?d='+Exyht.gravatarVersion+'&s=40';
  }).property("controller.email"),

  rgravatarUrl: (function() {
    return "http://www.gravatar.com/avatar/"+this.get("controller.replyToComment.email") + '?d='+Exyht.gravatarVersion+'&s=18';
  }).property("controller.replyToComment.email"),
});
Exyht.PostView = Ember.View.extend({
  
  templateName: "post",

  postCreated: (function() {
    return new Ember.Handlebars.SafeString(moment(this.get("controller.created")).format("MMM DD YYYY"));
  }).property("controller.created"),

  pageViewCount: (function(){
  	
  	var pageViews = parseInt(this.get("controller.views"));
  	return new Ember.Handlebars.SafeString((pageViews === 0)?'1 seen' : pageViews + 1 + ' seen');
  }).property("controller.views"),
});
