/*
 |--------------------------
 | Image Gallery Controller
 |--------------------------
*/
Exyht.ImggalleryController = Ember.ObjectController.extend({
	img_from: 15, // load more pics offset
	img_to: 30, // load more pics limit
	totalImgs: function(){
		var galryLen = this.get('images').filterBy('img_visible', true).get('length');
    	return (galryLen > 0)?galryLen : 0;
  	}.property('model.images.@each.img_visible'),

  	loadPics: function(){
  		// Request for more 15 imgs
		// Request for large number of imgs will make the App slow
		var g_imgs = this.get('images'),
			self = this,
			g_img_from = this.get('img_from'),
			g_img_to = this.get('img_to');
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
  	},

	actions: {
		loadMoreGalleryPics: function(){
			// Debounce for 1 second
          	Ember.run.debounce(this, this.loadPics, 1000);
		}
	}
});
/*
 |--------------------------
 | Gallery Image Controller
 |--------------------------
*/
Exyht.GalleryimageController = Ember.ObjectController.extend({
	deletingImg: false,
	srcPath: function(){
		var galleryImagePath = this.get('model.src_path'),
			img_visible = this.get('model.img_visible');
		if(img_visible === true){
			return Ember.get('Exyht.hostnameWithProtocolPort')+"/blog/upload_dir/"+galleryImagePath;
		}
	}.property('Exyht.hostnameWithProtocolPort','model'),
	actions: {
		// This action will remove single gallery img for each call
		removeGimg: function(){
			var self = this;
			this.set('deletingImg', true);
			var img_path = this.get('src_path');
			$.ajax({
          		type: "POST",
          		url: Exyht.BaseUrl+"/removeGimg",
          		data: {img_path: img_path},
          		success: function(msg){
          			self.setProperties({
          				'img_visible': false,
          				'deletingImg': false
          			});
          		  	alert(msg);
          		}
        	});
		}
	}
});