<?php

class SettingController extends BaseController {
    /*
    |--------------------------------------------------------------------------
    | Get Blog style
    |--------------------------------------------------------------------------
    |
    | This function will get blog style.
    |
    */
    public function getBlogStyle()
    {
      $blogStyle = Blogsetting::findBlogSetting();
      $quiz         = array(
          "font_family"     => (!empty($blogStyle->font_family))?'"body{font-family:'.$blogStyle->font_family.'}"' : '""',
          "body_bg_clr"     => (!empty($blogStyle->bg_clr))?'"'.$blogStyle->bg_clr.'"': '""',
          "nav_bg_clr"      => (!empty($blogStyle->nav_bg_clr))?'"'.$blogStyle->nav_bg_clr.'"': '""',
          "post_bg_clr"     => (!empty($blogStyle->p_bg_clr))?'"'.$blogStyle->p_bg_clr.'"': '""',
          "sidebar_bg_clr"  => (!empty($blogStyle->s_bg_clr))?'"'.$blogStyle->s_bg_clr.'"': '""',
          "footer_bg_clr"   => (!empty($blogStyle->f_bg_clr))?'"'.$blogStyle->f_bg_clr.'"': '""',
          "link_color"      => (!empty($blogStyle->link_clr))?'"a{color :'.$blogStyle->link_clr.'}"' : '""',
        );
      return json_encode($quiz);
    }
    /*
    |--------------------------------------------------------------------------
    | Change Blog Settings
    |--------------------------------------------------------------------------
    |
    | This function will change blog settings.
    |
    */
    private function commonSettingTask($field, $value)
    {
      return Blogsetting::updateCommonTask($field, $value);
    }
	  /*
    |--------------------------------------------------------------------------
    | Change Blog name
    |--------------------------------------------------------------------------
    |
    | This function will change blog name.
    |
    */
    public function changeBlogName()
    {
      $blog_name = $_POST['blog_name'];
        /*
        |--------------------------------------------------------------------------
        | Validate fields
        |--------------------------------------------------------------------------
        */
        $messages = array(
          'between'    => 'The :attribute must be in :min - :max characters'
        );

        $validator = Validator::make(
          array(
            'blog_name' => $blog_name
          ),
          array(
            'blog_name' => 'between:1,50'
          ),
          $messages
        );
        if ($validator->fails())
        {
          // The given data did not pass validation
          $messages = $validator->messages();

          if ($messages->has('blog_name'))
          {
            return $messages->first('blog_name');
          }
        }
        else
        {

          self::commonSettingTask('blog_name', $blog_name);
         
          return "Blog name changed!";
        }
    }
    /*
    |--------------------------------------------------------------------------
    | Change Subtitle
    |--------------------------------------------------------------------------
    |
    | This function will change blog subtitle.
    |
    */
    public function changeSubtitle()
    {
      $blog_subtitle = $_POST['blog_subtitle'];
        /*
        |--------------------------------------------------------------------------
        | Validate fields
        |--------------------------------------------------------------------------
        */
        $messages = array(
          'between'    => 'The :attribute must be in :min - :max characters'
        );

        $validator = Validator::make(
          array(
            'blog_subtitle' => $blog_subtitle
          ),
          array(
            'blog_subtitle' => 'between:1,100'
          ),
          $messages
        );
        if ($validator->fails())
        {
          // The given data did not pass validation
          $messages = $validator->messages();

          if ($messages->has('blog_subtitle'))
          {
            return $messages->first('blog_subtitle');
          }
        }
        else
        {
          self::commonSettingTask('subtitle', $blog_subtitle);
          
          return "Blog subtitle changed!";
        }
    }
    /*
    |--------------------------------------------------------------------------
    | Turn Read only mode On
    |--------------------------------------------------------------------------
    |
    | This function will turn Read only mode On.
    |
    */
    public function turnReadOnlyModeOn()
    {
      self::commonSettingTask('read_only_mode', 1);
      return "Turned on!";
    }
    /*
    |--------------------------------------------------------------------------
    | Turn Read only mode Off
    |--------------------------------------------------------------------------
    |
    | This function will turn Read only mode Off.
    |
    */
    public function turnReadOnlyModeOff()
    {
      self::commonSettingTask('read_only_mode', 0);
      return "Turned off!";
    }
    /*
    |--------------------------------------------------------------------------
    | Turn Comment Feature On
    |--------------------------------------------------------------------------
    |
    | This function will turn Read only mode On.
    |
    */
    public function turnCommentFeatureOn()
    {
      self::commonSettingTask('has_cmnt_feature', 1);
      return "Turned on!";
    }
    /*
    |--------------------------------------------------------------------------
    | Turn Comment Feature Off
    |--------------------------------------------------------------------------
    |
    | This function will turn Read only mode Off.
    |
    */
    public function turnCommentFeatureOff()
    {
      self::commonSettingTask('has_cmnt_feature', 0);
      return "Turned off!";
    }
    /*
    |--------------------------------------------------------------------------
    | Turn Navbar On
    |--------------------------------------------------------------------------
    |
    | This function will turn Navbar On.
    |
    */
    public function turnNavbarOn()
    {
      self::commonSettingTask('has_navbar', 1);
      return "Turned on!";
    }
    /*
    |--------------------------------------------------------------------------
    | Turn Navbar Off
    |--------------------------------------------------------------------------
    |
    | This function will turn Navbar Off.
    |
    */
    public function turnNavbarOff()
    {
      self::commonSettingTask('has_navbar', 0);
      return "Turned off!";
    }
    /*
    |--------------------------------------------------------------------------
    | Change Background Color of Blog
    |--------------------------------------------------------------------------
    |
    | This function will change Background Color of Blog.
    |
    */
    public function changeBgColor($field, $chosenColor, $name)
    {
      self::commonSettingTask($field, $chosenColor);
      return $name." color changed!";
    }
    /*
    |--------------------------------------------------------------------------
    | Change Blog Font Family
    |--------------------------------------------------------------------------
    |
    | This function will change Blog Font Family.
    |
    */
    public function changeFontFamily()
    {
      $chosenFont = substr($_POST['selectedFont'], 0, 35);
      self::commonSettingTask('font_family', $chosenFont);
      return "Font Family changed!";
    }
    /*
    |--------------------------------------------------------------------------
    | Validate link name, url
    |--------------------------------------------------------------------------
    |
    | This function will Validate link name, url.
    |
    */
    private function validateBlogLink($link_name, $link_url, $type)
    {
        /*
        |--------------------------------------------------------------------------
        | Validate fields
        |--------------------------------------------------------------------------
        */
        $messages = array(
          'required'   => 'The :attribute field is required.',
          'between'    => 'The :attribute must be in :min - :max characters',
          'url'        => 'The :attribute must be valid'
        );

        $validator = Validator::make(
          array(
            'link_name' => $link_name,
            'link_url'  => $link_url
          ),
          array(
            'link_name' => 'required|between:1,50',
            'link_url'  => 'required|url|between:1,100'
          ),
          $messages
        );

        if ($validator->fails())
        {
          // The given data did not pass validation
          $messages = $validator->messages();

          if ($messages->has('link_name'))
          {
            return json_encode(array('has_error'=>true,'message'=>$messages->first('link_name')));
          }
          elseif ($messages->has('link_url')) {
            return json_encode(array('has_error'=>true,'message'=>$messages->first('link_url')));
          }
        }
        else
        {
          Bloglink::saveNewLink($link_name, $link_url, $type);
          return json_encode(array('has_error'=>false,'message'=>'New link saved!'));;
        }
    }
    /*
    |--------------------------------------------------------------------------
    | Add new nav links for blog
    |--------------------------------------------------------------------------
    |
    | This function will add new nav link for blog.
    |
    */
    public function addNavLink()
    {
      $link_name = $_POST['link_name'];
      $link_url  = $_POST['link_url'];

      return self::validateBlogLink($link_name, $link_url, 1);
    }
    /*
    |--------------------------------------------------------------------------
    | Add new else links for blog
    |--------------------------------------------------------------------------
    |
    | This function will add new else link for blog.
    |
    */
    public function addElseLink()
    {
      $link_name = $_POST['link_name'];
      $link_url  = $_POST['link_url'];
      
      return self::validateBlogLink($link_name, $link_url, 2);  
    }
    /*
    |--------------------------------------------------------------------------
    | Remove link
    |--------------------------------------------------------------------------
    |
    | This function will remove link.
    |
    */
    public function removeLink()
    {
      $link_id = $_POST['link_id'];

      Bloglink::changeLinkStatus($link_id);
      return 'Link removed';
    }
}