<?php

class CommentController extends BaseController {
	  /*
    |--------------------------------------------------------------------------
    | Add new comment
    |--------------------------------------------------------------------------
    */
    public function addComment($postId, $commenterName, $email, $comment, $dateTime, $replyToCommentId, $csrf_token){
      $HomeController       = new HomeController();
      $check_read_only_mode = $HomeController->getBlogSettings();

      if($check_read_only_mode->read_only_mode === 0){
        $clientBrowser = self::getClientBrowser();
        Comment::insert(
                  array(
                    'postId'      => $postId,
                    'name'        => $commenterName,
                    'email'       => $email,
                    'comment'     => $comment,
                    'date'        => $dateTime,
                    'reply_to_id' => $replyToCommentId,
                    'status'      => 1,
                    'ip_address'  => Request::getClientIp(),
                    'browser'     => $clientBrowser['name'],
                    'os'          => $clientBrowser['platform']
                  )
        );
        return json_encode(array('token' => $csrf_token, 'controller_response' => 'saved'));
      }
      else{
        return json_encode(array('token' => $csrf_token, 'controller_response' => 'Read only mode is On.', 'read_only_mode' => 1));
      }
    }
    /*
    |--------------------------------------------------------------------------
    | Get blog post comments for admin page
    |--------------------------------------------------------------------------
    |
    | This function get all comments for a post.
    |
    */
    
    public function getComments($postId){

      $HomeController = new HomeController();

      $comments = Comment::where('postId', $postId)
                            ->get();

        foreach ($comments as $key => $c){

            $comment  = $HomeController->getHtmlPurifier($c->comment, 0);
            $quiz[]   = array(
                "id"          => $c->id,
                "name"        => $c->name,
                "email"       => $c->email,
                "g_email"     => $HomeController->getGravaterUrl($c->email),
                "comment"     => $comment,
                "date"        => $c->date,
                "showLoading" => false,
                "status"      => ($c->status == 1 || $c->status == 2)?true:false,
                "isFlagged"   => ($c->status == 2)?true:false,
                "isSeen"      => ($c->seen == 0)?false:true,
                "browser"     => $c->browser,
                "os"          => $c->os,
                "ip_address"  => $c->ip_address,
                "ip_status"   => ($c->ip_ban == 0)?false:true
                );
        }
      return $quiz;
    }
    /*
    |--------------------------------------------------------------------------
    | Scope function
    |--------------------------------------------------------------------------
    |
    | This function will do common updating task for Comment model.
    |
    */
    private function commonUpdatingTask($whereField, $whereValue, $updateField, $updateValue){
      return Comment::where($whereField, $whereValue)
                ->update(array(
                        $updateField => $updateValue
                        )
                     );
    }
    /*
    |--------------------------------------------------------------------------
    | Flag Comment
    |--------------------------------------------------------------------------
    |
    | This function will flag comment.
    |
    */
    
    public function flagComment(){
      $commentId = (int)$_POST['commentId'];
      $commentId = preg_replace("/[^0-9]/","",$commentId);
      self::commonUpdatingTask('id', $commentId, 'status', 2);

      return "Flagged!";
    }
    /*
    |--------------------------------------------------------------------------
    | Mark comment as seen
    |--------------------------------------------------------------------------
    |
    | This function will comment as seen.
    |
    */
    
    public function markAsSeen($commentId){
      self::commonUpdatingTask('id', $commentId, 'seen', 1);

      return "Marked as seen";
    }
    /*
    |--------------------------------------------------------------------------
    | Remove comment
    |--------------------------------------------------------------------------
    |
    | This function will remove selected comment.
    |
    */
    
    public function removeComment($commentId){
      self::commonUpdatingTask('id', $commentId, 'status', 0);

      return "Comment removed";
    }
    /*
    |--------------------------------------------------------------------------
    | Remove flag
    |--------------------------------------------------------------------------
    |
    | This function will remove flag.
    |
    */
    
    public function removeFlag($commentId){
      self::commonUpdatingTask('id', $commentId, 'status', 1);

      return "Flag removed";
    }
    /*
    |--------------------------------------------------------------------------
    | Check if Ip address is banned
    |--------------------------------------------------------------------------
    */
    public function checkForBannedIp($ip){
      $count = Comment::findBannedIp($ip);
      return ($count > 0)?true:false;
    }
    /*
    |--------------------------------------------------------------------------
    | Ban IP
    |--------------------------------------------------------------------------
    |
    | This function will ban ip address.
    |
    */
    
    public function banIp($ipAddress){
      self::commonUpdatingTask('ip_address', $ipAddress, 'ip_ban', 1);

      return "This Ip address in all comments is banned";
    }
    /*
    |--------------------------------------------------------------------------
    | Detect Client Browser name and OS
    |--------------------------------------------------------------------------
    */
    protected function getClientBrowser(){
      $user_agent   = $_SERVER['HTTP_USER_AGENT'];
      $browser_name = 'Unknown';
      $platform     = 'Unknown';

      //First get the platform?
      if (preg_match('/linux/i', $user_agent)){
        $platform = 'Linux';
      }
      elseif (preg_match('/windows|win32/i', $user_agent)){
        $platform = 'Windows';
      }
      elseif (preg_match('/macintosh|mac os x/i', $user_agent)){
        $platform = 'Mac';
      }
      elseif (preg_match('/android/i', $user_agent)){
        $platform = 'Android';
      }
      elseif (preg_match('/iPhone/i', $user_agent)){
        $platform = 'IOS';
      }
   
      // Get the name of the useragent
      if(preg_match('/MSIE/i', $user_agent) && !preg_match('/Opera/i', $user_agent)){
          $browser_name = 'Internet Explorer';
      }
      elseif(preg_match('/Firefox/i', $user_agent)){
          $browser_name = 'Mozilla Firefox';
      }
      elseif(preg_match('/Chrome/i', $user_agent)){
          $browser_name = 'Google Chrome';
      }
      elseif(preg_match('/Safari/i', $user_agent)){
          $browser_name = 'Apple Safari';
      }
      elseif(preg_match('/Opera|OPR/i', $user_agent)){
          $browser_name = 'Opera';
      }
      elseif(preg_match('/Android/i', $user_agent)){
          $browser_name = 'Android';
      }
      elseif(preg_match('/iPhone/i', $user_agent)){
          $browser_name = 'iPhone';
      }
      elseif(preg_match('/Netscape/i', $user_agent)){
          $browser_name = 'Netscape';
      }

      return array(
          'userAgent' => $user_agent,
          'name'      => $browser_name,
          'platform'  => $platform
      );
    } 
}