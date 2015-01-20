/*
 |---------------------------
 | Index View
 |---------------------------
*/
Exyht.IndexView = Ember.View.extend({
  
  templateName: "index",

  numberOfPost: (function() {
  	var response, NoOfPost = this.get("controller.posts.length");
  	if(NoOfPost === 1){
  		response = "1 Post";
  	}else if(NoOfPost > 1){
  		response = NoOfPost+" Posts";
  	}else{
  		response = "No Post";
  	}
    return response;
  }).property("controller.posts.length")
});