Exyht.ApplicationView = Ember.View.extend({
  
  	templateName: "application",

  	ngravatarUrl: (function() {
    	return "http://www.gravatar.com/avatar/"+this.get("controller.currentCommenterGravaterToReply") + '?d='+Exyht.gravatarVersion+'&s=20';
  	}).property("controller.currentCommenterGravaterToReply")
});