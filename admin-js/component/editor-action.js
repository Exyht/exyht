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