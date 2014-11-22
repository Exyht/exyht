<noscript>

<div class="noscriptAlert alert alert-danger" role="alert">
  <strong>This blog site works best with JavaScript enabled</strong>
</div>
<?php
$blogLinks = json_decode($blog_links);
?>
@if($has_navbar)
<div class="blog-masthead" id="topNavbar" style="margin-top:50px;">
  <div class="container">
    <nav class="blog-nav">
    @foreach($blogLinks as $link)
      @if($link->navUrl)
        @if($link->isBlogUrl)
          {{ HTML::link('/', $link->link_name, array('class' => 'blog-nav-item active')) }}
        @else
          <a href="{{$link->url}}" class="blog-nav-item">{{$link->link_name}}</a>
        @endif
      @endif
    @endforeach
    </nav>
  </div>
</div>
@endif
<div class="container">
      <div class="blog-header">	
      	<h1 class="blog-title">{{{$blog_name}}}</h1>
        <p class="lead blog-description">{{{$blog_subtitle}}}</p>
      </div>
      <div class="row">

        <div class="col-sm-8 blog-main">
          <div class="blog-post">
            <?php
            $currentPost       = json_decode($getHomeController->getOnlyComments($postId));
            $decodeBolgPosts   = json_decode($getHomeController->getBlogPostsForNoScript());
            $aboutAuthor       = json_decode(json_encode($getHomeController->getAboutAuthor()));
            $archive           = json_decode(json_encode($getHomeController->getArchive()));
            ?>
            @if(isset($postId) && !empty($postId))
              <h2>{{{$title}}}</h2>

              {{$postBody}}<hr />

              <div class="breadcrumb">Comments</div>
              {{$getHomeController->noScriptComments($currentPost)}}
            @else
              {{$getHomeController->noScriptPosts($decodeBolgPosts)}}
            @endif
          </div><!-- /.blog-post -->

         </div><!-- /.blog-main -->

        <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
            <div class="row">
              <div class="sidebar-module col-xs-6">
                @if($aboutAuthor->image == false)
                  {{ HTML::image($aboutAuthor->hashedEmail) }}
                @else
                  {{ HTML::image($aboutAuthor->image, null, array('height' => '170px', 'width' => '170px')) }}
                @endif
              </div>
            </div>
            <div class="row">
            <div class="sidebar-module sidebar-module-inset">
              <h4>About</h4>
                <p>{{$aboutAuthor->about}}</p>
            </div>
            <div class="sidebar-module">
              <h4>Archives</h4>
                <ol class="list-unstyled">
                  @if(!is_null($archive))
                    @foreach($archive as $a)
                      <li>{{ HTML::link('/post/'.$getHomeController->titleSlug($a->title).'/'.$a->id, $a->created) }}</li>
                    @endforeach
                  @endif
                </ol>
            </div>
            <div class="row">
              <div class="sidebar-module col-xs-6">
                <h4>Elsewhere</h4>
                <ol class="list-unstyled">
                  @foreach($blogLinks as $link)
                    @if($link->elseUrl)
                      <li><a href="{{$link->url}}">{{$link->link_name}}</a></li>
                    @endif
                  @endforeach
                </ol>
              </div>
            </div> 
        </div><!-- /.blog-sidebar -->

       </div><!-- /.row -->
 </div><!-- /.container -->
</div>
<div class="blog-footer">
    @if($has_navbar)
    <p>
      <a href="#topNavbar"><i class="fa fa-arrow-up"></i> Back to top</a>
    </p>
    @endif
    <p>Copyright &copy; {{date("Y")}} - All rights reserved</p>
</div>
</noscript>