Ember.TEMPLATES["_navbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-gear fa-fw\"></i> Settings");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-dashboard fa-fw\"></i> Dashboard ");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-edit fa-fw\"></i> Manage Post ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-wrench fa-fw\"></i> Ui Settings ");
  }

function program9(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-gear fa-fw\"></i> Profile Settings/ Logo");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-picture-o fa-fw\"></i>\n Image Gallery");
  }

  data.buffer.push("<!-- Navigation -->\n<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"#\">Exyht</a>\n    </div>\n    <!-- /.navbar-header -->\n\n    <ul class=\"nav navbar-top-links navbar-right\">\n        <li>\n            ");
  stack1 = helpers._triageMustache.call(depth0, "check-version", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n        <li class=\"dropdown\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n                <i class=\"fa fa-user fa-fw\"></i>  <i class=\"fa fa-caret-down\"></i>\n            </a>\n            <ul class=\"dropdown-menu dropdown-user\">\n                <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profilesetting", options) : helperMissing.call(depth0, "link-to", "profilesetting", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n                <li class=\"divider\"></li>\n                ");
  stack1 = helpers._triageMustache.call(depth0, "log-out", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </ul>\n            <!-- /.dropdown-user -->\n        </li>\n        <!-- /.dropdown -->\n    </ul>\n    <!-- /.navbar-top-links -->\n\n    <div class=\"navbar-default sidebar\" role=\"navigation\">\n        <div class=\"sidebar-nav navbar-collapse\">\n            <ul class=\"nav\" id=\"side-menu\">\n                <li>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n                <li>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "typeblogpost", options) : helperMissing.call(depth0, "link-to", "typeblogpost", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n                <li>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "uisettings", options) : helperMissing.call(depth0, "link-to", "uisettings", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n                <li>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profilesetting", options) : helperMissing.call(depth0, "link-to", "profilesetting", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n                <li>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "imggallery", options) : helperMissing.call(depth0, "link-to", "imggallery", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n            </ul>\n        </div>\n        <!-- /.sidebar-collapse -->\n    </div>\n    <!-- /.navbar-static-side -->\n</nav>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"wrapper\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "navbar", options) : helperMissing.call(depth0, "partial", "navbar", options))));
  data.buffer.push("\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<!-- /#wrapper -->");
  return buffer;
  
});

Ember.TEMPLATES["comment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-angle-double-left\"></i> Back to Posts");
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['manage-comment'] || (depth0 && depth0['manage-comment']),options={hash:{
    'cmt': ("comment")
  },hashTypes:{'cmt': "ID"},hashContexts:{'cmt': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "manage-comment", options))));
  data.buffer.push("\n                  ");
  return buffer;
  }

  data.buffer.push("<div id=\"page-wrapper\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                &nbsp;&nbsp;Comments for <strong>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n            </div>\n            <!-- /.panel-heading -->\n            <div class=\"panel-body\">\n                <div class=\"list-group\">\n                  ");
  stack1 = helpers.each.call(depth0, "comment", "in", "comments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                <!-- /.list-group -->\n            </div>\n            <!-- /.panel-body -->\n            <div class=\"panel-footer\">\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                 &nbsp;&nbsp;Comments for <strong>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\n            </div>\n        </div>\n                <!-- /.panel -->\n    </div>\n            <!-- /.col-lg-12 -->\n\n   </div>\n   <!-- /.row -->\n</div>\n<!-- /#page-wrapper -->");
  return buffer;
  
});

Ember.TEMPLATES["imggallery"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers['image-gallery'] || (depth0 && depth0['image-gallery']),options={hash:{
    'images': ("images")
  },hashTypes:{'images': "ID"},hashContexts:{'images': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "image-gallery", options))));
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                      <button class=\"btn btn-primary\">\n\n                      <i class=\"fa fa-certificate\"></i>\n                        Manage Logo\n                      </button>\n                    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n                    <button class=\"btn btn-primary\">\n                    <i class=\"fa fa-plus-circle\"></i>\n                     Create New Post \n                    </button>\n                    ");
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "posttitle", "post", options) : helperMissing.call(depth0, "render", "posttitle", "post", options))));
  data.buffer.push("\n                  ");
  return buffer;
  }

  data.buffer.push("<div id=\"page-wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"page-header\">\n            <div class=\"container-fluid\">\n              <div class=\"row\">\n                <div class=\"col-md-3 huge\">\n                Dashboard\n                </div>\n                <div class=\"col-md-9\">\n                <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"...\">\n                  \n                  <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profilesetting", options) : helperMissing.call(depth0, "link-to", "profilesetting", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                  </div>\n                  <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers['manage-status'] || (depth0 && depth0['manage-status']),options={hash:{
    'blog_name': ("blog_name"),
    'blog_subtitle': ("blog_subtitle"),
    'read_only_mode': ("read_only_mode"),
    'has_navbar': ("has_navbar"),
    'has_cmnt_feature': ("has_cmnt_feature"),
    'blog_links': ("blog_links")
  },hashTypes:{'blog_name': "ID",'blog_subtitle': "ID",'read_only_mode': "ID",'has_navbar': "ID",'has_cmnt_feature': "ID",'blog_links': "ID"},hashContexts:{'blog_name': depth0,'blog_subtitle': depth0,'read_only_mode': depth0,'has_navbar': depth0,'has_cmnt_feature': depth0,'blog_links': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "manage-status", options))));
  data.buffer.push("\n                  </div>\n                  <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "typeblogpost", options) : helperMissing.call(depth0, "link-to", "typeblogpost", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                  </div>\n                </div> \n              </div>\n            </div>\n            </div>\n    </div>\n    <!-- /.col-lg-12 -->\n    </div>\n    \n	");
  data.buffer.push(escapeExpression((helper = helpers['toprow-notification'] || (depth0 && depth0['toprow-notification']),options={hash:{
    'posts': ("posts"),
    'newComment': ("newComment"),
    'flaggedComment': ("flaggedComment")
  },hashTypes:{'posts': "ID",'newComment': "ID",'flaggedComment': "ID"},hashContexts:{'posts': depth0,'newComment': depth0,'flaggedComment': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "toprow-notification", options))));
  data.buffer.push("\n		\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <strong>");
  data.buffer.push(escapeExpression((helper = helpers['count-posts'] || (depth0 && depth0['count-posts']),options={hash:{
    'posts': ("posts")
  },hashTypes:{'posts': "ID"},hashContexts:{'posts': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "count-posts", options))));
  data.buffer.push("</strong> \n                </div>\n                <!-- /.panel-heading -->\n                <div class=\"panel-body\">\n                  ");
  stack1 = helpers.each.call(depth0, "post", "in", "posts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                <!-- /.panel-body -->\n            </div>\n            <!-- /.panel -->\n        </div>\n        <!-- /.col-lg-12 -->\n    </div>\n    <!-- /.row -->\n</div>\n<!-- /#page-wrapper -->");
  return buffer;
  
});

