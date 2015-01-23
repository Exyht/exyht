/*
 |---------------------------------
 | Flag comment Component
 |---------------------------------
*/
Exyht.FlagCommentComponent = Ember.Component.extend({
  	tagName: 'span',

  	flagCmt: function(){
  		var commentId = this.get('id');
  		var self = this;
  		$.ajax({
      		type: "POST",
      		url: Exyht.BaseURL + "flagComment",
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