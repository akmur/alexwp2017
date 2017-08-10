<?php
/**
 * The template for displaying the home page
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package alex2017
 */

get_header(); ?>

<div id="PageListing" data-posts-number="10" class="PageListing"></div>

<div class="LoadMore u-center">
    <button class="Button" id="loadMore">Load More...</button>
</div>

<?php
get_footer();
