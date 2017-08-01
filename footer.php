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
                Post images are often mostly from <a class="Footer__link Link" href="http://unsplash.it/">Unsplash</a>.
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
    <div class="Spinner" v-else>
        <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
        </div>
    </div>
</script>

<script src="https://unpkg.com/vue@2.4.2/dist/vue.min.js"></script>
<script src="https://unpkg.com/vue-resource@1.3.4/dist/vue-resource.min.js"></script>

<?php wp_footer(); ?>

</body>
</html>
