<?php
/*
|--------------------------------------------------------------------------
| Application Installer Routes
|--------------------------------------------------------------------------
| After installation completed, encapsule the Installer Routes inside 
| comments. /**/
//
Route::get('/installer', function()
{
  return View::make('layout.blog-install');
});
Route::group(array('before' => 'csrf'), function()
{
  Route::post('install/blog_settings', 'InstallerController@createBlogSettingsTable');
  Route::post('install/users', 'InstallerController@createUsersTable');
  Route::post('install/posts', 'InstallerController@createPostsTable');
  Route::post('install/comments', 'InstallerController@createCommentsTable');
  Route::post('install/bloglinks', 'InstallerController@createBloglinksTable');
  Route::post('install/signup', 'InstallerController@createAccount');
  Route::post('install/resetInstaller', 'InstallerController@resetInstaller');
});
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
Route::get('/', 'HomeController@showWelcome');

Route::get('getPostTitle/{postId}', 'HomeController@getPostTitle')->where('postId', '[0-9]+');

Route::get('getBlogPosts', 'HomeController@getBlogPosts');

Route::get('post/{slug}/{postId}', 'HomeController@showWelcomeWithParameters')->where('postId', '[0-9]+');

Route::get('postComments/{postId}', 'HomeController@getPostComments')->where('postId', '[0-9]+');

Route::group(array('before' => 'csrf'), function()
{
  Route::post('flagComment', 'CommentController@flagComment');

  Route::post('addComment', function()
  {
	 return View::make('actions.addNewComment');
  });
});

/*
|--------------------------------------------------------------------------
| Admin Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
Route::group(array('before' => 'auth'), function()
{
  Route::get('admin-page', 'AdminController@showAdminpage');

  Route::get('admin-page/getProfileInfo', 'AdminController@getProfileInfo');

  Route::get('admin-page/typeblogpost', 'AdminController@showAdminpage');

  Route::get('admin-page/uisettings', 'AdminController@showAdminpage');

  Route::get('admin-page/profilesetting', 'AdminController@showAdminpage');

  Route::get('admin-page/comments/{postId}', 'AdminController@showAdminpage')->where('postId', '[0-9]+');

  Route::get('admin-page/getBlogPosts', 'AdminController@getBlogPostsForAdmin');

  Route::get('admin-page/getOnlyPostBody/{postId}', 'AdminController@getOnlyPostBody')->where('postId', '[0-9]+');

  Route::get('admin-page/getComments/{postId}', 'CommentController@getComments')->where('postId', '[0-9]+');
});

Route::group(array('before' => 'auth|admin-csrf'), function()
{ 
  Route::post('admin-page/changeBlogName', 'SettingController@changeBlogName');

  Route::post('admin-page/changeSubtitle', 'SettingController@changeSubtitle');

  Route::post('admin-page/turnReadOnlyModeOn', 'SettingController@turnReadOnlyModeOn');

  Route::post('admin-page/turnReadOnlyModeOff', 'SettingController@turnReadOnlyModeOff');

  Route::post('admin-page/turnCommentFeatureOn', 'SettingController@turnCommentFeatureOn');

  Route::post('admin-page/turnCommentFeatureOff', 'SettingController@turnCommentFeatureOff');

  Route::post('admin-page/turnNavbarOn', 'SettingController@turnNavbarOn');

  Route::post('admin-page/turnNavbarOff', 'SettingController@turnNavbarOff');

  Route::post('admin-page/addNavLink', 'SettingController@addNavLink');

  Route::post('admin-page/addElseLink', 'SettingController@addElseLink');

  Route::post('admin-page/removeLink', 'SettingController@removeLink');

  Route::post('admin-page/removeComment/{commentId}', 'CommentController@removeComment')->where('commentId', '[0-9]+');

  Route::post('admin-page/banIp/{ipAddress}', 'CommentController@banIp')->where('ipAddress', '[A-Za-z0-9.:]+');

  Route::post('admin-page/removeFlag/{commentId}', 'CommentController@removeFlag')->where('commentId', '[0-9]+');

  Route::post('admin-page/markAsSeen/{commentId}', 'CommentController@markAsSeen')->where('commentId', '[0-9]+');

  Route::post('admin-page/removeProfileImage', 'ProfileController@removeProfileImage');

  Route::post('admin-page/saveProfileEdit', 'ProfileController@saveProfileEdit');

  Route::post('admin-page/changePassword', 'ProfileController@changePassword');

  Route::post('admin-page/createNewPost', function()
  {
  	return View::make('actions.addNewPost');
  });
  
  Route::post('admin-page/createNewDraft', function()
  {
  	return View::make('actions.addNewPostDraft');
  });
  
  Route::post('admin-page/saveEdit', function()
  {
  	return View::make('actions.saveEditedPost');
  });
  
  Route::post('admin-page/changeColor', function()
  {
  	return View::make('actions.changeColor');
  });
  
  Route::post('admin-page/changeFontFamily', 'SettingController@changeFontFamily');

  Route::post('admin-page/logout', function()
  {
    Auth::logout();
    return 'true';
  });

});

Route::group(array('before' => 'auth|non-ajax-csrf'), function()
{
  Route::post('admin-page/uploadImage', 'AdminController@uploadImage');

  Route::post('admin-page/uploadProfileImage', 'ProfileController@uploadProfileImage');
});

Route::group(array('before' => 'non-ajax-csrf'), function()
{
  Route::post('admin-page', 'AdminController@loginUser');
});

Route::get('admin-page/login', function()
{
  if (Auth::check())
  {
    return Redirect::to('admin-page');
  }
  else
  {
    return View::make('admin-layout.admin-login');
  }
});

