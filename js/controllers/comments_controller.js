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
isReplying: Ember.computed.alias("controllers.application.isReplying"),
actualPostId: Ember.computed.alias("controllers.application.actualPostId"),
actualTitle: Ember.computed.alias("controllers.application.actualTitle"),
postIdFromPostCtlr: Ember.computed.alias("controllers.post.id"),
commentsArray: Ember.computed.alias("controllers.application.commentsArray"),
getCommentsArrayFromPostCtlr: Ember.computed.alias("controllers.post.comments"),
commentIdToReply: Ember.computed.alias("controllers.application.commentIdToReply"),
commenterNameToReply: Ember.computed.alias("controllers.application.commenterNameToReply"),
commenterGravaterToReply: Ember.computed.alias("controllers.application.commenterGravaterToReply"),
currentSlug: Ember.computed.alias("controllers.application.currentSlug")
});