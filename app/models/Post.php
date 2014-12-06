<?php

class Post extends Eloquent {
	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'posts';

	public $timestamps = false;
  /*
  |--------------------------------------------------------------------------
  | Scopes allow you to easily re-use query logic in your models.
  |--------------------------------------------------------------------------
  */
  public function scopeStatus($query){
    return $query->where('status', 1);
  }

  public function scopeOrderdesc($query){
    return $query->orderBy('id', 'desc');
  }

  public function scopePostid($query, $id){
    return $query->where('id', $id);
  }
  /*
  |--------------------------------------------------------------------------
  | Get title for newly loaded page
  |--------------------------------------------------------------------------
  */
  public static function singleTitle($postId){
      $getTitle = Post::select('title')
                      ->status()
                      ->postid($postId)
                      ->first();

      if(count($getTitle) > 0){
        return $getTitle->title;
      }else{
        return ;
      }
  }
	/*
  |--------------------------------------------------------------------------
  | Get post body for newly loaded page
  |--------------------------------------------------------------------------
  */
	public static function singlePostBody($postId){
	  $post = Post::select('body')
                      ->status()
                      ->postid($postId)
                      ->first();
                      
    if(count($post) > 0){
      return $post->body;
    }else{
      return ;
    }
	}
  /*
  |--------------------------------------------------------------------------
  | Get post body for meta description 200 letters
  |--------------------------------------------------------------------------
  */
  public static function metaDescription($postId){
    $post = Post::select(array('id', DB::raw('LEFT(body, 200) AS slicedBody')))
                      ->status()
                      ->postid($postId)
                      ->first();
                      
    if(count($post) > 0){
      return $post->slicedBody;
    }else{
      return ;
    }
  }
  /*
  |--------------------------------------------------------------------------
  | Get archive of all blog posts
  |--------------------------------------------------------------------------
  */
  public static function findArchive(){
    return Post::select(array('id', 'title', 'created', DB::raw('LEFT(body, 300) AS slicedBody')))
                  ->status()
                  ->orderdesc()
                  ->get();
  }
  /*
  |--------------------------------------------------------------------------
  | Update page views
  |--------------------------------------------------------------------------
  */
	public static function incrementPageView($id, $views){
		
      if( $views > 0 ){
        $pageView = $views + 1;
      }else{
        $pageView = 1;
      }

      $post = Post::find($id);

      $post->views = $pageView;
      
      $post->save();
	}
  /*
  |--------------------------------------------------------------------------
  | Get all blog posts
  |--------------------------------------------------------------------------
  */
  public static function findBlogPosts(){
    return Post::select(array('id', 'title', 'created', DB::raw('LEFT(body, 500) AS slicedBody')))
              ->status()
              ->orderdesc()
              ->get();
  }
  /*
  |--------------------------------------------------------------------------
  | Get blog post and it's comments
  |--------------------------------------------------------------------------
  */
  public static function postCommentsFunction($postId){
    return Post::select(array('id', 'title', 'body', 'created', 'views', DB::raw("(
            SELECT id FROM posts WHERE id < $postId AND status = 1 ORDER BY id DESC LIMIT 1
            ) AS previousId,(
            SELECT title FROM posts WHERE id < $postId AND status = 1 ORDER BY id DESC LIMIT 1
            ) AS prevTitle,(
            SELECT id FROM posts WHERE id > $postId AND status = 1 ORDER BY id ASC LIMIT 1
            ) AS nextId,(
            SELECT title FROM posts WHERE id > $postId AND status = 1 ORDER BY id ASC LIMIT 1
            ) AS nextTitle, (
            SELECT COUNT(id) FROM comments WHERE postId= $postId AND status = 1
            ) AS commentsLength"))
        )
        ->status()
        ->postid($postId)
        ->first();
  }
    /*
    |--------------------------------------------------------------------------
    | Add new post as published
    |--------------------------------------------------------------------------
    |
    | This function insert newly created blog post in database with
    | status: '1' => 'published'.
    |
    */
    public static function saveNewBlogPost($title, $body, $dateTime){
      $post = new Post;
      $post->title   = $title;
      $post->body    = $body;
      $post->status  = 1;
      $post->created = $dateTime;
      $post->save();
    }
    /*
    |--------------------------------------------------------------------------
    | Add new post as draft
    |--------------------------------------------------------------------------
    |
    | This function insert newly created blog post in database with
    | status: '0' => 'draft'.
    |
    */
    public static function saveNewBlogPostAsDraft($title, $body, $dateTime){
      $post = new Post;
      $post->title   = $title;
      $post->body    = $body;
      $post->status  = 0;
      $post->created = $dateTime;
      $post->save();
    }
}
