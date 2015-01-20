Exyht.IndexController = Ember.ObjectController.extend({
    more_post_offset: 8,
    more_post_limit: 8,
    loadingMoreTopics: false,

    new_limit: function(){
      return this.get('more_post_limit');
    }.property('more_post_limit'),
    // Post div background color
  	postBgColor: function(){
  		var bgClr = Ember.get('Exyht.BlogStyle.post_bg_clr');
    	return (bgClr !== "")?"background-color: "+bgClr:"background-color: #ffffff";
  	}.property('Exyht.BlogStyle.post_bg_clr'),

    loadTopics: function(){
      var posts = this.get('posts'),
          self = this;
          
      return $.getJSON(Exyht.currentBaseUri+'getBlogPosts/'+this.get('more_post_offset')+'/'+this.get('more_post_limit')).then(function(data) {
            self.set('loadingMoreTopics', false); // Hide loading spinner
            $.each(data, function(index){
              if(data[index].no_post === false){ // no_post === true means there is no post
                posts.pushObject({
                  id: data[index].id,
                  title: data[index].title,
                  body: data[index].body,
                  created: data[index].created,
                  no_post: data[index].no_post
                });
                // Now increment offset by incrementing new_limit property
                self.set('more_post_offset', self.incrementProperty('new_limit'));
              }
            });
      });
    },

  	actions: {
    	loadMoreTopics: function(){
        this.set('loadingMoreTopics', true); // Show loading spinner

        setTimeout(function(){
          // Wait 0.5 second before make an ajax call
          // Debounce for 1 second
          Ember.run.debounce(this, this.loadTopics, 1000);
      	  
        }.bind(this), 500);
    	}
  	}
});