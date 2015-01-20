/*
 |------------------
 | Index Controller
 |------------------
*/
Exyht.IndexController = Ember.ObjectController.extend({
  loadingOn: false,
  actions: {
      changeNameSubtitle: function(value1, value2){
        var sdata = {};
        if (value1 === 1)
        {
          var blogName = this.get('blog_name');
          sdata = { blog_name: blogName };
        }
        else if(value1 === 2)
        {
          var blogSubtitle = this.get('blog_subtitle');
          sdata = { blog_subtitle: blogSubtitle };
        }
        
        this.set('loadingOn', true);
        
        var self = this;
        return $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/"+value2,
          data: sdata,
          success: function(msg){
            self.set('loadingOn', false);
            console.log(msg);
            alert(msg);
          }
        });
      },
      changeBlogName: function(){
        this.send('changeNameSubtitle', 1, 'changeBlogName');
      },
      changeSubtitle: function(){
        this.send('changeNameSubtitle', 2, 'changeSubtitle');
      },
      changeModeFeature: function(value1, value2, value3){
        this.set(value1, value2);
        return $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/"+value3,
          success: function(msg){
            console.log(msg);
            alert(msg);
          }
        });
      },
      turnReadOnlyModeOn: function(){
        this.send('changeModeFeature', 'read_only_mode', true, 'turnReadOnlyModeOn');
      },
      turnReadOnlyModeOff: function(){
        this.send('changeModeFeature', 'read_only_mode', false, 'turnReadOnlyModeOff');
      },
      turnCommentFeatureOn: function(){
        this.send('changeModeFeature', 'has_cmnt_feature', true, 'turnCommentFeatureOn');
      },
      turnCommentFeatureOff: function(){
        this.send('changeModeFeature', 'has_cmnt_feature', false, 'turnCommentFeatureOff');
      },
      turnNavbarOn: function(){
        this.send('changeModeFeature', 'has_navbar', true, 'turnNavbarOn');
      },
      turnNavbarOff: function(){
        this.send('changeModeFeature', 'has_navbar', false, 'turnNavbarOff');
      },
      addNewLink: function(value){
        var linkName = this.get('link_name');
        var linkUrl  = this.get('link_url');

        if(!linkName || !linkUrl)
        {
          return false;
        }

        this.set('loadingOn', true);

        var self = this;

        return $.ajax({
          type: "POST",
          url: Exyht.BaseUrl+"/"+value,
          data: { link_name: linkName, link_url: linkUrl},
          dataType: "json",
          success: function(msg){
            self.set('loadingOn', false);
            if(msg.has_error === false)
            {
              self.set('link_name', '');
              self.set('link_url', '');
              self.get('blog_links').pushObject({
                link_name: linkName,
                link_url: linkUrl,
                status: true,
                is_blog_url: true
              });
            }
            console.log(msg.message);
            alert(msg.message);
          }
        });
      },
      addNavLink: function(){
        this.send('addNewLink', 'addNavLink');
      },
      addElseLink: function(){
        this.send('addNewLink', 'addElseLink');
      }
  }
});