<?php

class Comment extends Eloquent {
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'comments';

	public $timestamps = false;
    /*
    |--------------------------------------------------------------------------
    | Scopes allow you to easily re-use query logic in your models.
    |--------------------------------------------------------------------------
    */
    public function scopeStatus($query)
    {
      return $query->where('status', 1);
    }

    public function scopePostid($query, $id)
    {
      return $query->where('postId', $id);
    }

	public static function findComments($postId)
    {
		return Comment::select('id','name','email','comment', 'date', 'reply_to_id', 'status')
                        ->postid($postId)
                        ->whereIn('status', array(1, 2))
                        ->get();
	}

	public static function findReplyToComment($id)
    {
		return Comment::select('id','name','email')
                        ->where('id', $id)
                        ->whereIn('status', array(1, 2))
                        ->first();
	}
    // Count total `new` comments for a single `post`
    public static function countNewCommentForSinglePost($id)
    {
    	return Comment::where('seen', 0)
                        ->postid($id)
                        ->count();
    }

    // Count total `new` comments for a single `post`
    public static function countFlaggedCommentForSinglePost($id)
    {
        return Comment::where('status', 2)
                        ->postid($id)
                        ->count();
    }

    public static function findBannedIp($ip)
    {
        return Comment::where('ip_address', $ip)
                        ->where('ip_ban', 1)
                        ->count();
    }
}