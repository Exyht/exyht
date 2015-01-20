/*
 |---------------------------
 | Comments Controller
 |---------------------------
*/
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
    replyToCommentTrue: function(){
      
      var actualPostIdForReplyCommmentHere = this.get('actualPostIdFromPostController'),
          getCommentsArrayFromPost = this.get('getCommentsArrayFromPostController'),
          getCommentId = this.get('id'),
          getCommenterName = this.get('name'),
          getCommenterGravater = this.get('email');

      this.setProperties({
        'addReplyCommentBtn': true,
        'getIsHideAddComment': false,
        'setIsReplying': true,
        'actualPostId': actualPostIdForReplyCommmentHere,
        'newComment': getCommentsArrayFromPost,
        'setcommentIdToReply': getCommentId,
        'setcommenterNameToReply': getCommenterName,
        'setcommenterGravaterToReply': getCommenterGravater,
        'addActualTitle': '',
        'addOnlyCurrentSlug': ''
      });
    },
    flagComment: function(){
      // Debounce for 0.5 second
      Ember.run.debounce(this, this.flagCmt, 500);
    }
  }
});