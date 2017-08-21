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
                <img
                    src="http://alexmuraro.me/wp-content/uploads/2017/08/about.jpg"
                    alt="Alessandro Muraro - Frontend developer">
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
                <li class="List__item List__item--tag">JavaScript</li>
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
                    <a class="Link" href="http://milanofrontend.it" target="blank">Milano Frontend Meetup</a><br>
                    Since October 2015
                </li>
                <li class="List__item">
                    <a class="Link" href="https://www.meetup.com/it-IT/Aachen-Web-Makers-Meetup/" target="blank">Aachen Web Makers Meetup</a><br>
                    Since June 2017
                </li>
            </ul>
        </div>
        <div class="Post__column Post__column--right">
            <h3 class="Post__title">Frameworks & Tools</h3>
            <ul class="List">
                <li class="List__item List__item--tag">Vue / React</li>
                <li class="List__item List__item--tag">Express</li>
                <li class="List__item List__item--tag">ITCSS / BEM</li>
                <li class="List__item List__item--tag">WordPress / WooCommerce</li>
                <li class="List__item List__item--tag">Gulp / Webpack / NPM</li>
                <li class="List__item List__item--tag">jQuery</li>
            </ul>
            <h3 class="Post__title">Main Work Experience</h3>
            <ul class="List">
                <li class="List__item">
                    <a class="Link" href="http://navabi.de" target="blank">navabi GmbH</a> (DE)<br>
                    Frontend developer<br>
                    Since April 2017
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.objectway.it/IT/default.asp" target="blank">Objectway</a> (IT)<br>
                    Frontend developer<br>
                    2015 to 2017
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.thelevelgroup.com/" target="blank">The Level Group</a> (IT)<br>
                    Frontend developer<br>
                    2014 to 2015
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.pazienti.it" target="blank">Pazienti</a> (IT)<br>
                    Frontend developer / UX / UI<br>
                    2011 to 2014
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.apple.com" target="blank">Apple</a> (IRL)<br>
                    Tech support<br>
                    2003 to 2007
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.unisys.com" target="blank">Unisys</a> (NL)<br>
                    Tech support<br>
                    2001 to 2003
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
                <li class="List__item List__item--tag">JavaScript</li>
                <li class="List__item List__item--tag">Git</li>
                <li class="List__item List__item--tag">DevOps</li>
                <li class="List__item List__item--tag">Community</li>
            </ul>
            <h3 class="Post__title">Frameworks & Tools</h3>
            <ul class="List">
                <li class="List__item List__item--tag">Vue / React</li>
                <li class="List__item List__item--tag">Express</li>
                <li class="List__item List__item--tag">ITCSS / BEM</li>
                <li class="List__item List__item--tag">WordPress / WooCommerce</li>
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
                    <a class="Link" href="http://navabi.de" target="blank">navabi GmbH</a> (DE)<br>
                    Frontend developer<br>
                    Since April 2017
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.objectway.it/IT/default.asp" target="blank">Objectway</a> (IT)<br>
                    Frontend developer<br>
                    2015 to 2017
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.thelevelgroup.com/" target="blank">The Level Group</a> (IT)<br>
                    Frontend developer<br>
                    2014 to 2015
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.pazienti.it" target="blank">Pazienti</a> (IT)<br>
                    Frontend developer / UX / UI<br>
                    2011 to 2014
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.apple.com" target="blank">Apple</a> (IRL)<br>
                    Tech support<br>
                    2003 to 2007
                </li>
                <li class="List__item">
                    <a class="Link" href="http://www.unisys.com" target="blank">Unisys</a> (NL)<br>
                    Tech support<br>
                    2001 to 2003
                </li>
            </ul>
            <h3 class="Post__title">Communities</h3>
            <ul class="List">
                <li class="List__item">
                    <a class="Link" href="http://milanofrontend.it" target="blank">Milano Frontend Meetup</a><br>
                    Since October 2015
                </li>
                <li class="List__item">
                    <a class="Link" href="https://www.meetup.com/it-IT/Aachen-Web-Makers-Meetup/" target="blank">Aachen Web Makers Meetup</a><br>
                    Since June 2017
                </li>
            </ul>
        </div>
    </div>
</div>

<?php
get_footer();
