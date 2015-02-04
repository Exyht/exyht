Ember.TEMPLATES["_editor"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n");
  stack1 = helpers['if'].call(depth0, "commentFeature", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "isCommentDivShown", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n  ");
  stack1 = helpers['if'].call(depth0, "isHideAddComment", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div class=\"addCommentDiv\">\n\n   <div id=\"showError\"></div>\n\n   <h4>\n   <span class=\"pull-right\" style=\"padding-left:1%;padding-right:1%;\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers['manage-editor'] || (depth0 && depth0['manage-editor']),options={hash:{
    'isHiding': (true),
    'user_name': ("user_name"),
    'user_email': ("user_email"),
    'typeComment': ("typeComment"),
    'sendingCommentOn': ("sendingCommentOn"),
    'isCommentDivShown': ("isCommentDivShown"),
    'isHideAddComment': ("isHideAddComment"),
    'actualPostId': ("actualPostId"),
    'actualTitle': ("actualTitle"),
    'isReplying': ("isReplying"),
    'currentSlug': ("currentSlug"),
    'commentIdToReply': ("commentIdToReply"),
    'commenterNameToReply': ("commenterNameToReply"),
    'commenterGravaterToReply': ("commenterGravaterToReply")
  },hashTypes:{'isHiding': "BOOLEAN",'user_name': "ID",'user_email': "ID",'typeComment': "ID",'sendingCommentOn': "ID",'isCommentDivShown': "ID",'isHideAddComment': "ID",'actualPostId': "ID",'actualTitle': "ID",'isReplying': "ID",'currentSlug': "ID",'commentIdToReply': "ID",'commenterNameToReply': "ID",'commenterGravaterToReply': "ID"},hashContexts:{'isHiding': depth0,'user_name': depth0,'user_email': depth0,'typeComment': depth0,'sendingCommentOn': depth0,'isCommentDivShown': depth0,'isHideAddComment': depth0,'actualPostId': depth0,'actualTitle': depth0,'isReplying': depth0,'currentSlug': depth0,'commentIdToReply': depth0,'commenterNameToReply': depth0,'commenterGravaterToReply': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "manage-editor", options))));
  data.buffer.push("\n   \n   </span>\n   <span class=\"pull-right\">\n   ");
  data.buffer.push(escapeExpression((helper = helpers['manage-editor'] || (depth0 && depth0['manage-editor']),options={hash:{
    'isCanceling': (true),
    'user_name': ("user_name"),
    'user_email': ("user_email"),
    'typeComment': ("typeComment"),
    'sendingCommentOn': ("sendingCommentOn"),
    'isCommentDivShown': ("isCommentDivShown"),
    'actualPostId': ("actualPostId"),
    'actualTitle': ("actualTitle"),
    'isReplying': ("isReplying"),
    'currentSlug': ("currentSlug"),
    'commentIdToReply': ("commentIdToReply"),
    'commenterNameToReply': ("commenterNameToReply"),
    'commenterGravaterToReply': ("commenterGravaterToReply")
  },hashTypes:{'isCanceling': "BOOLEAN",'user_name': "ID",'user_email': "ID",'typeComment': "ID",'sendingCommentOn': "ID",'isCommentDivShown': "ID",'actualPostId': "ID",'actualTitle': "ID",'isReplying': "ID",'currentSlug': "ID",'commentIdToReply': "ID",'commenterNameToReply': "ID",'commenterGravaterToReply': "ID"},hashContexts:{'isCanceling': depth0,'user_name': depth0,'user_email': depth0,'typeComment': depth0,'sendingCommentOn': depth0,'isCommentDivShown': depth0,'actualPostId': depth0,'actualTitle': depth0,'isReplying': depth0,'currentSlug': depth0,'commentIdToReply': depth0,'commenterNameToReply': depth0,'commenterGravaterToReply': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "manage-editor", options))));
  data.buffer.push("\n    </span>\n\n   &nbsp; \n\n   ");
  stack1 = helpers['if'].call(depth0, "isReplying", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n     \n   </h4>\n   <div class=\"container-fluid\">\n      <div class=\"row\">\n\n        <div class=\"col-lg-6\">\n        \n        \n          ");
  stack1 = helpers._triageMustache.call(depth0, "editor-tools", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        \n          ");
  data.buffer.push(escapeExpression((helper = helpers['auto-expanding-text-area'] || (depth0 && depth0['auto-expanding-text-area']),options={hash:{
    'class': ("form-control"),
    'maxlength': ("2000"),
    'row': ("7"),
    'value': ("typeComment")
  },hashTypes:{'class': "STRING",'maxlength': "STRING",'row': "STRING",'value': "ID"},hashContexts:{'class': depth0,'maxlength': depth0,'row': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "auto-expanding-text-area", options))));
  data.buffer.push("\n   \n          ");
  stack1 = helpers['if'].call(depth0, "showNewCommentLength", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <div class=\"row\" style=\"margin-top:2px;\" >\n            \n            <div class=\"col-xs-10\">\n                \n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("hidden"),
    'value': ("actualPostId")
  },hashTypes:{'type': "STRING",'value': "ID"},hashContexts:{'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                \n                  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("spam_bot"),
    'class': ("hidden"),
    'value': ("valueForSpam")
  },hashTypes:{'type': "STRING",'name': "STRING",'class': "STRING",'value': "ID"},hashContexts:{'type': depth0,'name': depth0,'class': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n                  ");
  data.buffer.push(escapeExpression((helper = helpers['add-comment'] || (depth0 && depth0['add-comment']),options={hash:{
    'isSending': (true),
    'is_loggedin': ("is_loggedin"),
    'user_name': ("user_name"),
    'user_email': ("user_email"),
    'typeComment': ("typeComment"),
    'sendingCommentOn': ("sendingCommentOn"),
    'comments': ("comments"),
    'isCommentDivShown': ("isCommentDivShown"),
    'isHideAddComment': ("isHideAddComment"),
    'commentsArray': ("commentsArray"),
    'actualPostId': ("actualPostId"),
    'actualTitle': ("actualTitle"),
    'isReplying': ("isReplying"),
    'valueForSpam': ("valueForSpam"),
    'currentSlug': ("currentSlug"),
    'commentIdToReply': ("commentIdToReply"),
    'commenterNameToReply': ("commenterNameToReply"),
    'commenterGravaterToReply': ("commenterGravaterToReply")
  },hashTypes:{'isSending': "BOOLEAN",'is_loggedin': "ID",'user_name': "ID",'user_email': "ID",'typeComment': "ID",'sendingCommentOn': "ID",'comments': "ID",'isCommentDivShown': "ID",'isHideAddComment': "ID",'commentsArray': "ID",'actualPostId': "ID",'actualTitle': "ID",'isReplying': "ID",'valueForSpam': "ID",'currentSlug': "ID",'commentIdToReply': "ID",'commenterNameToReply': "ID",'commenterGravaterToReply': "ID"},hashContexts:{'isSending': depth0,'is_loggedin': depth0,'user_name': depth0,'user_email': depth0,'typeComment': depth0,'sendingCommentOn': depth0,'comments': depth0,'isCommentDivShown': depth0,'isHideAddComment': depth0,'commentsArray': depth0,'actualPostId': depth0,'actualTitle': depth0,'isReplying': depth0,'valueForSpam': depth0,'currentSlug': depth0,'commentIdToReply': depth0,'commenterNameToReply': depth0,'commenterGravaterToReply': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "add-comment", options))));
  data.buffer.push("\n                \n            </div>\n          </div>\n    \n      </div>\n        <div class=\"col-lg-6\" id=\"typingCommentDiv\" style=\"border:1px dashed #000;background-color:#ffffff;padding:1%;height:115px;overflow:auto;\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "typeComment", options) : helperMissing.call(depth0, "format-markdown", "typeComment", options))));
  data.buffer.push("\n        </div>\n     </div>\n    </div>\n   </div>\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <small>\n      <div class=\"pull-left\" style=\"padding-left:1%;\">Replying to&nbsp;comment by&nbsp;</div>\n      <div class=\"pull-left\">");
  data.buffer.push(escapeExpression((helper = helpers['gravatar-image'] || (depth0 && depth0['gravatar-image']),options={hash:{
    'email': ("commenterGravaterToReply"),
    'size': ("20"),
    'notReply': (false)
  },hashTypes:{'email': "ID",'size': "STRING",'notReply': "BOOLEAN"},hashContexts:{'email': depth0,'size': depth0,'notReply': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "gravatar-image", options))));
  data.buffer.push("</div>\n      <div class=\"pull-left\">&nbsp;<strong>");
  stack1 = helpers._triageMustache.call(depth0, "commenterNameToReply", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(":</strong></div>\n    </small>\n   ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <small>Commenting to&nbsp;\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "post", "currentSlug", "actualPostId", options) : helperMissing.call(depth0, "link-to", "post", "currentSlug", "actualPostId", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </small>\n   ");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "actualTitle", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div style=\"text-align:center;padding:0.5%;\">");
  stack1 = helpers._triageMustache.call(depth0, "newCommentLength", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" to go for the post</div>\n          ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['manage-editor'] || (depth0 && depth0['manage-editor']),options={hash:{
    'isShowing': (true),
    'isCommentDivShown': ("isCommentDivShown"),
    'isHideAddComment': ("isHideAddComment")
  },hashTypes:{'isShowing': "BOOLEAN",'isCommentDivShown': "ID",'isHideAddComment': "ID"},hashContexts:{'isShowing': depth0,'isCommentDivShown': depth0,'isHideAddComment': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "manage-editor", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  stack1 = helpers.unless.call(depth0, "readOnlyMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["_footer"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n    <p>\n        <a href=\"#topNavbar\"><i class=\"fa fa-arrow-up\"></i> Back to top</a>\n    </p>\n");
  }

  data.buffer.push("<div class=\"blog-footer\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("footerBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        \n");
  stack1 = helpers['if'].call(depth0, "hasNavbar", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <p>Copyright &copy; ");
  stack1 = helpers._triageMustache.call(depth0, "currentYear", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" - ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "blogTitle", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" - All rights reserved</p>\n    <p class=\"small\">Built with <a href=\"https://github.com/Exyht/exyht\" alt=\"Exyht link\">Exyht</a></p>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["_navbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <nav class=\"navbar navbar-default navbar-static-top\" id=\"topNavbar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("navBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        <div class=\"container container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse-1\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n          </div>\n          <div class=\"collapse navbar-collapse\" id=\"navbar-collapse-1\">\n            <ul class=\"nav navbar-nav\">\n              ");
  stack1 = helpers.each.call(depth0, "blogLinks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n          </div><!-- /.navbar-collapse -->\n        </div>\n    </nav>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n               ");
  stack1 = helpers['if'].call(depth0, "navUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                ");
  stack1 = helpers['if'].call(depth0, "isBlogUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n               ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                  <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("blog-nav-item active")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n                ");
  return buffer;
  }
function program5(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "link_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                  <li><a class=\"blog-nav-item\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "link_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n                ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "hasNavbar", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["_sidebar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div class=\"row\">\n    <div class=\"sidebar-module col-xs-6\">\n      ");
  stack1 = helpers.unless.call(depth0, "image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n  <div class=\"row\">\n  <div class=\"sidebar-module-inset col-xs-10\">\n    <h4>About</h4>\n      ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "format-markdown", "about", options))));
  data.buffer.push("\n  </div>\n  </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("hashedEmail")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt='person image'/>\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" alt='person image' height=\"170px\" width=\"170px\"/>\n      ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("sa.created")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"sidebar-archive-link\">\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "sa", options) : helperMissing.call(depth0, "link-to", "post", "sa", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n      ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n\n            ");
  stack1 = helpers['if'].call(depth0, "sa.has_img", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "sa.title", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n          ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "sa.first_img", options) : helperMissing.call(depth0, "format-markdown", "sa.first_img", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n        <h3>See all <i class=\"fa fa-chevron-right\"></i></h3>\n      ");
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "elseUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <li><a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "link_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a></li>\n        ");
  return buffer;
  }

  data.buffer.push("\n<div class=\"col-sm-3 col-sm-offset-1 blog-sidebar\" id=\"sidebar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("sidebarBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n");
  stack1 = helpers['with'].call(depth0, "sidebarAuthor", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <div class=\"row\">\n  <div class=\"sidebar-module col-xs-10\">\n    <h4>Archive</h4>\n    <ol class=\"list-unstyled\">\n      ");
  stack1 = helpers.each.call(depth0, "sa", "in", "sidebarArchive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ol>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "archive", options) : helperMissing.call(depth0, "link-to", "archive", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  </div>\n  <div class=\"row\">\n  <div class=\"sidebar-module col-xs-6\">\n    <h4>Elsewhere</h4>\n      <ol class=\"list-unstyled\">\n      ");
  stack1 = helpers.each.call(depth0, "blogLinks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ol>\n  </div>\n</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n         <div class=\"alert alert-warning\" role=\"alert\">\n          The Entire Blog is now in <strong>Read Only Mode</strong>\n         </div>\n        ");
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("blogLogo")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" height=\"70px\" max-width=\"300px\"/>\n          ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n              ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "blogTitle", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n            ");
  return buffer;
  }

  data.buffer.push("  <div class=\"container-full\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("bodyBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "navbar", options) : helperMissing.call(depth0, "partial", "navbar", options))));
  data.buffer.push("\n    <div class=\"container blog-header\">\n        ");
  stack1 = helpers['if'].call(depth0, "readOnlyMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      <div class=\"media blog-title\" id=\"toprow-for-title\">\n\n        <div class=\"pull-left\">\n          ");
  stack1 = helpers['if'].call(depth0, "hasLogo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      \n        <div class=\"media-body\">\n      \n          <h1 class=\"media-heading\">\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </h1>\n          <p class=\"lead blog-description\">\n            ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "blogSubTitle", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n          </p>\n        </div>\n      </div>\n      <div class=\"row\">\n        \n        ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "sidebar", options) : helperMissing.call(depth0, "partial", "sidebar", options))));
  data.buffer.push("  \n      </div><!-- /.row -->\n    </div><!-- /.container -->\n\n    \n  </div> <!-- /container full -->\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "footer", options) : helperMissing.call(depth0, "partial", "footer", options))));
  data.buffer.push("\n  \n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "editor", options) : helperMissing.call(depth0, "partial", "editor", options))));
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["archive"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n			<li class=\"list-group-item\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("topic.title")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "topic", options) : helperMissing.call(depth0, "link-to", "post", "topic", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</li>\n		");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "topic.title", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

  data.buffer.push("<div class=\"col-sm-8 blog-main\">\n	<div class=\"blog-post\">\n		<h2>Archive</h2>\n		<ul class=\"list-group\">\n		");
  stack1 = helpers.each.call(depth0, "topic", "in", "archive", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</ul>\n	</div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["comments"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div class=\"media\">\n\n        <div class=\"pull-left\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("name")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n          ");
  data.buffer.push(escapeExpression((helper = helpers['gravatar-image'] || (depth0 && depth0['gravatar-image']),options={hash:{
    'email': ("email")
  },hashTypes:{'email': "ID"},hashContexts:{'email': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "gravatar-image", options))));
  data.buffer.push("\n        </div>\n\n        <div class=\"media-body\">\n\n         <h5 class=\"media-heading\">\n             <strong>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</strong>\n             <div class=\"pull-right\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("cdate")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n              <time>");
  data.buffer.push(escapeExpression((helper = helpers['time-ago'] || (depth0 && depth0['time-ago']),options={hash:{
    'createdAt': ("cdate")
  },hashTypes:{'createdAt': "ID"},hashContexts:{'createdAt': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "time-ago", options))));
  data.buffer.push("</time>\n             </div>\n\n             ");
  stack1 = helpers['if'].call(depth0, "replyToComment.commentHasReply", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n         </h5>\n          ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "comment", options) : helperMissing.call(depth0, "format-markdown", "comment", options))));
  data.buffer.push("\n        </div>\n        ");
  stack1 = helpers['if'].call(depth0, "readOnlyMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n     \n  <hr />\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n               <div class=\"pull-right\">   \n                  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "replyToComment.name", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" &nbsp;\n               </div>\n               <div class=\"pull-right\" style=\"padding-right:1%;\">\n                  ");
  data.buffer.push(escapeExpression((helper = helpers['gravatar-image'] || (depth0 && depth0['gravatar-image']),options={hash:{
    'email': ("replyToComment.email"),
    'size': ("18"),
    'notReply': (false)
  },hashTypes:{'email': "ID",'size': "STRING",'notReply': "BOOLEAN"},hashContexts:{'email': depth0,'size': depth0,'notReply': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "gravatar-image", options))));
  data.buffer.push("&nbsp;\n               </div>\n               <div class=\"pull-right\">\n                 <i class=\"fa fa-share\"></i>&nbsp;\n               </div>\n             ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n        <div>\n          <button class=\"btn btn-default\" type=\"button\" disabled=\"disabled\"><i class=\"fa fa-flag-o\"></i></button>\n          <button class=\"btn btn-info\" title=\"Reply to comment\" type=\"button\" disabled=\"disabled\"><i class=\"fa fa-reply\"></i> Reply</button>\n        </div>\n        ");
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div>\n          ");
  data.buffer.push(escapeExpression((helper = helpers['flag-comment'] || (depth0 && depth0['flag-comment']),options={hash:{
    'isFlagged': ("isFlagged"),
    'id': ("id")
  },hashTypes:{'isFlagged': "ID",'id': "ID"},hashContexts:{'isFlagged': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "flag-comment", options))));
  data.buffer.push("\n\n          ");
  data.buffer.push(escapeExpression((helper = helpers['add-comment'] || (depth0 && depth0['add-comment']),options={hash:{
    'isReply': (true),
    'notReply': (false),
    'is_loggedin': ("is_loggedin"),
    'user_name': ("user_name"),
    'user_email': ("user_email"),
    'postId': ("postIdFromPostCtlr"),
    'comments': ("getCommentsArrayFromPostCtlr"),
    'isCommentDivShown': ("isCommentDivShown"),
    'isHideAddComment': ("isHideAddComment"),
    'commentsArray': ("commentsArray"),
    'actualPostId': ("actualPostId"),
    'isReplying': ("isReplying"),
    'actualTitle': ("actualTitle"),
    'currentSlug': ("currentSlug"),
    'cmtId': ("id"),
    'cmtName': ("name"),
    'cmtEmail': ("email"),
    'commentIdToReply': ("commentIdToReply"),
    'commenterNameToReply': ("commenterNameToReply"),
    'commenterGravaterToReply': ("commenterGravaterToReply")
  },hashTypes:{'isReply': "BOOLEAN",'notReply': "BOOLEAN",'is_loggedin': "ID",'user_name': "ID",'user_email': "ID",'postId': "ID",'comments': "ID",'isCommentDivShown': "ID",'isHideAddComment': "ID",'commentsArray': "ID",'actualPostId': "ID",'isReplying': "ID",'actualTitle': "ID",'currentSlug': "ID",'cmtId': "ID",'cmtName': "ID",'cmtEmail': "ID",'commentIdToReply': "ID",'commenterNameToReply': "ID",'commenterGravaterToReply': "ID"},hashContexts:{'isReply': depth0,'notReply': depth0,'is_loggedin': depth0,'user_name': depth0,'user_email': depth0,'postId': depth0,'comments': depth0,'isCommentDivShown': depth0,'isHideAddComment': depth0,'commentsArray': depth0,'actualPostId': depth0,'isReplying': depth0,'actualTitle': depth0,'currentSlug': depth0,'cmtId': depth0,'cmtName': depth0,'cmtEmail': depth0,'commentIdToReply': depth0,'commenterNameToReply': depth0,'commenterGravaterToReply': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "add-comment", options))));
  data.buffer.push("\n        </div>\n        ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "commentFeature", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["error"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"col-sm-8 blog-main\">\n	<div class=\"alert alert-warning\" role=\"alert\" style=\"text-align:center;padding:2%;\">Error! Maybe Server Error.</div>\n</div>");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	");
  stack1 = helpers.unless.call(depth0, "no_post", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <div>");
  data.buffer.push(escapeExpression((helper = helpers['format-xmarkdown'] || (depth0 && depth0['format-xmarkdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "body", options) : helperMissing.call(depth0, "format-xmarkdown", "body", options))));
  data.buffer.push("\n    <span>\n    	");
  stack1 = helpers.unless.call(depth0, "no_post", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n    </div>\n    <hr />\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    	<h1>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "", options) : helperMissing.call(depth0, "link-to", "post", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    	<h1>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h1>\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      		<span class=\"pull-right\"><i class=\"fa fa-clock-o\"></i> ");
  data.buffer.push(escapeExpression((helper = helpers['format-archive-date'] || (depth0 && depth0['format-archive-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "created", options) : helperMissing.call(depth0, "format-archive-date", "created", options))));
  data.buffer.push("</span>\n      		");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post", "", options) : helperMissing.call(depth0, "link-to", "post", "", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      	");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("Continue reading...");
  }

  data.buffer.push("\n<div class=\"col-sm-8 blog-main\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("postBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n\n<div class=\"blog-post\">\n");
  stack1 = helpers.each.call(depth0, "posts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  stack1 = helpers._triageMustache.call(depth0, "infinite-scroll", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div><!-- /.blog-post -->\n\n</div><!-- /.blog-main -->");
  return buffer;
  
});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"col-sm-8 blog-main\">\n	<div class=\"alert alert-warning loadingError\" role=\"alert\" style=\"text-align:center;padding:2%;\">Loading...</div>\n</div>");
  
});

Ember.TEMPLATES["post"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <h1>");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "title", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("</h1>\n     ");
  stack1 = helpers._triageMustache.call(depth0, "view.postCreated", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	<hr />\n\n	<div>");
  data.buffer.push(escapeExpression((helper = helpers['format-xmarkdown'] || (depth0 && depth0['format-xmarkdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "post", options) : helperMissing.call(depth0, "format-xmarkdown", "post", options))));
  data.buffer.push("</div>\n\n	  	");
  stack1 = helpers['if'].call(depth0, "isPrevId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n	  	");
  stack1 = helpers['if'].call(depth0, "isNextId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n	  	<br />\n	 	");
  stack1 = helpers['if'].call(depth0, "commentFeature", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        	<div class=\"pull-left\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "post", "prevTitleSlug", "previousId", options) : helperMissing.call(depth0, "link-to", "post", "prevTitleSlug", "previousId", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n	  	");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("<i class=\"fa fa-arrow-left\"></i> ");
  stack1 = helpers._triageMustache.call(depth0, "prevTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n	    	<div class=\"pull-right\">");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["STRING","ID","ID"],data:data},helper ? helper.call(depth0, "post", "nextTitleSlug", "nextId", options) : helperMissing.call(depth0, "link-to", "post", "nextTitleSlug", "nextId", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n	  	");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1;
  stack1 = helpers._triageMustache.call(depth0, "nextTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <i class=\"fa fa-arrow-right\"></i>");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      		<div class=\"breadcrumb\">\n	  		");
  stack1 = helpers['if'].call(depth0, "commentsLength", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        	");
  stack1 = helpers._triageMustache.call(depth0, "view.pageViewCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      		</div>\n	  		<hr />\n\n	  		");
  stack1 = helpers.each.call(depth0, "item", "in", "comments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n	  		");
  stack1 = helpers['if'].call(depth0, "readOnlyMode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        		");
  stack1 = helpers._triageMustache.call(depth0, "model.comments.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers['format-comment-number'] || (depth0 && depth0['format-comment-number']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model.comments.length", options) : helperMissing.call(depth0, "format-comment-number", "model.comments.length", options))));
  data.buffer.push(" &nbsp;&nbsp;\n      		");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n	    		");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "comments", "item", options) : helperMissing.call(depth0, "render", "comments", "item", options))));
  data.buffer.push("\n	  		");
  return buffer;
  }

function program13(depth0,data) {
  
  
  data.buffer.push("\n	    		<button class=\"btn btn-info pull-right\" type=\"button\" disabled=\"disabled\"><i class=\"fa fa-plus-circle\"></i> Add comment</button>\n	  		");
  }

function program15(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n	  			");
  data.buffer.push(escapeExpression((helper = helpers['add-comment'] || (depth0 && depth0['add-comment']),options={hash:{
    'notReply': (true),
    'isReply': (false),
    'is_loggedin': ("is_loggedin"),
    'user_name': ("user_name"),
    'user_email': ("user_email"),
    'postId': ("id"),
    'title': ("title"),
    'comments': ("comments"),
    'isCommentDivShown': ("isCommentDivShown"),
    'isHideAddComment': ("isHideAddComment"),
    'commentsArray': ("commentsArray"),
    'actualPostId': ("actualPostId"),
    'isReplying': ("isReplying"),
    'actualTitle': ("actualTitle"),
    'currentSlug': ("currentSlug"),
    'commentIdToReply': ("commentIdToReply"),
    'commenterNameToReply': ("commenterNameToReply"),
    'commenterGravaterToReply': ("commenterGravaterToReply")
  },hashTypes:{'notReply': "BOOLEAN",'isReply': "BOOLEAN",'is_loggedin': "ID",'user_name': "ID",'user_email': "ID",'postId': "ID",'title': "ID",'comments': "ID",'isCommentDivShown': "ID",'isHideAddComment': "ID",'commentsArray': "ID",'actualPostId': "ID",'isReplying': "ID",'actualTitle': "ID",'currentSlug': "ID",'commentIdToReply': "ID",'commenterNameToReply': "ID",'commenterGravaterToReply': "ID"},hashContexts:{'notReply': depth0,'isReply': depth0,'is_loggedin': depth0,'user_name': depth0,'user_email': depth0,'postId': depth0,'title': depth0,'comments': depth0,'isCommentDivShown': depth0,'isHideAddComment': depth0,'commentsArray': depth0,'actualPostId': depth0,'isReplying': depth0,'actualTitle': depth0,'currentSlug': depth0,'commentIdToReply': depth0,'commenterNameToReply': depth0,'commenterGravaterToReply': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "add-comment", options))));
  data.buffer.push("\n	  		");
  return buffer;
  }

  data.buffer.push("<div class=\"col-sm-8 blog-main\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("postBgColor")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n   <div class=\"blog-post\">\n   ");
  stack1 = helpers['if'].call(depth0, "hasPost", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div><!-- /.blog-post -->\n\n</div><!-- /.blog-main -->");
  return buffer;
  
});

Ember.TEMPLATES["components/add-comment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	");
  stack1 = helpers.unless.call(depth0, "is_loggedin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n		<button class=\"btn btn-info pull-right\" data-toggle=\"modal\" data-target=\"#fbLoginModal\">\n			<i class=\"fa fa-plus-circle\"></i> Add comment\n		</button>\n	");
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n		<button class=\"btn btn-info pull-right\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addCmtAction", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n			<i class=\"fa fa-plus-circle\"></i> Add comment\n		</button>\n	");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	");
  stack1 = helpers.unless.call(depth0, "is_loggedin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program7(depth0,data) {
  
  
  data.buffer.push("\n		<button class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#fbLoginModal\">\n			<i class=\"fa fa-reply\"></i> Reply\n		</button>\n	");
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n		<button class=\"btn btn-info\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addCmtAction", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n			<i class=\"fa fa-reply\"></i> Reply\n		</button>\n	");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          <span class=\"bg-primary\" id=\"fb-login\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "fbLoginAttempt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor: pointer;padding: 1%;\">\n          	<i class=\"fa fa-facebook-official\"></i> Login\n          </span>\n        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    		<div id=\"status\">Thanks ");
  stack1 = helpers._triageMustache.call(depth0, "user_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(", for login.</div>\n    	");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	");
  stack1 = helpers['if'].call(depth0, "sendingCommentOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(18, program18, data),fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program16(depth0,data) {
  
  
  data.buffer.push("\n        <button class=\"btn btn-primary btn-sm\">Submitting...</button>\n    ");
  }

function program18(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n		<button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendCmt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-success btn-sm\"> Submit</button>\n	");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "notReply", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "isReply", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"fbLoginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-facebook-official text-primary\"></i> Facebook Login</h4>\n      </div>\n      <div class=\"modal-body\">\n        ");
  stack1 = helpers.unless.call(depth0, "is_loggedin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "is_loggedin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n  </div>\n</div>\n\n");
  stack1 = helpers['if'].call(depth0, "isSending", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	");
  return buffer;
  
});

Ember.TEMPLATES["components/editor-tools"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"btn-group btn-group-sm\">\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertBold", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-bold\"></i></button>\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertItalic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-italic\"></i></button>\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertLink", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-link\"></i></button>\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertQuote", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-comment-o\"></i></button>\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertCode", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-code\"></i></button>\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertOrderedlist", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-list-ol\"></i></button>\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertUnorderedlist", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-list\"></i></button>\n    \n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHorizontalrule", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-minus\"></i></button>\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertStrikethrough", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-strikethrough\"></i></button>\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertSubscript", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-subscript\"></i></button>\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertSuperscript", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-superscript\"></i></button>\n\n  <div class=\"btn-group btn-group-sm\">\n    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n      <i class=\"fa fa-header\"></i>\n      <span class=\"caret\"></span>\n    </button>\n    <ul class=\"dropdown-menu\" role=\"menu\">\n      <li role=\"presentation\"><a href=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHeading1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">H1</a></li>\n      <li role=\"presentation\"><a href=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHeading2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">H2</a></li>\n      <li role=\"presentation\"><a href=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHeading3", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">H3</a></li>\n    </ul>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/flag-comment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n    <button class=\"btn btn-danger\" title=\"This comment's been flagged\" disabled=\"disabled\"><i class=\"fa fa-flag-o\"></i></button>\n");
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "flagComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" title=\"Flag this comment\"><i class=\"fa fa-flag-o\"></i></button>\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isFlagged", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});

Ember.TEMPLATES["components/gravatar-image"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("notReply:media-object"),
    'src': ("gravatarUrl")
  },hashTypes:{'class': "STRING",'src': "ID"},hashContexts:{'class': depth0,'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  return buffer;
  
});

Ember.TEMPLATES["components/infinite-scroll"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n<div class=\"panel panel-default\">\n  <div class=\"panel-body text-center\">\n    <i class=\"fa fa-circle-o-notch fa-spin fa-2x\"></i>\n  </div>\n</div>\n");
  }

  stack1 = helpers['if'].call(depth0, "loadingMoreTopics", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/manage-editor"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n	<button type=\"button\" class=\"btn btn-danger btn-xs\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelCmt", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel</button>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  <button type=\"button\" class=\"btn btn-primary btn-xs\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "hideCmtBox", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n  	Hide <i class=\"fa fa-chevron-up\"></i>\n  </button>\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  <div class=\"addCommentDiv\" style=\"padding:1%;cursor:pointer;text-align:center;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showCmtBox", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    Show <i class=\"fa fa-chevron-down\"></i>\n  </div>\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isCanceling", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "isHiding", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "isShowing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});

Ember.TEMPLATES["components/time-ago"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "timeAgo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});