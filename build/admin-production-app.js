window.Exyht = Ember.Application.create({});

Exyht.deferReadiness();

Exyht.BaseUrl = '/blog/admin-page';
Exyht.gravatarVersion = 'identicon';
Exyht.currentBaseUri = window.location.protocol+"//"+window.location.hostname+Exyht.BaseUrl;

function showLoading(){
 var loadingDiv = $('#loadingDiv');
 loadingDiv.show();
}

function showImgLoading(){
 var imgLoadingDiv = $('#imgLoadingDiv');
 imgLoadingDiv.show();
}

$.ajaxSetup({
    headers: {
        'Admin-X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
});


Ember.Handlebars.helper('format-markdown', function(input) {

// Add this part
   if (typeof input == 'undefined')  return;
   
var markdown = new Markdown.getSanitizingConverter();

emoji.sheet_path = Exyht.PathToLibraries+'/libraries/js/sheet_twitter_72.png';
emoji.use_sheet = true;

// show the short-name as a `title` attribute for css/img emoji
emoji.include_title = true;
emoji.init_env();

function urlX(url) { if(/^https?:\/\//.test(url)) { return url; }}
  
   return new Ember.Handlebars.SafeString(emoji.replace_colons(html_sanitize(markdown.makeHtml(input), urlX)));
});

Exyht.Router.map(function() {
    this.route('index',  {path: Exyht.BaseUrl});
    this.route('comments', {path: Exyht.BaseUrl+'/comments/:post_id'});
    this.route('typeblogpost', {path: Exyht.BaseUrl+'/typeblogpost'});
    this.route('profilesetting', {path: Exyht.BaseUrl+'/profilesetting'});
    this.route('uisettings', {path: Exyht.BaseUrl+'/uisettings'});
});

Exyht.Router.reopen({
  location: 'history'
});

Exyht.IndexRoute = Ember.Route.extend({
model: function()
  {
    return Ember.$.getJSON(Exyht.currentBaseUri+'/getBlogPosts').then(function(data) {
      return data;
    });
  },
  redirect: function() {
        // this redirects / to /index
        this.transitionTo('index');
  }
});

Exyht.CommentsRoute = Ember.Route.extend({
model: function(params)
  {
  return Ember.$.getJSON(Exyht.currentBaseUri+'/getComments/'+params.post_id).then(function(data) {
    return data;
  });
}
});

Exyht.ProfilesettingRoute = Ember.Route.extend({
model: function()
  {
  return Ember.$.getJSON(Exyht.currentBaseUri+'/getProfileInfo').then(function(data) {
    return data;
  });
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
        {// words strategy
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
        scroll += 10; 
      }

      $('div#postBodyDiv').stop().animate({ scrollTop: scroll }, 500);
  });

  }.bind(this));
}
});

