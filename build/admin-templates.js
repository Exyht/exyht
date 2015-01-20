Ember.TEMPLATES["_editoractionbutton"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("    \r\n  ");
  stack1 = helpers['if'].call(depth0, "isEditingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'class': ("form-control"),
    'content': ("status"),
    'optionValuePath': ("content.id"),
    'optionLabelPath': ("content.postStatus"),
    'value': ("currentStatus.id")
  },hashTypes:{'class': "STRING",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"},hashContexts:{'class': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n    <br />\r\n    <button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveEdit", "postId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Save Edit</button>\r\n    <button class=\"btn btn-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel Editing</button>\r\n  ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n    ");
  stack1 = helpers['if'].call(depth0, "isSavingAsDraft", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    ");
  stack1 = helpers['if'].call(depth0, "isPublishing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("\r\n      <button class=\"btn btn-danger\">Saving as draft...</button>\r\n    ");
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n      <button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createDraft", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save as draft</button>\r\n    ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\r\n      <button class=\"btn btn-success\">Creating new post...</button>\r\n    ");
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n      <button class=\"btn btn-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createNew", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Create new post</button>\r\n    ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n  <button class=\"btn btn-danger\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveProfileEdit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Save Edit</button>\r\n  <button class=\"btn btn-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelProfileEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Cancel Editing</button>\r\n");
  return buffer;
  }

  stack1 = helpers.unless.call(depth0, "isProfileEditingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n<button type=\"button\" class=\"btn btn-info\" data-toggle=\"modal\" data-target=\"#myModal\">Reset</button>\r\n                \r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Reset whole textarea</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        You have some unsaved data in this text field. Are you sure to reset? \r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetTextarea", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-dismiss=\"modal\">Reset</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["_editortools"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"btn-group btn-group-sm\">\r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertBold", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-bold\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertItalic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-italic\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertLink", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-link\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertQuote", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-comment-o\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertCode", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-code\"></i></button>\r\n  <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#imgModal\"><i class=\"fa fa-file-image-o\"></i></button>\r\n                \r\n    <!-- Modal -->\r\n    <div class=\"modal fade\" id=\"imgModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <button type=\"button\" class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelUploadImage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n            <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-picture-o fa-lg text-info\"></i> Upload Image</h4>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <div role=\"tabpanel\">\r\n              <!-- Nav tabs -->\r\n              <ul class=\"nav nav-tabs\" role=\"tablist\">\r\n                <li role=\"presentation\" class=\"active\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "imgTabStatus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><a href=\"#imgTab\" aria-controls=\"imgTab\" role=\"tab\" data-toggle=\"tab\">Insert Image</a></li>\r\n                <li role=\"presentation\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "vidTabStatus", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><a href=\"#videoTab\" aria-controls=\"videoTab\" role=\"tab\" data-toggle=\"tab\">Insert Video</a></li>\r\n              </ul>\r\n\r\n              <!-- Tab panes -->\r\n              <div class=\"tab-content\">\r\n                <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"imgTab\">\r\n                  <div id=\"feedback\"></div>\r\n                  <div id=\"loadingDiv\" style=\"display:none;text-align:center;\"><i class=\"fa fa-spinner fa-spin\"></i> Uploading...</div>\r\n                  <label for=\"imageUrlTextField\">Type URL / Upload from my Computer: </label>\r\n                  <input type=\"text\" id=\"imageUrlTextField\" value=\"\" placeholder=\"http://example.com/image.jpg\" class=\"form-control\">\r\n         \r\n                  <br />\r\n                  <iframe name=\"upload_iframe\" src=\"\" style=\"display:none;\"></iframe>\r\n          \r\n                  <form method=\"POST\" action=\"uploadImage\" accept-charset=\"UTF-8\" target=\"upload_iframe\" enctype=\"multipart/form-data\">\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("hidden"),
    'name': ("non_ajax_token"),
    'value': ("admin_token")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'type': depth0,'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                    <input type=\"hidden\" name=\"MAX_FILE_SIZE\" value=\"5000000\" />\r\n                    <input name=\"file\" size=\"20\" type=\"file\" accept=\"image/jpg, image/png, image/gif, image/jpeg\"/>\r\n                    <br />\r\n                    <input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Upload\" onclick=\"showLoading();\"/>\r\n                  </form>\r\n                </div>\r\n                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"videoTab\">\r\n                  <label for=\"videoUrlTextField\">Exyht supports Youtube video: </label>\r\n                  <input type=\"text\" id=\"videoUrlTextField\" value=\"\" placeholder=\"Place Youtube video link here\" class=\"form-control\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelUploadImage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-dismiss=\"modal\">Close</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertImage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-dismiss=\"modal\">Insert in Editor</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertOrderedlist", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-list-ol\"></i></button>\r\n    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertUnorderedlist", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-list\"></i></button>\r\n                    \r\n    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHorizontalrule", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-minus\"></i></button>\r\n    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertStrikethrough", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-strikethrough\"></i></button>\r\n    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertSubscript", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-subscript\"></i></button>\r\n    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertSuperscript", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("><i class=\"fa fa-superscript\"></i></button>\r\n                \r\n    <div class=\"btn-group btn-group-sm\">\r\n      <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\r\n        <i class=\"fa fa-header\"></i>\r\n        <span class=\"caret\"></span>\r\n      </button>\r\n       <ul class=\"dropdown-menu\" role=\"menu\">\r\n        <li role=\"presentation\"><a href=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHeading1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">H1</a></li>\r\n        <li role=\"presentation\"><a href=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHeading2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">H2</a></li>\r\n        <li role=\"presentation\"><a href=\"\"");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "insertHeading3", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">H3</a></li>\r\n       </ul>\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["_navbar"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

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
  
  
  data.buffer.push("<i class=\"fa fa-picture-o fa-fw\"></i>\r\n Image Gallery");
  }

  data.buffer.push("<!-- Navigation -->\r\n<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\r\n    <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"#\">Exyht</a>\r\n    </div>\r\n    <!-- /.navbar-header -->\r\n\r\n    <ul class=\"nav navbar-top-links navbar-right\">\r\n        <li class=\"dropdown\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                <i class=\"fa fa-user fa-fw\"></i>  <i class=\"fa fa-caret-down\"></i>\r\n            </a>\r\n            <ul class=\"dropdown-menu dropdown-user\">\r\n                <li>");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profilesetting", options) : helperMissing.call(depth0, "link-to", "profilesetting", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li class=\"divider\"></li>\r\n                <li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logOut", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;text-align:center;\"><i class=\"fa fa-sign-out fa-fw\"></i>\r\n                 Logout\r\n                </li>\r\n            </ul>\r\n            <!-- /.dropdown-user -->\r\n        </li>\r\n        <!-- /.dropdown -->\r\n    </ul>\r\n    <!-- /.navbar-top-links -->\r\n\r\n    <div class=\"navbar-default sidebar\" role=\"navigation\">\r\n        <div class=\"sidebar-nav navbar-collapse\">\r\n            <ul class=\"nav\" id=\"side-menu\">\r\n                <li>\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li>\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "typeblogpost", options) : helperMissing.call(depth0, "link-to", "typeblogpost", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li>\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "uisettings", options) : helperMissing.call(depth0, "link-to", "uisettings", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li>\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profilesetting", options) : helperMissing.call(depth0, "link-to", "profilesetting", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n                <li>\r\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "imggallery", options) : helperMissing.call(depth0, "link-to", "imggallery", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- /.sidebar-collapse -->\r\n    </div>\r\n    <!-- /.navbar-static-side -->\r\n</nav>");
  return buffer;
  
});

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div id=\"wrapper\">\r\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "navbar", options) : helperMissing.call(depth0, "partial", "navbar", options))));
  data.buffer.push("\r\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n</div>\r\n<!-- /#wrapper -->");
  return buffer;
  
});

