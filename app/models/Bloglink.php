<?php

class Bloglink extends Eloquent {
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'bloglinks';

	public $timestamps = false;

	public static function findBlogLink()
	{
        return Bloglink::where('status', 1)->get();
	}

	public static function saveNewLink($link_name, $link_url, $type)
	{
		$link = new Bloglink;
		$link->link_name = $link_name;
		$link->url       = $link_url;
		$link->status    = 1;

		if($type == 1)
		{
			$link->navUrl = 1;
		}
		elseif($type == 2)
		{
			$link->elseUrl = 1;
		}

		$link->save();
	}

	public static function changeLinkStatus($link_id)
	{
        $link = Bloglink::find($link_id);
        $link->status = 0;
        $link->save();
	}
}