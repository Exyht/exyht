<?php

/*
|--------------------------------------------------------------------------
| Application & Route Filters
|--------------------------------------------------------------------------
|
| Below you will find the "before" and "after" events for the application
| which may be used to do any work before or after a request into your
| application. Here you may also register your custom route filters.
|
*/

App::before(function($request)
{
	//
});


App::after(function($request, $response)
{
	//
});

/*
|--------------------------------------------------------------------------
| Authentication Filters
|--------------------------------------------------------------------------
|
| The following filters are used to verify that the user of the current
| session is logged into this application. The "basic" filter easily
| integrates HTTP Basic authentication for quick, simple checking.
|
*/

Route::filter('auth', function()
{
	if (Auth::guest())
	{
		if (Request::ajax())
		{
			return Response::make('Unauthorized', 401);
		}
		else
		{
			return Redirect::guest('admin-page/login');
		}
	}
});


Route::filter('auth.basic', function()
{
	return Auth::basic();
});

/*
|--------------------------------------------------------------------------
| Guest Filter
|--------------------------------------------------------------------------
|
| The "guest" filter is the counterpart of the authentication filters as
| it simply checks that the current user is not logged in. A redirect
| response will be issued if they are, which you may freely change.
|
*/

Route::filter('guest', function()
{
	if (Auth::check()) return Redirect::to('/');
});

/*
|--------------------------------------------------------------------------
| CSRF Protection Filter
|--------------------------------------------------------------------------
|
| The CSRF filter is responsible for protecting your application against
| cross-site request forgery attacks. If this special token in a user
| session does not match the one given in this request, we'll bail.
|
*/

Route::filter('admin-csrf', function($route, $request)
{
	if (strtoupper($request->getMethod()) === 'GET')
    {
        return; // get requests are not CSRF protected
    }
    if (Request::ajax())
    {
        $admin_token = $request->header('Admin-X-CSRF-Token');

        if (Session::get('admin-token') != $admin_token)
        {
	        //throw new Illuminate\Session\TokenMismatchException;
    	    return 'Oops! CSRF Token Mismatch!';
        }
    }
});

Route::filter('non-ajax-csrf', function()
{
    $token = Input::get('non_ajax_token');

    if (Session::get('admin-token') != $token)
    {
    //throw new Illuminate\Session\TokenMismatchException;
        return 'Oops! CSRF Token Mismatch!';
    }
});

Route::filter('csrf', function($route, $request)
{
    if (strtoupper($request->getMethod()) === 'GET')
    {
        return; // get requests are not CSRF protected
    }

    $token = $request->header('X-CSRF-Token');

    if (Session::token() != $token)
    {
	//throw new Illuminate\Session\TokenMismatchException;
    	$err_msg = array(
                'error_msg' => 'Oops! CSRF Token Mismatch!'
            );
        return json_encode($err_msg);
    }
});
/*
|--------------------------------------------------------------------------
| Show Error if Could not connect to Database
|--------------------------------------------------------------------------
| If connecting to Database fails, You will get following error message.
|
*/
App::error(function(PDOException $exception)
{
    Log::error("Error connecting to database: ".$exception->getMessage());
    return "Error connecting to database";
});