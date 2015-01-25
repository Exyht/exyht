/*
 |-----------------------------
 | Manage post title Component
 |-----------------------------
*/
Exyht.ManagePostComponent = Ember.Component.extend({
	actions: {
  		editPostTrue: function(){
    	  	this.setProperties({
    	    	'isEditingOnForPostTitle': true,
    	    	'postIdForTypeBlogPost': this.get('id'),
    	    	'isEditingOnForTypeBlogPost': true,
    	    	'isProfileEditingOnForTypeBlogPost': false,
    	    	'editingOnForProfSetCtlr': false,
    	    	'titleForTypeBlogPost': this.get('title')
    	  	});
    	    
    	    var self = this;
    	    Ember.$.getJSON(Exyht.currentBaseUri+'/getOnlyPostBody/'+this.get('id')).then(function(data) {
    	      	Ember.run(function() {
    	        	self.set('postBodyForTypeBlogPost', data.body);
    	        	self.transitionToRoute('typeblogpost');
    	      	});
    	    }); 
  		},
    	viewComments: function(){
    	  	this.set('titleForCommentsController', this.get('title'));
    	  	this.transitionToRoute('comment', this.get('id'));
    	}
  	}
});