Exyht.CommentsController = Ember.ArrayController.extend({
  needs: "posttitle",
  title: '',
});

Exyht.CommentController = Ember.ObjectController.extend({
  banLoading: false,
  flagLoading: false,
  actions: {
    markAsSeen: function(){
      var commentId = this.get('model.id');
      this.set('isSeen', true);
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
      this.set('showLoading', true);
      var confirmCanceling = confirm("Want to remove?");
      if (confirmCanceling === true) {
        var commentId = this.get('model.id');
        var self = this;
        $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/removeComment/"+commentId,
          success: function(msg){
            console.log(msg);
            self.set('showLoading', false);
            self.set('isFlagged', false);
            self.set('status', false);
            alert(msg);
          }
        });
      }else{
        this.set('showLoading', false);
      }
    },
    banIp: function(){
      this.set('banLoading', true);
      var confirmCanceling = confirm("Want to ban this Ip address?");
      if (confirmCanceling === true) {
        var ipAddress = this.get('ip_address');
        var self = this;
        $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/banIp/"+ipAddress,
          success: function(msg){
            console.log(msg);
            self.set('banLoading', false);
            self.set('ip_status', true);
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
        var commentId = this.get('id');
        var self = this;
        $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/removeFlag/"+commentId,
          success: function(msg){
            console.log(msg);
            self.set('flagLoading', false);
            self.set('isFlagged', false);
            alert(msg);
          }
        });
      }else{
        this.set('flagLoading', false);
      }
    }
  }
});