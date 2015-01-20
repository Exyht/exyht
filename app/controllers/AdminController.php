<?php

class AdminController extends BaseController {
   
    public function showAdminpage(){
      return View::make('admin-layout.admin-main');
    }
    
    public function loginUser(){

        $email    = Input::get('email');
        $password = Input::get('password');
        /*
        |--------------------------------------------------------------------------
        | Validate fields
        |--------------------------------------------------------------------------
        */
        $messages = array(
          'required'   => 'The :attribute field is required.',
          'email'      => 'The :attribute must be valid',
          'min'        => 'The :attribute must have :min characters'
        );

        $validator = Validator::make(
          array(
            'password' => $password,
            'email'    => $email
          ),
          array(
            'password' => 'required|min:6',
            'email'    => 'required|email'
          ),
          $messages
        );

        if ($validator->fails()){
          // The given data did not pass validation
          $messages = $validator->messages();

          if ($messages->has('email')){
            return View::make('admin-layout.admin-login')->with('loginError', $messages->first('email')); 
          }
          elseif ($messages->has('password')){
            return View::make('admin-layout.admin-login')->with('loginError', $messages->first('password')); 
          }

        }
        else{
          if (Auth::attempt(array('email' => $email, 'password' => $password))){
            return View::make('admin-layout.admin-main');
          }
          else{
            return View::make('admin-layout.admin-login')->with('loginError', 'Wrong Email or Password!');
          }

        }
    }
    /*
    |--------------------------------------------------------------------------
    | Get blog posts for admin page
    |--------------------------------------------------------------------------
    |
    | This function get all posts.
    |
    */
    
    public function getBlogPostsForAdmin(){

      $HomeController = new HomeController();

      $posts = Post::select('id', 'title', 'created', 'modified', 'status')
                ->orderBy('id', 'desc')
                ->get();

      if($posts){

        foreach ($posts as $key => $post){

          $title  = $HomeController->getHtmlPurifier($post->title, 0);
          $quiz["posts"][] = array(
            "id"        =>  $post->id,
            "title"     =>  $title,
            "created"   =>  $post->created,
            "modified"  =>  ($post->modified !== null)?$post->modified : false
          );

          if($post->status == 0){
            $quiz["posts"][$key]["isDraft"] = true;
          }

          // Count total comments for a single `post`
          $commentCount = Comment::where('postId', $post->id)
                                  ->count();
          if($commentCount > 0){
            $quiz["posts"][$key]["hasComment"]    = true;
            $quiz["posts"][$key]["total_comment"] = ($commentCount > 1)?$commentCount.' comments' : '1 comment';
          }

          // Count total `new` comments for a single `post`
          $ncommentCount = Comment::countNewCommentForSinglePost($post->id);

          if($ncommentCount > 0){
            $quiz["posts"][$key]["hasNewComment"] = true;
          }

          // Count total `flagged` comments for a single `post`
          $fcommentCount = Comment::countFlaggedCommentForSinglePost($post->id);

          if($fcommentCount > 0){
            $quiz["posts"][$key]["hasFlaggedComment"] = true;
          }
          else{
            $quiz["posts"][$key]["hasFlaggedComment"] = false;
          }
        }
      }
      
      // Count total new comments of all `posts`
      $newCommentCount = Comment::where('seen', 0)
                       ->count();

        if($newCommentCount > 0){
          $quiz["newComment"]  = $newCommentCount;
        }
        else{
          $quiz["newComment"]  = 0;
        }
      // Count total number of flagged comments
      $flaggedCommentCount = Comment::where('status', 2)
                                    ->count();

        if($flaggedCommentCount > 0){
          $quiz["flaggedComment"]  = $flaggedCommentCount;
        }
        else{
          $quiz["flaggedComment"]  = 0;
        }

        // Blog settings
        $rom = Blogsetting::findBlogSetting();

        if($rom){
          $quiz["blog_name"]        = $rom->blog_name;
          $quiz["blog_subtitle"]    = $rom->subtitle;              
          $quiz["read_only_mode"]   = ($rom->read_only_mode == 0)?false:true;
          $quiz["has_cmnt_feature"] = ($rom->has_cmnt_feature == 0)?false:true;
          $quiz["has_navbar"]       = ($rom->has_navbar == 0)?false:true;
        }
        else{
          $quiz["read_only_mode"]   = false;
          $quiz["has_cmnt_feature"] = false;
          $quiz["has_navbar"]       = false;
        }
        
        // Blog links
        $links = Bloglink::findBlogLink();

        foreach ($links as $l) {
          $quiz['blog_links'][] = array(
            "id"           => $l->id,
            "link_name"    => $l->link_name,
            "link_url"     => $l->url,
            "is_blog_url"  => ($l->isBlogUrl === 1)?true:false,
            "is_nav_link"  => ($l->navUrl === 1)?true:false,
            "is_else_link" => ($l->elseUrl === 1)?true:false,
            "status"       => ($l->status === 1)?true:false
          );
        }

      return $quiz;
    }
    /*
    |--------------------------------------------------------------------------
    | Get profile info
    |--------------------------------------------------------------------------
    |
    | This function get profile information about Admin/Author.
    |
    */
    public function getProfileInfo(){
      $HomeController = new HomeController();
      return $HomeController->getAboutAuthor();
    }
    /*
    |--------------------------------------------------------------------------
    | Get blog post body for admin page
    |--------------------------------------------------------------------------
    |
    | This function get single post body.
    |
    */
    
