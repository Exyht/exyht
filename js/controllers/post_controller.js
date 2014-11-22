Exyht.PostController = Ember.ObjectController.extend({
  needs: ["application", "index"],
  postBgColor: Ember.computed.oneWay("controllers.index.postBgColor"),
  commentFeature: Ember.computed.oneWay("controllers.application.commentFeature"),
  readOnlyMode: Ember.computed.oneWay("controllers.application.readOnlyMode"),
  addCommentBtn: Ember.computed.alias("controllers.application.isCommentDivShown"),
  getIsHideAddComment: Ember.computed.alias("controllers.application.isHideAddComment"),
  getIsReplying: Ember.computed.alias("controllers.application.isReplying"),
  addActualTitle: Ember.computed.alias("controllers.application.actualTitleForAddComment"),
  addActualPostId: Ember.computed.alias("controllers.application.actualPostIdForAddComment"),
  addOnlyCurrentSlug: Ember.computed.alias("controllers.application.actualOnlyCurrentSlug"),
  newComment: Ember.computed.alias("controllers.application.newCurrentComment"),
  setcommentIdToReply: Ember.computed.alias("controllers.application.currentCommentIdToReply"),
  setcommenterNameToReply: Ember.computed.alias("controllers.application.currentCommenterNameToReply"),
  setcommenterGravaterToReply: Ember.computed.alias("controllers.application.currentCommenterGravaterToReply"),
  hasPost: function() {
    var postId = this.get("model.id");
    var response;
    if(typeof postId == 'undefined' || postId === 0){
      response = false;
    }else{
      response = true; 
    }
    return response;
  }.property("model.id"),
  actions: {
    addCommentTrue: function(){
      this.set('addCommentBtn', true);
      this.set('getIsHideAddComment', false);
      this.set('getIsReplying', false);
      var actualPostIdForAddCommmentHere = this.get('model.id');
      var actualTitleForAddCommmentHere = this.get('model.title').substring(0, 60);
      var currentSlug = this.get('model.title').substring(0, 60).replace(/[^A-Za-z0-9\s+]/g, '').replace(/\s+/g, '-').toLowerCase();
      
      this.set('addActualTitle', actualTitleForAddCommmentHere);
      this.set('addActualPostId', actualPostIdForAddCommmentHere);
      this.set('addOnlyCurrentSlug', currentSlug);
      var getCommentsArray = this.get('model.comments');
      this.set('newComment', getCommentsArray);
      this.set('setcommentIdToReply', '');
      this.set('setcommenterNameToReply', '');
      this.set('setcommenterGravaterToReply', '');
    }
  }
});