/*
 |---------------------------
 | Application Controller
 |---------------------------
*/
Exyht.ApplicationController = Ember.ArrayController.extend({
  needs: "post",
  //>>> For Login
  is_loggedin: false,
  user_name: '',
  user_email: '',
  //<<< For Login
  isReplying: false,
  isHideAddComment: false,
  isCommentDivShown: false,
  sendingCommentOn: false,
  actualTitle: '',
  actualPostId: '',
  currentSlug: '',
  commentsArray: '',
  newCommentLength: '',
  showNewCommentLength: false,
  commentIdToReply: '',
  commenterNameToReply: '',
  commenterGravaterToReply: '',
  valueForSpam: '',
  postKey: function(){
  
    var getNewCommentLength = this.get('typeComment').length;
    var leastNewCommentLength = Math.abs(20 - getNewCommentLength);
  
    if(getNewCommentLength === 0 || getNewCommentLength < 20){
  
      this.set('showNewCommentLength', true);
    
    }else{
  
      this.set('showNewCommentLength', false);
    }
  
    this.set('newCommentLength', leastNewCommentLength);
  }.observes('typeComment'),

  hasLogo: function(){
    return Ember.get('Exyht.BlogSettings.has_logo');
  }.property('Exyht.BlogSettings.has_logo'),

  blogLogo: function(){
    var blog_logo = Ember.get('Exyht.BlogSettings.logo');
    return (blog_logo !== '')?blog_logo:'';
  }.property('Exyht.BlogSettings.logo'),

  blogTitle: function(){
    return Ember.get('Exyht.BlogSettings.blog_title');
  }.property('Exyht.BlogSettings.blog_title'),

  blogSubTitle: function(){
    return Ember.get('Exyht.BlogSettings.blog_sub_title');
  }.property('Exyht.BlogSettings.blog_sub_title'),

  bodyBgColor: function(){
    var bgClr = Ember.get('Exyht.BlogStyle.body_bg_clr');
    return (bgClr !== "")?"background-color: "+bgClr:"background-color: #ffffff";
  }.property('Exyht.BlogStyle.body_bg_clr'),

  readOnlyMode: function(){
    return Ember.get('Exyht.BlogSettings.isReadOnlyMode');
  }.property('Exyht.BlogSettings.isReadOnlyMode'),

  commentFeature: function(){
    return Ember.get('Exyht.BlogSettings.hasCommentFeature');
  }.property('Exyht.BlogSettings.hasCommentFeature'),

  hasNavbar: function(){
    return Ember.get('Exyht.BlogSettings.hasNavbar');
  }.property('Exyht.BlogSettings.hasNavbar'),

  blogLinks: function(){
    return Ember.get('Exyht.BlogLinks');
  }.property('Exyht.BlogLinks'),

  navBgColor: function(){
    var bgClr = Ember.get('Exyht.BlogStyle.nav_bg_clr');
    return (bgClr !== "")?"background-color: "+bgClr:"background-color: #428bca";
  }.property('Exyht.BlogStyle.nav_bg_clr'),

  currentYear: function(){
    return Ember.get('Exyht.currentYear');
  }.property('Exyht.currentYear'),

  footerBgColor: function(){
    var bgClr = Ember.get('Exyht.BlogStyle.footer_bg_clr');
    return (bgClr !== "")?"background-color: "+bgClr:"";
  }.property('Exyht.BlogStyle.footer_bg_clr'),

  sidebarBgColor: function(){
    var bgClr = Ember.get('Exyht.BlogStyle.sidebar_bg_clr');
    return (bgClr !== "")?"background-color: "+bgClr:"background-color: #ffffff";
  }.property('Exyht.BlogStyle.sidebar_bg_clr'),

  sidebarAuthor: function(){
    return Ember.get('Exyht.SidebarInfo.sidebar_info.author');
  }.property('Exyht.SidebarInfo.sidebar_info.author'),

  sidebarArchive: function(){
    return Ember.get('Exyht.SidebarInfo.sidebar_info.archive');
  }.property('Exyht.SidebarInfo.sidebar_info.archive')
});