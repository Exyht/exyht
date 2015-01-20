Exyht.ImggalleryView = Ember.View.extend({
  
  templateName: "imggallery",

 	didInsertElement: function(){
    this.scheduleMasonry();
    $(window).on('scroll', $.proxy(this.didScroll, this));
  },

  willDestroyElement: function(){
    this.destroyMasonry();
    this.setProperties({
      'controller.img_from': 15,
      'controller.img_to': 30
    });
    $(window).off('scroll', $.proxy(this.didScroll, this));
  },

  scheduleMasonry: (function(){
    Ember.run.scheduleOnce('afterRender', this, this.applyMasonry);
  }).observes('controller.images.@each'),

  applyMasonry: function(){
    var $galleryContainer = $('#galleryContainer');
    // initialize
    $galleryContainer.imagesLoaded(function() {
      // check if masonry is initialized
      var msnry = $galleryContainer.data('masonry');
      if ( msnry ) {
        msnry.reloadItems();
        // disable transition
        var transitionDuration = msnry.options.transitionDuration;
        msnry.options.transitionDuration = 0;
        msnry.layout();
        // reset transition
        msnry.options.transitionDuration = transitionDuration;
      } else {
        // init masonry
        $galleryContainer.masonry({
          itemSelector: '.item',
          columnWidth: 150
        });
      }
    });
  },
  destroyMasonry: function(){
    $('#galleryContainer').masonry('destroy');
  },

  didScroll: function(){
    if($(window).scrollTop() + $(window).height() == $(document).height()){
      this.get('controller').send('loadMoreGalleryPics');
    }
  }
});