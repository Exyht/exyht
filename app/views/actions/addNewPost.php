<?php

    $title    = (isset($_POST['title']))?$_POST['title']:'';
	  $body     = (isset($_POST['body']))?$_POST['body']:'';
	  $dateTime = date('Y-m-d H:i:s');

	  /*
     |--------------------------------------------------------------------------
     | Validate fields
     |--------------------------------------------------------------------------
     */
    $messages = array(
      'required'   => 'The :attribute field is required.',
      'between'    => 'The :attribute must be between :min - :max characters.',
    );

	$validator = Validator::make(
      array(
        'title'  => $title,
        'body'   => $body
      ),
      array(
        'title' => 'required|between:2,200',
        'body'   => 'required|between:15,15000'
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
    }
    else
    {
     $getAdminController = new AdminController();
	   /*
     |--------------------------------------------------------------------------
     | addNewBlogPost(parameter1, parameter2, parameter3)
     | Parameters must be in the following sequence 
     | addNewBlogPost(title, body, dateTime)
     |--------------------------------------------------------------------------
     */
	   echo $getAdminController->addNewBlogPost($title, $body, $dateTime);
    }