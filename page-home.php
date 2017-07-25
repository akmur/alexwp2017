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

<div class="Section">
    <div class="Hero">
        <div class="Hero__quoteWrapper">
            <h1 class="Hero__quote">
                Hi. I'm <span class="u-strong">Alessandro Muraro</span>, a web developer based in Aachen, Germany. <br>
                I do frontend, web apps, WordPress, WooCommerce and I organise communities.
                <a class="Hero__cta" href="#">(Learn more)</a>
            </h1>
        </div>
    </div>
</div>

<div class="Section">
    <div class="SectionTitle">
        <h2 class="Title Title__h2">
            From the blog...
        </h2>
    </div>
</div>

<div id="app">
    <post-heading-listing :number-of-posts=3></post-heading-listing>
</div>

<div class="Section">
    <div class="ReadMore">
        <h3 class="Title Title__h3">
            <a class="Link ReadMore__link" href="/posts">Read more</a>
        </h3>
    </div>
</div>

<?php
get_footer();
