<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package alex2017
 */

?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">

<?php wp_head(); ?>
</head>

<body <?php body_class( $class = "Body" ); ?>>

    <div class="HeaderWrapper">
        <header class="Header">
            <nav class="Navigation">
                <div class="SiteName">
                <h1 class="SiteName__title"><a class="SiteName__link logo" href="/">AM</a></h1>
                </div>
                <div class="MenuLinks">
                    <ul class="MenuLinks__list">
                        <?php
                            // check if the repeater field has rows of data
                            if( have_rows('main_menu', 'option') ):
                                // loop through the rows of data
                                while ( have_rows('main_menu', 'option') ) : the_row();
                                    // display a sub field value ?>
                                    <li class="MenuLinks__item">
                                        <a class="MenuLinks__link" href="<?php the_sub_field('page_url'); ?>">
                                            <?php the_sub_field('page_name'); ?>
                                        </a>
                                    </li>
                                <?php
                                endwhile;
                            endif;
                        ?>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
    <div id="app">
