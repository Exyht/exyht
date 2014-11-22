Ember.Handlebars.helper('format-markdown', function(input) {

// Add this part
   if (typeof input == 'undefined')  return;
   
var markdown = new Markdown.getSanitizingConverter();

emoji.sheet_path = Exyht.PathToLibraries+'/libraries/js/sheet_twitter_72.png';
emoji.use_sheet = true;

// show the short-name as a `title` attribute for css/img emoji
emoji.include_title = true;
emoji.init_env();

function urlX(url) { if(/^https?:\/\//.test(url)) { return url; }}
  
   return new Ember.Handlebars.SafeString(emoji.replace_colons(html_sanitize(markdown.makeHtml(input), urlX)));
});