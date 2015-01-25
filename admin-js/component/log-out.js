/*
 |---------------------------
 | Log out Component
 |---------------------------
*/
Exyht.LogOutComponent = Ember.Component.extend({
	actions: {
		logOut: function(){
			$.post( Exyht.BaseUrl+"/logout", function( data ) {
				if(data === 'true'){
					window.location.replace(Exyht.BaseUrl+'/login');
				}
			});
		}
	}
});