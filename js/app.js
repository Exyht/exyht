/*
 |---------------
 | Exyht App
 |---------------
*/
window.Exyht = Ember.Application.create({
    currentPath: '',
    BaseURL: '/blog/',
    gravatarVersion: 'identicon'
});
// Defer Readiness
Exyht.deferReadiness();
// Get hostname with protocol and port
var hostnameWithProtocolPort = window.location.protocol+"//"+window.location.hostname+(window.location.port ? ':' + window.location.port: '');
Exyht.currentBaseUri = hostnameWithProtocolPort+Exyht.BaseURL;
// this function add css in the dom
function addCss(cssString) {
  try{
    var head = document.getElementsByTagName('head')[0];

    var newCss = document.createElement('style');
    newCss.type = "text/css";
    newCss.innerHTML = cssString;
    head.appendChild(newCss);
  } catch(err) { return; }
} 
// Get current year	
var currentDate = new Date();
Exyht.currentYear = currentDate.getFullYear();
// Add x-csrf-token to all ajax request
$.ajaxSetup({
    headers: {
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
});
        
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));