Ember.TEMPLATES["bloglink"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n<div class=\"list-group\">\r\n   	<div class=\"input-group\">\r\n  		<span class=\"input-group-addon\">\r\n  			");
  stack1 = helpers['if'].call(depth0, "is_nav_link", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  			");
  stack1 = helpers['if'].call(depth0, "is_else_link", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  			");
  stack1 = helpers._triageMustache.call(depth0, "link_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  		</span>\r\n  		<input class=\"form-control\" type=\"text\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'placeholder': ("link_url")
  },hashTypes:{'placeholder': "ID"},hashContexts:{'placeholder': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" readonly>\r\n  		");
  stack1 = helpers.unless.call(depth0, "is_blog_url", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n    </div>\r\n</div>\r\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\r\n  			    Nav:\r\n  			");
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\r\n  			    Else:\r\n  			");
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n  		<span class=\"input-group-btn\">\r\n    		<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeLink", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\" title=\"Remove\" type=\"button\"><i class=\"fa fa-times\"></i></button>\r\n  		</span>\r\n      ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});

Ember.TEMPLATES["comment"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n             <button type=\"button\" class=\"btn btn-success btn-xs\" disabled=\"disabled\">\r\n               <i class=\"fa fa-check\"></i>&nbsp;<i class=\"fa fa-eye\"></i>\r\n             </button>\r\n            ");
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n             <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "markAsSeen", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-primary btn-xs\">\r\n               Mark as seen\r\n             </button>\r\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n              ");
  stack1 = helpers['if'].call(depth0, "showLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("\r\n               <button type=\"button\" class=\"btn btn-danger btn-xs\" disabled=\"disabled\">\r\n                <i class=\"fa fa-trash-o\"></i> Removing...\r\n               </button>\r\n              ");
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n               <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-primary btn-xs\">\r\n                <i class=\"fa fa-trash-o\"></i> Remove\r\n               </button>\r\n              ");
  return buffer;
  }

