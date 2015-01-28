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