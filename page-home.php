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
                Hi. I'm <span class="u-strong">Alessandro Muraro</span>. 
                I'm a web developer specialized in coding modular sites and a passionate about maintainable code.<br>
                I do frontend, web apps and I organise communities.
                <a class="Hero__cta" href="/about">Learn more</a> 
                <span class="Hero__quoteSmall">or</span> 
                <a class="Hero__cta" href="/posts">read my blog</a>.
            </h1>
        </div>
    </div>
</div>

<div class="u-mobile-hidden">
    <div class="Section u-mobile-hidden">
        <div class="SectionTitle">
            <h2 class="Title Title__h2">
                From the blog...
            </h2>
        </div>
    </div>

    <post-listing :number-of-posts=3></post-listing>

    <div class="Section Section--readMore u-center">
        <a class="Button" href="/posts">Read more</a>
    </div>
</div>
<?php
get_footer();
