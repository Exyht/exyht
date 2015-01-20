<!DOCTYPE html>
<html lang="en-US">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
		<title>{{{$title}}}</title>
    <meta name="description" content="{{{$meta_description}}}">
		<?php
		// Change csrf_token in SESSION with each page load
      Session::put('_token', md5(microtime()));
      $getHomeController = new HomeController();
		?>
		<meta name="csrf-token" content="{{csrf_token()}}">
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
		@include('layout.libraries')
	<style type="text/css">
  .form-control{
      -webkit-border-radius: 0;
      -moz-border-radius: 0;
      border-radius: 0;
  }
  button,input,textarea{
      -webkit-border-radius: 0 !important;
         -moz-border-radius: 0 !important;
              border-radius: 0 !important;
    }
	.addCommentDiv {
       position: fixed;
       top: 0;
       width: 100%;
	   background-color: #f5f5f5;
	   box-shadow: 0px 1px 3px #888;
	   padding-bottom:0.5%;
	   opacity:0.9;
    }
    .loadingError{
      position: fixed;
      top: 27%;
      width: 50%;
    }
   .noscriptAlert{
     text-align: center;
     position: fixed;
     top: 0;
     width: 100%;
     z-index: 1;
   }
   .navMargin{
    margin-left: 2%;
    margin-right: 2%;
   }
	</style>
	</head>
  <body>
        
    @include('layout.noscript')
    
    <script type="text/javascript">
    @if(isset($postId) && !empty($postId))
      var singlePostStore = {{json_encode($getHomeController->getPostCommentsForMainPage($postId))}}
    @else
      var postsStore = {{json_encode($getHomeController->getBlogPosts(0, 10))}}
    @endif
    </script>

    <script type="text/javascript">
      
      Exyht.BlogSettings = Ember.Object.create({
        has_logo: {{$has_logo}},
        logo: "{{{$logo}}}",
        blog_title: "{{{$blog_name}}}",
        blog_sub_title: "{{{$blog_subtitle}}}",
        isReadOnlyMode: {{$read_only_mode}},
        hasCommentFeature: {{$has_cmnt_feature}},
        hasNavbar: {{$has_navbar}}
      });
    
      Exyht.BlogStyle = Ember.Object.create({
          @foreach($blog_style as $key => $value)
            {{ $key .':'. $value.',' }}
          @endforeach
      });
    
      addCss(Exyht.BlogStyle.font_family);
      addCss(Exyht.BlogStyle.link_color);
      
      Exyht.BlogLinks = {{$blog_links}};

      Exyht.SidebarInfo = {{$sidebar_info}};
      
      Exyht.advanceReadiness();
    </script>        
  </body>
</html>