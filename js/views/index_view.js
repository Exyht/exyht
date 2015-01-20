/*
 |---------------
 | Index View
 |---------------
*/
Exyht.IndexView = Ember.View.extend({
	didInsertElement: function(){
  	$(window).on('scroll', $.proxy(this.didScroll, this));
  },

  willDestroyElement: function(){
    this.setProperties({
      'controller.more_post_offset': 8,
      'controller.more_post_limit': 8,
      'controller.new_limit': 8
    });
  	$(window).off('scroll', $.proxy(this.didScroll, this));
  },

  didScroll: function(){
    if($(window).scrollTop() + $(window).height() == $(document).height()){
      this.get('controller').send('loadMoreTopics');
    }
  }
});