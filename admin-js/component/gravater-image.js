/*
 |---------------------------
 | GravatarImage Component
 |---------------------------
*/
Exyht.GravatarImageComponent = Ember.Component.extend({
  size: 30,
  email: '',
  notReply: true,

  gravatarUrl: function() {
    var email = this.get('email'),
        size = this.get('size');

    return 'http://www.gravatar.com/avatar/' + email + '?d='+Exyht.gravatarVersion+'&s=' + size;
  }.property('email', 'size')
});