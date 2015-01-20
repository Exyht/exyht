/*
 |---------------------------
 | Application Controller
 |---------------------------
*/
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
  }.property('Exyht.SidebarInfo.sidebar_info.archive'),

  addCommentToPost: function(){
    var name = this.get('name').trim();
      
    var addedComment = this.get('typeComment');
      
    var postId = this.get('actualPostIdForAddComment');
    var email = this.get('email').trim();
    var replyingCommentId = this.get('currentCommentIdToReply');
    var valueForSpamBot = this.get('valueForSpam');
      
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
       spam_bot: valueForSpamBot,
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
            self.setProperties({
              'name': '',
              'email': '',
              'typeComment': '',
              'actualPostIdForAddComment': '',
              'actualTitleForAddComment': '',
              'actualOnlyCurrentSlug': '',
              'isReplying': false,
              'currentCommentIdToReply': '',
              'currentCommenterNameToReply': '',
              'currentCommenterGravaterToReply': ''
            });
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
  
  actions: {
    addComment: function(){
      // Debounce for 1 second
      Ember.run.debounce(this, this.addCommentToPost, 1000);
    },
    cancelAddComment: function(){
      var typedComment = this.get('typeComment');
      
      if(typeof typedComment == 'undefined' || typedComment.length === 0)
      {
        this.setProperties({
          'name': '',
          'email': '',
          'isCommentDivShown': false,
          'actualPostIdForAddComment': '',
          'actualTitleForAddComment': '',
          'actualOnlyCurrentSlug': '',
          'isReplying': false,
          'currentCommentIdToReply': '',
          'currentCommenterNameToReply': '',
          'currentCommenterGravaterToReply': ''
        });
      }
      else
      {
        var confirmCanceling = confirm("Want to cancel?");
        if (confirmCanceling === true) {
          this.setProperties({
            'name': '',
            'email': '',
            'typeComment': '',
            'isCommentDivShown': false,
            'actualPostIdForAddComment': '',
            'actualTitleForAddComment': '',
            'actualOnlyCurrentSlug': '',
            'isReplying': false,
            'currentCommentIdToReply': '',
            'currentCommenterNameToReply': '',
            'currentCommenterGravaterToReply': ''
          });
        }
      }
    },
    hideAddComment: function(){
      var addedComment = this.get('typeComment');
      
      if(typeof addedComment == 'undefined' || addedComment.length === 0)
      {
        this.setProperties({
            'name': '',
            'email': '',
            'isHideAddComment': false,
            'isCommentDivShown': false,
            'actualPostIdForAddComment': '',
            'actualTitleForAddComment': '',
            'actualOnlyCurrentSlug': '',
            'isReplying': false,
            'currentCommentIdToReply': '',
            'currentCommenterNameToReply': '',
            'currentCommenterGravaterToReply': ''
        });
      }
      else
      {
        this.setProperties({
          'isCommentDivShown': false,
          'isHideAddComment': true
        });
        $("div.container-full").css({"margin-top":"50px"});
      }
    },
    showAddComment: function(){
      this.set('isCommentDivShown', true);
      this.set('isHideAddComment', false);
      $("div.container-full").css({"margin-top":"0"});
    },
    
    // Editor tools
    ctv: function(input){
      var textarea = $('textarea');
      textarea.val(textarea.val() + input);
    },
    citv: function(input1, input2){
      var textarea = $('textarea');
      if (textarea.val() === ''){
        textarea.val(textarea.val() + input1);
      }else{
        textarea.val(textarea.val() + input2);
      }
    },
    insertBold: function(){
      this.send('ctv', " **bold** ");
    },
    insertItalic: function(){
      this.send('ctv', " *italic* ");
    },
    insertLink: function(){
      this.send('citv', "[Link description](http://example.com)", "\n [Link description](http://example.com)");
    },
    insertQuote: function(){
      this.send('ctv', "\n > your quote here");
    },
    insertCode: function(){
      this.send('citv', "`For inline code` \n\n\tFor pre code", "\n\n`For inline code` \n\n\tFor pre code");
    },
    insertOrderedlist: function(){
      this.send('ctv', "Indent one space after the dot \'.\'\n\n1. Ordered list1\n2. Ordered list2");
    },
    insertUnorderedlist: function(){
      this.send('ctv', "Indent one space after the + or -.\n\n- Unordered list1\n\t+ Nested list");
    },
    insertHorizontalrule: function(){
      this.send('citv', "-----\nNew line", "\n\n-----\nNew line");
    },
    insertStrikethrough: function(){
      this.send('ctv', "<del>Strike through</del>");
    },
    insertSubscript: function(){
      this.send('ctv', "Sub<sub>script</sub>");
    },
    insertSuperscript: function(){
      this.send('ctv', "Sub<sup>script</sup>");
    },
    insertHeading1: function(){
      this.send('citv', "# Heading1\n", "\n# Heading1\n");
    },
    insertHeading2: function(){
      this.send('citv', "# Heading2\n", "\n# Heading2\n");
    },
    insertHeading3: function(){
      this.send('citv', "# Heading3\n", "\n# Heading3\n");
    }
  }
});