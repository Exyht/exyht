/*
 |---------------------------------
 | Data for comment Component
 |---------------------------------
*/
Exyht.AddCommentComponent = Ember.Component.extend({
  tagName: 'span',
	actions: {
		addCmtAction: function(){
			var postIdForAddCmt = this.get('postId');// post id(required)
			var getCmtsArray = this.get('comments');// comments array(required)
			var isAddCmtBtn = true,// boolean(required)
          hideAddCmtBtn = false;// boolean(required)

      this.setProperties({
        'isCommentDivShown': isAddCmtBtn,
        'isHideAddComment': hideAddCmtBtn,
        'commentsArray': getCmtsArray,
        'setPostId': postIdForAddCmt
      });

			if(this.get('notReply') === true){
        var titleForAddCmt = this.get('title');// post title
          		
        var currentSlug = this.get('title').substring(0, 60).replace(/[^A-Za-z0-9\s+]/g, '').replace(/\s+/g, '-').toLowerCase();//for link

        this.setProperties({
      		'actualTitle': titleForAddCmt,
      		'currentSlug': currentSlug,
      		'setIsReplying': false,
      		'commentIdToReply': '',
      		'commenterNameToReply': '',
      		'commenterGravaterToReply': ''
      	});
      }

      if(this.get('notReply') === false){
        var getCmtId = this.get('cmtId');// comment id
        var getCmterName = this.get('cmtName');// reply to name
        var getCmterEmailForGravater = this.get('cmtEmail');// reply to email

        this.setProperties({
      		'actualTitle': '',
      		'currentSlug': '',
      		'setIsReplying': true,
      		'commentIdToReply': getCmtId,
      		'commenterNameToReply': getCmterName,
      		'commenterGravaterToReply': getCmterEmailForGravater
      	});
      }
		}
	}
});