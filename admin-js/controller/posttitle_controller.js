/*
 |-----------------------
 | Post title controller
 |-----------------------
*/
Exyht.PosttitleController = Ember.ObjectController.extend({

  needs: ["typeblogpost", "comment", "profilesetting"],

  isEditingOnForPostTitle: false,

  editingOnForProfSetCtlr: Ember.computed.alias("controllers.profilesetting.isProfileEditingOnForProfileSetting"),

  titleForCommentsController: Ember.computed.alias("controllers.comment.title"),

  isEditingOnForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.isEditingOn"),

  isProfileEditingOnForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.isProfileEditingOn"),

  postIdForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.postId"),

  titleForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.ntitle"),

  postBodyForTypeBlogPost: Ember.computed.alias("controllers.typeblogpost.nbody"),

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