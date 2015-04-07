<?php

  $postId   = Input::get('postId', '');
  $title    = Input::get('title', '');
  $body     = Input::get('body', '');
  $status   = Input::get('status', '');
  $dateTime = date('Y-m-d H:i:s');

	/*
  |--------------------------------------------------------------------------
  | Validate fields
  |--------------------------------------------------------------------------
  */
    $messages = array(
      'required'   => 'The :attribute field is required.',
      'numeric'    => 'The :attribute must be numeric',
      'between'    => 'The :attribute must be between :min - :max characters.'
    );

	$validator = Validator::make(
      array(
      	'postId' => $postId,
        'title'  => $title,
        'body'   => $body,
        'status' => $status
      ),
      array(
      	'postId' => 'required|numeric',
        'title'  => 'required|between:2,200',
        'body'   => 'required|between:15,15000',
        'status' => 'required'
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
      
      if ($messages->has('title'))
      {
       echo $messages->first('title', ":message");
      }
      elseif ($messages->has('body'))
      {
       echo $messages->first('body', ":message");
      }
      elseif ($messages->has('status'))
      {
       echo $messages->first('status', ":message");
      }
    }
    else
    {
     $getAdminController = new AdminController();
     /*
     |--------------------------------------------------------------------------
     | saveEditedPost(parameter1, parameter2, parameter3, parameter4, parameter5)
     | Parameters must be in the following sequence 
     | saveEditedPost(postId, title, body, status, dateTime)
     |--------------------------------------------------------------------------
     */
	   echo $getAdminController->saveEditedPost($postId, $title, $body, $status, $dateTime);
    }