function program10(depth0,data) {
  
  
  data.buffer.push(" \r\n             <button type=\"button\" class=\"btn btn-danger btn-xs\" disabled=\"disabled\">\r\n               <i class=\"fa fa-trash-o\"></i> Removed\r\n             </button>\r\n            ");
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n              ");
  stack1 = helpers['if'].call(depth0, "banLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  return buffer;
  }
function program13(depth0,data) {
  
  
  data.buffer.push("\r\n               <button type=\"button\" class=\"btn btn-danger btn-xs\" disabled=\"disabled\">\r\n                <i class=\"fa fa-ban\"></i> Banning...\r\n               </button>\r\n              ");
  }

function program15(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n               <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "banIp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-primary btn-xs\">\r\n                <i class=\"fa fa-ban\"></i> Ban this IP\r\n               </button>\r\n              ");
  return buffer;
  }

function program17(depth0,data) {
  
  
  data.buffer.push(" \r\n             <button type=\"button\" class=\"btn btn-danger btn-xs\" disabled=\"disabled\">\r\n               <i class=\"fa fa-ban\"></i> IP banned\r\n             </button>\r\n            ");
  }

function program19(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n              ");
  stack1 = helpers['if'].call(depth0, "flagLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(22, program22, data),fn:self.program(20, program20, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n            ");
  return buffer;
  }
function program20(depth0,data) {
  
  
  data.buffer.push("\r\n               <button type=\"button\" class=\"btn btn-danger btn-xs\" disabled=\"disabled\">\r\n                <i class=\"fa fa-flag\"></i> Removing...\r\n               </button>\r\n              ");
  }

function program22(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n               <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeFlag", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-primary btn-xs\">\r\n                <i class=\"fa fa-flag\"></i> Remove flag\r\n               </button>\r\n              ");
  return buffer;
  }

  data.buffer.push("<div class=\"list-group-item\">\r\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":media isFlagged:bg-warning")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n\r\n      <div class=\"pull-left\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("name")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("view.cgravatarUrl")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("/>\r\n      </div>\r\n      \r\n      <div class=\"media-body\">\r\n      \r\n        <h5 class=\"media-heading\">\r\n          <div class=\"small pull-right\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'title': ("date")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "date", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\r\n          <strong>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>&nbsp;\r\n        </h5>\r\n        <p class=\"bg-info\">\r\n          &nbsp;Email: <strong>");
  stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>&nbsp;\r\n          IP: <strong>");
  stack1 = helpers._triageMustache.call(depth0, "ip_address", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>&nbsp;\r\n          Browser: <strong>");
  stack1 = helpers._triageMustache.call(depth0, "browser", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>&nbsp;\r\n          OS: <strong>");
  stack1 = helpers._triageMustache.call(depth0, "os", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>&nbsp;\r\n        </p>\r\n        ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "comment", options) : helperMissing.call(depth0, "format-markdown", "comment", options))));
  data.buffer.push("\r\n      </div>\r\n\r\n      \r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3\">\r\n            ");
  stack1 = helpers['if'].call(depth0, "isSeen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n          </div>\r\n          <div class=\"col-lg-3\">\r\n            ");
  stack1 = helpers['if'].call(depth0, "status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n          </div>\r\n          <div class=\"col-lg-3\">\r\n            ");
  stack1 = helpers.unless.call(depth0, "ip_status", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(17, program17, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n          </div>\r\n\r\n          <div class=\"col-lg-3\">\r\n            ");
  stack1 = helpers['if'].call(depth0, "isFlagged", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["comments"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("<i class=\"fa fa-angle-double-left\"></i> Back to Posts");
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "comment", "", options) : helperMissing.call(depth0, "render", "comment", "", options))));
  data.buffer.push("\r\n                 ");
  return buffer;
  }

  data.buffer.push("<div id=\"page-wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                &nbsp;&nbsp;Comments for <strong>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\r\n            </div>\r\n            <!-- /.panel-heading -->\r\n            <div class=\"panel-body\">\r\n                <div class=\"list-group\">\r\n                 ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </div>\r\n                <!-- /.list-group -->\r\n            </div>\r\n            <!-- /.panel-body -->\r\n            <div class=\"panel-footer\">\r\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                 &nbsp;&nbsp;Comments for <strong>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong>\r\n            </div>\r\n        </div>\r\n                <!-- /.panel -->\r\n    </div>\r\n            <!-- /.col-lg-12 -->\r\n\r\n   </div>\r\n   <!-- /.row -->\r\n</div>\r\n<!-- /#page-wrapper -->");
  return buffer;
  
});

