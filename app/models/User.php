<?php

use Illuminate\Auth\UserTrait;
use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableTrait;
use Illuminate\Auth\Reminders\RemindableInterface;

class User extends Eloquent implements UserInterface, RemindableInterface {

	use UserTrait, RemindableTrait;

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'users';

	/**
	 * The attributes excluded from the model's JSON form.
	 *
	 * @var array
	 */
	protected $hidden = array('password', 'remember_token');

	/*
    |--------------------------------------------------------------------------
    | Scopes allow you to easily re-use query logic in your models.
    |--------------------------------------------------------------------------
    */
    public function scopeUserid($query){
       return $query->where('id', 1);
    }

    /*
    |--------------------------------------------------------------------------
    | Get about Author
    |--------------------------------------------------------------------------
    */
    public static function aboutAuthor(){
       return User::find(1);
    }

    public static function findPassword(){
    	return User::select('password')
                ->userid()
                ->first();
    }

    public static function findLogo(){
      return User::select('logo')
                ->userid()
                ->first();
    }

    public static function saveNewPassword($new_password){
        User::userid()
                  ->update(array(
                      'password' => Hash::make($new_password)
                    )
                  );
    }

    public static function saveAbout($about){
    	User::userid()
                  ->update(array(
                      'about' => $about
                    )
                  );
    }
}
