window.Exyht = Ember.Application.create({
	currentPath: '',
});

Exyht.deferReadiness();

Exyht.BaseUrl = '/blog/admin-page';
Exyht.gravatarVersion = 'identicon';
Exyht.hostnameWithProtocolPort = window.location.protocol+"//"+window.location.hostname+(window.location.port ? ':' + window.location.port: '');
Exyht.blogUrl = Exyht.hostnameWithProtocolPort + '/blog';
Exyht.currentBaseUri = Exyht.hostnameWithProtocolPort + Exyht.BaseUrl;

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


// This helper uses both Markdown and Html sanitizer
Ember.Handlebars.helper('format-markdown', function(input) {

// Add this part
   if (typeof input == 'undefined')  return;
   
var markdown = new Markdown.getSanitizingConverter();

emoji.sheet_path = Exyht.hostnameWithProtocolPort+'/blog/libraries/js/sheet_twitter_72.png';
emoji.use_sheet = true;
// show the short-name as a `title` attribute for css/img emoji
emoji.include_title = true;
emoji.init_env();

function urlX(url) { if(/^https?:\/\//.test(url)) { return url; }}

var sanitizedInput = html_sanitize(input, urlX);
   return new Ember.Handlebars.SafeString(emoji.replace_colons(markdown.makeHtml(sanitizedInput)));
});

// This helper only use markdown sanitizer
Ember.Handlebars.helper('format-xmarkdown', function(input) {

// Add this part
   if (typeof input == 'undefined')  return;
   
	var markdown = new Markdown.getSanitizingConverter();

	emoji.sheet_path = Exyht.hostnameWithProtocolPort+'/blog/libraries/js/sheet_twitter_72.png';
	emoji.use_sheet = true;
	// show the short-name as a `title` attribute for css/img emoji
	emoji.include_title = true;
	emoji.init_env();
	
	return new Ember.Handlebars.SafeString(emoji.replace_colons(markdown.makeHtml(input)));
});
/*
 |---------------------------
 | Router
 |---------------------------
*/
Exyht.Router.map(function() {
    this.route('index',  {path: Exyht.BaseUrl});
    this.route('comment', {path: Exyht.BaseUrl+'/comment/:post_id'});
    this.route('typeblogpost', {path: Exyht.BaseUrl+'/typeblogpost'});
    this.route('profilesetting', {path: Exyht.BaseUrl+'/profilesetting'});
    this.route('uisettings', {path: Exyht.BaseUrl+'/uisettings'});
    this.route('imggallery', {path: Exyht.BaseUrl+'/imggallery'});
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
  },
  actions: {
    editPostTrue: function(){
      this.transitionTo('typeblogpost');
    },
    viewComments: function(postId){
      this.transitionTo('comment', postId);
    }
  }
});

Exyht.CommentRoute = Ember.Route.extend({
model: function(params)
  {
  return Ember.$.getJSON(Exyht.currentBaseUri+'/getComments/'+params.post_id).then(function(data) {
    return {"comments":data};
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

Exyht.ImggalleryRoute = Ember.Route.extend({
init_galry_img_offset: 0,
init_galry_img_limit: 15,
model: function()
  { 
  return Ember.$.getJSON(Exyht.currentBaseUri+'/getGalleryImg/'+this.init_galry_img_offset+'/'+this.init_galry_img_limit).then(function(data) {
    return {"images":data};
  });
}
});
/*
 |---------------------------
 | Check version Component
 |---------------------------
*/
Exyht.CheckVersionComponent = Ember.Component.extend({
	isNewVersion: false,
	version: '',
  	onInsert: function() {
  	  	var self = this;

  	  	$.getJSON(Exyht.blogUrl + "/package.json").then(function(data) {
      		self.set('version', data.version);
    	});

  	  	setTimeout(function(){
  	  	$.ajax({ 
  	  		type: 'GET', 
  	  		url: 'http://exyht.github.io/exyht/info.json?callback=?', 
  	  		async: false, 
  	  		jsonpCallback: 'jsonCallback', 
  	  		contentType: "application/json", 
  	  		dataType: 'jsonp', 
  	  		success: function(data) { 
  	  			if(data.version !== self.get('version')){
  	  				self.setProperties({
  	  					'isNewVersion': true,
  	  					'version': data.version
  	  				});
  	    		} 
  	  		}
  	  	});
  	  	}, 1500);
  	  	

  	  
  	}.on('didInsertElement'),

  	getVersion: function(){
  		if(this.get('version')){
  			return this.get('version');
  		}
  	}.property('version')
});
/*
 |-------------------------
 | Count posts Component
 |-------------------------
*/
Exyht.CountPostsComponent = Ember.Component.extend({
  numberOfPost: function() {
    var response,
        NoOfPost = this.get("posts").get('length');

    if(NoOfPost === 1){
      response = "1 Post";
    }else if(NoOfPost > 1){
      response = NoOfPost+" Posts";
    }else{
      response = "No Post";
    }
    return response;
  }.property("posts")
});
/*
 |---------------------------
 | Editor action Component
 |---------------------------
*/
Exyht.EditorActionComponent = Ember.Component.extend({
  	isSavingAsDraft: false,
  	isPublishing: false,
	status: [
       	{postStatus: "Publish", id: 1},
      	{postStatus: "Draft",  id: 0}
   	],
    currentStatus: {
        id: 1
    },
	actions: {
    	createPost: function(value1, value2){
        	var blogTitle = this.get('ntitle').trim();
	    	var blogBody = this.get('nbody').trim();

	    	var self = this;

	    	if ((!blogTitle || blogTitle.length < 5) || (!blogBody || blogBody.length < 20)) {
        	   return false;
        	}
        	this.set(value1, true);
	    	console.log('Request: Sending request');

	  		return $.ajax({
	    		type: "POST",
	    		url: Exyht.BaseUrl+"/"+value2,
	    		data: {title: blogTitle, body: blogBody},
	    		success: function(msg){
	    		  console.log('Response: '+msg);
	    		  self.set(value1, false);
	    		  self.setProperties({
	    		  	'ntitle': '',
	    		  	'nbody': ''
	    		  });
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
    	   	var aboutAuthor = this.get('nbody').trim();
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
			this.setProperties({
				'isProfileEditingOn': false,
				'isEditingOn': false,
				'ntitle': '',
				'nbody': '',
				'postId': '',
				'editOnForProfSetContr': false
			});
		},
		saveEdit: function(postId){
		  	var blogTitle = this.get('ntitle').trim();
		  	var blogBody = this.get('nbody').trim();
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
			this.setProperties({
				'isEditingOn': false,
				'ntitle': '',
				'nbody': '',
				'postId': ''
			});
		}
	}
});
/*
 |---------------------------
 | Editor tools Component
 |---------------------------
*/
Exyht.EditorToolsComponent = Ember.Component.extend({
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
		imgTabStatus: function(){
			this.set('isImageTab', true);
		},
		vidTabStatus: function(){
			this.set('isImageTab', false);
		},
		ivtask: function(value){
		 	var textarea = $('textarea');
			var ivUrl = $('#'+value+'UrlTextField');
		 	if (ivUrl.val() === ''){
		 		var iveVal = (value == 'image')?"![alt text](http://example.com/image.jpg)":"![isyoutube](Link to youtube)";
		 		textarea.val(textarea.val() + iveVal);
		 	}else{
		 		var ivVal = (value == 'image')?'alt text':'isyoutube';
		 		textarea.val(textarea.val() + "!["+ivVal+"]("+ivUrl.val()+")");
		 	}
		 	ivUrl.val('');
		},
		insertImage: function(){
		 	if(this.get('isImageTab') === true){
		 		this.send('ivtask', 'image');
		 	}else{
		 		this.send('ivtask', 'video');
		 	}
		},
		cancelUploadImage: function(){
		 	$("#loadingDiv").hide();
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
		},
		resetTextarea: function(){
		 	var textarea = $('textarea');
		 	textarea.val("");
		}
   	}
});
/*
 |---------------------------
 | GravatarImage Component
 |---------------------------
*/
Exyht.GravatarImageComponent = Ember.Component.extend({
  size: 30,
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
 | Image gallery Component
 |---------------------------
*/
Exyht.ImageGalleryComponent = Ember.Component.extend({
	img_from: 15, // load more pics offset
	img_to: 30, // load more pics limit
	totalImgs: function(){
		var galryLen = this.get('images').filterBy('img_visible', true).get('length');
    	return (galryLen > 0)?galryLen : 0;
  	}.property('images.@each.img_visible'),

  	inInsert: function(){
    	this.scheduleMasonry();
    	$(window).on('scroll', $.proxy(this.didScroll, this));
  	}.on('didInsertElement'),

  	onLeaving: function(){
    	this.destroyMasonry();
    	this.setProperties({
    	  	'img_from': 15,
      		'img_to': 30
    	});
    	$(window).off('scroll', $.proxy(this.didScroll, this));
  	}.on('willDestroyElement'),

  	scheduleMasonry: function(){
    	Ember.run.scheduleOnce('afterRender', this, this.applyMasonry);
  	}.observes('images.@each'),

  	applyMasonry: function(){
    	var $galleryContainer = $('#galleryContainer');
    	// initialize
    	$galleryContainer.imagesLoaded(function() {
      		// check if masonry is initialized
      		var msnry = $galleryContainer.data('masonry');
      		if ( msnry ) {
        		msnry.reloadItems();
        		// disable transition
        		var transitionDuration = msnry.options.transitionDuration;
        		msnry.options.transitionDuration = 0;
        		msnry.layout();
        		// reset transition
        		msnry.options.transitionDuration = transitionDuration;
      		} else {
        		// init masonry
        		$galleryContainer.masonry({
          			itemSelector: '.item',
          			columnWidth: 150
        		});
      		}
    	});
  	},
  	
  	destroyMasonry: function(){
    	$('#galleryContainer').masonry('destroy');
  	},

  	didScroll: function(){
    	if($(window).scrollTop() + $(window).height() == $(document).height()){
      		// Debounce for 1 second
          	Ember.run.debounce(this, this.loadPics, 1000);
    	}
  	},

  	loadPics: function(){
  		// Request for more 15 imgs
		// Request for large number of imgs will make the App slow
		var g_imgs = this.get('images'),
			self = this,
			g_img_from = this.get('img_from'),
			g_img_to = this.get('img_to');

		if(g_img_from <= (this.get('totalImgs') + 15)){
			// Make the request to the server for more imgs
			$.getJSON(Exyht.currentBaseUri+'/getGalleryImg/'+g_img_from+'/'+g_img_to).then(function(data) {
				// Set new offset & limit, to load next imgs
				self.set('img_from', self.get('img_to'));
      			var moreImgTo = parseInt(self.get('img_from')) + 15;
      			self.set('img_to', moreImgTo);
      			// Iterate responsed data
      			$.each(data, function(index){
      				// Don't push if responsed img id matches with the already pushed last img's id
      				if(data[index].id != (g_img_to + 1)){
      					g_imgs.pushObject({
      						id: data[index].id,
							src_path: data[index].src_path,
							img_visible: data[index].img_visible
						});
      				}
      			});
    		});
		}
  	}
});
/*
 |---------------------------
 | Log out Component
 |---------------------------
*/
Exyht.LogOutComponent = Ember.Component.extend({
	actions: {
		logOut: function(){
			$.post( Exyht.BaseUrl+"/logout", function( data ) {
				if(data === 'true'){
					window.location.replace(Exyht.BaseUrl+'/login');
				}
			});
		}
	}
});
/*
 |----------------------------
 | Manage comment Component
 |----------------------------
*/
Exyht.ManageCommentComponent = Ember.Component.extend({
  banLoading: false,
  flagLoading: false,
  actions: {
    markAsSeen: function(){
      var commentId = this.get('cmt.id');
      this.set('cmt.isSeen', true);
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
      this.set('cmt.showLoading', true);
      var confirmCanceling = confirm("Want to remove?");
      if (confirmCanceling === true) {
        var commentId = this.get('cmt.id');
        var self = this;
        $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/removeComment/"+commentId,
          success: function(msg){
            console.log(msg);
            self.setProperties({
              'cmt.showLoading': false,
              'cmt.isFlagged': false,
              'cmt.status':  false
            });
            alert(msg);
          }
        });
      }else{
        this.set('comment.showLoading', false);
      }
    },
    banIp: function(){
      this.set('banLoading', true);
      var confirmCanceling = confirm("Want to ban this Ip address?");
      if (confirmCanceling === true) {
        var ipAddress = this.get('cmt.ip_address');
        var self = this;
        $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/banIp/"+ipAddress,
          success: function(msg){
            console.log(msg);
            self.setProperties({
              'banLoading': false,
              'cmt.ip_status': true
            });
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
        var commentId = this.get('cmt.id');
        var self = this;
        $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/removeFlag/"+commentId,
          success: function(msg){
            console.log(msg);
            self.setProperties({
              'flagLoading': false,
              'cmt.isFlagged': false
            });
            alert(msg);
          }
        });
      }else{
        this.set('flagLoading', false);
      }
    }
  }
});
/*
 |--------------------------------
 | Manage gallery image Component
 |--------------------------------
*/
Exyht.ManageImageComponent = Ember.Component.extend({
	deletingImg: false,
	srcPath: function(){
		var galleryImagePath = this.get('img.src_path'),
			img_visible = this.get('img.img_visible');
		if(img_visible === true){
			return Ember.get('Exyht.hostnameWithProtocolPort')+"/blog/upload_dir/"+galleryImagePath;
		}
	}.property('Exyht.hostnameWithProtocolPort','img'),
	actions: {
		// This action will remove single gallery img for each call
		removeGimg: function(){
			var self = this;
			this.set('deletingImg', true);
			var img_path = this.get('img.src_path');
			$.ajax({
          		type: "POST",
          		url: Exyht.BaseUrl+"/removeGimg",
          		data: {img_path: img_path},
          		success: function(msg){
          			self.setProperties({
          				'img.img_visible': false,
          				'deletingImg': false
          			});
          		  	alert(msg);
          		}
        	});
		}
	}
});
/*
 |-----------------------------
 | Manage post title Component
 |-----------------------------
*/
Exyht.ManagePostComponent = Ember.Component.extend({
	actions: {
        editPostTrue: function(){
            var self = this;

            this.setProperties({
                'isEditingOnForPostTitle': true,
                'postIdForTypeBlogPost': this.get('id'),
                'isEditingOnForTypeBlogPost': true,
                'isProfileEditingOnForTypeBlogPost': false,
                'editingOnForProfSetCtlr': false,
                'titleForTypeBlogPost': this.get('title')
            });
            
            Ember.$.getJSON(Exyht.currentBaseUri+'/getOnlyPostBody/'+this.get('id')).then(function(data) {
                Ember.run(function() {
                    self.set('postBodyForTypeBlogPost', data.body);
                    var pb = self.get('postBodyForTypeBlogPost');
            
                    if(pb !== 'undefined' || pb !== ''){
                        self.sendAction('editPostTrue');
                    }
                    else{
                        alert('No post body! or Could not fetch data! Maybe server error.');
                    }
                });
            });

        },
        viewComments: function(){
            this.set('titleForCommentsController', this.get('title'));
            this.sendAction('viewComments', this.get('id'));
        }
    }
});
/*
 |-------------------------
 | Manage status Component
 |-------------------------
*/
Exyht.ManageStatusComponent = Ember.Component.extend({
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
/*
 |----------------------------
 | Profile setting Component
 |----------------------------
*/
Exyht.ProfSettingComponent = Ember.Component.extend({
	isRemoved: false,
	pwd_match: true,
	too_small: false,
	isRemovingPicture: false,
	isProfileEditingOnForProfileSetting: false,
	admin_token : function(){
	  return Ember.get('Exyht.adminToken.token');
	}.property('Exyht.adminToken.token'),
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
	        		self.setProperties({
	        			'old_password': '',
	        			'new_password': '',
	        			'confirm_password': ''
	        		});
	      		}
	    	});
		},
		editProfileTrue: function(){
			this.setProperties({
				'isProfileEditingOnForProfileSetting': true,
				'isProfEditOnForTypeBlogPost': true,
				'aboutAdminForTypeBlogPost': this.get('about')
			});
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
	        		self.setProperties({
	        			'isRemoved': true,
	        			'isRemovingPicture': false
	        		});
	      		}
	    	});
		},
		cancelUploadingImage: function(){
			$("#imgLoadingDiv").hide();
		}
	}
});
/*
 |----------------------------
 | Remove blog link Component
 |----------------------------
*/
Exyht.RemoveBloglinkComponent = Ember.Component.extend({
  actions: {
    removeLink: function(){
      var linkId = this.get('link.id');

      this.set('loadingOn', true);

      var self = this;
      $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/removeLink",
          data: { link_id: linkId},
          success: function(msg){
            self.set('loadingOn', false);
            self.set('link.status', false);
            console.log(msg);
            alert(msg);
          }
      });
    }
  }
});
/*
 |--------------------
 | Textarea Component
 |--------------------
*/
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

