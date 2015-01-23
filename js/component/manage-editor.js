/*
 |---------------------------------
 | Manage editor Component
 |---------------------------------
*/
Exyht.ManageEditorComponent = Ember.Component.extend({
  	tagName: 'span',

  	cancelAddComment: function(){
    	var typedComment = this.get('typeComment');
    	$("div.container-full").css({"margin-top":"0"});
    	if(typeof typedComment == 'undefined' || typedComment.length === 0)
      	{
        	this.setProperties({
        	  	'name': '',
        	  	'email': '',
        	  	'isCommentDivShown': false,
          		'actualPostIdForAddComment': '',
          		'actualTitleForAddComment': '',
          		'actualOnlyCurrentSlug': '',
          		'isReplying': false,
          		'currentCommentIdToReply': '',
          		'currentCommenterNameToReply': '',
          		'currentCommenterGravaterToReply': ''
        	});
      	}
      	else
      	{
        	var confirmCanceling = confirm("Want to cancel?");
        	if (confirmCanceling === true) {
          		this.setProperties({
            		'name': '',
            		'email': '',
            		'typeComment': '',
            		'isCommentDivShown': false,
            		'actualPostIdForAddComment': '',
            		'actualTitleForAddComment': '',
            		'actualOnlyCurrentSlug': '',
            		'isReplying': false,
            		'currentCommentIdToReply': '',
            		'currentCommenterNameToReply': '',
            		'currentCommenterGravaterToReply': ''
          		});
        	}
      	}
    },

    hideAddComment: function(){
      	var addedComment = this.get('typeComment');
      
      	if(typeof addedComment == 'undefined' || addedComment.length === 0)
      	{
        	this.setProperties({
            	'name': '',
            	'email': '',
            	'isHideAddComment': false,
            	'isCommentDivShown': false,
            	'sendingCommentOn': false,
            	'actualPostId': '',
            	'actualTitle': '',
            	'currentSlug': '',
            	'isReplying': false,
            	'commentIdToReply': '',
            	'commenterNameToReply': '',
            	'commenterGravaterToReply': ''
        	});
        	$("div.container-full").css({"margin-top":"0"});
      	}
      	else
      	{
        	this.setProperties({
          		'isCommentDivShown': false,
          		'isHideAddComment': true
        	});
        	$("div.container-full").css({"margin-top":"50px"});
      	}
    },

    showAddComment: function(){
      	this.setProperties({
          	'isCommentDivShown': true,
          	'isHideAddComment': false
      	});
      	$("div.container-full").css({"margin-top":"0"});
    },

    actions: {
    	// Cancel commenting
    	cancelCmt: function(){
    	  	// Debounce for 0.5 second
    	  	Ember.run.debounce(this, this.cancelAddComment, 500);
    	},
    	// Hide comment box
    	hideCmtBox: function(){
      		// Debounce for 0.5 second
      		Ember.run.debounce(this, this.hideAddComment, 500);
    	},
    	// show comment box
    	showCmtBox: function(){
      		// Debounce for 0.5 second
      		Ember.run.debounce(this, this.showAddComment, 500);
    	}
    }
 });