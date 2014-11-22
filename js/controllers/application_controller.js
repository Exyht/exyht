Exyht.ApplicationController = Ember.ArrayController.extend({
  needs: "post",
  isReplying: false,
  isHideAddComment: false,
  isCommentDivShown: false,
  sendingCommentOn: false,
  actualTitleForAddComment: '',
  actualPostIdForAddComment: '',
  actualOnlyCurrentSlug: '',
  newCurrentComment: '',
  newCommentLength: '',
  showNewCommentLength: false,
  currentCommentIdToReply: '',
  currentCommenterNameToReply: '',
  currentCommenterGravaterToReply: '',
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
  }.property('Exyht.SidebarInfo.sidebar_info.archive'),
  
  actions: {
    addComment: function(){
      var name = this.get('name');
      
      var addedComment = this.get('typeComment');
      
      var postId = this.get('actualPostIdForAddComment');
      var email = this.get('email');
      var replyingCommentId = this.get('currentCommentIdToReply');
      
      if ((!addedComment || addedComment.length < 20) || !name || !email) {
         this.set('isCommentDivShown', true);
         return false;
      }
      if (!addedComment.trim()) { return; }
      
      this.set('sendingCommentOn', true);
      
      var self = this;
         
      $.post(Exyht.BaseURL+"addComment",
        {
         postId: postId,
         comment: addedComment,
         name: name,
         email: email,
         replyToCommentId: replyingCommentId
        },function(data){

             // Remove previous meta tag with old csrf-token
              $('meta[name="csrf-token"]').remove();
              // Append new meta tag with new csrf-token
              $('head').append( '<meta name="csrf-token" content="'+data.token+'">' );
              // Update headers 'X-CSRF-Token' with new csrf-token
              $.ajaxSetup({
                headers: {
                    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
                }
              });


          if(data.controller_response == "saved")
            {
              //alert("Data: " + data + "\nStatus: " + status);
              self.set('isCommentDivShown', false);
            
              var gravatarEmail = CryptoJS.MD5(self.get('email').trim().toLowerCase());
              
              var repliedToCommenterName = self.get('currentCommenterNameToReply');
              var repliedToCommenterGravater = self.get('currentCommenterGravaterToReply');
              
              if(self.get('isReplying') === true){
              self.get('newCurrentComment').pushObject({
                name: name,
                email: gravatarEmail,
                comment: addedComment,
                replyToComment: Ember.Object.create({
                  commentHasReply: true,
                  name: repliedToCommenterName,
                  email: repliedToCommenterGravater
                })
              });
              }
              else
              {
              self.get('newCurrentComment').pushObject({
                name: name,
                email: gravatarEmail,
                comment: addedComment,
                replyToComment: []
              });
              }
              self.set('name', '');
              self.set('email', '');
              self.set('typeComment', '');
              self.set('actualPostIdForAddComment', '');
              self.set('actualTitleForAddComment', '');
              self.set('actualOnlyCurrentSlug', '');
              self.set('isReplying', false);
              self.set('currentCommentIdToReply', '');
              self.set('currentCommenterNameToReply', '');
              self.set('currentCommenterGravaterToReply', '');
            }else if(data.read_only_mode === 1){
              $("#showError").addClass("alert alert-danger");
              $("#showError").html(data.controller_response);
            }else
            {
             $("#showError").html(data.error_msg);
            }
            self.set('sendingCommentOn', false);
        },"json");
   
    },
    cancelAddComment: function(){
      var typedComment = this.get('typeComment');
      
      if(typeof typedComment == 'undefined' || typedComment.length === 0)
      {
          this.set('name', '');
          this.set('email', '');
          this.set('isCommentDivShown', false);
          this.set('actualPostIdForAddComment', '');
          this.set('actualTitleForAddComment', '');
          this.set('actualOnlyCurrentSlug', '');
          this.set('isReplying', false);
          this.set('currentCommentIdToReply', '');
          this.set('currentCommenterNameToReply', '');
          this.set('currentCommenterGravaterToReply', '');
      }
      else
      {
        var confirmCanceling = confirm("Want to cancel?");
        if (confirmCanceling === true) {
          this.set('name', '');
          this.set('email', '');
          this.set('typeComment', '');
          this.set('isCommentDivShown', false);
          this.set('actualPostIdForAddComment', '');
          this.set('actualTitleForAddComment', '');
          this.set('actualOnlyCurrentSlug', '');
          this.set('isReplying', false);
          this.set('currentCommentIdToReply', '');
          this.set('currentCommenterNameToReply', '');
          this.set('currentCommenterGravaterToReply', '');
        }
      }
    },
    hideAddComment: function(){
      var addedComment = this.get('typeComment');
      
      if(typeof addedComment == 'undefined' || addedComment.length === 0)
      {
        this.set('isCommentDivShown', false);
        this.set('isHideAddComment', false);
        this.set('name', '');
        this.set('email', '');
        this.set('actualPostIdForAddComment', '');
        this.set('actualTitleForAddComment', '');
        this.set('actualOnlyCurrentSlug', '');
        this.set('isReplying', false);
        this.set('currentCommentIdToReply', '');
        this.set('currentCommenterNameToReply', '');
        this.set('currentCommenterGravaterToReply', '');
      }
      else
      {
        this.set('isCommentDivShown', false);
        this.set('isHideAddComment', true);
        $("div.container-full").css({"margin-top":"50px"});
      }
    },
    showAddComment: function(){
      this.set('isCommentDivShown', true);
      this.set('isHideAddComment', false);
      $("div.container-full").css({"margin-top":"0"});
    },

    // Editor tools
    insertBold: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + " **bold** ");
    },
    insertItalic: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + " *italic* ");
    },
    insertLink: function(){
     var textarea = $('textarea');
     if (textarea.val() === '')
     {
      textarea.val(textarea.val() + "[Link description](http://example.com)");
     }
     else
     {
      textarea.val(textarea.val() + "\n [Link description](http://example.com)");
     }
    },
    insertQuote: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + "\n > your quote here");
    },
    insertCode: function(){
     var textarea = $('textarea');
     if (textarea.val() === '')
     {
      textarea.val(textarea.val() + "`For inline code` \n\n\tFor pre code");
     }
     else
     {
      textarea.val(textarea.val() + "\n\n`For inline code` \n\n\tFor pre code");
     }
    },
    insertOrderedlist: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + "Indent one space after the dot \'.\'\n\n1. Ordered list1\n2. Ordered list2");
    },
    insertUnorderedlist: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + "Indent one space after the + or -.\n\n- Unordered list1\n\t+ Nested list");
    },
    insertHorizontalrule: function(){
     var textarea = $('textarea');
     if (textarea.val() === '')
     {
      textarea.val(textarea.val() + "-----\nNew line");
     }
     else
     {
      textarea.val(textarea.val() + "\n\n-----\nNew line");
     }
    },
    insertStrikethrough: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + "<del>Strike through</del>");
    },
    insertSubscript: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + "Sub<sub>script</sub>");
    },
    insertSuperscript: function(){
     var textarea = $('textarea');
     textarea.val(textarea.val() + "Sub<sup>script</sup>");
    },
    insertHeading1: function(){
     var textarea = $('textarea');
     if (textarea.val() === '')
     {
      textarea.val(textarea.val() + "# Heading1\n");
     }
     else
     {
      textarea.val(textarea.val() + "\n# Heading1\n");
     }
    },
    insertHeading2: function(){
     var textarea = $('textarea');
     if (textarea.val() === '')
     {
      textarea.val(textarea.val() + "## Heading2\n");
     }
     else
     {
      textarea.val(textarea.val() + "\n## Heading2\n");
     }
    },
    insertHeading3: function(){
     var textarea = $('textarea');
     if (textarea.val() === '')
     {
      textarea.val(textarea.val() + "### Heading3\n");
     }
     else
     {
      textarea.val(textarea.val() + "\n### Heading3\n");
     }
    }
  }
});