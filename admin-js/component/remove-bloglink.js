/*
 |----------------------------
 | Remove blog link Component
 |----------------------------
*/
Exyht.RemoveBloglinkComponent = Ember.Component.extend({
  actions: {
    removeLink: function(){
      var linkId = this.get('link.id');

      this.set('loadingOn', true);

      var self = this;
      $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/removeLink",
          data: { link_id: linkId},
          success: function(msg){
            self.set('loadingOn', false);
            self.set('link.status', false);
            console.log(msg);
            alert(msg);
          }
      });
    }
  }
});