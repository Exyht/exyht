<?php

class Blogsetting extends Eloquent {
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'blogsettings';

	public $timestamps = false;

	public static function findBlogSetting(){
        return Blogsetting::find(1);
	}

	public static function updateCommonTask($field, $value){
        $settings = Blogsetting::find(1);
        $settings->$field = $value;
        $settings->save();
	}
}