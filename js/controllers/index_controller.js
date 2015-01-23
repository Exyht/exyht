/*
 |------------------
 | Index Controller
 |------------------
*/
Exyht.IndexController = Ember.ObjectController.extend({
    
    // Post div background color
  	postBgColor: function(){
  		var bgClr = Ember.get('Exyht.BlogStyle.post_bg_clr');
    	return (bgClr !== "")?"background-color: "+bgClr:"background-color: #ffffff";
  	}.property('Exyht.BlogStyle.post_bg_clr')
});