Exyht.IndexController = Ember.ObjectController.extend({
  loadingOn: false,
  actions: {
      changeNameSubtitle: function(value1, value2){
        var sdata = {};
        if (value1 === 1)
        {
          var blogName = this.get('blog_name');
          sdata = { blog_name: blogName };
        }
        else if(value1 === 2)
        {
          var blogSubtitle = this.get('blog_subtitle');
          sdata = { blog_subtitle: blogSubtitle };
        }
        
        this.set('loadingOn', true);
        
        var self = this;
        return $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/"+value2,
          data: sdata,
          success: function(msg){
            self.set('loadingOn', false);
            console.log(msg);
            alert(msg);
          }
        });
      },
      changeBlogName: function(){
        this.send('changeNameSubtitle', 1, 'changeBlogName');
      },
      changeSubtitle: function(){
        this.send('changeNameSubtitle', 2, 'changeSubtitle');
      },
      changeModeFeature: function(value1, value2, value3){
        this.set(value1, value2);
        return $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/"+value3,
          success: function(msg){
            console.log(msg);
            alert(msg);
          }
        });
      },
      turnReadOnlyModeOn: function(){
        this.send('changeModeFeature', 'read_only_mode', true, 'turnReadOnlyModeOn');
      },
      turnReadOnlyModeOff: function(){
        this.send('changeModeFeature', 'read_only_mode', false, 'turnReadOnlyModeOff');
      },
      turnCommentFeatureOn: function(){
        this.send('changeModeFeature', 'has_cmnt_feature', true, 'turnCommentFeatureOn');
      },
      turnCommentFeatureOff: function(){
        this.send('changeModeFeature', 'has_cmnt_feature', false, 'turnCommentFeatureOff');
      },
      turnNavbarOn: function(){
        this.send('changeModeFeature', 'has_navbar', true, 'turnNavbarOn');
      },
      turnNavbarOff: function(){
        this.send('changeModeFeature', 'has_navbar', false, 'turnNavbarOff');
      },
      addNewLink: function(value){
        var linkName = this.get('link_name');
        var linkUrl  = this.get('link_url');

        if(!linkName || !linkUrl)
        {
          return false;
        }

        this.set('loadingOn', true);

        var self = this;

        return $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/"+value,
          data: { link_name: linkName, link_url: linkUrl},
          dataType: "json",
          success: function(msg){
            self.set('loadingOn', false);
            if(msg.has_error === false)
            {
              self.set('link_name', '');
              self.set('link_url', '');
              self.get('blog_links').pushObject({
                link_name: linkName,
                link_url: linkUrl,
                status: true,
                is_blog_url: true
              });
            }
            console.log(msg.message);
            alert(msg.message);
          }
        });
      },
      addNavLink: function(){
        this.send('addNewLink', 'addNavLink');
      },
      addElseLink: function(){
        this.send('addNewLink', 'addElseLink');
      }
  }
});
Exyht.ApplicationController = Ember.ObjectController.extend({
	actions: {
		logOut: function(){
			$.post( Exyht.BaseUrl+"/logout", function( data ) {
				if(data === 'true')
				{
					window.location.replace(Exyht.BaseUrl+'/login');
				}
			});
		}
	},
});
Exyht.BloglinkController = Ember.ObjectController.extend({
  actions: {
    removeLink: function(){
      var linkId = this.get('id');

      this.set('loadingOn', true);

      var self = this;
      $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/removeLink",
          data: { link_id: linkId},
          success: function(msg){
            self.set('loadingOn', false);
            self.set('status', false);
            console.log(msg);
            alert(msg);
          }
      });
    }
  }
});
Exyht.CommentsController = Ember.ArrayController.extend({
  needs: "posttitle",
  title: '',
});

