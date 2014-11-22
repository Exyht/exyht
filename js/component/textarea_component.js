Exyht.AutoExpandingTextAreaComponent = Ember.TextArea.extend({
  didInsertElement: function(){
 
    Ember.run.next(function() {
      var isInCode = false;
      function check(text) {
          var match;
          match = text.match(/`{3,}/g);
          if (match && match.length % 2) {
              isInCode = true;
          } else {
              match = text.match(/`/g);
              if (match && match.length % 2) {
                  isInCode = true;
              } else {
                  isInCode = false;
              }
          }
      }
      // Focus the text area
      this.$().focus();
        
      this.$().textcomplete([
          { // emoji strategy
        match: /\B:([\-+\w]*)$/,
        search: function (term, callback) {
            callback($.map(emojies, function (emoji) {
                return emoji.indexOf(term) === 0 ? emoji : null;
            }));
        },
        template: function (value) {
            emoji.sheet_path = Exyht.PathToLibraries+'/libraries/js/sheet_twitter_72.png';
            emoji.use_sheet = true;

            // show the short-name as a `title` attribute for css/img emoji
            emoji.include_title = true;
            emoji.init_env();
            return new Ember.Handlebars.SafeString(emoji.replace_colons(':'+value.toLowerCase()+':') +' :'+ value+':');
        },
        replace: function (value) {
            return ':' + value + ': ';
        },
        index: 1,
        context: function (text) {
            check(text);
            return !isInCode;
        }
    },
        { // words strategy
        match: /\b(\w{2,})$/,
        search: function (term, callback) {
            callback($.map(words, function (word) {
                return word.indexOf(term) === 0 ? word : null;
            }));
        },
        index: 1,
        replace: function (word) {
            return word + ' ';
        },
        context: function () { return isInCode; }
    }
]);

  this.$().scroll(function() {

      var scroll = $(this).scrollTop();

      if(scroll === 0){
        scroll  = scroll;
      }else{
        scroll += 5; 
      }

      $('div#typingCommentDiv').stop().animate({ scrollTop: scroll }, 500);
  });

  }.bind(this));
}
});