/*
 |--------------------------------
 | Top row notification Component
 |--------------------------------
*/
Exyht.ToprowNotificationComponent = Ember.Component.extend({
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

    var newCommentCount = this.get('newComment');
    var response = this.notificationTemplate(newCommentCount, 'New Comment');

    return new Ember.Handlebars.SafeString(response);

  }.property('newComment'),

  totalDraft: function(){

      var model = this.get('posts');
      var response;
      if(typeof model !== 'undefined'){
        response = this.notificationTemplate(model.filterBy('isDraft', true).get('length'), 'Draft');
      }else{
        response = this.notificationTemplate(0, 'Draft');
      }
      return new Ember.Handlebars.SafeString(response);

    }.property('posts.@each.isDraft'),

    flaggedCommentCount: function(){

    var flaggedCommentCount = this.get('flaggedComment');
    var response = this.notificationTemplate(flaggedCommentCount, 'Flagged Comment');

    return new Ember.Handlebars.SafeString(response);

  }.property('flaggedComment')
});