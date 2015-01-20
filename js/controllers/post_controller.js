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
      
      var actualPostIdForAddCommmentHere = this.get('model.id'),
          actualTitleForAddCommmentHere = this.get('model.title').substring(0, 60),
          currentSlug = this.get('model.title').substring(0, 60).replace(/[^A-Za-z0-9\s+]/g, '').replace(/\s+/g, '-').toLowerCase(),
          getCommentsArray = this.get('model.comments');

      this.setProperties({
        'addCommentBtn': true,
        'getIsHideAddComment': false,
        'getIsReplying': false,
        'addActualTitle': actualTitleForAddCommmentHere,
        'addActualPostId': actualPostIdForAddCommmentHere,
        'addOnlyCurrentSlug': currentSlug,
        'newComment': getCommentsArray,
        'setcommentIdToReply': '',
        'setcommenterNameToReply': '',
        'setcommenterGravaterToReply': ''
      });
    }
  }
});