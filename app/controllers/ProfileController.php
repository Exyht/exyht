<?php

class ProfileController extends BaseController {
	/*
    |--------------------------------------------------------------------------
    | Saved new password
    |--------------------------------------------------------------------------
    |
    | This function saves new password for admin page. 
    |
    */
    public function changePassword()
    {
      $user = User::findPassword();
      if(isset($_POST['old_password']) && isset($_POST['new_password']))
      {
        if(Hash::check($_POST['old_password'], $user->password))
        {
          User::saveNewPassword($_POST['new_password']);
        
          return 'New Password saved';
        }
        else
        {
          return 'Oops! old password didn\'t match' ;
        }
      }
    }
    /*
    |--------------------------------------------------------------------------
    | Save profile edit
    |--------------------------------------------------------------------------
    |
    | This function update about column in database
    |
    */
    public function saveProfileEdit()
    {
      $about = $_POST['about'];
      User::saveAbout($about);
      return 'Edit saved';
    }
    /*
    |--------------------------------------------------------------------------
    | Change profile pic
    |--------------------------------------------------------------------------
    |
    | This function will change profile pic
    |
    */
    public function uploadProfileImage()
    {
    	$AdminController = new AdminController();
        $response = $AdminController->uploadImageFunction('prof_img_dir', 1);
        if(isset($_POST['picType']) && $_POST['picType'] == 1)
        {
            echo '<script src="'.URL::to('libraries/js/jquery-1.10.2.min.js').'"></script><script>$("#imgLoadingDiv", window.parent.document).hide();$("#imgFeedback", window.parent.document).html("'.addslashes($response['message']).'");$("#profileImageDiv", window.parent.document).attr("src","'.addslashes($response['imgUrl']).'");</script>';
        }
        else
        {
            echo '<script src="'.URL::to('libraries/js/jquery-1.10.2.min.js').'"></script><script>$("#imgLoadingDiv", window.parent.document).hide();$("#imgFeedback", window.parent.document).html("'.addslashes($response['message']).'");</script>';
        }    
    }
    /*
    |--------------------------------------------------------------------------
    | Remove Profile Image
    |--------------------------------------------------------------------------
    |
    | This function removes profile image.
    |
    */
    public function removeProfileImage()
    {
        User::where('id', 1)
              ->update(array(
                'image' => null
              )
        );
           
        return 'Removed';
    }
}