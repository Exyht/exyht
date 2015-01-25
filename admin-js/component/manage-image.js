/*
 |--------------------------------
 | Manage gallery image Component
 |--------------------------------
*/
Exyht.ManageImageComponent = Ember.Component.extend({
	deletingImg: false,
	srcPath: function(){
		var galleryImagePath = this.get('img.src_path'),
			img_visible = this.get('img.img_visible');
		if(img_visible === true){
			return Ember.get('Exyht.hostnameWithProtocolPort')+"/blog/upload_dir/"+galleryImagePath;
		}
	}.property('Exyht.hostnameWithProtocolPort','img'),
	actions: {
		// This action will remove single gallery img for each call
		removeGimg: function(){
			var self = this;
			this.set('deletingImg', true);
			var img_path = this.get('img.src_path');
			$.ajax({
          		type: "POST",
          		url: Exyht.BaseUrl+"/removeGimg",
          		data: {img_path: img_path},
          		success: function(msg){
          			self.setProperties({
          				'img.img_visible': false,
          				'deletingImg': false
          			});
          		  	alert(msg);
          		}
        	});
		}
	}
});