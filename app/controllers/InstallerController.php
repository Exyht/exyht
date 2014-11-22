<?php

class InstallerController extends BaseController {
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
		
		  if (Schema::hasTable($tableName))
        {
            $res = array(
                     "msg"        => 'Table `'.$tableName.'` already existed!',
                     "is_created" => false
                    );
            return json_encode($res);
        }
        else
        {
            Schema::create($tableName, function($table)
            {
                $table->increments('id');
                $table->string('blog_name', 50);
                $table->string('subtitle', 100);
                $table->integer('read_only_mode');
                $table->integer('has_navbar');
                $table->integer('has_cmnt_feature');
                $table->string('font_family', 15);
                $table->string('bg_clr', 7);
                $table->string('nav_bg_clr', 7);
                $table->string('p_bg_clr', 7);
                $table->string('s_bg_clr', 7);
                $table->string('f_bg_clr', 7);
                $table->string('link_clr', 7);
            });
            DB::table($tableName)->insert(
                  array(
                    'blog_name'        => "Blog name",
                    'subtitle'         => "Sub title",
                    'read_only_mode'   => 0,
                    'has_navbar'       => 1,
                    'has_cmnt_feature' => 1
                  )
            );
                $res = array(
                     "msg"        => 'Table `'.$tableName.'` created successfully!',
                     "is_created" => true
                    );
            return json_encode($res);
        }
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
        
        if (Schema::hasTable($tableName))
        {
            $res = array(
                     "msg"        => 'Table `'.$tableName.'` already existed!',
                     "is_created" => false
                    );
            return json_encode($res);
        }
        else
        {
            Schema::create($tableName, function($table)
            {
                $table->increments('id');
                $table->string('email', 50);
                $table->string('username', 20);
                $table->string('password', 64);
                $table->string('remember_token', 255);
                $table->dateTime('updated_at');
                $table->string('about', 2000);
                $table->string('image', 200);
                $table->string('logo', 200);
            });
                 $res = array(
                     "msg"        => 'Table `'.$tableName.'` created successfully!',
                     "is_created" => true
                    );
            return json_encode($res);
        }
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
        
        if (Schema::hasTable($tableName))
        {
            $res = array(
                     "msg"        => 'Table `'.$tableName.'` already existed!',
                     "is_created" => false
                    );
            return json_encode($res);
        }
        else
        {
            Schema::create($tableName, function($table)
            {
                $table->increments('id');
                $table->string('title', 50);
                $table->text('body');
                $table->dateTime('created')->nullable();
                $table->dateTime('modified')->nullable();
                $table->integer('user_id');
                $table->integer('views');
                $table->integer('status');
            });
                 $res = array(
                     "msg"        => 'Table `'.$tableName.'` created successfully!',
                     "is_created" => true
                    );
            return json_encode($res);
        }
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
        
        if (Schema::hasTable($tableName))
        {
            $res = array(
                     "msg"        => 'Table `'.$tableName.'` already existed!',
                     "is_created" => false
                    );
            return json_encode($res);
        }
        else
        {
            Schema::create($tableName, function($table)
            {
                $table->increments('id');
                $table->integer('postId');
                $table->string('name', 15);
                $table->string('email', 50);
                $table->dateTime('date');
                $table->string('comment', 500);
                $table->integer('reply_to_id');
                $table->integer('status');
                $table->integer('seen');
                $table->integer('ip_ban');
                $table->string('ip_address', 45);
                $table->string('browser', 20);
                $table->string('os', 7);
            });
                 $res = array(
                     "msg"        => 'Table `'.$tableName.'` created successfully!',
                     "is_created" => true
                    );
            return json_encode($res);
        }
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
        
        if (Schema::hasTable($tableName))
        {
            $res = array(
                     "msg"        => 'Table `'.$tableName.'` already existed!',
                     "is_created" => false
                    );
            return json_encode($res);
        }
        else
        {
            Schema::create($tableName, function($table)
            {
                $table->increments('id');
                $table->string('link_name', 50);
                $table->string('url', 100);
                $table->integer('isBlogUrl');
                $table->integer('navUrl');
                $table->integer('elseUrl');
                $table->integer('status');
            });
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
                 $res = array(
                     "msg"        => 'Table `'.$tableName.'` created successfully!',
                     "is_created" => true
                    );
            return json_encode($res);
        }
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