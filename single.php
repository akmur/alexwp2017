<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package alex2017
 */

get_header(); ?>


<?php
while ( have_posts() ) : the_post(); ?>

    <div class="Section">
        <?php 
        if ( has_post_thumbnail() ) { // check if the post has a Post Thumbnail assigned to it.
            $image = get_the_post_thumbnail_url(get_the_ID(), 'full');
        } else {
            $image = "https://unsplash.it/1200/700?image=" . floor(get_the_id() / 5);
        }
        ?>
        <div class="Heading Heading--singlePost" style="background: url('<?php echo $image; ?>') no-repeat center center / cover">
            <div class="Heading__titleGroup">
                <div class="Heading__titleGroupContent">
                    <h1 class="Heading__title Title Title__h1">
                        <?php the_title(); ?>
                    </h1>
                </div>
            </div>
        </div>
    </div>

    <div class="Section">
        <div class="PhotoCredits">
            <?php the_field('photo_credits'); ?>
        </div>
        <div class="Post">
            <?php the_content(); ?>
        </div>
    </div>
    <?php
endwhile; // End of the loop.
?>

<?php
get_footer();
