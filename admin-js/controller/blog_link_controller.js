/*
 |----------------------
 | Blog Link Controller
 |----------------------
*/
Exyht.BloglinkController = Ember.ObjectController.extend({
  actions: {
    removeLink: function(){
      var linkId = this.get('id');

      this.set('loadingOn', true);

      var self = this;
      $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/removeLink",
          data: { link_id: linkId},
          success: function(msg){
            self.set('loadingOn', false);
            self.set('status', false);
            console.log(msg);
            alert(msg);
          }
      });
    }
  }
});