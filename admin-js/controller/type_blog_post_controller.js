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