<?php

  Session::put('_token', md5(microtime()));

  $CommentController = new CommentController();
  // Get client IP adderess
  $ip_address = Request::getClientIp();
  // Check if it is banned
  $isBannedIp = $CommentController->checkForBannedIp($ip_address);

  if($isBannedIp === false)
  { 
    if(Input::has('spam_bot'))
    {
      // It's a bot spamming
      $error_msg = array('token' => csrf_token(), 'error_msg' => "Thanks!");
      echo json_encode($error_msg);
    }
    else
    {
      $postId     = Input::get('postId', '');
      $name       = Input::get('name', '');
      $email      = Input::get('email', '');
      $comment    = Input::get('comment', '');

      if(!Input::has('replyToCommentId')){
        $replyToCommentId = 0;
      }else{
        $replyToCommentId = Input::get('replyToCommentId', '');
      }

      $dateTime   = date('Y-m-d H:i:s');

      /*
      |--------------------------------------------------------------------------
      | Validate fields
      |--------------------------------------------------------------------------
      */
      $messages = array(
        'required'   => 'The :attribute field is required.',
        'numeric'    => 'The :attribute must be numeric.',
        'alpha_num'  => 'The :attribute must be alpha numeric',
        'regex'      => 'The :attribute allows only alphabet, number, space, hyphen & dot',
        'email'      => 'The :attribute must be valid',
        'between'    => 'The :attribute must be between :min - :max characters.',
      );

      $validator = Validator::make(
        array(
          'postId' => $postId,
          'name'   => $name,
          'email'  => $email,
          'comment'=> $comment
        ),
        array(
          'postId' => 'required|numeric',
          'name'   => 'required|regex:/^[A-Za-z0-9 .\-]+$/i|between:5,20',
          'email'  => 'required|email|max:50',
          'comment'=> 'required|between:15,2000'
        ),
        $messages
      );

      /*
       |--------------------------------------------------------------------------
       | If Validator fails, return error message for the following field.
       |--------------------------------------------------------------------------
       */
      if ($validator->fails())
      {
        $messages = $validator->messages();

        function formatErrorMessage($value){
          return '<div class="alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true"><i class="fa fa-times" style="color:#000;"></i></span></button>'.$value.'</div>';
        }

        if ($messages->has('postId'))
        {
          $error_msg = array(
            'token' => csrf_token(),
            'error_msg' => $messages->first('postId', formatErrorMessage(":message"))
          );
          echo json_encode($error_msg);
        }
        elseif ($messages->has('name'))
        {
          $error_msg = array(
            'token' => csrf_token(),
            'error_msg' => $messages->first('name', formatErrorMessage(":message"))
          );
          echo json_encode($error_msg);
        }
        elseif ($messages->has('email'))
        {
          $error_msg = array(
            'token' => csrf_token(),
            'error_msg' => $messages->first('email', formatErrorMessage(":message"))
          );
          echo json_encode($error_msg);
        }
        elseif ($messages->has('comment'))
        {
          $error_msg = array(
            'token' => csrf_token(),
            'error_msg' => $messages->first('comment', formatErrorMessage(":message"))
          );
          echo json_encode($error_msg);
        }
      }
      else
      {
      /*
      |--------------------------------------------------------------------------
      | addComment(parameter1, parameter2, parameter3, parameter4, parameter5, parameter6, parameter7)
      | Parameters must be in the following sequence 
      | addComment(postId, name, email, comment, dateTime, replyToCommentId, csrf_token)
      |--------------------------------------------------------------------------
      */
      echo $CommentController->addComment($postId, $name, $email, $comment, $dateTime, $replyToCommentId, csrf_token());
      }
    }
  }
  else
  { // It's human spamming from banned IP address, show the person comment is saved
    echo json_encode(array('token' => csrf_token(), 'controller_response' => 'saved'));
  }
