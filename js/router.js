Exyht.Router.map(function() {
  this.route('index', {path: Exyht.BaseURL});
  this.route('post', {path: Exyht.BaseURL+'post/:post_slug/:post_id'});
});

Exyht.Router.reopen({
  location: 'history'
});

Exyht.IndexRoute = Ember.Route.extend({
  model: function()
    {
      return Ember.$.getJSON(Exyht.currentBaseUri+'getBlogPosts').then(function(data) {
        return data;
      });
    },
  redirect: function() {
        // this redirects / to /index
        this.transitionTo('index');
    }
});

Exyht.PostRoute = Ember.Route.extend({
  model: function(params)
    {
      return Ember.$.getJSON(Exyht.currentBaseUri+'getPostTitle/'+params.post_id).then(function(data) {

        $('title').html(data.title);

        return data;
      });
    },
    setupController: function (controller, model) {
        Ember.$.getJSON(Exyht.currentBaseUri+'postComments/'+model.id).then(function(data) {
          Ember.run(function() {
            controller.set('model', data);
          });

          $('title').html(data.title);
        });
  },
  serialize: function(model, params) {
    var slug = model.title.substring(0, 60).replace(/[^A-Za-z0-9\s+]/g, '').replace(/\s+/g, '-').toLowerCase();
    return { post_slug: slug, post_id: model.id };
  }  
});