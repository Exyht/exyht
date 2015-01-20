window.Exyht = Ember.Application.create({
	currentPath: '',
});

Exyht.deferReadiness();

Exyht.BaseUrl = '/blog/admin-page';
Exyht.gravatarVersion = 'identicon';
Exyht.hostnameWithProtocolPort = window.location.protocol+"//"+window.location.hostname+(window.location.port ? ':' + window.location.port: '');
Exyht.currentBaseUri = Exyht.hostnameWithProtocolPort+Exyht.BaseUrl;

function showLoading(){
 	var loadingDiv = $('#loadingDiv');
 	loadingDiv.show();
}

function showImgLoading(){
 	var imgLoadingDiv = $('#imgLoadingDiv');
 	imgLoadingDiv.show();
}

$.ajaxSetup({
    headers: {
        'Admin-X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
});

