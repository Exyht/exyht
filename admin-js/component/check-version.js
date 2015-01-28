/*
 |---------------------------
 | Check version Component
 |---------------------------
*/
Exyht.CheckVersionComponent = Ember.Component.extend({
	isNewVersion: false,
	version: '',
  	onInsert: function() {
  	  	var self = this;

  	  	$.getJSON(Exyht.blogUrl + "/package.json").then(function(data) {
      		self.set('version', data.version);
    	});

  	  	setTimeout(function(){
  	  	$.ajax({ 
  	  		type: 'GET', 
  	  		url: 'http://exyht.github.io/exyht/info.json?callback=?', 
  	  		async: false, 
  	  		jsonpCallback: 'jsonCallback', 
  	  		contentType: "application/json", 
  	  		dataType: 'jsonp', 
  	  		success: function(data) { 
  	  			if(data.version !== self.get('version')){
  	  				self.setProperties({
  	  					'isNewVersion': true,
  	  					'version': data.version
  	  				});
  	    		} 
  	  		}
  	  	});
  	  	}, 1500);
  	  	

  	  
  	}.on('didInsertElement'),

  	getVersion: function(){
  		if(this.get('version')){
  			return this.get('version');
  		}
  	}.property('version')
});