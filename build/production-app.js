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
        
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
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
/*
 |---------------------------
 | ResetScroll Mixin
 |---------------------------
*/
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
 |---------------------------------
 | Data for comment Component
 |---------------------------------
*/
Exyht.AddCommentComponent = Ember.Component.extend({
  tagName: 'span',

  // Here we run a very simple test of the Graph API after login is
    // successful.  See statusChangeCallback() for when this call is made.
    getAPI: function() {
      console.log('Welcome!  Fetching your information.... ');
      var self = this;
      this.set('is_loggedin', true);
      FB.api('/me', function(response) {
          if (response && !response.error) {
            console.log('Successful login for: ' + response.name);
            self.setProperties({
              'user_name': response.name,
              'user_email': response.email
            });
          }
      });
      
    },

  fbLogin: function(){
    var self= this;
      FB.login(function(response) {
          // handle the response
          if (response.status === 'connected') {
            // Logged into your app and Facebook.
            self.getAPI();
          } else if (response.status === 'not_authorized') {
            // The person is logged into Facebook, but not your app.
            document.getElementById('status').innerHTML = 'Please log ' +
              'into this app.';
          } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            document.getElementById('status').innerHTML = 'Please log ' +
              'into Facebook.';
          }
      }, {scope: 'public_profile,email'});
    },

  setPropForAddCmt: function(){
    var postIdForAddCmt = this.get('postId');// post id(required)
    var getCmtsArray = this.get('comments');// comments array(required)
    var isAddCmtBtn = true,// boolean(required)
        hideAddCmtBtn = false;// boolean(required)
    this.setProperties({
      'isCommentDivShown': isAddCmtBtn,
      'isHideAddComment': hideAddCmtBtn,
      'commentsArray': getCmtsArray,
      'actualPostId': postIdForAddCmt
    });

    if(this.get('notReply') === true){
      var titleForAddCmt = this.get('title');// post title
              
      var currentSlug = this.get('title').substring(0, 60).replace(/[^A-Za-z0-9\s+]/g, '').replace(/\s+/g, '-').toLowerCase();//for link

      this.setProperties({
        'actualTitle': titleForAddCmt,
        'currentSlug': currentSlug,
        'isReplying': false,
        'commentIdToReply': '',
        'commenterNameToReply': '',
        'commenterGravaterToReply': ''
      });
    }

    if(this.get('isReply') === true){
      var getCmtId = this.get('cmtId');// comment id
      var getCmterName = this.get('cmtName');// reply to name
      var getCmterEmailForGravater = this.get('cmtEmail');// reply to email
      this.setProperties({
        'actualTitle': '',
        'currentSlug': '',
        'isReplying': true,
        'commentIdToReply': getCmtId,
        'commenterNameToReply': getCmterName,
        'commenterGravaterToReply': getCmterEmailForGravater
      });
    }
  },
  addCmt: function(){
    var name = this.get('user_name').trim(),
      addedComment = this.get('typeComment'),
      postId = this.get('actualPostId'),
      email = this.get('user_email').trim(),
      replyingCommentId = this.get('commentIdToReply'),
      valueForSpamBot = this.get('valueForSpam');
      
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

        self.set('sendingCommentOn', false);

        if(data.controller_response == "saved")
          {
            //alert("Data: " + data + "\nStatus: " + status);
            self.set('isCommentDivShown', false);
            
            var gravatarEmail = CryptoJS.MD5(self.get('user_email').trim().toLowerCase());
            
            var repliedToCommenterName = self.get('commenterNameToReply');
            var repliedToCommenterGravater = self.get('commenterGravaterToReply');
            
            if(self.get('isReplying') === true){
              self.get('commentsArray').pushObject({
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
              self.get('commentsArray').pushObject({
                name: name,
                email: gravatarEmail,
                comment: addedComment,
                replyToComment: []
              });
            }
            self.setProperties({
              'typeComment': '',
              'actualPostId': '',
              'actualTitle': '',
              'currentSlug': '',
              'isReplying': false,
              'commentIdToReply': '',
              'commenterNameToReply': '',
              'commenterGravaterToReply': ''
            });
            // Now scroll to bottom
            window.scrollTo(0, document.body.scrollHeight);
          }else if(data.read_only_mode === 1){
            $("#showError").addClass("alert alert-danger");
            $("#showError").html(data.controller_response);
          }else
          {
            $("#showError").addClass("alert alert-danger");
            $("#showError").html(data.error_msg);
          }
      },"json");
  },

	actions: {
		addCmtAction: function(){
      // Debounce for 0.5 second
      Ember.run.debounce(this, this.setPropForAddCmt, 500);
    },
    // Now send comment to server
    sendCmt: function(){
      console.log('yes!');
      // Debounce for 1 second
      Ember.run.debounce(this, this.addCmt, 1000);
    },
    fbLoginAttempt: function(){
      // This function is called when someone finishes with the Login
        // Button.  See the onlogin handler attached to it in the sample
        // code below.
        // Debounce for 0.5 second
          Ember.run.debounce(this, this.fbLogin, 500);
    }
	}
});
/*
 |---------------------------------
 | Editor tools Component
 |---------------------------------
*/
Exyht.EditorToolsComponent = Ember.Component.extend({
	actions: {
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
 |---------------------------------
 | Flag comment Component
 |---------------------------------
*/
Exyht.FlagCommentComponent = Ember.Component.extend({
  	tagName: 'span',

  	flagCmt: function(){
  		var commentId = this.get('id');
  		var self = this;
  		$.ajax({
      		type: "POST",
      		url: Exyht.BaseURL + "flagComment",
      		data: {commentId: commentId},
      		success: function(msg){
        		self.set('isFlagged', true);
      		}
  		});
	},

  	actions: {
    	flagComment: function(){
      		// Debounce for 0.5 second
      		Ember.run.debounce(this, this.flagCmt, 500);
    	}
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
 |---------------------------------
 | Infinite scroll Component
 |---------------------------------
*/
Exyht.InfiniteScrollComponent = Ember.Component.extend({

  more_post_offset: 8,
  more_post_limit: 8,
  loadingMoreTopics: false,

  new_limit: function(){
    return this.get('more_post_limit');
  }.property('more_post_limit'),

  inInsert: function (argument) {
    $(window).on('scroll', $.proxy(this.didScroll, this));
  }.on('didInsertElement'),

  onLeaving: function(){
    this.setProperties({
      'more_post_offset': 8,
      'more_post_limit': 8,
      'new_limit': 8
    });
    $(window).off('scroll', $.proxy(this.didScroll, this));
  }.on('willDestroyElement'),

  didScroll: function(){
    if($(window).scrollTop() + $(window).height() == $(document).height()){
      this.set('loadingMoreTopics', true); // Show loading spinner

      setTimeout(function(){
        // Wait 0.5 second before make an ajax call
        // Debounce for 1 second
        Ember.run.debounce(this, this.loadTopics, 1000);
          
      }.bind(this), 500);
    }
  },

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
  }
});
/*
 |---------------------------------
 | Manage editor Component
 |---------------------------------
*/
Exyht.ManageEditorComponent = Ember.Component.extend({
  	tagName: 'span',

  	cancelAddComment: function(){
    	var typedComment = this.get('typeComment');
    	$("div.container-full").css({"margin-top":"0"});
    	if(typeof typedComment == 'undefined' || typedComment.length === 0)
      	{
        	this.setProperties({
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
            	'isHideAddComment': false,
            	'isCommentDivShown': false,
            	'sendingCommentOn': false,
            	'actualPostId': '',
            	'actualTitle': '',
            	'currentSlug': '',
            	'isReplying': false,
            	'commentIdToReply': '',
            	'commenterNameToReply': '',
            	'commenterGravaterToReply': ''
        	});
        	$("div.container-full").css({"margin-top":"0"});
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
      	this.setProperties({
          	'isCommentDivShown': true,
          	'isHideAddComment': false
      	});
      	$("div.container-full").css({"margin-top":"0"});
    },

    actions: {
    	// Cancel commenting
    	cancelCmt: function(){
    	  	// Debounce for 0.5 second
    	  	Ember.run.debounce(this, this.cancelAddComment, 500);
    	},
    	// Hide comment box
    	hideCmtBox: function(){
      		// Debounce for 0.5 second
      		Ember.run.debounce(this, this.hideAddComment, 500);
    	},
    	// show comment box
    	showCmtBox: function(){
      		// Debounce for 0.5 second
      		Ember.run.debounce(this, this.showAddComment, 500);
    	}
    }
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
  //>>> For Login
  is_loggedin: false,
  user_name: '',
  user_email: '',
  //<<< For Login
  isReplying: false,
  isHideAddComment: false,
  isCommentDivShown: false,
  sendingCommentOn: false,
  actualTitle: '',
  actualPostId: '',
  currentSlug: '',
  commentsArray: '',
  newCommentLength: '',
  showNewCommentLength: false,
  commentIdToReply: '',
  commenterNameToReply: '',
  commenterGravaterToReply: '',
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
  }.property('Exyht.SidebarInfo.sidebar_info.archive')
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
is_loggedin: Ember.computed.alias("controllers.application.is_loggedin"),
user_name: Ember.computed.alias("controllers.application.user_name"),
user_email: Ember.computed.alias("controllers.application.user_email"),
isCommentDivShown: Ember.computed.alias("controllers.application.isCommentDivShown"),
isHideAddComment: Ember.computed.alias("controllers.application.isHideAddComment"),
isReplying: Ember.computed.alias("controllers.application.isReplying"),
actualPostId: Ember.computed.alias("controllers.application.actualPostId"),
actualTitle: Ember.computed.alias("controllers.application.actualTitle"),
postIdFromPostCtlr: Ember.computed.alias("controllers.post.id"),
commentsArray: Ember.computed.alias("controllers.application.commentsArray"),
getCommentsArrayFromPostCtlr: Ember.computed.alias("controllers.post.comments"),
commentIdToReply: Ember.computed.alias("controllers.application.commentIdToReply"),
commenterNameToReply: Ember.computed.alias("controllers.application.commenterNameToReply"),
commenterGravaterToReply: Ember.computed.alias("controllers.application.commenterGravaterToReply"),
currentSlug: Ember.computed.alias("controllers.application.currentSlug")
});
/*
 |------------------
 | Index Controller
 |------------------
*/
Exyht.IndexController = Ember.ObjectController.extend({
    
    // Post div background color
  	postBgColor: function(){
  		var bgClr = Ember.get('Exyht.BlogStyle.post_bg_clr');
    	return (bgClr !== "")?"background-color: "+bgClr:"background-color: #ffffff";
  	}.property('Exyht.BlogStyle.post_bg_clr')
});
/*
 |---------------------------
 | Post Controller
 |---------------------------
*/
Exyht.PostController = Ember.ObjectController.extend({

  needs: ["application", "index"],

  postBgColor: Ember.computed.oneWay("controllers.index.postBgColor"),
  is_loggedin: Ember.computed.alias("controllers.application.is_loggedin"),
  user_name: Ember.computed.alias("controllers.application.user_name"),
  user_email: Ember.computed.alias("controllers.application.user_email"),
  commentFeature: Ember.computed.oneWay("controllers.application.commentFeature"),
  readOnlyMode: Ember.computed.oneWay("controllers.application.readOnlyMode"),
  isCommentDivShown: Ember.computed.alias("controllers.application.isCommentDivShown"),
  isHideAddComment: Ember.computed.alias("controllers.application.isHideAddComment"),
  isReplying: Ember.computed.alias("controllers.application.isReplying"),
  actualTitle: Ember.computed.alias("controllers.application.actualTitle"),
  actualPostId: Ember.computed.alias("controllers.application.actualPostId"),
  currentSlug: Ember.computed.alias("controllers.application.currentSlug"),
  commentsArray: Ember.computed.alias("controllers.application.commentsArray"),
  commentIdToReply: Ember.computed.alias("controllers.application.commentIdToReply"),
  commenterNameToReply: Ember.computed.alias("controllers.application.commenterNameToReply"),
  commenterGravaterToReply: Ember.computed.alias("controllers.application.commenterGravaterToReply"),

  hasPost: function() {
    var postId = this.get("id");
    var response;
    if(typeof postId == 'undefined' || postId === 0){
      response = false;
    }else{
      response = true; 
    }
    return response;
  }.property("id")
});
/*
 |---------------------------
 | Application View
 |---------------------------
*/
Exyht.ApplicationView = Ember.View.extend({
  
  	templateName: "application",

  	didInsertElement: function(){
    	$(window).scroll( function() {
        	if ( $(window).scrollTop() > 20 ) {
        		if (window.matchMedia('(min-width: 1200px)').matches || window.matchMedia('(min-width: 768px)').matches) {
                    $('#toprow-for-title').css({'position':'fixed', 'top':'0px', 'z-index': '1', 'width': '60%', 'background-color': '#fff'});
            		$('#sidebar').css({'position':'fixed', 'left':'60%', 'top':'auto','bottom':'0px'});
            	} else {
            		$('#sidebar').css({'position':'relative','top':'auto', 'left': 'auto', 'bottom':'auto'});
            	}
        	} else {
        		if (window.matchMedia('(min-width: 1200px)').matches || window.matchMedia('(min-width: 768px)').matches) {
            		$('#sidebar').css({'position':'relative','top':'0px', 'left': 'auto', 'bottom':'auto'});
            	} else {
            		$('#sidebar').css({'position':'relative','top':'auto', 'left': 'auto', 'bottom':'auto'});
            	}
                $('#toprow-for-title').css({'position':'relative', 'top':'0px'});
        	}
    	});
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