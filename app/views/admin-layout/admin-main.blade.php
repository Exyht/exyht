<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Exyht - Admin page</title>
    
    <?php
        // Change csrf_token in SESSION with each page load
         Session::put('admin-token', md5(microtime()));
         $adminToken = Session::get('admin-token');
    ?>
    <meta name="csrf-token" content="{{$adminToken}}">
    <script type="text/javascript">
    /*
            _________              __      __
           / _______/             / /    _/ /_
          / /____ __  __ __  __  / /__  /_  _/
         / _____/ \ \/ / \ \/ / / ___ \  / /
        / /______ /_/\_\  \  / / /  / / / /__
       /________/         /_/ /_/  /_/ /____/
    */
    </script>
        @include('admin-layout.admin-libraries')
    
    <style type="text/css">
      *{
        -webkit-border-radius: 0 !important;
           -moz-border-radius: 0 !important;
              border-radius: 0 !important;
      }
    </style>
</head>
<body>
        
<script type="text/javascript">
  Exyht.PathToLibraries = "{{URL::to('/')}}";
  Exyht.adminToken = Ember.Object.create({
        token: "{{$adminToken}}",
  });
  
  Exyht.advanceReadiness();
</script>
</body>
</html>
