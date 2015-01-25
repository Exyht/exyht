/*
 |---------------------
 | Comment Controller
 |---------------------
*/
Exyht.CommentController = Ember.ObjectController.extend({
  needs: "posttitle",
  title: ''
});