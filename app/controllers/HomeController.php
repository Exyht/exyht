<?php
use \Michelf\MarkdownExtra;
class HomeController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/
    /*
    |--------------------------------------------------------------------------
    | Get Markdown
    |--------------------------------------------------------------------------
    */
    public function getMarkdown($value)
    {
      return MarkdownExtra::defaultTransform($value);
    }

    /*
    |--------------------------------------------------------------------------
    | Get HtmlPurifier
    |--------------------------------------------------------------------------
    */
    public function getHtmlPurifier($value)
    {

      require_once('/libraries/php/htmlpurifier/library/HTMLPurifier.auto.php');
      
      $config   = HTMLPurifier_Config::createDefault();
      $purifier = new HTMLPurifier($config);

      return $purifier->purify($value);
    }

    /*
    |--------------------------------------------------------------------------
    | Get Gravater url
    |--------------------------------------------------------------------------
    */
    public function getGravaterUrl($email)
    {
        return md5( strtolower( trim($email) ) ); 
    }
    /*
    |--------------------------------------------------------------------------
    | Create slug using title
    |--------------------------------------------------------------------------
    */
    public function titleSlug($value)
    {
       return strtolower(preg_replace('/\s+/i', '-', preg_replace('/[^A-Za-z0-9\s+]/i', '', substr($value, 0, 60))));
    }
    /*
    |--------------------------------------------------------------------------
    | Get blog settings data
    |--------------------------------------------------------------------------
    */  
    public function getBlogSettings()
    {
      return Blogsetting::findBlogSetting();
    }
    /*
    |--------------------------------------------------------------------------
    | Get first image
    |--------------------------------------------------------------------------
    */
    protected function catchFirstImage($post) {

      $dom = new DOMDocument();
      $dom->loadHtml($post);
      $imgTags = $dom->getElementsByTagName('img');

      if ($imgTags->length > 0) {
        $imgElement = $imgTags->item(0);
        return '<img src="'.$imgElement->getAttribute('src').'">';
      } else {
        return $post;
      }
    }
    /*
    |--------------------------------------------------------------------------
    | View home page with data
    |--------------------------------------------------------------------------
    */
	  public function showWelcome()
    {
      $SettingController = new SettingController();
      $rom = self::getBlogSettings();
      $data = array(
           'title'            => "Blog",
           'meta_description' => "A blog",
           'postId'           => '',
           'has_logo'         => (User::findLogo()->logo !== '')?'true':'false',
           'logo'             => (User::findLogo()->logo !== '')?User::findLogo()->logo:'',
           'blog_name'        => self::getHtmlPurifier($rom->blog_name),
           'blog_subtitle'    => self::getHtmlPurifier($rom->subtitle),
           'read_only_mode'   => ($rom->read_only_mode == 0)?'false':'true',
           'has_cmnt_feature' => ($rom->has_cmnt_feature == 0)?'false':'true',
           'has_navbar'       => ($rom->has_navbar == 0)?'false':'true',
           'blog_style'       => json_decode($SettingController->getBlogStyle()),
           'blog_links'       => json_encode(Bloglink::findBlogLink()),
           'sidebar_info'     => self::getSidebarInfo()
        );
	 	  return View::make('layout.main')->with($data);
	  }
    /*
    |--------------------------------------------------------------------------
    | View home page with data when routed with post id & slug
    |--------------------------------------------------------------------------
    */
    public function showWelcomeWithParameters($slug, $postId)
    {

      $SettingController = new SettingController();
      $rom = self::getBlogSettings();

      if(!empty($postId))
      {
        $title    = self::getSingleTitle($postId);
        $postBody = self::getSinglePostBody($postId);
      }
      else
      {
        $title    = "Blog";
        $postBody = "";
      }

      $data = array(
          'title'            => self::getHtmlPurifier($title),
          'meta_description' => self::getHtmlPurifier(Post::metaDescription($postId)),
          'postBody'         => self::getHtmlPurifier($postBody),
          'postId'           => $postId,
          'has_logo'         => (User::findLogo()->logo !== '')?'true':'false',
          'logo'             => (User::findLogo()->logo !== '')?User::findLogo()->logo:'',
          'blog_name'        => self::getHtmlPurifier($rom->blog_name),
          'blog_subtitle'    => self::getHtmlPurifier($rom->subtitle),
          'read_only_mode'   => ($rom->read_only_mode == 0)?'false':'true',
          'has_cmnt_feature' => ($rom->has_cmnt_feature == 0)?'false':'true',
          'has_navbar'       => ($rom->has_navbar == 0)?'false':'true',
          'blog_style'       => json_decode($SettingController->getBlogStyle()),
          'blog_links'       => json_encode(Bloglink::findBlogLink()),
          'sidebar_info'     => self::getSidebarInfo()
      );

      return View::make('layout.main')->with($data);
    }
    /*
    |--------------------------------------------------------------------------
    | Get title for newly loaded page
    |--------------------------------------------------------------------------
    */
    public function getSingleTitle($postId)
    {
      if(!empty($postId))
      {

        $title = Post::singleTitle($postId);

        if($title)
        {
          return self::getHtmlPurifier($title);
        } 
      }
    }
    /*
    |--------------------------------------------------------------------------
    | Get title for newly loaded page in json
    |--------------------------------------------------------------------------
    */
    public function getPostTitle($postId)
    {
      $data = array(
          "id"    => $postId,
          "title" => self::getSingleTitle($postId)
        );
      return json_encode($data);
    }
    /*
    |--------------------------------------------------------------------------
    | Get post body for newly loaded page
    |--------------------------------------------------------------------------
    */
    public function getSinglePostBody($postId)
    {
      if(!empty($postId))
      {

        $post = Post::singlePostBody($postId);

        if($post)
        {
          return self::getHtmlPurifier(self::getMarkdown($post));
        } 
      }
    }
    /*
    |--------------------------------------------------------------------------
    | Get comments for newly loaded page
    |--------------------------------------------------------------------------
    */
    public function getOnlyComments($postId)
    {
      if(!empty($postId) || $postId !== '')
      {

        $comments = Comment::findComments($postId);

        if(!$comments->isEmpty())
        {            
          foreach ($comments as $commentkey => $c)
          {
          
            $quiz[] =  array(
                "id"        => $c->id,
                "name"      => self::getHtmlPurifier($c->name),
                "email"     => self::getGravaterUrl($c->email),
                "comment"   => self::getHtmlPurifier(self::getMarkdown($c->comment)),
                "cdate"     => $c->date
            );
          }
        return json_encode($quiz);
        }
      }            
    }
    /*
    |--------------------------------------------------------------------------
    | Get archive of all blog posts
    |--------------------------------------------------------------------------
    */
    public function getArchive()
    {

      $posts = Post::findArchive();

      if(!$posts->isEmpty())
      { 
        $dom = new DOMDocument();
        foreach ($posts as $post)
        {
          $dom->loadHtml(self::getMarkdown($post->slicedBody));
          $imgTags = $dom->getElementsByTagName('img');

          $quiz[] = array(
            "id"        => $post->id,
            "title"     => self::getHtmlPurifier($post->title),
            "created"   => $post->created,
            "has_img"   => ($imgTags->length > 0)?true:false,
            "first_img" => ($imgTags->length > 0)?self::getHtmlPurifier(self::catchFirstImage(self::getMarkdown($post->slicedBody))):''
          );
        }
        return $quiz;
      }
    }
    /*
    |--------------------------------------------------------------------------
    | Get about Author
    |--------------------------------------------------------------------------
    */
    public function getAboutAuthor()
    {

      $user = User::aboutAuthor();

      if(empty($user->image) || $user->image == null)
      {
        $image = false;
      }
      else
      {
        $image = $user->image;
      }

      if(empty($user->about) || $user->about == null)
      {
        $about = $user->username;
      }
      else
      {
        $about = $user->about;
      }              

      $quiz = array(
          "id"          => $user->id,
          "hashedEmail" => "http://www.gravatar.com/avatar/".self::getGravaterUrl($user->email)."?s=170",
          "about"       => self::getHtmlPurifier(self::getMarkdown($about)),
          "image"       => $image
        );
      return $quiz;
    }
    /*
    |--------------------------------------------------------------------------
    | Get Side bar info
    |--------------------------------------------------------------------------
    */
    public function getSidebarInfo()
    {
      $quiz['sidebar_info'] = array(
          "author"    =>  self::getAboutAuthor(),
          "archive"   =>  self::getArchive()
        );
      return json_encode($quiz);
    }
    /*
    |--------------------------------------------------------------------------
    | Get all blog posts
    |--------------------------------------------------------------------------
    */
    public function getBlogPosts()
    {

      $posts = Post::findBlogPosts();
      if(!$posts->isEmpty())
      {
        foreach ($posts as $post)
        {

          $title  = self::getHtmlPurifier($post->title);
          //$body   = self::getHtmlPurifier(self::getMarkdown($post->slicedBody));
          $body   = self::getHtmlPurifier(self::catchFirstImage(self::getMarkdown($post->slicedBody)));

          $quiz['posts'][] = array(
            "id"        =>  $post->id,
            "title"     =>  $title,
            "body"      =>  $body,
            "created"   =>  $post->created,
            "no_post"   =>  false,
          );
        }
        return $quiz;
      }
      else
      {
        $quiz['posts'][] = array(
            "id"        =>  1,
            "title"     =>  'No posts!',
            "body"      =>  'No post is posted!',
            "no_post"   =>  true,
          );
        return $quiz;
      }
    }
    /*
    |--------------------------------------------------------------------------
    | Get all blog posts for noscript tag
    |--------------------------------------------------------------------------
    */
    public function getBlogPostsForNoScript()
    {

      $posts = Post::findBlogPosts();

      if(!$posts->isEmpty())
      {
        foreach ($posts as $post)
        {

          $title   = self::getHtmlPurifier($post->title);
          $body    = self::getHtmlPurifier(self::getMarkdown($post->slicedBody));
          $postUrl = self::titleSlug($title)."/".$post->id;

          $quiz[] = array(
            "id"        =>  $post->id,
            "title"     =>  $title,
            "body"      =>  $body,
            "postUrl"   =>  $postUrl
          );
        }
        return json_encode($quiz);
      }
    }
    /*
    |--------------------------------------------------------------------------
    | Update page views
    |--------------------------------------------------------------------------
    */
    private function addPageViews($postId, $views)
    {
      Post::incrementPageView($postId, $views);
    }
    /*
    |--------------------------------------------------------------------------
    | Get blog post and it's comments
    |--------------------------------------------------------------------------
    */
    private function getPostCommentsFunction($rawPostId, $bool)
    {
      // Allow only numeric integer characters
      $rawPostId = (int)$rawPostId;
      $rawPostId = preg_replace("/[^0-9]/","",$rawPostId);

      $singlePost = Post::postCommentsFunction($rawPostId);
        
        if(count($singlePost) == 1)
        {
          // Update page views
          if($bool === true)
          {
            self::addPageViews($rawPostId, $singlePost->views);
          }
        
          // if any comments made, return true
          if($singlePost->commentsLength > 0)
          {
            $commentsLength = true;
          }
          else
          {
            $commentsLength = false;
          }

        $postTitle     = self::getHtmlPurifier($singlePost->title);
        $postBody      = self::getHtmlPurifier(self::getMarkdown($singlePost->body));
        $prevTitle     = self::getHtmlPurifier($singlePost->prevTitle);
        $nextTitle     = self::getHtmlPurifier($singlePost->nextTitle);
        $prevTitleSlug = self::titleSlug($prevTitle);
        $nextTitleSlug = self::titleSlug($nextTitle);
        
        // for first post, display only next link, pagination purpose
        if($singlePost->previousId == 0 && $singlePost->nextId != $singlePost->id)
        {

          $p_quiz       = array(
          "id"              =>  $singlePost->id,
          "title"           =>  $postTitle,
          "post"            =>  $postBody,
          "created"         =>  $singlePost->created,
          "views"           =>  $singlePost->views,
          "nextId"          =>  $singlePost->nextId,
          "nextTitle"       =>  $nextTitle,
          "nextTitleSlug"   =>  $nextTitleSlug,
          "isNextId"        =>  (empty($singlePost->nextId))?false:true,
          "commentsLength"  =>  $commentsLength,
          "comments"        =>  array()
          );
        }
        elseif(($singlePost->nextId > $singlePost->id) && ($singlePost->previousId < $singlePost->id))
        {
        // display both previous & next post links, pagination purpose
          $p_quiz     = array(
          "id"              =>  $singlePost->id,
          "title"           =>  $postTitle,
          "post"            =>  $postBody,
          "created"         =>  $singlePost->created,
          "views"           =>  $singlePost->views,
          "previousId"      =>  $singlePost->previousId,
          "prevTitle"       =>  $prevTitle,
          "prevTitleSlug"   =>  $prevTitleSlug,
          "isPrevId"        =>  true,
          "nextId"          =>  $singlePost->nextId,
          "nextTitle"       =>  $nextTitle,
          "nextTitleSlug"   =>  $nextTitleSlug,
          "isNextId"        =>  true,
          "commentsLength"  =>  $commentsLength,
          "comments"        =>  array()
          );
        }
        else
        {
        // for last post, display only previous link, pagination purpose
          $p_quiz     = array(
          "id"              =>  $singlePost->id,
          "title"           =>  $postTitle,
          "post"            =>  $postBody,
          "created"         =>  $singlePost->created,
          "views"           =>  $singlePost->views,
          "previousId"      =>  $singlePost->previousId,
          "prevTitle"       =>  $prevTitle,
          "prevTitleSlug"   =>  $prevTitleSlug,
          "isPrevId"        =>  true,
          "commentsLength"  =>  $commentsLength,
          "comments"        =>  array()
          );
        }
        }
      $comments = Comment::findComments($rawPostId);
    
      if(!$comments->isEmpty())
      {
        foreach ($comments as $commentkey => $c)
        {
          
          $p_quiz['comments'][] =  array(
                "id"               => $c->id,
                "name"             => self::getHtmlPurifier($c->name),
                "email"            => self::getGravaterUrl($c->email),
                "comment"          => self::getHtmlPurifier(self::getMarkdown($c->comment)),
                "cdate"            => $c->date,
                "isFlagged"        => ($c->status === 2)?true:false,
                "replyToComment"   => array()
          );
          
          if($c->reply_to_id > 0)
          {

            $getReplyToComment = Comment::findReplyToComment($c->reply_to_id);

            $p_quiz['comments'][$commentkey]['replyToComment'] =  array(
               "commentHasReply" => true,
               "id"              => $c->reply_to_id,
               "name"            => $getReplyToComment->name,
               "email"           => self::getGravaterUrl($getReplyToComment->email)
            );
          }
        }
      }
      
      return $p_quiz;

    }

    // For API
    public function getPostComments($postId)
    {
      if(!empty($postId))
      {
        return self::getPostCommentsFunction($postId, true);
      }
    }
    // For Noscript
    public function getPostCommentsForMainPage($postId)
    {
      if(!empty($postId))
      {
        return self::getPostCommentsFunction($postId, false);
      }
    }
    /*
    |--------------------------------------------------------------------------
    | View all blog posts inside noscript tag
    |--------------------------------------------------------------------------
    */
    public function noScriptPosts($value)
    {

      if(!empty($value))
      {

        $noScriptPosts = "";
  
        foreach ($value as $blogpost)
        {
          $noScriptPosts .= '<a href="'.Request::url().'/post/'.$blogpost->postUrl.'">'.$blogpost->title.'</a>';
          $noScriptPosts .= $blogpost->body."<hr />\n";
        }
  
        return $noScriptPosts;
      }
    }
    /*
    |--------------------------------------------------------------------------
    | View all comments inside noscript tag
    |--------------------------------------------------------------------------
    */
    public function noScriptComments($value)
    {
      
      if(!empty($value))
      {
        $noScriptComments = "";
  
        foreach ($value as $comments)
        {
          $noScriptComments .= '<div class="media"><div class="media-body"><h5 class="media-heading">';
          $noScriptComments .= "<strong>".$comments->name."</strong>\n";
          $noScriptComments .= '<div class="pull-right">'.$comments->cdate.'</div></h5>';
          $noScriptComments .= $comments->comment."</div></div>\n";
        }
        return $noScriptComments;
      }
    }
}
