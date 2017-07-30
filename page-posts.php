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

<div class="PageListing">
    <post-listing :number-of-posts=10></post-listing>
</div>

<?php
get_footer();
