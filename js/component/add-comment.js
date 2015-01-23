/*
 |---------------------------------
 | Data for comment Component
 |---------------------------------
*/
Exyht.AddCommentComponent = Ember.Component.extend({
  tagName: 'span',

  setPropForAddCmt: function(){
    var postIdForAddCmt = this.get('postId');// post id(required)
    var getCmtsArray = this.get('comments');// comments array(required)
    var isAddCmtBtn = true,// boolean(required)
        hideAddCmtBtn = false;// boolean(required)
    this.setProperties({
      'isCommentDivShown': isAddCmtBtn,
      'isHideAddComment': hideAddCmtBtn,
      'commentsArray': getCmtsArray,
      'actualPostId': postIdForAddCmt
    });

    if(this.get('notReply') === true){
      var titleForAddCmt = this.get('title');// post title
              
      var currentSlug = this.get('title').substring(0, 60).replace(/[^A-Za-z0-9\s+]/g, '').replace(/\s+/g, '-').toLowerCase();//for link

      this.setProperties({
        'actualTitle': titleForAddCmt,
        'currentSlug': currentSlug,
        'isReplying': false,
        'commentIdToReply': '',
        'commenterNameToReply': '',
        'commenterGravaterToReply': ''
      });
    }

    if(this.get('isReply') === true){
      var getCmtId = this.get('cmtId');// comment id
      var getCmterName = this.get('cmtName');// reply to name
      var getCmterEmailForGravater = this.get('cmtEmail');// reply to email
      this.setProperties({
        'actualTitle': '',
        'currentSlug': '',
        'isReplying': true,
        'commentIdToReply': getCmtId,
        'commenterNameToReply': getCmterName,
        'commenterGravaterToReply': getCmterEmailForGravater
      });
    }
  },
  addCmt: function(){
    var name = this.get('name').trim(),
      addedComment = this.get('typeComment'),
      postId = this.get('actualPostId'),
      email = this.get('email').trim(),
      replyingCommentId = this.get('commentIdToReply'),
      valueForSpamBot = this.get('valueForSpam');
      
    if ((!addedComment || addedComment.length < 20) || !name || !email) {
      this.set('isCommentDivShown', true);
      return false;
    }

    if (!addedComment.trim()) { return; }
      
    this.set('sendingCommentOn', true);
      
    var self = this;
         
    $.post(Exyht.BaseURL+"addComment",
      {
       postId: postId,
       comment: addedComment,
       name: name,
       email: email,
       spam_bot: valueForSpamBot,
       replyToCommentId: replyingCommentId
      },function(data){
        // Remove previous meta tag with old csrf-token
        $('meta[name="csrf-token"]').remove();
        // Append new meta tag with new csrf-token
        $('head').append( '<meta name="csrf-token" content="'+data.token+'">' );
        // Update headers 'X-CSRF-Token' with new csrf-token
        $.ajaxSetup({
          headers: {
              'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
          }
        });

        self.set('sendingCommentOn', false);

        if(data.controller_response == "saved")
          {
            //alert("Data: " + data + "\nStatus: " + status);
            self.set('isCommentDivShown', false);
          
            var gravatarEmail = CryptoJS.MD5(self.get('email').trim().toLowerCase());
            
            var repliedToCommenterName = self.get('commenterNameToReply');
            var repliedToCommenterGravater = self.get('commenterGravaterToReply');
            
            if(self.get('isReplying') === true){
              self.get('commentsArray').pushObject({
                name: name,
                email: gravatarEmail,
                comment: addedComment,
                replyToComment: Ember.Object.create({
                  commentHasReply: true,
                  name: repliedToCommenterName,
                  email: repliedToCommenterGravater
                })
              });
            }
            else
            {
              self.get('commentsArray').pushObject({
                name: name,
                email: gravatarEmail,
                comment: addedComment,
                replyToComment: []
              });
            }
            self.setProperties({
              'name': '',
              'email': '',
              'typeComment': '',
              'actualPostId': '',
              'actualTitle': '',
              'currentSlug': '',
              'isReplying': false,
              'commentIdToReply': '',
              'commenterNameToReply': '',
              'commenterGravaterToReply': ''
            });
            // Now scroll to bottom
            window.scrollTo(0, document.body.scrollHeight);
          }else if(data.read_only_mode === 1){
            $("#showError").addClass("alert alert-danger");
            $("#showError").html(data.controller_response);
          }else
          {
            $("#showError").addClass("alert alert-danger");
            $("#showError").html(data.error_msg);
          }
      },"json");
  },

	actions: {
		addCmtAction: function(){
      // Debounce for 0.5 second
      Ember.run.debounce(this, this.setPropForAddCmt, 500);
    },
    // Now send comment to server
    sendCmt: function(){
      // Debounce for 1 second
      Ember.run.debounce(this, this.addCmt, 1000);
    }
	}
});