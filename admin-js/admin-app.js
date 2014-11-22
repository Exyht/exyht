window.Exyht = Ember.Application.create({});

Exyht.deferReadiness();

Exyht.BaseUrl = '/blog/admin-page';
Exyht.gravatarVersion = 'identicon';
Exyht.currentBaseUri = window.location.protocol+"//"+window.location.hostname+Exyht.BaseUrl;

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

