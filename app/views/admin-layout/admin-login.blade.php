<!DOCTYPE html>
<html lang="en-US">
<head>
  <title>Exyht Admin Login</title>
  {{ HTML::style('/libraries/css/bootstrap.min.css') }}
  <?php
        // Change csrf_token in SESSION with each page load
         Session::put('admin-token', md5(microtime()));
    ?>
<style type="text/css">
 .center-block{
    margin-left: 35%;
    margin-top: 5%;
}
 .block-color{
    background-color: #f5f5f5;
    padding: 3%;

 }
</style>
</head>
<body>
<div class="container-fluid center-block">
  <div class="row">
    <div class="col-md-6 block-color">
      <div class="text-center">Exyht</div>
<?php
if(isset($loginError))
{
	echo '<div class="alert alert-danger" role="alert">'.$loginError.'</div>';
}
?>
{{ Form::open(array('url' => 'admin-page', 'role' => 'form')) }}
<input type="hidden" name="non_ajax_token" value="{{Session::get('admin-token')}}">
  <div class="form-group">
    <label for="inputEmail">Email address</label>
    {{ Form::email('email', '', array('placeholder' => 'Email','class' => 'form-control', 'id' => 'inputEmail', 'required' => 'required')) }}
  </div>
  <div class="form-group">
    <label for="inputPassword">Password</label>
    {{ Form::password('password', array('placeholder' => 'Password','class' => 'form-control', 'id' => 'inputPassword', 'required' => 'required')) }}
  </div>
   {{ Form::submit('Login', array('class'=>'btn btn-default')) }}
{{ Form::close() }}
    </div>
  </div>
</div>
</body>
</html>