Ember.TEMPLATES["imggallery"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n    <div class=\"item thumb\">\r\n    ");
  stack1 = helpers['if'].call(depth0, "img.img_visible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n     </div>\r\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("img.srcPath")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" class=\"img-thumbnail img-responsive\"/>\r\n        <span class=\"bg-primary\" style=\"position:absolute;top:0;left:86%;z-index:1;padding:1%;\">\r\n          ");
  stack1 = helpers['if'].call(depth0, "img.deletingImg", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </span>\r\n        <p>\r\n          <label class=\"sr-only\" for=\"inputHelpBlock\">Image Link:</label>\r\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'id': ("inputHelpBlock"),
    'class': ("form-control"),
    'aria-describedby': ("helpBlock"),
    'value': ("img.srcPath")
  },hashTypes:{'type': "STRING",'id': "STRING",'class': "STRING",'aria-describedby': "STRING",'value': "ID"},hashContexts:{'type': depth0,'id': depth0,'class': depth0,'aria-describedby': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n        </p>\r\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("\r\n            <span>Removing...</span>\r\n          ");
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n            <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeGimg", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><i class=\"fa fa-times fa-lg\"></i></span>\r\n          ");
  return buffer;
  }

  data.buffer.push("<div id=\"page-wrapper\">\r\n	<h2>Image Gallery! (");
  stack1 = helpers._triageMustache.call(depth0, "totalImgs", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(") Images</h2>\r\n	<hr />\r\n  <div id=\"galleryContainer\">\r\n  ");
  stack1 = helpers.each.call(depth0, "img", "in", "images", {hash:{
    'itemController': ("galleryimage")
  },hashTypes:{'itemController': "STRING"},hashContexts:{'itemController': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n  </div>\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n                      <button class=\"btn btn-primary\">\r\n\r\n                      <i class=\"fa fa-certificate\"></i>\r\n                        Manage Logo\r\n                      </button>\r\n                    ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n                              <button type=\"button\" class=\"btn btn-primary disabled\">Submit</button>\r\n                            ");
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                              <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeBlogName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-primary\">Submit</button>\r\n                            ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                              <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeSubtitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-primary\">Submit</button>\r\n                            ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                                 Off: <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "turnReadOnlyModeOn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><i class=\"fa fa-toggle-off fa-lg text-danger\"></i></span>\r\n                               ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                                 On: <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "turnReadOnlyModeOff", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><i class=\"fa fa-toggle-on fa-lg text-success\"></i></span>\r\n                               ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                                 Off: <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "turnCommentFeatureOn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><i class=\"fa fa-toggle-off fa-lg text-danger\"></i></span>\r\n                               ");
  return buffer;
  }

function program15(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                                 On: <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "turnCommentFeatureOff", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><i class=\"fa fa-toggle-on fa-lg text-success\"></i></span>\r\n                               ");
  return buffer;
  }

function program17(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                                 Off: <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "turnNavbarOn", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><i class=\"fa fa-toggle-off fa-lg text-danger\"></i></span>\r\n                               ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                                 On: <span ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "turnNavbarOff", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><i class=\"fa fa-toggle-on fa-lg text-success\"></i></span>\r\n                               ");
  return buffer;
  }

function program21(depth0,data) {
  
  
  data.buffer.push("\r\n                           <div class=\"alert alert-warning\" role=\"alert\" style=\"text-align:center;padding:2%;font-size:18px;\">Loading...</div>\r\n                         ");
  }

function program23(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                           ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "bloglink", "", options) : helperMissing.call(depth0, "render", "bloglink", "", options))));
  data.buffer.push("\r\n                         ");
  return buffer;
  }

function program25(depth0,data) {
  
  
  data.buffer.push("\r\n                    <button class=\"btn btn-primary\">\r\n                    <i class=\"fa fa-plus-circle\"></i>\r\n                     Create New Post \r\n                    </button>\r\n                    ");
  }

