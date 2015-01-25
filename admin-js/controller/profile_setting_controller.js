/*
 |---------------------------
 | Profilesetting Controller
 |---------------------------
*/
Exyht.ProfilesettingController = Ember.ObjectController.extend({
	needs: "typeblogpost",
	isProfEditOnForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.isProfileEditingOn"),
	aboutAdminForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.nbody")
});