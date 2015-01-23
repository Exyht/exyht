/*
 |---------------------------
 | Post Controller
 |---------------------------
*/
Exyht.PostController = Ember.ObjectController.extend({

  needs: ["application", "index"],

  postBgColor: Ember.computed.oneWay("controllers.index.postBgColor"),
  commentFeature: Ember.computed.oneWay("controllers.application.commentFeature"),
  readOnlyMode: Ember.computed.oneWay("controllers.application.readOnlyMode"),
  isCommentDivShown: Ember.computed.alias("controllers.application.isCommentDivShown"),
  isHideAddComment: Ember.computed.alias("controllers.application.isHideAddComment"),
  setIsReplying: Ember.computed.alias("controllers.application.isReplying"),
  actualTitle: Ember.computed.alias("controllers.application.actualTitleForAddComment"),
  setPostId: Ember.computed.alias("controllers.application.actualPostIdForAddComment"),
  currentSlug: Ember.computed.alias("controllers.application.actualOnlyCurrentSlug"),
  commentsArray: Ember.computed.alias("controllers.application.newCurrentComment"),
  commentIdToReply: Ember.computed.alias("controllers.application.currentCommentIdToReply"),
  commenterNameToReply: Ember.computed.alias("controllers.application.currentCommenterNameToReply"),
  commenterGravaterToReply: Ember.computed.alias("controllers.application.currentCommenterGravaterToReply"),

  hasPost: function() {
    var postId = this.get("model.id");
    var response;
    if(typeof postId == 'undefined' || postId === 0){
      response = false;
    }else{
      response = true; 
    }
    return response;
  }.property("model.id")
});