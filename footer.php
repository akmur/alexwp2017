<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package alex2017
 */

?>

</div> <!-- end app -->

<div class="Section">
    <div class="Footer">
        <div class="Footer__container">
            <p class="Footer__text">
                You can find me on <a class="Footer__link Link" href="https://twitter.com/akmur">Twitter</a>, <a class="Footer__link Link" href="https://www.linkedin.com/in/alessandromuraro/">Linkedin</a> or <a class="Footer__link Link" href="https://github.com/akmur">Github</a>.
            </p>
            <p class="Footer__text">
                This website is built with <a class="Footer__link Link" href="https://wordpress.org">WordPress</a> and some 
                <a class="Footer__link Link" href="https://vuejs.org/">Vue.js</a>. Fonts are <a href="https://github.com/JulietaUla/Montserrat" class="Footer__link Link">Montserrat</a> by Julieta Ulanovsky and Georgia by Matthew Carter. 
                Post images are mostly from <a class="Footer__link Link" href="http://unsplash.it/">Unsplash</a>.<br>The source code of this website is <a class="Footer__link Link" href="https://github.com/akmur/alexwp2017">available on Github</a>.
            </p>
        </div>
    </div>
</div>

<script type="text/template" id="post-list-template">
    <div v-if="showPosts">
        <div class="PostsList">
            <a class="Section Section--link" :href=post.link v-for="(post, index) in posts">
                <div :class="(index + 1) % 2 === 0 ? 'Heading' : 'Heading Heading--alt'">
                    <div class="Heading__titleGroup">
                        <div class="Heading__titleGroupContent">
                            <h1 class="Section__title Title Title__h1">{{ post.title.rendered }}</h1>
                        </div>
                    </div>
                    <div class="Heading__featuredImage">
                        <picture>
                            <img
                                :src=image(post)
                                :alt=post.title.rendered>
                        </picture>
                    </div>
                </div>
            </a>
        </div>
        <div class="LoadMore u-center" v-if="numberOfPosts > 3 && !isLastPage">
            <a href="#" class="Button" @click.prevent="loadMore">{{ message }}</a>
        </div>
    </div>
</script>

<script src="https://cdn.polyfill.io/v2/polyfill.min.js?callback=polyfillsAreLoaded";; defer async></script>
<script>
  function polyfillsAreLoaded() {
    console.log('loaded');
  }
</script>

<?php wp_footer(); ?>

</body>
</html>