Exyht.CommentController = Ember.ObjectController.extend({
  banLoading: false,
  flagLoading: false,
  actions: {
    markAsSeen: function(){
      var commentId = this.get('model.id');
      this.set('isSeen', true);
      $.ajax({
        type: "POST",
        url: Exyht.BaseUrl+"/markAsSeen/"+commentId,
        success: function(msg){
          console.log('Marked as seen!');
          alert(msg);
        }
      });
    },
    removeComment: function(){
      this.set('showLoading', true);
      var confirmCanceling = confirm("Want to remove?");
      if (confirmCanceling === true) {
        var commentId = this.get('model.id');
        var self = this;
        $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/removeComment/"+commentId,
          success: function(msg){
            console.log(msg);
            self.set('showLoading', false);
            self.set('isFlagged', false);
            self.set('status', false);
            alert(msg);
          }
        });
      }else{
        this.set('showLoading', false);
      }
    },
    banIp: function(){
      this.set('banLoading', true);
      var confirmCanceling = confirm("Want to ban this Ip address?");
      if (confirmCanceling === true) {
        var ipAddress = this.get('ip_address');
        var self = this;
        $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/banIp/"+ipAddress,
          success: function(msg){
            console.log(msg);
            self.set('banLoading', false);
            self.set('ip_status', true);
            alert(msg);
          }
        });
      }else{
        this.set('banLoading', false);
      }
    },
    removeFlag: function(){
      this.set('flagLoading', true);
      var confirmCanceling = confirm("Want to remove flag?");
      if (confirmCanceling === true) {
        var commentId = this.get('id');
        var self = this;
        $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/removeFlag/"+commentId,
          success: function(msg){
            console.log(msg);
            self.set('flagLoading', false);
            self.set('isFlagged', false);
            alert(msg);
          }
        });
      }else{
        this.set('flagLoading', false);
      }
    }
  }
});
Exyht.PosttitleController = Ember.ObjectController.extend({

  needs: ["typeblogpost", "comments", "profilesetting"],

  isEditingOnForPostTitle: false,

  editingOnForProfSetCtlr: Ember.computed.alias("controllers.profilesetting.isProfileEditingOnForProfileSetting"),

  titleForCommentsController: Ember.computed.alias("controllers.comments.title"),

  isEditingOnForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.isEditingOn"),

  isProfileEditingOnForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.isProfileEditingOn"),

  postIdForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.postId"),

  titleForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.ntitle"),

  postBodyForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.nbody"),

  actions: {
  	editPostTrue: function(){
        this.set('isEditingOnForPostTitle', true);
        this.set('postIdForTypeBlogPost', this.get('model.id'));
  		  this.set('isEditingOnForTypeBlogPost', true);
        this.set('isProfileEditingOnForTypeBlogPost', false);
        this.set('editingOnForProfSetCtlr', false);
        this.set('titleForTypeBlogPost', this.get('model.title'));
        
        var self = this;
        Ember.$.getJSON(Exyht.currentBaseUri+'/getOnlyPostBody/'+this.get('model.id')).then(function(data) {
          Ember.run(function() {
            self.set('postBodyForTypeBlogPost', data.body);
            self.transitionToRoute('typeblogpost');
          });
        }); 
  	},
    viewComments: function(){
      this.set('titleForCommentsController', this.get('model.title'));
      this.transitionToRoute('comments', this.get('model.id'));
    }
  }
});
Exyht.ProfilesettingController = Ember.ObjectController.extend({
needs: "typeblogpost",
admin_token : function(){
  return Ember.get('Exyht.adminToken.token');
}.property('Exyht.adminToken.token'),
isProfileEditingOnForProfileSetting: false,
isRemovingPicture: false,
isRemoved: false,
pwd_match: true,
too_small: false,
isProfEditOnForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.isProfileEditingOn"),
aboutAdminForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.nbody"),
actions: {
	changePassword: function(){
	    var oldPassword = this.get('old_password');
	    var newPassword = this.get('new_password');
	    var confirmPasswsord = this.get('confirm_password');

	    if(oldPassword.length < 5 || newPassword.length < 5 || confirmPasswsord.length < 5){
            this.set('too_small', true);
            return false;
	    }else{
	        this.set('too_small', false);
	    }

	    if(newPassword != confirmPasswsord){
	    	this.set('pwd_match', false);
	    	return false;
	    }else{
	    	this.set('pwd_match', true);
	    }
	    var self = this;
	    $.ajax({
	      type: "POST",
	      url: Exyht.BaseUrl+"/changePassword",
	      data: {old_password: oldPassword, new_password: newPassword},
	      success: function(msg){
	      	console.log('Response: '+msg);
	        alert(msg);
	        self.set('old_password', '');
	        self.set('new_password', '');
	        self.set('confirm_password', '');
	      }
	    });
	},
	editProfileTrue: function(){
		this.set('isProfileEditingOnForProfileSetting', true);
		this.set('isProfEditOnForTypeBlogPost', true);
        this.set('aboutAdminForTypeBlogPost', this.get('model.about'));
        this.transitionToRoute('typeblogpost');
	},
	removeProfPicture: function(){
		this.set('isRemovingPicture', true);
		var self = this;
		$.ajax({
	      type: "POST",
	      url: Exyht.BaseUrl+"/removeProfileImage",
	      success: function(msg){
	      	console.log('Response: '+msg);
	        alert(msg);
	        self.set('isRemoved', true);
	        self.set('isRemovingPicture', false);
	      }
	    });
	},
	cancelUploadingImage: function(){
		$("#imgLoadingDiv").hide();
	}
}
});
Exyht.ToprowController = Ember.ObjectController.extend({
  
  notificationTemplate: function(value1, value2){
    if( value1 === 0){
      return '<div class="huge">No</div><div>'+value2+'</div>';
    }else if(value1 > 1){
      return '<div class="huge">'+value1+'</div><div>'+value2+'s</div>';
    }else{
      return '<div class="huge">1</div><div>'+value2+'</div>';
    }
  },

  newCommentCount: function(){

    var newCommentCount = this.get('model.newComment');
    var response = this.notificationTemplate(newCommentCount, 'New Comment');

    return new Ember.Handlebars.SafeString(response);

  }.property('model.newComment'),

  totalDraft: function(){

      var model = this.get('model.posts');
      var response;
      if(typeof model !== 'undefined'){
        response = this.notificationTemplate(model.filterBy('isDraft', true).get('length'), 'Draft');
      }else{
        response = this.notificationTemplate(0, 'Draft');
      }
      return new Ember.Handlebars.SafeString(response);

    }.property('model.posts.@each.isDraft'),

    flaggedCommentCount: function(){

    var flaggedCommentCount = this.get('model.flaggedComment');
    var response = this.notificationTemplate(flaggedCommentCount, 'Flagged Comment');

    return new Ember.Handlebars.SafeString(response);

  }.property('model.flaggedComment'),
});