function program27(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "posttitle", "", options) : helperMissing.call(depth0, "render", "posttitle", "", options))));
  data.buffer.push("\r\n                  ");
  return buffer;
  }

  data.buffer.push("<div id=\"page-wrapper\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"page-header\">\r\n            <div class=\"container-fluid\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-3 huge\">\r\n                Dashboard\r\n                </div>\r\n                <div class=\"col-md-9\">\r\n                <div class=\"btn-toolbar pull-right\" role=\"toolbar\" aria-label=\"...\">\r\n                  \r\n                  <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "profilesetting", options) : helperMissing.call(depth0, "link-to", "profilesetting", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                  </div>\r\n                  <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                  <button class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#blog_setting_modal\"><i class=\"fa fa-magic\"></i> Manage Blog Settings</button>\r\n                  <!-- Button trigger modal -->\r\n                  <!-- Modal -->\r\n                  <div class=\"modal fade\" id=\"blog_setting_modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n                    <div class=\"modal-dialog\">\r\n                      <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n                          <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-magic\"></i> Manage Blog Settings</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\" style=\"font-size:18px;\">\r\n                         <div class=\"form-group\">\r\n                          <div class=\"input-group\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("blog_name"),
    'placeholder': ("Blog name")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            <span class=\"input-group-btn\">\r\n                            ");
  stack1 = helpers['if'].call(depth0, "loadingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("  \r\n                            </span>\r\n                          </div>\r\n                         </div>\r\n                         <div class=\"form-group\">\r\n                          <div class=\"input-group\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("blog_subtitle"),
    'placeholder': ("Blog subtitle")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            <span class=\"input-group-btn\">\r\n                            ");
  stack1 = helpers['if'].call(depth0, "loadingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                            </span>\r\n                          </div>\r\n                         </div>\r\n                          <div class=\"row\">\r\n                           <div class=\"col-lg-6\">\r\n                              <div class=\"form-group\">\r\n                               Read Only Mode: \r\n                               ");
  stack1 = helpers.unless.call(depth0, "read_only_mode", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                              </div>\r\n                              <div class=\"form-group\">\r\n                               Has Comment Feature: \r\n                               ");
  stack1 = helpers.unless.call(depth0, "has_cmnt_feature", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                              </div>\r\n                              </div>\r\n                            <div class=\"col-lg-6\">\r\n                              <div class=\"form-group\">\r\n                               Has Navbar: \r\n                               ");
  stack1 = helpers.unless.call(depth0, "has_navbar", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(19, program19, data),fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          Add New Blog links:\r\n                         <div class=\"form-group\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("text"),
    'value': ("link_name"),
    'placeholder': ("Link name. e.g: example")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                          <div class=\"input-group\">\r\n                            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'type': ("url"),
    'value': ("link_url"),
    'placeholder': ("http://example.com")
  },hashTypes:{'class': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'class': depth0,'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                            <div class=\"input-group-btn\">\r\n                            <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\"><span class=\"caret\"></span></button>\r\n                              <ul class=\"dropdown-menu\" role=\"menu\">\r\n                                <li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addNavLink", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><a>Navbar</a></li>\r\n                                <li ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addElseLink", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" style=\"cursor:pointer;\"><a>Elsewhere</a></li>\r\n                              </ul>\r\n                            </div>\r\n                          </div>\r\n                         </div>\r\n                         ");
  stack1 = helpers['if'].call(depth0, "loadingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(21, program21, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                         Allowed links for Navbar & Elsewhere:\r\n                         ");
  stack1 = helpers.each.call(depth0, "model.blog_links", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(23, program23, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  </div>\r\n                  <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\r\n                  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(25, program25, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "typeblogpost", options) : helperMissing.call(depth0, "link-to", "typeblogpost", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                  </div>\r\n                </div> \r\n              </div>\r\n            </div>\r\n            </div>\r\n    </div>\r\n    <!-- /.col-lg-12 -->\r\n    </div>\r\n    \r\n	");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "toprow", "", options) : helperMissing.call(depth0, "render", "toprow", "", options))));
  data.buffer.push("\r\n		\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                    <strong>");
  stack1 = helpers._triageMustache.call(depth0, "view.numberOfPost", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</strong> \r\n                </div>\r\n                <!-- /.panel-heading -->\r\n                <div class=\"panel-body\">\r\n                  ");
  stack1 = helpers.each.call(depth0, "model.posts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(27, program27, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                </div>\r\n                <!-- /.panel-body -->\r\n            </div>\r\n            <!-- /.panel -->\r\n        </div>\r\n        <!-- /.col-lg-12 -->\r\n    </div>\r\n    <!-- /.row -->\r\n</div>\r\n<!-- /#page-wrapper -->");
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
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n        <button type=\"button\" class=\"btn btn-danger btn-xs\" disabled=\"disabled\">\r\n         Draft\r\n        </button>\r\n        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\r\n        <button type=\"button\" class=\"btn btn-success btn-xs\" disabled=\"disabled\">\r\n         Published\r\n        </button>\r\n        ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n         <em title=\"Edited\"><i class=\"fa fa-pencil\"></i>");
  stack1 = helpers._triageMustache.call(depth0, "modified", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</em>\r\n        ");
  return buffer;
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\r\n        <button type=\"button\" class=\"btn btn-success btn-xs\">\r\n         <i class=\"fa fa-pencil\"></i> Editing On\r\n        </button>\r\n        ");
  }

function program9(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editPostTrue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-primary btn-xs\">\r\n         <i class=\"fa fa-pencil\"></i> Edit\r\n        </button>\r\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "viewComments", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-xs hasFlaggedComment:btn-warning:btn-primary")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n         ");
  stack1 = helpers._triageMustache.call(depth0, "total_comment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <i class=\"fa fa-chevron-right\"></i>\r\n         ");
  stack1 = helpers['if'].call(depth0, "hasNewComment", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </button>\r\n        ");
  return buffer;
  }
function program12(depth0,data) {
  
  
  data.buffer.push("\r\n           <span class=\"badge\" title=\"This post has new comment\">new!</span>\r\n         ");
  }

function program14(depth0,data) {
  
  
  data.buffer.push("\r\n        <button type=\"button\" class=\"btn btn-danger btn-xs\" disabled=\"disabled\">\r\n         No <i class=\"fa fa-comment-o\"></i>\r\n        </button>\r\n        ");
  }

  data.buffer.push("<div class=\"list-group\">\r\n    <div class=\"list-group-item\">\r\n      <div class=\"row\">\r\n       <div class=\"col-md-6\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "isDraft", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n         ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n       </div>\r\n       <div class=\"col-md-6\">\r\n        <span class=\"pull-right text-muted small\"><em title=\"Created\">");
  stack1 = helpers._triageMustache.call(depth0, "created", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</em>\r\n        &nbsp;\r\n        ");
  stack1 = helpers['if'].call(depth0, "modified", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("&nbsp;\r\n        ");
  stack1 = helpers['if'].call(depth0, "isEditingOnForPostTitle", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("&nbsp;\r\n        ");
  stack1 = helpers['if'].call(depth0, "hasComment", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        </span>\r\n       </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n<!-- /.list-group -->");
  return buffer;
  
});

Ember.TEMPLATES["profilesetting"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" id=\"profileImageDiv\" height=\"170px\" width=\"170px\"/>\r\n                ");
  stack1 = helpers.unless.call(depth0, "isRemoved", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n              ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                  ");
  stack1 = helpers['if'].call(depth0, "isRemovingPicture", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                ");
  return buffer;
  }
function program3(depth0,data) {
  
  
  data.buffer.push("\r\n                    <button type=\"button\" class=\"btn btn-danger\">Removing Picture...</button>\r\n                  ");
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                    <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "removeProfPicture", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Remove Profile Picture</button>\r\n                  ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("hashedEmail")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" id=\"profileImageDiv\" height=\"170px\" width=\"170px\"/>\r\n              ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\r\n               <div class=\"alert alert-danger\" role=\"alert\">Passwords did not match.</div>\r\n              ");
  }

function program11(depth0,data) {
  
  
  data.buffer.push("\r\n              <div class=\"alert alert-danger\" role=\"alert\">Password must have atleast 6 characters.</div>\r\n              ");
  }

function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\r\n                    <button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "editProfileTrue", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"btn btn-primary btn-xs\"><i class=\"fa fa-pencil\"></i> Edit</button>\r\n                  ");
  return buffer;
  }

function program15(depth0,data) {
  
  
  data.buffer.push("\r\n                    <button type=\"button\" class=\"btn btn-success btn-xs\"><i class=\"fa fa-pencil\"></i> Editing On</button>\r\n                  ");
  }

  data.buffer.push("<div id=\"page-wrapper\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <h2>Profile Settings & Blog Logo</h2>\r\n            <hr />\r\n            <div>\r\n              ");
  stack1 = helpers['if'].call(depth0, "image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n              <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#profileImgModal\">Change Profile Picture/ Blog Logo</button>\r\n              <!-- Modal -->\r\n              <div class=\"modal fade\" id=\"profileImgModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n                <div class=\"modal-dialog\">\r\n                  <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                      <button type=\"button\" class=\"close\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelUploadingImage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\r\n                      <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"fa fa-picture-o fa-lg text-info\"></i> Upload Image</h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n              	      <div id=\"imgFeedback\"></div>\r\n              	      <div id=\"imgLoadingDiv\" style=\"display:none;text-align:center;\"><i class=\"fa fa-spinner fa-spin\"></i> Uploading...</div>\r\n              	       \r\n              	      <iframe name=\"upload_profile_img_iframe\" src=\"\" style=\"display:none;\"></iframe>\r\n                        \r\n                        <form method=\"POST\" action=\"uploadProfileImage\" accept-charset=\"UTF-8\" target=\"upload_profile_img_iframe\" enctype=\"multipart/form-data\">\r\n                          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("hidden"),
    'name': ("non_ajax_token"),
    'value': ("admin_token")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID"},hashContexts:{'type': depth0,'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                          <input type=\"hidden\" name=\"MAX_FILE_SIZE\" value=\"5000000\" />\r\n                          <input name=\"file\" size=\"20\" type=\"file\" accept=\"image/jpg, image/png, image/gif, image/jpeg\"/>\r\n                          <br />\r\n                          Save as:\r\n                          <div class=\"radio\">\r\n                            <label>\r\n                              <input type=\"radio\" name=\"picType\" value=\"1\" checked>Author\r\n                            </label>\r\n                          </div>\r\n                          <div class=\"radio\">\r\n                            <label>\r\n                              <input type=\"radio\" name=\"picType\" value=\"2\">Blog logo\r\n                            </label>\r\n                          </div>\r\n                          <br />\r\n              	          <input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" value=\"Upload\" onclick=\"showImgLoading();\"/>\r\n                        </form>\r\n              	      </div>\r\n                    <div class=\"modal-footer\">\r\n                      <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelUploadingImage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" data-dismiss=\"modal\">Close</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n              <hr />\r\n        </div>\r\n        <!-- /.col-lg-12 -->\r\n        <div class=\"col-lg-12\" style=\"padding-bottom:2%;\">\r\n             <div class=\"col-lg-4\" style=\"background-color:#f5f5f5;\">\r\n              <h2>Change Password:</h2>\r\n              ");
  stack1 = helpers.unless.call(depth0, "pwd_match", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n              ");
  stack1 = helpers['if'].call(depth0, "too_small", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <div class=\"form-group\">\r\n                  <label for=\"oldPassword\">Old Password</label>\r\n                  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("old_password"),
    'class': ("form-control"),
    'id': ("oldPassword"),
    'placeholder': ("Old Password")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"newPassword\">New Password</label>\r\n                  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("new_password"),
    'class': ("form-control"),
    'id': ("newPassword"),
    'placeholder': ("New Password")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"confirmPassword\">Confirm New Password</label>\r\n                  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("confirm_password"),
    'class': ("form-control"),
    'id': ("confirmPassword"),
    'placeholder': ("Confirm New Password")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'id': "STRING",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'id': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\r\n                </div>\r\n                <input type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changePassword", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-success\" value=\"Change Password\"/>\r\n              \r\n             </div>\r\n              <div class=\"col-lg-8\">\r\n                <h2>About</h2>\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers['format-markdown'] || (depth0 && depth0['format-markdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "format-markdown", "about", options))));
  data.buffer.push("\r\n                <div>\r\n                  ");
  stack1 = helpers.unless.call(depth0, "isProfileEditingOnForProfileSetting", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                  <br />\r\n                </div>\r\n              </div>\r\n        </div>\r\n        <!-- /.col-lg-12 -->\r\n    </div>\r\n    <!-- /.row -->\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["toprow"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<!-- /.row -->\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-3 col-md-6\">\r\n                    <div class=\"panel panel-primary\">\r\n                        <div class=\"panel-heading\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-3\">\r\n                                    <i class=\"fa fa-comments fa-5x\"></i>\r\n                                </div>\r\n                                <div class=\"col-xs-9 text-right\">\r\n                                    ");
  stack1 = helpers._triageMustache.call(depth0, "newCommentCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6\">\r\n                    <div class=\"panel panel-red\">\r\n                        <div class=\"panel-heading\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-3\">\r\n                                    <i class=\"fa fa-tasks fa-5x\"></i>\r\n                                </div>\r\n                                <div class=\"col-xs-9 text-right\">\r\n                                    ");
  stack1 = helpers._triageMustache.call(depth0, "totalDraft", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-3 col-md-6\">\r\n                    <div class=\"panel panel-yellow\">\r\n                        <div class=\"panel-heading\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-xs-3\">\r\n                                    <i class=\"fa fa-flag fa-5x\"></i>\r\n                                </div>\r\n                                <div class=\"col-xs-9 text-right\">\r\n                                    ");
  stack1 = helpers._triageMustache.call(depth0, "flaggedCommentCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /.row -->");
  return buffer;
  
});

Ember.TEMPLATES["typeblogpost"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\r\n          Edit post\r\n        ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n          ");
  stack1 = helpers['if'].call(depth0, "isProfileEditingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\r\n            Edit Profile\r\n          ");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\r\n            Create new post\r\n          ");
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\r\n                  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'class': ("form-control"),
    'id': ("newTitle"),
    'type': ("text"),
    'name': ("title"),
    'value': ("ntitle"),
    'placeholder': ("Blog title")
  },hashTypes:{'class': "STRING",'id': "STRING",'type': "STRING",'name': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'class': depth0,'id': depth0,'type': depth0,'name': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br />\r\n                ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                  <div style=\"text-align:center;padding:0.5%;\">");
  stack1 = helpers._triageMustache.call(depth0, "newBodyLength", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" to go for the post</div>\r\n                ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\r\n                  <h3 style=\"border:1px dashed #000;padding:1%;overflow-x: auto;\">");
  stack1 = helpers._triageMustache.call(depth0, "ntitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3> <br />\r\n                ");
  return buffer;
  }

  data.buffer.push("<div id=\"page-wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <h1 class=\"page-header\">\r\n        ");
  stack1 = helpers['if'].call(depth0, "isEditingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n      </h1>\r\n    </div>\r\n    <!-- /.col-lg-12 -->\r\n  </div>\r\n  <!-- /.row -->\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-6\">\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "editortools", options) : helperMissing.call(depth0, "partial", "editortools", options))));
  data.buffer.push("\r\n                <br /><br />               \r\n                <form id=\"createNewNoteForm\">\r\n				\r\n                ");
  stack1 = helpers.unless.call(depth0, "isProfileEditingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n				\r\n                ");
  stack1 = helpers['if'].call(depth0, "showNbodyLength", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n				  \r\n                ");
  data.buffer.push(escapeExpression((helper = helpers['auto-expanding-text-area'] || (depth0 && depth0['auto-expanding-text-area']),options={hash:{
    'class': ("form-control"),
    'id': ("newBody"),
    'name': ("body"),
    'rows': ("14"),
    'value': ("nbody")
  },hashTypes:{'class': "STRING",'id': "STRING",'name': "STRING",'rows': "STRING",'value': "ID"},hashContexts:{'class': depth0,'id': depth0,'name': depth0,'rows': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "auto-expanding-text-area", options))));
  data.buffer.push("<br />\r\n                ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "editoractionbutton", options) : helperMissing.call(depth0, "partial", "editoractionbutton", options))));
  data.buffer.push("\r\n                </form>\r\n              </div>\r\n              <!-- /.col-lg-6 (nested) -->\r\n              <div class=\"col-lg-6\">\r\n                <style>\r\n                  #postBodyDiv pre{max-height:500px;max-width:100%;overflow:auto;}\r\n                  img{max-height:500px;max-width:100%;}\r\n                </style>\r\n                ");
  stack1 = helpers.unless.call(depth0, "isProfileEditingOn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                <div id=\"postBodyDiv\" style=\"border:1px dashed #000;padding:1%;height:350px;overflow: auto;\">");
  data.buffer.push(escapeExpression((helper = helpers['format-xmarkdown'] || (depth0 && depth0['format-xmarkdown']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "nbody", options) : helperMissing.call(depth0, "format-xmarkdown", "nbody", options))));
  data.buffer.push("</div><br />\r\n              </div>\r\n              <!-- /.col-lg-6 (nested) -->\r\n            </div>\r\n            <!-- /.row (nested) -->\r\n          </div>\r\n          <!-- /.panel-body -->\r\n        </div>\r\n        <!-- /.panel -->\r\n    </div>\r\n    <!-- /.col-lg-12 -->\r\n  </div>\r\n  <!-- /.row -->\r\n</div>\r\n<!-- /#page-wrapper -->");
  return buffer;
  
});

Ember.TEMPLATES["uisettings"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\r\n                               <div class=\"radio\">\r\n                                <label ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("font_family")
  },hashTypes:{'style': "STRING"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\r\n                                ");
  data.buffer.push(escapeExpression((helper = helpers['radio-button'] || (depth0 && depth0['radio-button']),options={hash:{
    'value': ("name"),
    'name': ("fontType")
  },hashTypes:{'value': "ID",'name': "STRING"},hashContexts:{'value': depth0,'name': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "radio-button", options))));
  data.buffer.push("\r\n                                ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                                </label>\r\n                               </div>\r\n                             ");
  return buffer;
  }

  data.buffer.push("<!-- Page Content -->\r\n        <div id=\"page-wrapper\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <h1 class=\"page-header\">Customize Blog Color and Font Size</h1>\r\n                </div>\r\n                <!-- /.col-lg-12 -->\r\n            </div>\r\n            <!-- /.row -->\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                            Change Color\r\n                        </div>\r\n                        <!-- /.panel-heading -->\r\n                        <div class=\"panel-body\">\r\n                            <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeColor", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n							    ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'class': ("form-control"),
    'content': ("categories"),
    'optionValuePath': ("content.domArea"),
    'optionLabelPath': ("content.color"),
    'value': ("selectedCategory"),
    'prompt': ("Please select a category")
  },hashTypes:{'class': "STRING",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID",'prompt': "STRING"},hashContexts:{'class': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0,'prompt': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\r\n                             Select your favorite color: ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("color"),
    'class': ("form-control"),
    'valueBinding': ("favcolor")
  },hashTypes:{'type': "STRING",'class': "STRING",'valueBinding': "STRING"},hashContexts:{'type': depth0,'class': depth0,'valueBinding': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("<br>\r\n                            <input type=\"submit\" class=\"btn btn-info\" value=\"Submit\">\r\n                            </form>\r\n                        </div>\r\n                        <!-- /.panel-body -->\r\n                    </div>\r\n                    \r\n                </div>\r\n                <!-- /.col-lg-6 -->\r\n                <div class=\"col-lg-6\">\r\n                    <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                            Change Font Style\r\n                        </div>\r\n                        <!-- /.panel-heading -->\r\n                        <div class=\"panel-body\">\r\n                           <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeFontStyle", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\r\n                             ");
  stack1 = helpers.each.call(depth0, "fstyles", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\r\n                             <br>\r\n                            <input type=\"submit\" class=\"btn btn-info\" value=\"Submit\">\r\n                            </form>\r\n                        </div>\r\n                        <!-- /.panel-body -->\r\n                    </div>\r\n                    \r\n                </div>\r\n                <!-- /.col-lg-6 -->\r\n            </div>\r\n            <!-- /.row -->\r\n        </div>\r\n        <!-- /#page-wrapper -->");
  return buffer;
  
});