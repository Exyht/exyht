Exyht.Router.map(function() {
    this.route('index',  {path: Exyht.BaseUrl});
    this.route('comments', {path: Exyht.BaseUrl+'/comments/:post_id'});
    this.route('typeblogpost', {path: Exyht.BaseUrl+'/typeblogpost'});
    this.route('profilesetting', {path: Exyht.BaseUrl+'/profilesetting'});
    this.route('uisettings', {path: Exyht.BaseUrl+'/uisettings'});
});

Exyht.Router.reopen({
  location: 'history'
});

Exyht.IndexRoute = Ember.Route.extend({
model: function()
  {
    return Ember.$.getJSON(Exyht.currentBaseUri+'/getBlogPosts').then(function(data) {
      return data;
    });
  },
  redirect: function() {
        // this redirects / to /index
        this.transitionTo('index');
  }
});

Exyht.CommentsRoute = Ember.Route.extend({
model: function(params)
  {
  return Ember.$.getJSON(Exyht.currentBaseUri+'/getComments/'+params.post_id).then(function(data) {
    return data;
  });
}
});

Exyht.ProfilesettingRoute = Ember.Route.extend({
model: function()
  {
  return Ember.$.getJSON(Exyht.currentBaseUri+'/getProfileInfo').then(function(data) {
    return data;
  });
}
});