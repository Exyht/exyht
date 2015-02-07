<?php

class InstallerController extends BaseController {
  /*
  |--------------------------------------------------------------------------
  | Add column in table
  |--------------------------------------------------------------------------
  */
  private function addCol($table, $k, $col){
    if($k == 'inc') {
      $table->increments($col);
    }
    elseif($k == 'int') {
      $table->integer($col);
    }
    elseif ($k == 'str') {
      $colLen = explode(':', $col, 2);
      $table->string($colLen[0], $colLen[1])->nullable();
    }
    elseif ($k == 'txt') {
      $table->text($col);
    }
    elseif ($k == 'dt') {
      $table->dateTime($col)->nullable();
    }
  }
  /*
  |--------------------------------------------------------------------------
  | Create table
  |--------------------------------------------------------------------------
  */
  private function createTb($tableName, $cols){
    Schema::create($tableName, function($table) use ($cols)
    {
      foreach ($cols as $k => $type) {
        foreach ($cols[$k] as $col) {
          self::addCol($table, $k, $col);
        }
      }
    });
  }
  /*
  |--------------------------------------------------------------------------
  | Modify table
  |--------------------------------------------------------------------------
  */
  private function modifyTable($tableName, $cols){
      foreach ($cols as $k => $type) {
        foreach ($cols[$k] as $col) {
          // Explode col, because str contains name & length
          $colName = explode(':', $col, 2);
          if(!Schema::hasColumn($tableName, $colName[0])){
            Schema::table($tableName, function($table) use ($k, $col)
            {
              self::addCol($table, $k, $col);
            });
          }
        }
      }
  }
  /*
  |--------------------------------------------------------------------------
  | Check for existed table, if not create one
  |--------------------------------------------------------------------------
  */
  private function checkTb($tableName, $cols){
    if (Schema::hasTable($tableName))
    {
      self::modifyTable($tableName, $cols);
        $res = array(
                 "msg"        => '`'.$tableName.'` table has been modified!',
                 "is_created" => true,
                 "is_modified"=> true
                );
    }
    else{
      self::createTb($tableName, $cols);
      /*
      |--------------------------------------------------------------------------
      | Insert initial data for the following tables
      |--------------------------------------------------------------------------
      */
      if($tableName == 'blogsettings'){
        DB::table($tableName)->insert(
                  array(
                    'blog_name'        => "Blog name",
                    'subtitle'         => "Sub title",
                    'read_only_mode'   => 0,
                    'has_navbar'       => 1,
                    'has_cmnt_feature' => 1
                  )
            );
      }
      elseif ($tableName == 'bloglinks') {
        DB::table($tableName)->insert(
                  array(
                    'link_name'  => 'Blog',
                    'url'        => '/blog/',
                    'isBlogUrl'  => 1,
                    'navUrl'     => 1,
                    'elseUrl'    => 0,
                    'status'     => 1
                  )
            );
      }
      $res = array(
                   "msg"        => 'Table `'.$tableName.'` created successfully!',
                   "is_created" => true,
                   "is_modified"=> false
                  );
    }
    return json_encode($res);
  }
	/*
  |--------------------------------------------------------------------------
  | Create `blog_settings` table
  |--------------------------------------------------------------------------
  */
	public function createBlogSettingsTable()
  {
    if (Request::ajax())
    {
		  $tableName = 'blogsettings';
		  
      $cols = array(
              'inc' => array(
                          'id'
                        ),
              'int' => array(
                          'read_only_mode',
                          'has_navbar',
                          'has_cmnt_feature'
                        ),
              'str' => array(
                          'blog_name:50',
                          'subtitle:100',
                          'font_family:15',
                          'bg_clr:7',
                          'nav_bg_clr:7',
                          'p_bg_clr:7',
                          's_bg_clr:7',
                          'f_bg_clr:7',
                          'link_clr:7'
                        )
            );
      return self::checkTb($tableName, $cols);
    }
	}
    /*
    |--------------------------------------------------------------------------
    | Create `users` table
    |--------------------------------------------------------------------------
    */
    public function createUsersTable()
    {
      if (Request::ajax())
      {
        $tableName = 'users';
        
        $cols = array(
              'inc' => array(
                          'id'
                        ),
              'dt' => array(
                          'updated_at'
                        ),
              'str' => array(
                          'email:50',
                          'username:20',
                          'password:64',
                          'remember_token:255',
                          'about:2000',
                          'image:200',
                          'logo:200'
                        )
            );
          return self::checkTb($tableName, $cols);
      }
    }
    /*
    |--------------------------------------------------------------------------
    | Create `posts` table
    |--------------------------------------------------------------------------
    */
    public function createPostsTable()
    {
      if (Request::ajax())
      {
        $tableName = 'posts';
        
        $cols = array(
              'inc' => array(
                          'id'
                        ),
              'int' => array(
                          'user_id',
                          'views',
                          'status'
                        ),
              'txt' => array(
                          'body'
                        ),
              'str' => array(
                          'title:50'
                        ),
              'dt' => array(
                          'created',
                          'modified'
                        )
            );
          return self::checkTb($tableName, $cols);
      }
    }
    /*
    |--------------------------------------------------------------------------
    | Create `comments` table
    |--------------------------------------------------------------------------
    */
    public function createCommentsTable()
    {
      if (Request::ajax())
      {
        $tableName = 'comments';
        
        $cols = array(
              'inc' => array(
                          'id'
                        ),
              'int' => array(
                          'postId',
                          'reply_to_id',
                          'status',
                          'seen',
                          'ip_ban'
                        ),
              'str' => array(
                          'name:15',
                          'email:50',
                          'comment:500',
                          'ip_address:45',
                          'browser:20',
                          'os:7'
                        ),
              'dt' => array(
                          'date'
                        )
            );
          return self::checkTb($tableName, $cols);
      }
    }
    /*
    |--------------------------------------------------------------------------
    | Create `bloglinks` table
    |--------------------------------------------------------------------------
    */
    public function createBloglinksTable()
    {
      if (Request::ajax())
      {
        $tableName = 'bloglinks';
        
        $cols = array(
              'inc' => array(
                          'id'
                        ),
              'int' => array(
                          'isBlogUrl',
                          'navUrl',
                          'elseUrl',
                          'status'
                        ),
              'str' => array(
                          'link_name:50',
                          'url:100'
                        )
            );
        return self::checkTb($tableName, $cols);
      }
    }
    /*
    |--------------------------------------------------------------------------
    | Create Account for Admin-page
    |--------------------------------------------------------------------------
    */
    public function createAccount()
    {
      if (Request::ajax())
      {
        $email    = $_POST['email'];
        $username = $_POST['name'];
        $password = Hash::make($_POST['password']);
        /*
        |--------------------------------------------------------------------------
        | Validate fields
        |--------------------------------------------------------------------------
        */
        $messages = array(
          'required'   => 'The :attribute field is required.',
          'email'      => 'The :attribute must be valid',
          'min'        => 'The :attribute must have :min characters',
          'between'    => 'The :attribute must be in :min - :max characters'
        );

        $validator = Validator::make(
          array(
            'name'     => $username,
            'password' => $password,
            'email'    => $email
          ),
          array(
            'name'     => 'required|between:2,20',
            'password' => 'required|min:6',
            'email'    => 'required|email|unique:users'
          ),
          $messages
        );
        if ($validator->fails())
        {
          // The given data did not pass validation
          $messages = $validator->messages();

          if ($messages->has('email'))
          {
            $res = array(
                     "msg"        => $messages->first('email'),
                     "is_created" => false
                    );
          }
          elseif ($messages->has('password'))
          {
            $res = array(
                     "msg"        => $messages->first('password'),
                     "is_created" => false
                    );
          }
          return json_encode($res);
        }
        else
        {   
            $count = DB::table('users')->count();
            if($count === 0)
            {
            DB::table('users')->insert(
                  array(
                    'email'      => $email,
                    'username'   => $username,
                    'password'   => $password,
                    'logo'       => ''
                  )
            );
            $res = array(
                     "msg"        => 'Account created successfully!',
                     "is_created" => true
                    );
            }
            else
            {
              $res = array(
                     "msg"        => 'One account already exists!',
                     "is_created" => false
                    );
            }
            return json_encode($res);
        }
      }
    }
}