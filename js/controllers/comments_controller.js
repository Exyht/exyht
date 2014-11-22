Exyht.CommentsController = Ember.ObjectController.extend({

needs: ["application", "post"],

commentFeature: Ember.computed.oneWay("controllers.application.commentFeature"),
readOnlyMode: Ember.computed.oneWay("controllers.application.readOnlyMode"),
addReplyCommentBtn: Ember.computed.alias("controllers.application.isCommentDivShown"),
getIsHideAddComment: Ember.computed.alias("controllers.application.isHideAddComment"),
setIsReplying: Ember.computed.alias("controllers.application.isReplying"),
actualPostId: Ember.computed.alias("controllers.application.actualPostIdForAddComment"),
actualPostIdFromPostController: Ember.computed.alias("controllers.post.id"),
newComment: Ember.computed.alias("controllers.application.newCurrentComment"),
getCommentsArrayFromPostController: Ember.computed.alias("controllers.post.comments"),
setcommentIdToReply: Ember.computed.alias("controllers.application.currentCommentIdToReply"),
setcommenterNameToReply: Ember.computed.alias("controllers.application.currentCommenterNameToReply"),
setcommenterGravaterToReply: Ember.computed.alias("controllers.application.currentCommenterGravaterToReply"),
addActualTitle: Ember.computed.alias("controllers.application.actualTitleForAddComment"),
addOnlyCurrentSlug: Ember.computed.alias("controllers.application.actualOnlyCurrentSlug"),
  actions: {
    replyToCommentTrue: function(){
      this.set('addReplyCommentBtn', true);
      this.set('getIsHideAddComment', false);
      this.set('setIsReplying', true);
      var actualPostIdForReplyCommmentHere = this.get('actualPostIdFromPostController');
      this.set('actualPostId', actualPostIdForReplyCommmentHere);
      var getCommentsArrayFromPost = this.get('getCommentsArrayFromPostController');
      this.set('newComment', getCommentsArrayFromPost);
      var getCommentId = this.get('id');
      this.set('setcommentIdToReply', getCommentId);
      var getCommenterName = this.get('name');
      this.set('setcommenterNameToReply', getCommenterName);
      var getCommenterGravater = this.get('email');
      this.set('setcommenterGravaterToReply', getCommenterGravater);
      this.set('addActualTitle', '');
      this.set('addOnlyCurrentSlug', '');
    },
    flagComment: function(){
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
    }
  }
});