Exyht.TypeblogpostController = Ember.ObjectController.extend({

  	needs: ["posttitle", "profilesetting"],
    
    admin_token: Ember.computed.oneWay("controllers.profilesetting.admin_token"),
  	editOnForProfSetContr : Ember.computed.alias("controllers.profilesetting.isProfileEditingOnForProfileSetting"),
  	isProfileEditingOn: false,
  	isEditingOn: false,
  	isSavingAsDraft: false,
  	isPublishing: false,
  	postId: '',
  	ntitle: '',
  	nbody: '',
  	showNbodyLength: false,
  	newBodyLength: '',
   	status: [
       	{postStatus: "Publish", id: 1},
      	{postStatus: "Draft",  id: 0}
   	],
    currentStatus: {
        id: 1
    },
    postKey: function(){
  
    	var nbodyLength = this.get('nbody').length;
    	var leastNewBodyLength = Math.abs(20 - nbodyLength);
  
    	if(nbodyLength === 0 || nbodyLength < 20){
  
    	  	this.set('showNbodyLength', true);

    	}else{
  
     	 	this.set('showNbodyLength', false);
    	}
  		
   	 	this.set('newBodyLength', leastNewBodyLength);

  	}.observes('nbody'),
    actions: {
    	createPost: function(value1, value2){
        	var blogTitle = this.get('ntitle');
	    	var blogBody = this.get('nbody');
	  
        	this.set(value1, true);

	    	var self = this;

	    	if ((!blogTitle || blogTitle.length < 5) || (!blogBody || blogBody.length < 20)) {
        	   return false;
        	}

	    	console.log('Request: Sending request');

	  		return $.ajax({
	    		type: "POST",
	    		url: Exyht.BaseUrl+"/"+value2,
	    		data: {title: blogTitle, body: blogBody},
	    		success: function(msg){
	    		  console.log('Response: '+msg);
	    		  self.set(value1, false);
	    		  self.set('ntitle', '');
	    		  self.set('nbody', '');
	    		  alert(msg);
	    		}
	  		});
    	},
    	createNew: function(){
    	  	this.send('createPost', 'isPublishing', 'createNewPost');
		},
		createDraft: function(){
		    this.send('createPost', 'isSavingAsDraft', 'createNewDraft');
		},
		saveProfileEdit: function(){
    	   	var aboutAuthor = this.get('nbody');
    	   	console.log('Request: Sending request');
    	   	$.ajax({
		    	type: "POST",
		    	url: Exyht.BaseUrl+"/saveProfileEdit",
		    	data: {about: aboutAuthor},
		    	success: function(msg){
		      		console.log('Response: '+msg);
		      		alert(msg);
		    	}
		  	});
		},
		cancelProfileEditing: function(){
			this.set('isProfileEditingOn', false);
			this.set('isEditingOn', false);
			this.set('ntitle', '');
			this.set('nbody', '');
			this.set('postId', '');
    	    this.set('editOnForProfSetContr', false);
		},
		saveEdit: function(postId){
		  	var blogTitle = this.get('ntitle');
		  	var blogBody = this.get('nbody');
		  	var status = this.get('currentStatus.id');
		  	if ((!blogTitle || this.get('ntitle').length < 5) || (!blogBody || this.get('nbody').length < 20)/* || !csrfToken*/) {
    	  	   	return false;
    	  	}
		  	$.ajax({
		  	  	type: "POST",
		  	  	url: Exyht.BaseUrl+"/saveEdit",
		  	  	data: {postId: postId, title: blogTitle, body: blogBody, status: status},
		  	  	success: function(msg){
		  	  	  	console.log('Response: '+msg);	
		  	  	  	alert(msg);
		  	  	}
		  	});
		},
		cancelEditing: function(){
			this.set('isEditingOn', false);
			this.set('ntitle', '');
			this.set('nbody', '');
			this.set('postId', '');
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
		insertImage: function(){
		 	var textarea = $('textarea');
		 	var imageUrl = $('#imageUrlTextField');
			if (imageUrl.val() === '')
		 	{
		 	 	textarea.val(textarea.val() + "![alt text](http://example.com/image.jpg)");
		 	}
		 	else
		 	{
		 	 	textarea.val(textarea.val() + "![alt text]("+imageUrl.val()+")");
		 	}
		},
		cancelUploadImage: function(){
		 	$("#loadingDiv").hide();
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
		},
		resetTextarea: function(){
		 	var textarea = $('textarea');
		 	textarea.val("");
		}
   }
});
// Radio Button Component
Exyht.RadioButton = Ember.Component.extend({
    tagName : "input",
    type : "radio",
    attributeBindings : [ "name", "type", "value", "style" ],
});
Ember.Handlebars.helper('radio-button',Exyht.RadioButton);

Exyht.UisettingsController = Ember.ObjectController.extend({
  favcolor: '',
  selectedCategory: '',
  selectedfs: '',
  categories: [
    {color: "Background Color", domArea: 1},
    {color: "Navbar Color", domArea: 2},
    {color: "Post Body Color", domArea: 3},
    {color: "Sidebar Color", domArea: 4},
    {color: "Footer Color", domArea: 5},
    {color: "Link Color", domArea: 6}
  ],
  fstyles: [
  	    {'name':'Serif', 'font_family':'font-family:serif'},
  	    {'name':'Sans Serif', 'font_family':'font-family:sans-serif'},
  	    {'name':'Rockwell','font_family':'font-family:Rockwell'},
  	    {'name':'Courier New', 'font_family':'font-family:Courier New'},
  	    {'name':'Palatino Linotype', 'font_family':'font-family:Palatino Linotype'},
  	    {'name':'Trebuchet MS', 'font_family':'font-family:Trebuchet MS'},
  	    {'name':'Papyrus', 'font_family':'font-family:Papyrus'},
  	    {'name':'Impact', 'font_family':'font-family:Impact'},
  	    {'name':'Segoe UI', 'font_family':'font-family:Segoe UI'},
  	    {'name':'Calibri', 'font_family':'font-family:Calibri'},
  	    {'name':'Times New Roman', 'font_family':'font-family:Times New Roman'},
  	],
  actions: {
    changeColor: function(){
	  var favColor = this.get('favcolor');
	  var category = this.get('selectedCategory');
	  
	  $.ajax({
	    type: "POST",
	    url: Exyht.BaseUrl+"/changeColor",
	    data: {favcolor: favColor, category: category},
	    success: function(msg){
	      alert(msg);
	    }
	  });
	},
	changeFontStyle: function(){
	  var selectedfs = $('input:radio[name=fontType]:checked').val();
	  console.log(selectedfs);
	  $.ajax({
	    type: "POST",
	    url: Exyht.BaseUrl+"/changeFontFamily",
	    data: {selectedFont: selectedfs},
	    success: function(msg){
	      alert(msg);
	    }
	  });
	}
  }
});
Exyht.CommentView = Ember.View.extend({
  
  templateName: "comment",

  cgravatarUrl: (function() {
    return "http://www.gravatar.com/avatar/"+this.get("controller.gravatarUri") + '?d='+Exyht.gravatarVersion+'&s=30';
  }).property("controller.gravatarUri")
});
Exyht.IndexView = Ember.View.extend({
  
  templateName: "index",

  numberOfPost: (function() {
  	var response, NoOfPost = this.get("controller.posts.length");
  	if(NoOfPost === 1){
  		response = "1 Post";
  	}else if(NoOfPost > 1){
  		response = NoOfPost+" Posts";
  	}else{
  		response = "No Post";
  	}
    return response;
  }).property("controller.posts.length")
});
