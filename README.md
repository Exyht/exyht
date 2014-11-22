## Exyht (Express your thought)

Exyht is a fully open source blogging software. This is a very light weight and easy to use one page web App.

## Built with

+ [EmberJS](http://emberjs.com/) 1.8.1
+ [Laravel](http://laravel.com/) 4.2.*
+ [Twitter Bootstrap](http://getbootstrap.com/) 3.2.0

## Feature

Exyht has *Read only Mode* feature & though it is mainly a JavaScript based App, it's SEO friendly & works also if Javascript is disabled.

You can cusomize the Blog template's *Blog name & sub-title*, *font family*, *colors*, *add links*, *Logo* and much more quite easily.

You'll also love the text editor, use *markdown*, *emoji* with *textcomplete* feature. Type your comment while browsing from one topic to another & you'll experience faster topic load Since this is a one page web App.

Exyht use backend Laravel Api with Ember at front end.

## Install Exyht

Installation of Exyht is very easy. Follow the below steps:
+ Download **Exyht** zip from github and extract it in a folder `blog`(recommended) in `public_html` or `htdocs`.
+ Install [composer](https://getcomposer.org/download/).
+ Run `composer update` or `composer install` from `blog` folder path in **console**(Command Prompt).
+ Save your **username** & **password** for `mysql` in `app/config/database.php`.
+ Now run Exyht installer by browsing `http://yourdomain/blog/installer` & follow the instructions. It will take not more than 30 seconds.
+ Congrates, installation is complete. Now go to **Admin panel** by browsing `http://yourdomain/blog/admin-page`.
+ Your blog path `http://yourdomain/blog/`.

## Requirements

+ [PHP](http://php.net/) 5.4+
+ [MySQL](http://www.mysql.com/) 5+
+ [Apache](http://www.apache.org/) 2+

## For Developers

A `Grunt` file is already built. If you want to use build tools like `Grunt`, `Gulp`, etc. you need to install *Node npm*.

## Security

Security issue is taken seriously. For backends, necessary Laravel security steps've been taken. For user input sanitization *HtmlPurifier*, *Google caja html sanitizer*, *markdown sanitizer* are used.

Besides You can *Block IP*, *Manage flagged comment*, etc very easily from your admin page.

## LICENSE

Licensed under the GNU General Public License Version 2.0 (or later). You may not use this software if you do not agree with the License.
