<?php
/**
 * The template for displaying the about page
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

<div class="Section" href="#">
    <div class="Heading">
        <div class="Heading__titleGroup">
            <div class="Heading__titleGroupContent">
                <h1 class="Section__title Title Title__h1">Contact</h1>
            </div>
        </div>
        <div class="Heading__featuredImage">
            <picture>
                <source
                    media="(min-width: 650px)"
                    srcset="https://unsplash.it/800/800?image=910,
                            https://unsplash.it/800/800?image=910 2x">
                <source
                    media="(min-width: 465px)"
                    srcset="https://unsplash.it/800/800?image=910,
                            https://unsplash.it/800/800?image=910 2x">
                <img
                    src="https://unsplash.it/800/800?image=910"
                    srcset="https://unsplash.it/800/800?image=910,
                            https://unsplash.it/800/800?image=910 2x"
                    alt="a cute kitten">
            </picture>
        </div>
    </div>
</div>
<div class="Section">
    <div class="Post Post--contact">
        <p>
            You can follow me on <a class="Footer__link Link" href="https://twitter.com/akmur">Twitter</a>, <a class="Footer__link Link" href="https://www.linkedin.com/in/alessandromuraro/">Linkedin</a> or <a class="Footer__link Link" href="https://github.com/akmur">Github</a> and the best ways to get in touch with me are by:
            <ul>
                <li>Emailing me at <a href="mailto:alessandro.muraro@gmail.com">alessandro.muraro@gmail.com</a>.</li>
                <li>Sending me a direct message on <a href="https://twitter.com/akmur">Twitter</a>.</li>
                <li>Sending me a message on <a href="https://www.linkedin.com/in/alessandromuraro/">Linkedin</a>.</li>
            </ul> 
        </p>
    </div>
</div>
<?php
get_footer();
