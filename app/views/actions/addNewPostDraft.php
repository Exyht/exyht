<?php

    $title    = Input::get('title', '');
    $body     = Input::get('body', '');
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
      
      if ($messages->has('title'))
      {
       echo $messages->first('title', ":message");
      }
      elseif ($messages->has('body'))
      {
       echo $messages->first('body', ":message");
      }
    }
    else
    {
     $getAdminController = new AdminController();
      /*
      |--------------------------------------------------------------------------
      | addNewBlogPostAsDraft(parameter1, parameter2, parameter3)
      | Parameters must be in the following sequence 
      | addNewBlogPostAsDraft(title, body, dateTime)
      |--------------------------------------------------------------------------
      */
      echo $getAdminController->addNewBlogPostAsDraft($title, $body, $dateTime);
    }
