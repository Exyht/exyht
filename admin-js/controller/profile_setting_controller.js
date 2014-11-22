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