Ember.TEMPLATES["loading"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"alert alert-warning\" role=\"alert\" style=\"text-align:center;padding:2%;\">Loading...</div>");
  
});

Ember.TEMPLATES["posttitle"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers['manage-post'] || (depth0 && depth0['manage-post']),options={hash:{
    'id': ("id"),
    'title': ("title"),
    'isDraft': ("isDraft"),
    'created': ("created"),
    'modified': ("modified"),
    'viewComments': ("viewComments"),
    'editPostTrue': ("editPostTrue"),
    'isEditingOnForPostTitle': ("isEditingOnForPostTitle"),
    'hasComment': ("hasComment"),
    'hasFlaggedComment': ("hasFlaggedComment"),
    'total_comment': ("total_comment"),
    'hasNewComment': ("hasNewComment"),
    'postIdForTypeBlogPost': ("postIdForTypeBlogPost"),
    'postBodyForTypeBlogPost': ("postBodyForTypeBlogPost"),
    'isEditingOnForTypeBlogPost': ("isEditingOnForTypeBlogPost"),
    'isProfileEditingOnForTypeBlogPost': ("isProfileEditingOnForTypeBlogPost"),
    'editingOnForProfSetCtlr': ("editingOnForProfSetCtlr"),
    'titleForTypeBlogPost': ("titleForTypeBlogPost"),
    'titleForCommentsController': ("titleForCommentsController")
  },hashTypes:{'id': "ID",'title': "ID",'isDraft': "ID",'created': "ID",'modified': "ID",'viewComments': "STRING",'editPostTrue': "STRING",'isEditingOnForPostTitle': "ID",'hasComment': "ID",'hasFlaggedComment': "ID",'total_comment': "ID",'hasNewComment': "ID",'postIdForTypeBlogPost': "ID",'postBodyForTypeBlogPost': "ID",'isEditingOnForTypeBlogPost': "ID",'isProfileEditingOnForTypeBlogPost': "ID",'editingOnForProfSetCtlr': "ID",'titleForTypeBlogPost': "ID",'titleForCommentsController': "ID"},hashContexts:{'id': depth0,'title': depth0,'isDraft': depth0,'created': depth0,'modified': depth0,'viewComments': depth0,'editPostTrue': depth0,'isEditingOnForPostTitle': depth0,'hasComment': depth0,'hasFlaggedComment': depth0,'total_comment': depth0,'hasNewComment': depth0,'postIdForTypeBlogPost': depth0,'postBodyForTypeBlogPost': depth0,'isEditingOnForTypeBlogPost': depth0,'isProfileEditingOnForTypeBlogPost': depth0,'editingOnForProfSetCtlr': depth0,'titleForTypeBlogPost': depth0,'titleForCommentsController': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "manage-post", options))));
  
});

