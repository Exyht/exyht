/*
 |---------------------------
 | TimeAgo Component
 |---------------------------
*/
Exyht.TimeAgoComponent = Ember.Component.extend({
  timeAgo: '',
  
  clock: function() {
  	timezone = jstz.determine();
  	timezoneName = timezone.name();
    var newTimeAgo =  moment.tz(this.get('createdAt'), timezoneName).fromNow();
    this.set('timeAgo', newTimeAgo);
    
    Ember.run.later(this, this.clock, 1000 * 60);
  }.on('didInsertElement') 
});