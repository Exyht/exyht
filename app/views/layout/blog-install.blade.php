<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Installer</title>
  {{ HTML::style('/libraries/css/bootstrap.min.css') }}
  {{ HTML::style('//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css') }}
  {{ HTML::script('/libraries/js/jquery-2.0.0.min.js') }}
  {{ HTML::script('/libraries/js/bootstrap.min.js') }}
    <?php
    // Change csrf_token in SESSION with each page load
         Session::put('_token', md5(microtime()));
    ?>
    <meta name="csrf-token" content="{{csrf_token()}}">
    <script type="text/javascript">
        $.ajaxSetup({
            headers: {
                'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
            }
        });
    </script>
  <script type="text/javascript">
    function addTable1(){
      var url = 'install/blog_settings';
      console.log(url);
      $('#installBtn').hide();
      $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        success: function(res){
          if(res.is_created === true){
            $("#installation-progress").css("width", "20%").html('20%');
            $("#installation-progress").attr({
              "aria-valuenow" : 20
            });
            $('#responseMsg').append("<p>"+res.msg+"</p>");
            addTable2();
          }else{
            $('#responseMsgError').append("<p>"+res.msg+"</p>");
          }
        }
      });
    }
    function addTable2(){
      var url = 'install/users';
      console.log(url);
      $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        success: function(res){
          if(res.is_created !== false){
            $("#installation-progress").css("width", "40%").html('40%');
            $("#installation-progress").attr({
              "aria-valuenow" : 40
            });
            $('#responseMsg').append("<p>"+res.msg+"</p>");
            addTable3();
          }else{
            $('#responseMsgError').append("<p>"+res.msg+"</p>");
          }
        }
      });
    }
    function addTable3(){
      var url = 'install/posts';
      console.log(url);
      $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        success: function(res){
          if(res.is_created !== false){
            $("#installation-progress").css("width", "60%").html('60%');
            $("#installation-progress").attr({
              "aria-valuenow" : 60
            });
            $('#responseMsg').append("<p>"+res.msg+"</p>");
            addTable4();
          }else{
            $('#responseMsgError').append("<p>"+res.msg+"</p>");
          }
        }
      });
    }
    function addTable4(){
      var url = 'install/comments';
      console.log(url);
      $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        success: function(res){
          if(res.is_created !== false){
            $("#installation-progress").css("width", "80%").html('80%');
            $("#installation-progress").attr({
              "aria-valuenow" : 80
            });
            $('#responseMsg').append("<p>"+res.msg+"</p>");
            addTable5();
          }else{
            $('#responseMsgError').append("<p>"+res.msg+"</p>");
          }
        }
      });
    }
    function addTable5(){
      var url = 'install/bloglinks';
      console.log(url);
      $.ajax({
        type: "POST",
        url: url,
        dataType: "json",
        success: function(res){
          if(res.is_created === true){
            $("#installation-progress").css("width", "100%").html('100%').removeClass("progress-bar-striped");
            $("#installation-progress").attr({
              "aria-valuenow" : 100
            });
            $('#responseMsg').append("<p>"+res.msg+"</p>");
            console.log('Completed!');
            if(res.is_modified === false){
              $('#signup-form').show();
            }
            
          }else{
            $('#responseMsgError').append("<p>"+res.msg+"</p>");
          }
        }
      });
    }
    
    // Sign up
    function signup(){
      $('#loadingForSignup').show();
      var url = 'install/signup';
      console.log(url);
      var name = $('#inputName').val();
      var email = $('#inputEmail').val();
      var password = $('#inputPassword').val();
      $.ajax({
        type: "POST",
        url: url,
        data: {name: name, email: email, password: password},
        dataType: "json",
        success: function(res){
          if(res.is_created !== false){
            $('#loadingForSignup').hide();
            $('#infoForSignup').hide();
            $('#responseForSignup').show();
            $('#adminUrl').show();
            $('#responseForSignup').append("<p>"+res.msg+"</p>");
            $('#signUpBtn').addClass("disabled");
            setTimeout(function(){
              // Redirect to Admin page
              window.location.href = "admin-page";
            }, 2000);
          }else{
            $('#responseMsgError').append("<p>"+res.msg+"</p>");
          }
        }
      });
    }
  </script>
</head>
<style type="text/css">
 .topbar{
    padding:2%;
    font-size: 18px;
 }
 #signup-form, #loadingForSignup, #responseForSignup,#adminUrl{
  display: none;
 }
 #adminUrl{
  margin-top: 3%; 
 }
 button{
  -webkit-border-radius: 0;
    -moz-border-radius: 0;
      border-radius: 0;
 }
</style>
<body>
  <p class="bg-primary topbar">Welcome to Exyht!</p>
  <div class="container" style="padding-bottom:5%;">
    <p class="bg-danger topbar">
      &nbsp; Use this Installation process to Install & Sign up or Update your Database to run Exyht properly.
      <button type="button" class="btn btn-primary pull-left" id="installBtn" onclick="addTable1();">
        <i class="fa fa-magic"></i> Click to Start Installation Process</button>
    </p>
    <div class="panel panel-default">
      <div class="panel-body">
        <code>This installation process is very quick. Just have a sip of your <i class="fa fa-coffee"></i>
 Coffee.</code>
      </div>
    </div>
    <div class="progress">
      <div id="installation-progress" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%">
        0%
      </div>
    </div>
    <p class="bg-danger topbar" id="responseMsgError"></p>
    <p class="bg-success topbar" id="responseMsg"></p>
    <div id="signup-form">
      <p class="bg-success topbar" id="responseForSignup"></p>
      <p class="bg-danger topbar" id="loadingForSignup" style="text-align:center;">Loading...</p>
      <p class="bg-primary topbar" id="infoForSignup">Create an account to login Admin page as Admin.</p>
    
      <div class="form-group">
        <label for="inputName">User name (Maximum 20 characters)</label>
        <input type="text" class="form-control" id="inputName" placeholder="Enter User name">
      </div>
      <div class="form-group">
        <label for="inputEmail">Email address</label>
        <input type="email" class="form-control" id="inputEmail" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="inputPassword">Password (Minimum 6 characters)</label>
        <input type="password" class="form-control" id="inputPassword" placeholder="Password">
      </div>
      <button class="btn btn-default" id="signUpBtn" onclick="signup()">Submit</button>
      
      <div id="adminUrl">
        <a href="admin-page"><button type="button" class="btn btn-primary">Go to Admin!</button></a>
      </div>
  </div>
  </div>
</body>
</html>