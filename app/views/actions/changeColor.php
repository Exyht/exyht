<?php

    $favcolor = Input::get('favcolor');
    $favcolor = substr($favcolor, 0, 7);
    $category = Input::get('category');
    $category = (int)$category;
    /*
    |--------------------------------------------------------
    | Value    Category Name
    |--------------------------------------------------------
    |  1      Background Color
    |  2      Navbar Color
    |  3      Post Body Color
    |  4      Sidebar Color
    |  5      Footer Color
    |  6      Link Color
    */
    $SettingController = new SettingController();
	switch ($category){
        case '1':
            echo $SettingController->changeBgColor('bg_clr', $favcolor, 'Body');
            break;
        case '2':
            echo $SettingController->changeBgColor('nav_bg_clr', $favcolor, 'Navbar');
            break;
        case '3':
            echo $SettingController->changeBgColor('p_bg_clr', $favcolor, 'Post Body');
            break;
        case '4':
            echo $SettingController->changeBgColor('s_bg_clr', $favcolor, 'Sidebar');
            break;
        case '5':
            echo $SettingController->changeBgColor('f_bg_clr', $favcolor, 'Footer');
            break;
        case '6':
            echo $SettingController->changeBgColor('link_clr', $favcolor, 'Link');
            break;
        default:
            echo "No category chosen!";
    }
