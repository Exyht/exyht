/*
 |---------------------------
 | Post Controller
 |---------------------------
*/
Exyht.PostController = Ember.ObjectController.extend({

  needs: ["application", "index"],

  postBgColor: Ember.computed.oneWay("controllers.index.postBgColor"),
  is_loggedin: Ember.computed.alias("controllers.application.is_loggedin"),
  user_name: Ember.computed.alias("controllers.application.user_name"),
  user_email: Ember.computed.alias("controllers.application.user_email"),
  commentFeature: Ember.computed.oneWay("controllers.application.commentFeature"),
  readOnlyMode: Ember.computed.oneWay("controllers.application.readOnlyMode"),
  isCommentDivShown: Ember.computed.alias("controllers.application.isCommentDivShown"),
  isHideAddComment: Ember.computed.alias("controllers.application.isHideAddComment"),
  isReplying: Ember.computed.alias("controllers.application.isReplying"),
  actualTitle: Ember.computed.alias("controllers.application.actualTitle"),
  actualPostId: Ember.computed.alias("controllers.application.actualPostId"),
  currentSlug: Ember.computed.alias("controllers.application.currentSlug"),
  commentsArray: Ember.computed.alias("controllers.application.commentsArray"),
  commentIdToReply: Ember.computed.alias("controllers.application.commentIdToReply"),
  commenterNameToReply: Ember.computed.alias("controllers.application.commenterNameToReply"),
  commenterGravaterToReply: Ember.computed.alias("controllers.application.commenterGravaterToReply"),

  hasPost: function() {
    var postId = this.get("id");
    var response;
    if(typeof postId == 'undefined' || postId === 0){
      response = false;
    }else{
      response = true; 
    }
    return response;
  }.property("id")
});