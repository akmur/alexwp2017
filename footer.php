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

<div class="Section">
    <div class="Footer">
        <p class="Footer__text">
            This website is built with <a class="Footer__link Link" href="https://wordpress.org">WordPress</a>,
        <a class="Footer__link Link" href="#">Vue.js</a> and much care.<br>
        The fonts are <a href="https://github.com/JulietaUla/Montserrat" class="Footer__link Link">Montserrat</a> by Julieta Ulanovsky and Georgia by Matthew Carter.<br>
        Post images are often randomly pulled from <a class="Footer__link Link" href="http://unsplash.it/">Unsplash</a>.
        </p>
    </div>
</div>


<script type="text/template" id="post-heading-template">
    <div>
        <a class="Section Section--link" :href=post.link @click.prevent="loadPost(post.id)" v-for="(post, index) in posts">
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
</script>


<script type="text/template" id="posts-pagination-template">
    <div class="Section Section--breadcrumbs">
        <div class="Breadcrumbs">
            <ul class="Breadcrumbs__list">
                <li class="Breadcrumbs__item" v-if="page < totalPages">
                    <a href="#" class="Breadcrumbs__link" @click.prevent="loadMore">{{ message }}</a>
                </li>
            </ul>
        </div>
    </div>
</script>

<script type="text/template" id="post-single-template">
    <div v-if="isActive">
        <div class="Section">
            <div class="Heading Heading--singlePost" :style=style(post)>
                <div class="Heading__titleGroup">
                    <div class="Heading__titleGroupContent">
                        <h1 class="Heading__title Title Title__h1">
                            {{ post.title.rendered }}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="Section">
            <div class="PhotoCredits">
                {{ post.acf.photo_credits }}
            </div>
            <div class="Post" v-html="post.content.rendered">
            </div>
        </div>
    </div>
</script>


<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-resource"></script>
<?php wp_footer(); ?>

</body>
</html>