    public function getOnlyPostBody($postId){

      $HomeController = new HomeController();

      $post = Post::select('id', 'body')
                ->where('id', $postId)
                ->first();
     
        $body  = $HomeController->getHtmlPurifier($post->body, 0);
        $quiz  = array(
                  "id"     => $post->id,
                  "body"   => $body
                );
      return $quiz;
    }
    /*
    |--------------------------------------------------------------------------
    | Upload Image
    |--------------------------------------------------------------------------
    |
    | This function will upload image and move image file to a folder.
    |
    */

    public function uploadImageFunction($path, $saveInDB){

       $temp_filename = $_FILES["file"]["tmp_name"];

       if($_FILES["file"]["size"] > 5000000){
    
          $message = '<div class="alert alert-warning" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Oops! file size too large</strong></div>';
          $imgUrl  = '';
          
          return array(
            'message' => $message,
            'imgUrl'  => $imgUrl
          );
        }
        else{
          if (!is_uploaded_file($temp_filename)){ // return true if filename is uploaded via HTTP POST
            exit;
          }
          $imageData = @getimagesize($temp_filename);
          // checking file mime type
          if($imageData === FALSE || !($imageData[2] == IMAGETYPE_GIF || $imageData[2] == IMAGETYPE_JPEG || $imageData[2] == IMAGETYPE_PNG)){
            
            $message ='<div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Wrong file type.</strong></div>';
            $imgUrl  = '';
            return array(
              'message' => $message,
              'imgUrl'  => $imgUrl
            );
          }
          else{
                   
            $err = $_FILES["file"]["error"];
            $message = '<div class="alert alert-warning" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Oops! </strong>';
            if ($err > 0){
              switch($err){
                case '1':
                      $message.='php.ini max file size exceeded.';
                      break;
                case '2':
                      $message.='max file size exceeded.';
                      break;
                case '3':
                      $message.='file upload was only partial.';
                      break;
                case '4':
                      $message.='no file was attached.';
                      break;
                case '7':
                      $message.='file permission denied.';
                      break;
                default :
                      $message.='Unexpected error occurs.';
              }
              $message.='</div>';
            }
            else{

              $filename = $_FILES["file"]["name"];
              $ext = pathinfo($filename, PATHINFO_EXTENSION);
              $new_filename = md5(strtolower(trim($filename))).'.'.$ext;

              if (file_exists($path.'/'.$new_filename)){
                $message.='file already exist <b>:-)</b>.</div>';
                $imgUrl = URL::to($path).'/'.$new_filename;
              }
              else{
                @move_uploaded_file($temp_filename,$path.'/'.$new_filename);
                $message ='<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>File has been successfully uploaded.</strong></div>';
                $imgUrl  = URL::to($path).'/'.$new_filename;
              }

              if($saveInDB === 1){ // picType '1' for author '2' for blog logo
                if(isset($_POST['picType']) && $_POST['picType'] == 1){
                  User::where('id', 1)
                        ->update(array(
                            'image' => $imgUrl
                        )
                      );
                }
                else{
                  User::where('id', 1)
                        ->update(array(
                            'logo' => $imgUrl
                        )
                      );
                }
              }
            }
            return array(
              'message' => $message,
              'imgUrl'  => $imgUrl
            );
          }
      }
    }
    /*
    |--------------------------------------------------------------------------
    | Upload image for text editor
    |--------------------------------------------------------------------------
    |
    | This function will upload image for text editor.
    |
    */
    public function uploadImage(){
      $response = self::uploadImageFunction('upload_dir', 0);
        
      echo '<script src="'.URL::to('libraries/js/jquery-1.10.2.min.js').'"></script><script>$("#loadingDiv", window.parent.document).hide();$("#feedback", window.parent.document).html("'.addslashes($response['message']).'");$("#imageUrlTextField", window.parent.document).empty().val("'.addslashes($response['imgUrl']).'");</script>';
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
    public function addNewBlogPost($title, $body, $dateTime){
      Post::saveNewBlogPost($title, $body, $dateTime);
      return 'Saved as published';
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
    public function addNewBlogPostAsDraft($title, $body, $dateTime){
      Post::saveNewBlogPostAsDraft($title, $body, $dateTime);
      return 'Saved as draft';
    }
    /*
    |--------------------------------------------------------------------------
    | Save edited post
    |--------------------------------------------------------------------------
    |
    | This function update post in database with given
    | status: '0' => 'draft', '1' => 'published'
    |
    */
    public function saveEditedPost($postId, $title, $body, $status, $dateTime){
        Post::where('id', $postId)
            ->update(array(
                'title'    => $title,
                'body'     => $body,
                'status'   => $status,
                'modified' => $dateTime
              )
            );
        return 'Edit saved';
    }
}