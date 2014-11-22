<?php

	$postId   = (isset($_POST['postId']))?$_POST['postId']:'';
  $title    = (isset($_POST['title']))?$_POST['title']:'';
  $body     = (isset($_POST['body']))?$_POST['body']:'';
	$status   = (isset($_POST['status']))?$_POST['status']:'';
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
      /*
      function formatErrorMessage($value){
        return '<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true"><i class="fa fa-times" style="color:#000;"></i></span></button>'.$value.'</div>';
      }
      */
      if ($messages->has('title'))
      {
       echo $messages->first('title', /*formatErrorMessage(*/":message"/*)*/);
      }
      elseif ($messages->has('body'))
      {
       echo $messages->first('body', /*formatErrorMessage(*/":message"/*)*/);
      }
      elseif ($messages->has('status'))
      {
       echo $messages->first('status', /*formatErrorMessage(*/":message"/*)*/);
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