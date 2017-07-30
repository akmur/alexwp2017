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
                <h1 class="Section__title Title Title__h1">About me</h1>
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
<div class="Section u-mobile-hidden">
    <div class="Post Post--resume">
        <div class="Post__column">
            <h3 class="Post__title">Core Skills</h3>
            <ul class="List">
                <li class="List__item List__item--tag">HTML5</li>
                <li class="List__item List__item--tag">CSS / SCSS</li>
                <li class="List__item List__item--tag">JavaScript / ES6</li>
                <li class="List__item List__item--tag">Git</li>
                <li class="List__item List__item--tag">DevOps</li>
                <li class="List__item List__item--tag">Community</li>
            </ul>
            <h3 class="Post__title">Languages</h3>
            <ul class="List">
                <li class="List__item">Italian Native speaker</li>
                <li class="List__item">English Fluent Speaker</li>
            </ul>
            <h3 class="Post__title">Education</h3>
            <ul class="List">
                <li class="List__item">St. John’s College (Cork, Ireland)<br>
                Web Design<br>
                2007 - 2009</li>
                <li class="List__item">ITIS Lagrange (Milan, Italy)<br>
                Electronics<br>
                1993 - 1997</li>
            </ul>
            <h3 class="Post__title">Communities</h3>
            <ul class="List">
                <li class="List__item">
                    <a class="Link" href="http://navabi.de" target="blank">Milano Frontend Meetup</a><br>
                    Since October 2015
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.objectway.it/IT/default.asp" target="blank">Aachen Web Makers Meetup</a><br>
                    Since June 2017
                </li>
            </ul>
            <h3 class="Post__title">Favourite Quote</h3>
            <ul class="List">
                <li class="List__item">"Be conservative in what you do, be liberal in what you accept from others." - <a class="Link" href="https://en.wikipedia.org/wiki/Robustness_principle" target="blank">Jon Postel</a>
                </li>
            </ul>
        </div>
        <div class="Post__column Post__column--right">
            <h3 class="Post__title">Frameworks & Tools</h3>
            <ul class="List">
                <li class="List__item List__item--tag">Vue</li>
                <li class="List__item List__item--tag">Express</li>
                <li class="List__item List__item--tag">ITCSS / BEM</li>
                <li class="List__item List__item--tag">WordPress</li>
                <li class="List__item List__item--tag">WooCommerce</li>
                <li class="List__item List__item--tag">Gulp / Webpack / NPM</li>
                <li class="List__item List__item--tag">jQuery</li>
            </ul>
            <h3 class="Post__title">Main Work Experience</h3>
            <ul class="List">
                <li class="List__item">
                    <a class="Link" href="http://navabi.de" target="blank">navabi GmbH</a><br>
                    Frontend developer<br>
                    Since April 2017
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.objectway.it/IT/default.asp" target="blank">Objectway</a><br>
                    Frontend developer<br>
                    November 2015 to April 2017
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.thelevelgroup.com/" target="blank">The Level Group</a><br>
                    Frontend developer<br>
                    June 2014 to November 2015
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.pazienti.it" target="blank">Pazienti</a><br>
                    Frontend developer / UX / UI<br>
                    September 2011 to May 2014
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.apple.com" target="blank">Apple</a><br>
                    Tech support<br>
                    2002 to 2007
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="Section u-mobile-only">
    <div class="Post Post--resume">
        <div class="Post__column">
            <h3 class="Post__title">Core Skills</h3>
            <ul class="List">
                <li class="List__item List__item--tag">HTML5</li>
                <li class="List__item List__item--tag">CSS / SCSS</li>
                <li class="List__item List__item--tag">JavaScript / ES6</li>
                <li class="List__item List__item--tag">Git</li>
                <li class="List__item List__item--tag">DevOps</li>
                <li class="List__item List__item--tag">Community</li>
            </ul>
            <h3 class="Post__title">Frameworks & Tools</h3>
            <ul class="List">
                <li class="List__item List__item--tag">Vue</li>
                <li class="List__item List__item--tag">Express</li>
                <li class="List__item List__item--tag">ITCSS / BEM</li>
                <li class="List__item List__item--tag">WordPress</li>
                <li class="List__item List__item--tag">WooCommerce</li>
                <li class="List__item List__item--tag">Gulp / Webpack / NPM</li>
                <li class="List__item List__item--tag">jQuery</li>
            </ul>
            <h3 class="Post__title">Spoken Languages</h3>
            <ul class="List">
                <li class="List__item">Italian Native speaker</li>
                <li class="List__item">English Fluent Speaker</li>
            </ul>
            <h3 class="Post__title">Education</h3>
            <ul class="List">
                <li class="List__item">St. John’s College (Cork, Ireland)<br>
                Web Design<br>
                2007 - 2009</li>
                <li class="List__item">ITIS Lagrange (Milan, Italy)<br>
                Electronics<br>
                1993 - 1997</li>
            </ul>
            <h3 class="Post__title">Main Work Experience</h3>
            <ul class="List">
                <li class="List__item">
                    <a class="Link" href="http://navabi.de" target="blank">navabi GmbH</a><br>
                    Frontend developer<br>
                    Since April 2017
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.objectway.it/IT/default.asp" target="blank">Objectway</a><br>
                    Frontend developer<br>
                    November 2015 to April 2017
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.thelevelgroup.com/" target="blank">The Level Group</a><br>
                    Frontend developer<br>
                    June 2014 to November 2015
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.pazienti.it" target="blank">Pazienti</a><br>
                    Frontend developer / UX / UI<br>
                    September 2011 to May 2014
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.apple.com" target="blank">Apple</a><br>
                    Tech support<br>
                    2002 to 2007
                </li>
            </ul>
            <h3 class="Post__title">Communities</h3>
            <ul class="List">
                <li class="List__item">
                    <a class="Link" href="http://navabi.de" target="blank">Milano Frontend Meetup</a><br>
                    Since October 2015
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.objectway.it/IT/default.asp" target="blank">Aachen Web Makers Meetup</a><br>
                    Since June 2017
                </li>
            </ul>
            <h3 class="Post__title">Favourite Quote</h3>
            <ul class="List">
                <li class="List__item">"Be conservative in what you do, be liberal in what you accept from others." - <a class="Link" href="https://en.wikipedia.org/wiki/Robustness_principle" target="blank">Jon Postel</a>
                </li>
            </ul>
        </div>
    </div>
</div>
<?php
get_footer();
