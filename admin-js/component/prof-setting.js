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
			this.sendAction('editProfileTrue');
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