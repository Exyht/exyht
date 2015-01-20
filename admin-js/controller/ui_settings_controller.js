// Radio Button Component
Exyht.RadioButton = Ember.Component.extend({
    tagName : "input",
    type : "radio",
    attributeBindings : [ "name", "type", "value", "style" ],
});
Ember.Handlebars.helper('radio-button',Exyht.RadioButton);
/*
 |---------------------------
 | Uisettings Controller
 |---------------------------
*/
Exyht.UisettingsController = Ember.ObjectController.extend({
  favcolor: '',
  selectedCategory: '',
  selectedfs: '',
  categories: [
    {color: "Background Color", domArea: 1},
    {color: "Navbar Color", domArea: 2},
    {color: "Post Body Color", domArea: 3},
    {color: "Sidebar Color", domArea: 4},
    {color: "Footer Color", domArea: 5},
    {color: "Link Color", domArea: 6}
  ],
  fstyles: [
  	    {'name':'Serif', 'font_family':'font-family:serif'},
  	    {'name':'Sans Serif', 'font_family':'font-family:sans-serif'},
  	    {'name':'Rockwell','font_family':'font-family:Rockwell'},
  	    {'name':'Courier New', 'font_family':'font-family:Courier New'},
  	    {'name':'Palatino Linotype', 'font_family':'font-family:Palatino Linotype'},
  	    {'name':'Trebuchet MS', 'font_family':'font-family:Trebuchet MS'},
  	    {'name':'Papyrus', 'font_family':'font-family:Papyrus'},
  	    {'name':'Impact', 'font_family':'font-family:Impact'},
  	    {'name':'Segoe UI', 'font_family':'font-family:Segoe UI'},
  	    {'name':'Calibri', 'font_family':'font-family:Calibri'},
  	    {'name':'Times New Roman', 'font_family':'font-family:Times New Roman'},
  	],
  actions: {
    changeColor: function(){
	  var favColor = this.get('favcolor');
	  var category = this.get('selectedCategory');
	  
	  $.ajax({
	    type: "POST",
	    url: Exyht.BaseUrl+"/changeColor",
	    data: {favcolor: favColor, category: category},
	    success: function(msg){
	      alert(msg);
	    }
	  });
	},
	changeFontStyle: function(){
	  var selectedfs = $('input:radio[name=fontType]:checked').val();
	  console.log(selectedfs);
	  $.ajax({
	    type: "POST",
	    url: Exyht.BaseUrl+"/changeFontFamily",
	    data: {selectedFont: selectedfs},
	    success: function(msg){
	      alert(msg);
	    }
	  });
	}
  }
});