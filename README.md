## Exyht (Express your thought)

You may also like [markdown-youtube](https://github.com/Exyht/markdown-youtube).

[![Build Status](https://travis-ci.org/Exyht/exyht.svg?branch=master)](https://travis-ci.org/Exyht/exyht)

Exyht is a fully open source & free blogging software. This is a very light weight and easy to use one page web App.

**[View more images](https://github.com/Exyht/exyht/issues/1)**

## Built with

+ [EmberJS](http://emberjs.com/) 1.8.1
+ [Laravel](http://laravel.com/) 4.2.*
+ [Twitter Bootstrap](http://getbootstrap.com/) 3.2.0

## Facebook Login

Exyht uses **Facebook** login system. This makes Exyht more User friendly and helps to stop spamming.

## Feature

Exyht has *Read only Mode* feature & though it is mainly a JavaScript based App, it's SEO friendly & works also if Javascript is disabled.

Exyht support Infinite Scrolling. It also has an awesome Installer.

You can customize the Blog template's *Blog name & sub-title*, *font family*, *colors*, *add links*, *Logo*, **Image gallery** and much more quite easily.

You'll also love the **text editor**, use *markdown* **(YouTube support)**, *emoji* with *textcomplete* feature. Type your comment while browsing from one topic to another & you'll experience faster topic load Since this is a one page web App.

Exyht uses backend Laravel Api with Ember at front end.

## Mobile & Tablet friendly 

![Exyht-1](https://cloud.githubusercontent.com/assets/9896315/5836185/4fc9ef82-a19c-11e4-9191-9ec4cada5eee.jpg)
## Text Editor won't interrupt while reading or changing topic.

![Exyht-2](https://cloud.githubusercontent.com/assets/9896315/5992719/794a97b4-aa5f-11e4-930a-d71986ea787e.jpg)
## Customize Colors & Fonts.

![Exyht-3](https://cloud.githubusercontent.com/assets/9896315/5836204/739bc4a8-a19c-11e4-9b7b-202ce6ea453a.jpg)

## Admin Panel
![exyht - admin page](https://cloud.githubusercontent.com/assets/9896315/5938685/a3d9caf8-a727-11e4-9726-d22ae1eabdb1.jpg)

![exyht - admin page ](https://cloud.githubusercontent.com/assets/9896315/5938695/bd8b0796-a727-11e4-9d84-b6fed214dfea.jpg)

![exyht - admin page](https://cloud.githubusercontent.com/assets/9896315/5938701/ca6f177c-a727-11e4-88fc-98298a5b7f47.jpg)

## Installer

![installer - mozilla firefox](https://cloud.githubusercontent.com/assets/9896315/5938710/d8e239b0-a727-11e4-819e-c4c4e97db940.jpg)

![installer - mozilla firefox](https://cloud.githubusercontent.com/assets/9896315/5938726/e9af04e4-a727-11e4-8374-8a9062d1d837.jpg)


## Install Exyht

Installation of Exyht is very easy. Please **carefully** follow the below steps:
+ Download **Exyht** zip from github and extract it in a folder `blog`(recommended) in `public_html` or `htdocs`.
+ Save your **username** & **password** for `mysql` in `app/config/database.php`.
+ In `app/views/layout/main.blade.php` place your **Facebook Login App ID**.
    
         appId      : 'your-app-id',

+ Now run Exyht installer by browsing `http://yourdomain/blog/installer` & follow the instructions. It will take not more than 30 seconds.
+ Congrates, installation is complete. Now go to **Admin panel** by browsing `http://yourdomain/blog/admin-page`.
+ Your blog path `http://yourdomain/blog/`.

## Requirements

+ [PHP](http://php.net/) 5.4+
+ [MySQL](http://www.mysql.com/) 5+
+ [Apache](http://www.apache.org/) 2+

Exyht's browser requirements are also high since it's mainly a Javascript based App.

+ Google chrome 23+
+ Mozilla Firefox 17+
+ Internet Explorer 10+
+ Safari 5+
+ Android 4.1+
+ IOS 6+
+ Windows 8+

## For Developers

A `Grunt` file is already built. If you want to use build tools like `Grunt`, `Gulp`, etc. you need to install *Node npm*.

## Adding Google Analytics Tracking 

[Here in Ember guide, you'll get how to add analytics tracking to Ember App](http://emberjs.com/guides/cookbook/helpers_and_components/adding_google_analytics_tracking/).

## Security

You must generate a new encryption key for your laravel to secure the encryption. Your Laravel encryption key lies in `app/config/app.php` file. To change it, do not remove it. Just run the Laravel Artisan command from the folder where  **Exyht** App lies.

    php artisan key:generate

Security issue is taken seriously. For backend, necessary Laravel security steps've been taken. For user input sanitization *HtmlPurifier*, *Google caja html sanitizer*, *markdown sanitizer* are used.

Besides You can *Block IP*, *Manage flagged comment*, etc very easily from your admin page.

## Contribute

Exyht is 100% free & open source. So contribute in Exyht and make it great.

## Report Bugs or issues/ Pull request

Bugs always exist. Report any bug or issue in https://github.com/Exyht/exyht/issues and Pull request in https://github.com/Exyht/exyht/pulls.

## LICENSE

Licensed under the GNU General Public License Version 2.0 (or later). You may not use this software if you do not agree with the License.
