Exyht.PostView = Ember.View.extend({
  
  templateName: "post",

  postCreated: (function() {
    return new Ember.Handlebars.SafeString(moment(this.get("controller.created")).format("MMM DD YYYY"));
  }).property("controller.created"),

  pageViewCount: (function(){
  	
  	var pageViews = parseInt(this.get("controller.views"));
  	return new Ember.Handlebars.SafeString((pageViews === 0)?'1 seen' : pageViews + 1 + ' seen');
  }).property("controller.views"),
});