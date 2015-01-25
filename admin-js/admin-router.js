/*
 |---------------------------
 | Router
 |---------------------------
*/
Exyht.Router.map(function() {
    this.route('index',  {path: Exyht.BaseUrl});
    this.route('comment', {path: Exyht.BaseUrl+'/comment/:post_id'});
    this.route('typeblogpost', {path: Exyht.BaseUrl+'/typeblogpost'});
    this.route('profilesetting', {path: Exyht.BaseUrl+'/profilesetting'});
    this.route('uisettings', {path: Exyht.BaseUrl+'/uisettings'});
    this.route('imggallery', {path: Exyht.BaseUrl+'/imggallery'});
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

Exyht.CommentRoute = Ember.Route.extend({
model: function(params)
  {
  return Ember.$.getJSON(Exyht.currentBaseUri+'/getComments/'+params.post_id).then(function(data) {
    return {"comments":data};
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

Exyht.ImggalleryRoute = Ember.Route.extend({
init_galry_img_offset: 0,
init_galry_img_limit: 15,
model: function()
  { 
  return Ember.$.getJSON(Exyht.currentBaseUri+'/getGalleryImg/'+this.init_galry_img_offset+'/'+this.init_galry_img_limit).then(function(data) {
    return {"images":data};
  });
}
});