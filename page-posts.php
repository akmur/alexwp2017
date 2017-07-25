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

<div class="pageListing">
    <div v-show="showPosts">
        <post-heading-listing :number-of-posts=10></post-heading-listing>
        <posts-pagination :message=message :page=page :total-pages=totalPages></posts-pagination>
    </div>
</div>

<?php
get_footer();
