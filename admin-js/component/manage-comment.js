/*
 |----------------------------
 | Manage comment Component
 |----------------------------
*/
Exyht.ManageCommentComponent = Ember.Component.extend({
  banLoading: false,
  flagLoading: false,
  actions: {
    markAsSeen: function(){
      var commentId = this.get('cmt.id');
      this.set('cmt.isSeen', true);
      $.ajax({
        type: "POST",
        url: Exyht.BaseUrl+"/markAsSeen/"+commentId,
        success: function(msg){
          console.log('Marked as seen!');
          alert(msg);
        }
      });
    },
    removeComment: function(){
      this.set('cmt.showLoading', true);
      var confirmCanceling = confirm("Want to remove?");
      if (confirmCanceling === true) {
        var commentId = this.get('cmt.id');
        var self = this;
        $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/removeComment/"+commentId,
          success: function(msg){
            console.log(msg);
            self.setProperties({
              'cmt.showLoading': false,
              'cmt.isFlagged': false,
              'cmt.status':  false
            });
            alert(msg);
          }
        });
      }else{
        this.set('comment.showLoading', false);
      }
    },
    banIp: function(){
      this.set('banLoading', true);
      var confirmCanceling = confirm("Want to ban this Ip address?");
      if (confirmCanceling === true) {
        var ipAddress = this.get('cmt.ip_address');
        var self = this;
        $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/banIp/"+ipAddress,
          success: function(msg){
            console.log(msg);
            self.setProperties({
              'banLoading': false,
              'cmt.ip_status': true
            });
            alert(msg);
          }
        });
      }else{
        this.set('banLoading', false);
      }
    },
    removeFlag: function(){
      this.set('flagLoading', true);
      var confirmCanceling = confirm("Want to remove flag?");
      if (confirmCanceling === true) {
        var commentId = this.get('cmt.id');
        var self = this;
        $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/removeFlag/"+commentId,
          success: function(msg){
            console.log(msg);
            self.setProperties({
              'flagLoading': false,
              'cmt.isFlagged': false
            });
            alert(msg);
          }
        });
      }else{
        this.set('flagLoading', false);
      }
    }
  }
});