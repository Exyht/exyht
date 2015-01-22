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