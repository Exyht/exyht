/*
 |---------------
 | Exyht App
 |---------------
*/
window.Exyht = Ember.Application.create({
    currentPath: '',
    BaseURL: '/blog/',
    gravatarVersion: 'identicon'
});
// Defer Readiness
Exyht.deferReadiness();
// Get hostname with protocol and port
var hostnameWithProtocolPort = window.location.protocol+"//"+window.location.hostname+(window.location.port ? ':' + window.location.port: '');
Exyht.currentBaseUri = hostnameWithProtocolPort+Exyht.BaseURL;
// this function add css in the dom
function addCss(cssString) {
  try{
    var head = document.getElementsByTagName('head')[0];

    var newCss = document.createElement('style');
    newCss.type = "text/css";
    newCss.innerHTML = cssString;
    head.appendChild(newCss);
  } catch(err) { return; }
} 
// Get current year	
var currentDate = new Date();
Exyht.currentYear = currentDate.getFullYear();
// Add x-csrf-token to all ajax request
$.ajaxSetup({
    headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
});
// This helper uses both Markdown and Html sanitizer
Ember.Handlebars.helper('format-markdown', function(input) {

// Add this part
   if (typeof input == 'undefined')  return;
   
var markdown = new Markdown.getSanitizingConverter();

emoji.sheet_path = hostnameWithProtocolPort+'/blog/libraries/js/sheet_twitter_72.png';
emoji.use_sheet = true;
// show the short-name as a `title` attribute for css/img emoji
emoji.include_title = true;
emoji.init_env();

function urlX(url) { if(/^https?:\/\//.test(url)) { return url; }}
  
var markDownInput = markdown.makeHtml(input);
   return new Ember.Handlebars.SafeString(emoji.replace_colons(html_sanitize(markDownInput, urlX)));
});

// This helper only use markdown sanitizer
Ember.Handlebars.helper('format-xmarkdown', function(input) {

// Add this part
   if (typeof input == 'undefined')  return;
   
var markdown = new Markdown.getSanitizingConverter();
  
   return new Ember.Handlebars.SafeString(emoji.replace_colons(markdown.makeHtml(input)));
});

Ember.Handlebars.helper('format-archive-date', function(input) {
  return moment(input).format('DD MMM YYYY');
});

Ember.Handlebars.helper('format-comment-number', function(input) {
  return (input == 1)?' Comment':' Comments';
});
Exyht.ResetScroll = Ember.Mixin.create({
  activate: function() {
    this._super();
    window.scrollTo(0,0);
  }
});
/*
 |---------------
 | Exyht Router
 |---------------
*/ 
Exyht.Router.map(function() {
  this.route('index', {path: Exyht.BaseURL});
  this.route('post', {path: Exyht.BaseURL + 'post/:post_slug/:post_id'});
  this.route('archive', {path: Exyht.BaseURL + 'archive'});
});

Exyht.Router.reopen({
  location: 'history'
});

Exyht.IndexRoute = Ember.Route.extend(Exyht.ResetScroll, {
  init_post_offset: 0,
  init_post_limit: 8,
  model: function()
    {
      return Ember.$.getJSON(Exyht.currentBaseUri + 'getBlogPosts/' + this.init_post_offset + '/' + this.init_post_limit).then(function(data) {
        return {"posts":data};
      });
    },
  redirect: function() {
        // this redirects / to /index
        this.transitionTo('index');
    }
});

Exyht.PostRoute = Ember.Route.extend(Exyht.ResetScroll, {
  model: function(params)
    {
      return Ember.$.getJSON(Exyht.currentBaseUri + 'getPostTitle/' + params.post_id).then(function(data) {

        $('title').html(data.title);

        return data;
      });
    },
    setupController: function (controller, model) {
        Ember.$.getJSON(Exyht.currentBaseUri + 'postComments/' + model.id).then(function(data) {
          Ember.run(function() {
            controller.set('model', data);
          });
          // Update Window title
          $('title').html(data.title);
        });
  },
  serialize: function(model, params) {
    var slug = model.title.substring(0, 60).replace(/[^A-Za-z0-9\s+]/g, '').replace(/\s+/g, '-').toLowerCase();
    return { post_slug: slug, post_id: model.id };
  }  
});

Exyht.ArchiveRoute = Ember.Route.extend(Exyht.ResetScroll, {
  model: function(){
    return Ember.$.getJSON(Exyht.currentBaseUri + 'getAllTitles').then(function(data){
      return {"archive": data};
    });
  }
});
/*
 |---------------------------
 | GravatarImage Component
 |---------------------------
*/
Exyht.GravatarImageComponent = Ember.Component.extend({
  size: 40,
  email: '',
  notReply: true,

  gravatarUrl: function() {
    var email = this.get('email'),
        size = this.get('size');

    return 'http://www.gravatar.com/avatar/' + email + '?d='+Exyht.gravatarVersion+'&s=' + size;
  }.property('email', 'size')
});
/*
 |---------------------------
 | TextArea Component
 |---------------------------
*/
Exyht.AutoExpandingTextAreaComponent = Ember.TextArea.extend({
  didInsertElement: function(){
 
    Ember.run.next(function() {
      // This check function check for code block matches
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
  // Animate scrolltop of div with scrolltop of textarea
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
/*
 |---------------------------
 | TimeAgo Component
 |---------------------------
*/
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
/*
 |---------------------------
 | Application Controller
 |---------------------------
*/
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

  addCommentToPost: function(){
    var name = this.get('name').trim();
      
    var addedComment = this.get('typeComment');
      
    var postId = this.get('actualPostIdForAddComment');
    var email = this.get('email').trim();
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
            self.setProperties({
              'name': '',
              'email': '',
              'typeComment': '',
              'actualPostIdForAddComment': '',
              'actualTitleForAddComment': '',
              'actualOnlyCurrentSlug': '',
              'isReplying': false,
              'currentCommentIdToReply': '',
              'currentCommenterNameToReply': '',
              'currentCommenterGravaterToReply': ''
            });
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
  
  actions: {
    addComment: function(){
      // Debounce for 1 second
      Ember.run.debounce(this, this.addCommentToPost, 1000);
    },
    cancelAddComment: function(){
      var typedComment = this.get('typeComment');
      
      if(typeof typedComment == 'undefined' || typedComment.length === 0)
      {
        this.setProperties({
          'name': '',
          'email': '',
          'isCommentDivShown': false,
          'actualPostIdForAddComment': '',
          'actualTitleForAddComment': '',
          'actualOnlyCurrentSlug': '',
          'isReplying': false,
          'currentCommentIdToReply': '',
          'currentCommenterNameToReply': '',
          'currentCommenterGravaterToReply': ''
        });
      }
      else
      {
        var confirmCanceling = confirm("Want to cancel?");
        if (confirmCanceling === true) {
          this.setProperties({
            'name': '',
            'email': '',
            'typeComment': '',
            'isCommentDivShown': false,
            'actualPostIdForAddComment': '',
            'actualTitleForAddComment': '',
            'actualOnlyCurrentSlug': '',
            'isReplying': false,
            'currentCommentIdToReply': '',
            'currentCommenterNameToReply': '',
            'currentCommenterGravaterToReply': ''
          });
        }
      }
    },
    hideAddComment: function(){
      var addedComment = this.get('typeComment');
      
      if(typeof addedComment == 'undefined' || addedComment.length === 0)
      {
        this.setProperties({
            'name': '',
            'email': '',
            'isHideAddComment': false,
            'isCommentDivShown': false,
            'actualPostIdForAddComment': '',
            'actualTitleForAddComment': '',
            'actualOnlyCurrentSlug': '',
            'isReplying': false,
            'currentCommentIdToReply': '',
            'currentCommenterNameToReply': '',
            'currentCommenterGravaterToReply': ''
        });
      }
      else
      {
        this.setProperties({
          'isCommentDivShown': false,
          'isHideAddComment': true
        });
        $("div.container-full").css({"margin-top":"50px"});
      }
    },
    showAddComment: function(){
      this.set('isCommentDivShown', true);
      this.set('isHideAddComment', false);
      $("div.container-full").css({"margin-top":"0"});
    },
    
    // Editor tools
    ctv: function(input){
      var textarea = $('textarea');
      textarea.val(textarea.val() + input);
    },
    citv: function(input1, input2){
      var textarea = $('textarea');
      if (textarea.val() === ''){
        textarea.val(textarea.val() + input1);
      }else{
        textarea.val(textarea.val() + input2);
      }
    },
    insertBold: function(){
      this.send('ctv', " **bold** ");
    },
    insertItalic: function(){
      this.send('ctv', " *italic* ");
    },
    insertLink: function(){
      this.send('citv', "[Link description](http://example.com)", "\n [Link description](http://example.com)");
    },
    insertQuote: function(){
      this.send('ctv', "\n > your quote here");
    },
    insertCode: function(){
      this.send('citv', "`For inline code` \n\n\tFor pre code", "\n\n`For inline code` \n\n\tFor pre code");
    },
    insertOrderedlist: function(){
      this.send('ctv', "Indent one space after the dot \'.\'\n\n1. Ordered list1\n2. Ordered list2");
    },
    insertUnorderedlist: function(){
      this.send('ctv', "Indent one space after the + or -.\n\n- Unordered list1\n\t+ Nested list");
    },
    insertHorizontalrule: function(){
      this.send('citv', "-----\nNew line", "\n\n-----\nNew line");
    },
    insertStrikethrough: function(){
      this.send('ctv', "<del>Strike through</del>");
    },
    insertSubscript: function(){
      this.send('ctv', "Sub<sub>script</sub>");
    },
    insertSuperscript: function(){
      this.send('ctv', "Sub<sup>script</sup>");
    },
    insertHeading1: function(){
      this.send('citv', "# Heading1\n", "\n# Heading1\n");
    },
    insertHeading2: function(){
      this.send('citv', "# Heading2\n", "\n# Heading2\n");
    },
    insertHeading3: function(){
      this.send('citv', "# Heading3\n", "\n# Heading3\n");
    }
  }
});
/*
 |---------------------------
 | Comments Controller
 |---------------------------
*/
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

flagCmt: function(){
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
},

  actions: {
    replyToCommentTrue: function(){
      
      var actualPostIdForReplyCommmentHere = this.get('actualPostIdFromPostController'),
          getCommentsArrayFromPost = this.get('getCommentsArrayFromPostController'),
          getCommentId = this.get('id'),
          getCommenterName = this.get('name'),
          getCommenterGravater = this.get('email');

      this.setProperties({
        'addReplyCommentBtn': true,
        'getIsHideAddComment': false,
        'setIsReplying': true,
        'actualPostId': actualPostIdForReplyCommmentHere,
        'newComment': getCommentsArrayFromPost,
        'setcommentIdToReply': getCommentId,
        'setcommenterNameToReply': getCommenterName,
        'setcommenterGravaterToReply': getCommenterGravater,
        'addActualTitle': '',
        'addOnlyCurrentSlug': ''
      });
    },
    flagComment: function(){
      // Debounce for 0.5 second
      Ember.run.debounce(this, this.flagCmt, 500);
    }
  }
});
/*
 |------------------
 | Index Controller
 |------------------
*/
Exyht.IndexController = Ember.ObjectController.extend({
    more_post_offset: 8,
    more_post_limit: 8,
    loadingMoreTopics: false,

    new_limit: function(){
      return this.get('more_post_limit');
    }.property('more_post_limit'),
    // Post div background color
  	postBgColor: function(){
  		var bgClr = Ember.get('Exyht.BlogStyle.post_bg_clr');
    	return (bgClr !== "")?"background-color: "+bgClr:"background-color: #ffffff";
  	}.property('Exyht.BlogStyle.post_bg_clr'),

    loadTopics: function(){
      var posts = this.get('posts'),
          self = this;
          
      return $.getJSON(Exyht.currentBaseUri+'getBlogPosts/'+this.get('more_post_offset')+'/'+this.get('more_post_limit')).then(function(data) {
            self.set('loadingMoreTopics', false); // Hide loading spinner
            $.each(data, function(index){
              if(data[index].no_post === false){ // no_post === true means there is no post
                posts.pushObject({
                  id: data[index].id,
                  title: data[index].title,
                  body: data[index].body,
                  created: data[index].created,
                  no_post: data[index].no_post
                });
                // Now increment offset by incrementing new_limit property
                self.set('more_post_offset', self.incrementProperty('new_limit'));
              }
            });
      });
    },

  	actions: {
    	loadMoreTopics: function(){
        this.set('loadingMoreTopics', true); // Show loading spinner

        setTimeout(function(){
          // Wait 0.5 second before make an ajax call
          // Debounce for 1 second
          Ember.run.debounce(this, this.loadTopics, 1000);
      	  
        }.bind(this), 500);
    	}
  	}
});
/*
 |---------------------------
 | Post Controller
 |---------------------------
*/
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
      
      var actualPostIdForAddCommmentHere = this.get('model.id'),
          actualTitleForAddCommmentHere = this.get('model.title').substring(0, 60),
          currentSlug = this.get('model.title').substring(0, 60).replace(/[^A-Za-z0-9\s+]/g, '').replace(/\s+/g, '-').toLowerCase(),
          getCommentsArray = this.get('model.comments');

      this.setProperties({
        'addCommentBtn': true,
        'getIsHideAddComment': false,
        'getIsReplying': false,
        'addActualTitle': actualTitleForAddCommmentHere,
        'addActualPostId': actualPostIdForAddCommmentHere,
        'addOnlyCurrentSlug': currentSlug,
        'newComment': getCommentsArray,
        'setcommentIdToReply': '',
        'setcommenterNameToReply': '',
        'setcommenterGravaterToReply': ''
      });
    }
  }
});
/*
 |---------------
 | Index View
 |---------------
*/
Exyht.IndexView = Ember.View.extend({
	didInsertElement: function(){
  	$(window).on('scroll', $.proxy(this.didScroll, this));
  },

  willDestroyElement: function(){
    this.setProperties({
      'controller.more_post_offset': 8,
      'controller.more_post_limit': 8,
      'controller.new_limit': 8
    });
  	$(window).off('scroll', $.proxy(this.didScroll, this));
  },

  didScroll: function(){
    if($(window).scrollTop() + $(window).height() == $(document).height()){
      this.get('controller').send('loadMoreTopics');
    }
  }
});
/*
 |---------------------------
 | Post View
 |---------------------------
*/
Exyht.PostView = Ember.View.extend({
  
  	templateName: "post",

  	postCreated: (function() {
  	  	return new Ember.Handlebars.SafeString(moment(this.get("controller.created")).format("MMM DD YYYY"));
  	}).property("controller.created"),

  	pageViewCount: (function(){
  		var pageViews = parseInt(this.get("controller.views"));
  		return new Ember.Handlebars.SafeString((pageViews === 0)?'1 seen' : pageViews + 1 + ' seen');
  	}).property("controller.views")
});