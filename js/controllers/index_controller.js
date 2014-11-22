Exyht.IndexController = Ember.ObjectController.extend({
  	postBgColor: function(){
  		var bgClr = Ember.get('Exyht.BlogStyle.post_bg_clr');
    	return (bgClr !== "")?"background-color: "+bgClr:"background-color: #ffffff";
  	}.property('Exyht.BlogStyle.post_bg_clr'),
});