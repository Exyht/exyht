Exyht.ToprowController = Ember.ObjectController.extend({
  
  notificationTemplate: function(value1, value2){
    if( value1 === 0){
      return '<div class="huge">No</div><div>'+value2+'</div>';
    }else if(value1 > 1){
      return '<div class="huge">'+value1+'</div><div>'+value2+'s</div>';
    }else{
      return '<div class="huge">1</div><div>'+value2+'</div>';
    }
  },

  newCommentCount: function(){

    var newCommentCount = this.get('model.newComment');
    var response = this.notificationTemplate(newCommentCount, 'New Comment');

    return new Ember.Handlebars.SafeString(response);

  }.property('model.newComment'),

  totalDraft: function(){

      var model = this.get('model.posts');
      var response;
      if(typeof model !== 'undefined'){
        response = this.notificationTemplate(model.filterBy('isDraft', true).get('length'), 'Draft');
      }else{
        response = this.notificationTemplate(0, 'Draft');
      }
      return new Ember.Handlebars.SafeString(response);

    }.property('model.posts.@each.isDraft'),

    flaggedCommentCount: function(){

    var flaggedCommentCount = this.get('model.flaggedComment');
    var response = this.notificationTemplate(flaggedCommentCount, 'Flagged Comment');

    return new Ember.Handlebars.SafeString(response);

  }.property('model.flaggedComment'),
});