/*
 |--------------------------------
 | Top row notification Component
 |--------------------------------
*/
Exyht.ToprowNotificationComponent = Ember.Component.extend({
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

    var newCommentCount = this.get('newComment');
    var response = this.notificationTemplate(newCommentCount, 'New Comment');

    return new Ember.Handlebars.SafeString(response);

  }.property('newComment'),

  totalDraft: function(){

      var model = this.get('posts');
      var response;
      if(typeof model !== 'undefined'){
        response = this.notificationTemplate(model.filterBy('isDraft', true).get('length'), 'Draft');
      }else{
        response = this.notificationTemplate(0, 'Draft');
      }
      return new Ember.Handlebars.SafeString(response);

    }.property('posts.@each.isDraft'),

    flaggedCommentCount: function(){

    var flaggedCommentCount = this.get('flaggedComment');
    var response = this.notificationTemplate(flaggedCommentCount, 'Flagged Comment');

    return new Ember.Handlebars.SafeString(response);

  }.property('flaggedComment')
});
// Radio Button Component
Exyht.RadioButton = Ember.Component.extend({
    tagName : "input",
    type : "radio",
    attributeBindings : [ "name", "type", "value", "style" ],
});
Ember.Handlebars.helper('radio-button',Exyht.RadioButton);
/*
 |---------------------------
 | UI settings Component
 |---------------------------
*/
Exyht.UiSettingsComponent = Ember.Component.extend({
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
/*
 |---------------------
 | Comment Controller
 |---------------------
*/
Exyht.CommentController = Ember.ObjectController.extend({
  needs: "posttitle",
  title: ''
});
/*
 |-----------------------
 | Post title controller
 |-----------------------
*/
Exyht.PosttitleController = Ember.ObjectController.extend({

  needs: ["typeblogpost", "comment", "profilesetting"],

  isEditingOnForPostTitle: false,

  editingOnForProfSetCtlr: Ember.computed.alias("controllers.profilesetting.isProfileEditingOnForProfileSetting"),

  titleForCommentsController: Ember.computed.alias("controllers.comment.title"),

  isEditingOnForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.isEditingOn"),

  isProfileEditingOnForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.isProfileEditingOn"),

  postIdForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.postId"),

  titleForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.ntitle"),

  postBodyForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.nbody")
});
/*
 |---------------------------
 | Profilesetting Controller
 |---------------------------
*/
Exyht.ProfilesettingController = Ember.ObjectController.extend({
	needs: "typeblogpost",
	isProfileEditingOnForProfileSetting: false,
	isProfEditOnForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.isProfileEditingOn"),
	aboutAdminForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.nbody")
});
/*
 |---------------------------
 | Typeblogpost Controller
 |---------------------------
*/
Exyht.TypeblogpostController = Ember.ObjectController.extend({

  	needs: ["posttitle", "profilesetting"],
    
    isImageTab: true,
    admin_token: Ember.computed.oneWay("controllers.profilesetting.admin_token"),
  	editOnForProfSetContr : Ember.computed.alias("controllers.profilesetting.isProfileEditingOnForProfileSetting"),
  	isProfileEditingOn: false,
  	isEditingOn: false,
  	postId: '',
  	ntitle: '',
  	nbody: '',
  	showNbodyLength: false,
  	newBodyLength: ''
});