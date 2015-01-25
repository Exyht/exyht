/*
 |---------------------------
 | Image gallery Component
 |---------------------------
*/
Exyht.ImageGalleryComponent = Ember.Component.extend({
	img_from: 15, // load more pics offset
	img_to: 30, // load more pics limit
	totalImgs: function(){
		var galryLen = this.get('images').filterBy('img_visible', true).get('length');
    	return (galryLen > 0)?galryLen : 0;
  	}.property('images.@each.img_visible'),

  	inInsert: function(){
    	this.scheduleMasonry();
    	$(window).on('scroll', $.proxy(this.didScroll, this));
  	}.on('didInsertElement'),

  	onLeaving: function(){
    	this.destroyMasonry();
    	this.setProperties({
    	  	'img_from': 15,
      		'img_to': 30
    	});
    	$(window).off('scroll', $.proxy(this.didScroll, this));
  	}.on('willDestroyElement'),

  	scheduleMasonry: function(){
    	Ember.run.scheduleOnce('afterRender', this, this.applyMasonry);
  	}.observes('images.@each'),

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
      		// Debounce for 1 second
          	Ember.run.debounce(this, this.loadPics, 1000);
    	}
  	},

  	loadPics: function(){
  		// Request for more 15 imgs
		// Request for large number of imgs will make the App slow
		var g_imgs = this.get('images'),
			self = this,
			g_img_from = this.get('img_from'),
			g_img_to = this.get('img_to');

		if(g_img_from <= (this.get('totalImgs') + 15)){
			// Make the request to the server for more imgs
			$.getJSON(Exyht.currentBaseUri+'/getGalleryImg/'+g_img_from+'/'+g_img_to).then(function(data) {
				// Set new offset & limit, to load next imgs
				self.set('img_from', self.get('img_to'));
      			var moreImgTo = parseInt(self.get('img_from')) + 15;
      			self.set('img_to', moreImgTo);
      			// Iterate responsed data
      			$.each(data, function(index){
      				// Don't push if responsed img id matches with the already pushed last img's id
      				if(data[index].id != (g_img_to + 1)){
      					g_imgs.pushObject({
      						id: data[index].id,
							src_path: data[index].src_path,
							img_visible: data[index].img_visible
						});
      				}
      			});
    		});
		}
  	}
});