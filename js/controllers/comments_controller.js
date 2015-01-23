/*
 |---------------------------
 | Comments Controller
 |---------------------------
*/
Exyht.CommentsController = Ember.ObjectController.extend({

needs: ["application", "post"],

commentFeature: Ember.computed.oneWay("controllers.application.commentFeature"),
readOnlyMode: Ember.computed.oneWay("controllers.application.readOnlyMode"),
isCommentDivShown: Ember.computed.alias("controllers.application.isCommentDivShown"),
isHideAddComment: Ember.computed.alias("controllers.application.isHideAddComment"),
setIsReplying: Ember.computed.alias("controllers.application.isReplying"),
setPostId: Ember.computed.alias("controllers.application.actualPostIdForAddComment"),
postIdFromPostCtlr: Ember.computed.alias("controllers.post.id"),
commentsArray: Ember.computed.alias("controllers.application.newCurrentComment"),
getCommentsArrayFromPostCtlr: Ember.computed.alias("controllers.post.comments"),
commentIdToReply: Ember.computed.alias("controllers.application.currentCommentIdToReply"),
commenterNameToReply: Ember.computed.alias("controllers.application.currentCommenterNameToReply"),
commenterGravaterToReply: Ember.computed.alias("controllers.application.currentCommenterGravaterToReply"),
actualTitle: Ember.computed.alias("controllers.application.actualTitleForAddComment"),
currentSlug: Ember.computed.alias("controllers.application.actualOnlyCurrentSlug"),

flagCmt: function(){
  var commentId = this.get('id');
  var self = this;
  $.ajax({
      type: "POST",
      url: Exyht.BaseURL+"flagComment",
      data: {commentId: commentId},
      success: function(msg){
        self.set('isFlagged', true);
      }
  });
},

  actions: {
    flagComment: function(){
      // Debounce for 0.5 second
      Ember.run.debounce(this, this.flagCmt, 500);
    }
  }
});