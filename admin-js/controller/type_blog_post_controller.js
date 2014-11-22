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