Ember.TEMPLATES["profilesetting"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"page-wrapper\">\n");
  data.buffer.push(escapeExpression((helper = helpers['prof-setting'] || (depth0 && depth0['prof-setting']),options={hash:{
    'id': ("id"),
    'hashedEmail': ("hashedEmail"),
    'about': ("about"),
    'image': ("image"),
    'editProfileTrue': ("editProfileTrue"),
    'isProfEditOnForTypeBlogPost': ("isProfEditOnForTypeBlogPost"),
    'aboutAdminForTypeBlogPost': ("aboutAdminForTypeBlogPost"),
    'isProfileEditingOnForProfileSetting': ("isProfileEditingOnForProfileSetting")
  },hashTypes:{'id': "ID",'hashedEmail': "ID",'about': "ID",'image': "ID",'editProfileTrue': "STRING",'isProfEditOnForTypeBlogPost': "ID",'aboutAdminForTypeBlogPost': "ID",'isProfileEditingOnForProfileSetting': "ID"},hashContexts:{'id': depth0,'hashedEmail': depth0,'about': depth0,'image': depth0,'editProfileTrue': depth0,'isProfEditOnForTypeBlogPost': depth0,'aboutAdminForTypeBlogPost': depth0,'isProfileEditingOnForProfileSetting': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "prof-setting", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["typeblogpost"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n          Edit post\n        ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers['if'].call(depth0, "isProfileEditingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n            Edit Profile\n          ");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n            Create new post\n          ");
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("newTitle"),
    'type': ("text"),
    'name': ("title"),
    'value': ("ntitle"),
    'placeholder': ("Blog title")
  },hashTypes:{'class': "STRING",'id': "STRING",'type': "STRING",'name': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'class': depth0,'id': depth0,'type': depth0,'name': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br />\n                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                  <div style=\"text-align:center;padding:0.5%;\">");
  stack1 = helpers._triageMustache.call(depth0, "newBodyLength", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" to go for the post</div>\n                ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n                  <h3 style=\"border:1px dashed #000;padding:1%;overflow-x: auto;\">");
  stack1 = helpers._triageMustache.call(depth0, "ntitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3> <br />\n                ");
  return buffer;
  }

  data.buffer.push("<div id=\"page-wrapper\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h1 class=\"page-header\">\n        ");
  stack1 = helpers['if'].call(depth0, "isEditingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </h1>\n    </div>\n    <!-- /.col-lg-12 -->\n  </div>\n  <!-- /.row -->\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n        <div class=\"panel panel-default\">\n          <div class=\"panel-body\">\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers['editor-tools'] || (depth0 && depth0['editor-tools']),options={hash:{
    'nbody': ("nbody"),
    'showNbodyLength': ("showNbodyLength"),
    'newBodyLength': ("newBodyLength")
  },hashTypes:{'nbody': "ID",'showNbodyLength': "ID",'newBodyLength': "ID"},hashContexts:{'nbody': depth0,'showNbodyLength': depth0,'newBodyLength': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "editor-tools", options))));
  data.buffer.push("\n                <br /><br />               \n                <form id=\"createNewNoteForm\">\n				\n                ");
  stack1 = helpers.unless.call(depth0, "isProfileEditingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				\n                ");
  stack1 = helpers['if'].call(depth0, "showNbodyLength", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n				  \n                ");
  data.buffer.push(escapeExpression((helper = helpers['auto-expanding-text-area'] || (depth0 && depth0['auto-expanding-text-area']),options={hash:{
    'class': ("form-control"),
    'id': ("newBody"),
    'name': ("body"),
    'rows': ("14"),
    'value': ("nbody")
  },hashTypes:{'class': "STRING",'id': "STRING",'name': "STRING",'rows': "STRING",'value': "ID"},hashContexts:{'class': depth0,'id': depth0,'name': depth0,'rows': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "auto-expanding-text-area", options))));
  data.buffer.push("<br />\n                ");
  data.buffer.push(escapeExpression((helper = helpers['editor-action'] || (depth0 && depth0['editor-action']),options={hash:{
    'postId': ("postId"),
    'ntitle': ("ntitle"),
    'nbody': ("nbody"),
    'isProfileEditingOn': ("isProfileEditingOn"),
    'isEditingOn': ("isEditingOn"),
    'editOnForProfSetContr': ("editOnForProfSetContr")
  },hashTypes:{'postId': "ID",'ntitle': "ID",'nbody': "ID",'isProfileEditingOn': "ID",'isEditingOn': "ID",'editOnForProfSetContr': "ID"},hashContexts:{'postId': depth0,'ntitle': depth0,'nbody': depth0,'isProfileEditingOn': depth0,'isEditingOn': depth0,'editOnForProfSetContr': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "editor-action", options))));
  data.buffer.push("\n                </form>\n              </div>\n              <!-- /.col-lg-6 (nested) -->\n              <div class=\"col-lg-6\">\n                <style>\n                  #postBodyDiv pre{max-height:500px;max-width:100%;overflow:auto;}\n                  img{max-height:500px;max-width:100%;}\n                </style>\n                ");
  stack1 = helpers.unless.call(depth0, "isProfileEditingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <div id=\"postBodyDiv\" style=\"border:1px dashed #000;padding:1%;height:350px;overflow: auto;\">");
  data.buffer.push(escapeExpression((helper = helpers['format-xmarkdown'] || (depth0 && depth0['format-xmarkdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "nbody", options) : helperMissing.call(depth0, "format-xmarkdown", "nbody", options))));
  data.buffer.push("</div><br />\n              </div>\n              <!-- /.col-lg-6 (nested) -->\n            </div>\n            <!-- /.row (nested) -->\n          </div>\n          <!-- /.panel-body -->\n        </div>\n        <!-- /.panel -->\n    </div>\n    <!-- /.col-lg-12 -->\n  </div>\n  <!-- /.row -->\n</div>\n<!-- /#page-wrapper -->");
  return buffer;
  
});

Ember.TEMPLATES["uisettings"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<!-- Page Content -->\n<div id=\"page-wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <h1 class=\"page-header\">Customize Blog Color and Font Size</h1>\n        </div>\n        <!-- /.col-lg-12 -->\n    </div>\n    <!-- /.row -->\n    ");
  stack1 = helpers._triageMustache.call(depth0, "ui-settings", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>\n<!-- /#page-wrapper -->");
  return buffer;
  
});

Ember.TEMPLATES["components/check-version"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	<a href=\"https://github.com/Exyht/exyht\" target=\"_blank\">\n		<span class=\"label label-success\">\n			New! v");
  stack1 = helpers._triageMustache.call(depth0, "getVersion", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</span>\n	</a>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n	<span class=\"label label-default\">\n		v");
  stack1 = helpers._triageMustache.call(depth0, "getVersion", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	</span>\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isNewVersion", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/count-posts"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "numberOfPost", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/editor-action"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("    \n  ");
  stack1 = helpers['if'].call(depth0, "isEditingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'class': ("form-control"),
    'content': ("status"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.postStatus"),
    'value': ("currentStatus.id")
  },hashTypes:{'class': "STRING",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"},hashContexts:{'class': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    <br />\n    <button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveEdit", "postId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Save Edit</button>\n    <button class=\"btn btn-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel Editing</button>\n  ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "isSavingAsDraft", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "isPublishing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("\n      <button class=\"btn btn-danger\">Saving as draft...</button>\n    ");
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createDraft", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save as draft</button>\n    ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n      <button class=\"btn btn-success\">Creating new post...</button>\n    ");
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <button class=\"btn btn-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createNew", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Create new post</button>\n    ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  <button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveProfileEdit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save Edit</button>\n  <button class=\"btn btn-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelProfileEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel Editing</button>\n");
  return buffer;
  }

  stack1 = helpers.unless.call(depth0, "isProfileEditingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n<button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#myModal\">Reset</button>\n                \n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Reset whole textarea</h4>\n      </div>\n      <div class=\"modal-body\">\n        You have some unsaved data in this text field. Are you sure to reset? \n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetTextarea", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-dismiss=\"modal\">Reset</button>\n      </div>\n    </div>\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/editor-tools"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


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
  data.buffer.push("><i class=\"fa fa-code\"></i></button>\n  <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#imgModal\"><i class=\"fa fa-file-image-o\"></i></button>\n                \n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"imgModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelUploadImage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-dismiss=\"modal\">\n              <span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span>\n            </button>\n            <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-picture-o fa-lg text-info\"></i> Upload Image</h4>\n          </div>\n          <div class=\"modal-body\">\n            <div role=\"tabpanel\">\n              <!-- Nav tabs -->\n              <ul class=\"nav nav-tabs\" role=\"tablist\">\n                <li role=\"presentation\" class=\"active\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "imgTabStatus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><a href=\"#imgTab\" aria-controls=\"imgTab\" role=\"tab\" data-toggle=\"tab\">Insert Image</a></li>\n                <li role=\"presentation\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "vidTabStatus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><a href=\"#videoTab\" aria-controls=\"videoTab\" role=\"tab\" data-toggle=\"tab\">Insert Video</a></li>\n              </ul>\n\n              <!-- Tab panes -->\n              <div class=\"tab-content\">\n                <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"imgTab\">\n                  <div id=\"feedback\"></div>\n                  <div id=\"loadingDiv\" class=\"bg-danger\" style=\"display:none;text-align:center;\"><i class=\"fa fa-spinner fa-spin\"></i> Uploading...</div>\n                  <label for=\"imageUrlTextField\">Type URL / Upload from my Computer: </label>\n                  <input type=\"text\" id=\"imageUrlTextField\" value=\"\" placeholder=\"http://example.com/image.jpg\" class=\"form-control\">\n         \n                  <br />\n                  <iframe name=\"upload_iframe\" src=\"\" style=\"display:none;\"></iframe>\n          \n                  <form method=\"POST\" action=\"uploadImage\" accept-charset=\"UTF-8\" target=\"upload_iframe\" enctype=\"multipart/form-data\">\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("hidden"),
    'name': ("non_ajax_token"),
    'value': ("admin_token")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'type': depth0,'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                    <input type=\"hidden\" name=\"MAX_FILE_SIZE\" value=\"5000000\" />\n                    <input name=\"file\" size=\"20\" type=\"file\" accept=\"image/jpg, image/png, image/gif, image/jpeg\"/>\n                    <br />\n                    <input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Upload\" onclick=\"showLoading();\"/>\n                  </form>\n                </div>\n                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"videoTab\">\n                  <label for=\"videoUrlTextField\">Exyht supports Youtube video: </label>\n                  <input type=\"text\" id=\"videoUrlTextField\" value=\"\" placeholder=\"Place Youtube video link here\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelUploadImage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-dismiss=\"modal\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertImage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-dismiss=\"modal\">Insert in Editor</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertOrderedlist", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-list-ol\"></i></button>\n    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertUnorderedlist", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-list\"></i></button>\n                    \n    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHorizontalrule", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-minus\"></i></button>\n    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertStrikethrough", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-strikethrough\"></i></button>\n    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertSubscript", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-subscript\"></i></button>\n    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertSuperscript", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-superscript\"></i></button>\n                \n    <div class=\"btn-group btn-group-sm\">\n      <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n        <i class=\"fa fa-header\"></i>\n        <span class=\"caret\"></span>\n      </button>\n       <ul class=\"dropdown-menu\" role=\"menu\">\n        <li role=\"presentation\"><a href=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHeading1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">H1</a></li>\n        <li role=\"presentation\"><a href=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHeading2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">H2</a></li>\n        <li role=\"presentation\"><a href=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHeading3", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">H3</a></li>\n       </ul>\n    </div>\n</div>");
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

Ember.TEMPLATES["components/image-gallery"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['manage-image'] || (depth0 && depth0['manage-image']),options={hash:{
    'img': ("img")
  },hashTypes:{'img': "ID"},hashContexts:{'img': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "manage-image", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<div id=\"page-wrapper\">\n	<h2>Image Gallery! (");
  stack1 = helpers._triageMustache.call(depth0, "totalImgs", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(") Images</h2>\n	<hr />\n  <div id=\"galleryContainer\">\n  ");
  stack1 = helpers.each.call(depth0, "img", "in", "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/log-out"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logOut", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;text-align:center;\">\n	<i class=\"fa fa-sign-out fa-fw\"></i>\n    Logout\n</li>");
  return buffer;
  
});

Ember.TEMPLATES["components/manage-comment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n             <button type=\"button\" class=\"btn btn-success btn-xs\" disabled=\"disabled\">\n               <i class=\"fa fa-check\"></i>&nbsp;<i class=\"fa fa-eye\"></i>\n             </button>\n            ");
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n             <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "markAsSeen", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-primary btn-xs\">\n               Mark as seen\n             </button>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              ");
  stack1 = helpers['if'].call(depth0, "cmt.showLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("\n               <button type=\"button\" class=\"btn btn-danger btn-xs\" disabled=\"disabled\">\n                <i class=\"fa fa-trash-o\"></i> Removing...\n               </button>\n              ");
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n               <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-primary btn-xs\">\n                <i class=\"fa fa-trash-o\"></i> Remove\n               </button>\n              ");
  return buffer;
  }

function program10(depth0,data) {
  
  
  data.buffer.push(" \n             <button type=\"button\" class=\"btn btn-danger btn-xs\" disabled=\"disabled\">\n               <i class=\"fa fa-trash-o\"></i> Removed\n             </button>\n            ");
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              ");
  stack1 = helpers['if'].call(depth0, "banLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program13(depth0,data) {
  
  
  data.buffer.push("\n               <button type=\"button\" class=\"btn btn-danger btn-xs\" disabled=\"disabled\">\n                <i class=\"fa fa-ban\"></i> Banning...\n               </button>\n              ");
  }

function program15(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n               <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "banIp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-primary btn-xs\">\n                <i class=\"fa fa-ban\"></i> Ban this IP\n               </button>\n              ");
  return buffer;
  }

function program17(depth0,data) {
  
  
  data.buffer.push(" \n             <button type=\"button\" class=\"btn btn-danger btn-xs\" disabled=\"disabled\">\n               <i class=\"fa fa-ban\"></i> IP banned\n             </button>\n            ");
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              ");
  stack1 = helpers['if'].call(depth0, "flagLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(22, program22, data),fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program20(depth0,data) {
  
  
  data.buffer.push("\n               <button type=\"button\" class=\"btn btn-danger btn-xs\" disabled=\"disabled\">\n                <i class=\"fa fa-flag\"></i> Removing...\n               </button>\n              ");
  }

function program22(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n               <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFlag", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-primary btn-xs\">\n                <i class=\"fa fa-flag\"></i> Remove flag\n               </button>\n              ");
  return buffer;
  }

  data.buffer.push("<div class=\"list-group-item\">\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":media cmt.isFlagged:bg-warning")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n\n      <div class=\"pull-left\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("cmt.name")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        ");
  data.buffer.push(escapeExpression((helper = helpers['gravatar-image'] || (depth0 && depth0['gravatar-image']),options={hash:{
    'email': ("cmt.g_email")
  },hashTypes:{'email': "ID"},hashContexts:{'email': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "gravatar-image", options))));
  data.buffer.push("\n      </div>\n      \n      <div class=\"media-body\">\n      \n        <h5 class=\"media-heading\">\n          <div class=\"small pull-right\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("cmt.date")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "cmt.date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n          <strong>");
  stack1 = helpers._triageMustache.call(depth0, "cmt.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>&nbsp;\n        </h5>\n        <p class=\"bg-info\">\n          &nbsp;Email: <strong>");
  stack1 = helpers._triageMustache.call(depth0, "cmt.email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>&nbsp;\n          IP: <strong>");
  stack1 = helpers._triageMustache.call(depth0, "cmt.ip_address", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>&nbsp;\n          Browser: <strong>");
  stack1 = helpers._triageMustache.call(depth0, "cmt.browser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>&nbsp;\n          OS: <strong>");
  stack1 = helpers._triageMustache.call(depth0, "cmt.os", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>&nbsp;\n        </p>\n        ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "cmt.comment", options) : helperMissing.call(depth0, "format-markdown", "cmt.comment", options))));
  data.buffer.push("\n      </div>\n\n      \n        <div class=\"row\">\n          <div class=\"col-lg-3\">\n            ");
  stack1 = helpers['if'].call(depth0, "cmt.isSeen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n          <div class=\"col-lg-3\">\n            ");
  stack1 = helpers['if'].call(depth0, "cmt.status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          </div>\n          <div class=\"col-lg-3\">\n            ");
  stack1 = helpers.unless.call(depth0, "cmt.ip_status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(17, program17, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          </div>\n\n          <div class=\"col-lg-3\">\n            ");
  stack1 = helpers['if'].call(depth0, "cmt.isFlagged", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          </div>\n        </div>\n    </div>\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/manage-image"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("srcPath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"img-thumbnail img-responsive\"/>\n    <span class=\"bg-primary\" style=\"position:absolute;top:0;left:86%;z-index:1;padding:1%;\">\n    ");
  stack1 = helpers['if'].call(depth0, "deletingImg", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n    <p>\n      <label class=\"sr-only\" for=\"inputHelpBlock\">Image Link:</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'id': ("inputHelpBlock"),
    'class': ("form-control"),
    'aria-describedby': ("helpBlock"),
    'value': ("srcPath")
  },hashTypes:{'type': "STRING",'id': "STRING",'class': "STRING",'aria-describedby': "STRING",'value': "ID"},hashContexts:{'type': depth0,'id': depth0,'class': depth0,'aria-describedby': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </p>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n      <span>Removing...</span>\n    ");
  }

function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeGimg", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><i class=\"fa fa-times fa-lg\"></i></span>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"item thumb\">\n  ");
  stack1 = helpers['if'].call(depth0, "img.img_visible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["components/manage-post"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <button type=\"button\" class=\"btn btn-danger btn-xs\" disabled=\"disabled\">\n         Draft\n        </button>\n        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <button type=\"button\" class=\"btn btn-success btn-xs\" disabled=\"disabled\">\n         Published\n        </button>\n        ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n         <em title=\"Edited\"><i class=\"fa fa-pencil\"></i>");
  stack1 = helpers._triageMustache.call(depth0, "modified", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</em>\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n        <button type=\"button\" class=\"btn btn-success btn-xs\">\n         <i class=\"fa fa-pencil\"></i> Editing On\n        </button>\n        ");
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editPostTrue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-primary btn-xs\">\n         <i class=\"fa fa-pencil\"></i> Edit\n        </button>\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "viewComments", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-xs hasFlaggedComment:btn-warning:btn-primary")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n         ");
  stack1 = helpers._triageMustache.call(depth0, "total_comment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <i class=\"fa fa-chevron-right\"></i>\n         ");
  stack1 = helpers['if'].call(depth0, "hasNewComment", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </button>\n        ");
  return buffer;
  }
function program12(depth0,data) {
  
  
  data.buffer.push("\n           <span class=\"badge\" title=\"This post has new comment\">new!</span>\n         ");
  }

function program14(depth0,data) {
  
  
  data.buffer.push("\n        <button type=\"button\" class=\"btn btn-danger btn-xs\" disabled=\"disabled\">\n         No <i class=\"fa fa-comment-o\"></i>\n        </button>\n        ");
  }

  data.buffer.push("<div class=\"list-group\">\n    <div class=\"list-group-item\">\n      <div class=\"row\">\n       <div class=\"col-md-6\">\n        ");
  stack1 = helpers['if'].call(depth0, "isDraft", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n         ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n       </div>\n       <div class=\"col-md-6\">\n        <span class=\"pull-right text-muted small\"><em title=\"Created\">");
  stack1 = helpers._triageMustache.call(depth0, "created", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</em>\n        &nbsp;\n        ");
  stack1 = helpers['if'].call(depth0, "modified", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("&nbsp;\n        ");
  stack1 = helpers['if'].call(depth0, "isEditingOnForPostTitle", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("&nbsp;\n        ");
  stack1 = helpers['if'].call(depth0, "hasComment", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </span>\n       </div>\n      </div>\n    </div>\n</div>\n<!-- /.list-group -->");
  return buffer;
  
});

Ember.TEMPLATES["components/manage-status"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n                <button type=\"button\" class=\"btn btn-primary disabled\">Submit</button>\n              ");
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeBlogName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-primary\">Submit</button>\n              ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSubtitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-primary\">Submit</button>\n              ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    Off: <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "turnReadOnlyModeOn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><i class=\"fa fa-toggle-off fa-lg text-danger\"></i></span>\n                  ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    On: <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "turnReadOnlyModeOff", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><i class=\"fa fa-toggle-on fa-lg text-success\"></i></span>\n                  ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    Off: <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "turnCommentFeatureOn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><i class=\"fa fa-toggle-off fa-lg text-danger\"></i></span>\n                  ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    On: <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "turnCommentFeatureOff", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><i class=\"fa fa-toggle-on fa-lg text-success\"></i></span>\n                  ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    Off: <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "turnNavbarOn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><i class=\"fa fa-toggle-off fa-lg text-danger\"></i></span>\n                  ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    On: <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "turnNavbarOff", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><i class=\"fa fa-toggle-on fa-lg text-success\"></i></span>\n                  ");
  return buffer;
  }

function program19(depth0,data) {
  
  
  data.buffer.push("\n                <div class=\"alert alert-warning\" role=\"alert\" style=\"text-align:center;padding:2%;font-size:18px;\">Loading...</div>\n              ");
  }

function program21(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression((helper = helpers['remove-bloglink'] || (depth0 && depth0['remove-bloglink']),options={hash:{
    'link': ("link"),
    'loadingOn': ("loadingOn")
  },hashTypes:{'link': "ID",'loadingOn': "ID"},hashContexts:{'link': depth0,'loadingOn': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "remove-bloglink", options))));
  data.buffer.push("\n              ");
  return buffer;
  }

  data.buffer.push("<button class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#blog_setting_modal\"><i class=\"fa fa-magic\"></i> Manage Blog Settings</button>\n  <!-- Button trigger modal -->\n  <!-- Modal -->\n    <div class=\"modal fade\" id=\"blog_setting_modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n            <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-magic\"></i> Manage Blog Settings</h4>\n          </div>\n          <div class=\"modal-body\" style=\"font-size:18px;\">\n            <form class=\"form-inline\">\n              <div class=\"form-group\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("blog_name"),
    'placeholder': ("Blog name")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n              </div>\n              ");
  stack1 = helpers['if'].call(depth0, "loadingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              <div class=\"form-group\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("blog_subtitle"),
    'placeholder': ("Blog subtitle")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n              </div>\n              ");
  stack1 = helpers['if'].call(depth0, "loadingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </form>\n\n            <div class=\"row\">\n              <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                  Read Only Mode: \n                  ");
  stack1 = helpers.unless.call(depth0, "read_only_mode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n                <div class=\"form-group\">\n                  Has Comment Feature: \n                  ");
  stack1 = helpers.unless.call(depth0, "has_cmnt_feature", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n              </div>\n              <div class=\"col-lg-6\">\n                <div class=\"form-group\">\n                  Has Navbar: \n                  ");
  stack1 = helpers.unless.call(depth0, "has_navbar", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(17, program17, data),fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </div>\n              </div>\n            </div>\n            Add New Blog links:\n            <div class=\"form-group\">\n              ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("link_name"),
    'placeholder': ("Link name. e.g: example")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n              <div class=\"input-group\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("url"),
    'value': ("link_url"),
    'placeholder': ("http://example.com")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                  <div class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button>\n                    <ul class=\"dropdown-menu\" role=\"menu\">\n                      <li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addNavLink", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><a>Navbar</a></li>\n                      <li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addElseLink", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><a>Elsewhere</a></li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              ");
  stack1 = helpers['if'].call(depth0, "loadingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              Allowed links for Navbar & Elsewhere:\n              ");
  stack1 = helpers.each.call(depth0, "link", "in", "blog_links", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n        </div>\n      </div>");
  return buffer;
  
});

Ember.TEMPLATES["components/prof-setting"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" id=\"profileImageDiv\" height=\"170px\" width=\"170px\"/>\n        ");
  stack1 = helpers.unless.call(depth0, "isRemoved", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers['if'].call(depth0, "isRemovingPicture", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("\n            <button type=\"button\" class=\"btn btn-danger\">Removing Picture...</button>\n          ");
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeProfPicture", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Remove Profile Picture</button>\n          ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("hashedEmail")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" id=\"profileImageDiv\" height=\"170px\" width=\"170px\"/>\n      ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"alert alert-danger\" role=\"alert\">Passwords did not match.</div>\n          ");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\n            <div class=\"alert alert-danger\" role=\"alert\">Password must have atleast 6 characters.</div>\n          ");
  }

function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n              <button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editProfileTrue", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"btn btn-primary btn-xs\"><i class=\"fa fa-pencil\"></i> Edit</button>\n            ");
  return buffer;
  }

function program15(depth0,data) {
  
  
  data.buffer.push("\n              <button type=\"button\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-pencil\"></i> Editing On</button>\n            ");
  }

  data.buffer.push("<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <h2>Profile Settings & Blog Logo</h2>\n    <hr />\n    <div>\n      ");
  stack1 = helpers['if'].call(depth0, "image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#profileImgModal\">Change Profile Picture/ Blog Logo</button>\n      <!-- Modal -->\n        <div class=\"modal fade\" id=\"profileImgModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelUploadingImage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-picture-o fa-lg text-info\"></i> Upload Image</h4>\n              </div>\n              <div class=\"modal-body\">\n              	<div id=\"imgFeedback\"></div>\n              	  <div id=\"imgLoadingDiv\" style=\"display:none;text-align:center;\"><i class=\"fa fa-spinner fa-spin\"></i> Uploading...</div>\n              	       \n              	    <iframe name=\"upload_profile_img_iframe\" src=\"\" style=\"display:none;\"></iframe>\n                        \n                        <form method=\"POST\" action=\"uploadProfileImage\" accept-charset=\"UTF-8\" target=\"upload_profile_img_iframe\" enctype=\"multipart/form-data\">\n                          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("hidden"),
    'name': ("non_ajax_token"),
    'value': ("admin_token")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'type': depth0,'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                          <input type=\"hidden\" name=\"MAX_FILE_SIZE\" value=\"5000000\" />\n                          <input name=\"file\" size=\"20\" type=\"file\" accept=\"image/jpg, image/png, image/gif, image/jpeg\"/>\n                          <br />\n                          Save as:\n                          <div class=\"radio\">\n                            <label>\n                              <input type=\"radio\" name=\"picType\" value=\"1\" checked>Author\n                            </label>\n                          </div>\n                          <div class=\"radio\">\n                            <label>\n                              <input type=\"radio\" name=\"picType\" value=\"2\">Blog logo\n                            </label>\n                          </div>\n                          <br />\n              	          <input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Upload\" onclick=\"showImgLoading();\"/>\n                        </form>\n              	  </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelUploadingImage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-dismiss=\"modal\">Close</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <hr />\n      </div>\n      <!-- /.col-lg-12 -->\n      <div class=\"col-lg-12\" style=\"padding-bottom:2%;\">\n        <div class=\"col-lg-4\" style=\"background-color:#f5f5f5;\">\n          <h2>Change Password:</h2>\n          ");
  stack1 = helpers.unless.call(depth0, "pwd_match", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  stack1 = helpers['if'].call(depth0, "too_small", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <div class=\"form-group\">\n            <label for=\"oldPassword\">Old Password</label>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("old_password"),
    'class': ("form-control"),
    'id': ("oldPassword"),
    'placeholder': ("Old Password")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          </div>\n          <div class=\"form-group\">\n            <label for=\"newPassword\">New Password</label>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("new_password"),
    'class': ("form-control"),
    'id': ("newPassword"),
    'placeholder': ("New Password")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          </div>\n          <div class=\"form-group\">\n            <label for=\"confirmPassword\">Confirm New Password</label>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("confirm_password"),
    'class': ("form-control"),
    'id': ("confirmPassword"),
    'placeholder': ("Confirm New Password")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          </div>\n          <input type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changePassword", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-success\" value=\"Change Password\"/>\n              \n        </div>\n        <div class=\"col-lg-8\">\n          <h2>About</h2>\n          ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "format-markdown", "about", options))));
  data.buffer.push("\n          <div>\n            ");
  stack1 = helpers.unless.call(depth0, "isProfileEditingOnForProfileSetting", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            <br />\n          </div>\n        </div>\n      </div>\n      <!-- /.col-lg-12 -->\n  </div>\n  <!-- /.row -->");
  return buffer;
  
});

Ember.TEMPLATES["components/remove-bloglink"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n<div class=\"list-group\">\n   	<div class=\"input-group\">\n  		<span class=\"input-group-addon\">\n  			");
  stack1 = helpers['if'].call(depth0, "link.is_nav_link", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  			");
  stack1 = helpers['if'].call(depth0, "link.is_else_link", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  			");
  stack1 = helpers._triageMustache.call(depth0, "link.link_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  		</span>\n  		<input class=\"form-control\" type=\"text\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'placeholder': ("link.link_url")
  },hashTypes:{'placeholder': "ID"},hashContexts:{'placeholder': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" readonly>\n  		");
  stack1 = helpers.unless.call(depth0, "link.is_blog_url", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n  			    Nav:\n  			");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n  			    Else:\n  			");
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  		<span class=\"input-group-btn\">\n    		<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeLink", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\" title=\"Remove\" type=\"button\"><i class=\"fa fa-times\"></i></button>\n  		</span>\n      ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "link.status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["components/toprow-notification"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<!-- row -->\n<div class=\"row\">\n    <div class=\"col-lg-3 col-md-6\">\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n                <div class=\"row\">\n                    <div class=\"col-xs-3\">\n                        <i class=\"fa fa-comments fa-5x\"></i>\n                    </div>\n                    <div class=\"col-xs-9 text-right\">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "newCommentCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-3 col-md-6\">\n        <div class=\"panel panel-red\">\n            <div class=\"panel-heading\">\n                <div class=\"row\">\n                    <div class=\"col-xs-3\">\n                        <i class=\"fa fa-tasks fa-5x\"></i>\n                    </div>\n                    <div class=\"col-xs-9 text-right\">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "totalDraft", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-lg-3 col-md-6\">\n        <div class=\"panel panel-yellow\">\n            <div class=\"panel-heading\">\n                <div class=\"row\">\n                    <div class=\"col-xs-3\">\n                        <i class=\"fa fa-flag fa-5x\"></i>\n                    </div>\n                    <div class=\"col-xs-9 text-right\">\n                        ");
  stack1 = helpers._triageMustache.call(depth0, "flaggedCommentCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- /.row -->");
  return buffer;
  
});

Ember.TEMPLATES["components/ui-settings"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                        <div class=\"radio\">\n                            <label ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("fs.font_family")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n                            ");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': ("fs.name"),
    'name': ("fontType")
  },hashTypes:{'value': "ID",'name': "STRING"},hashContexts:{'value': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push("\n                            ");
  stack1 = helpers._triageMustache.call(depth0, "fs.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                            </label>\n                        </div>\n                    ");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n    <div class=\"col-lg-6\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                Change Color\n            </div>\n            <!-- /.panel-heading -->\n            <div class=\"panel-body\">\n                <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeColor", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n					");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'class': ("form-control"),
    'content': ("categories"),
    'optionValuePath': ("content.domArea"),
    'optionLabelPath': ("content.color"),
    'value': ("selectedCategory"),
    'prompt': ("Please select a category")
  },hashTypes:{'class': "STRING",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID",'prompt': "STRING"},hashContexts:{'class': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0,'prompt': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n                    Select your favorite color: ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("color"),
    'class': ("form-control"),
    'valueBinding': ("favcolor")
  },hashTypes:{'type': "STRING",'class': "STRING",'valueBinding': "STRING"},hashContexts:{'type': depth0,'class': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br>\n                    <input type=\"submit\" class=\"btn btn-info\" value=\"Submit\">\n                </form>\n            </div>\n            <!-- /.panel-body -->\n        </div>\n                    \n    </div>\n    <!-- /.col-lg-6 -->\n    <div class=\"col-lg-6\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                Change Font Style\n            </div>\n            <!-- /.panel-heading -->\n            <div class=\"panel-body\">\n                <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeFontStyle", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n                    ");
  stack1 = helpers.each.call(depth0, "fs", "in", "fstyles", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <br>\n                    <input type=\"submit\" class=\"btn btn-info\" value=\"Submit\">\n                </form>\n            </div>\n            <!-- /.panel-body -->\n        </div>\n                    \n    </div>\n    <!-- /.col-lg-6 -->\n</div>\n<!-- /.row -->");
  return buffer;
  
});