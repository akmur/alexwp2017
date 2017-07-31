/* global document */

var bus = new Vue();

var siteUrl;
var siteProtocol = location.protocol;
var realSiteUrl = location.host;

if (realSiteUrl === 'localhost:3000') {
    siteUrl = siteProtocol + '//alexwp2017.dev';
} else {
    siteUrl = siteProtocol + '//' + realSiteUrl;
}

var store = {
    siteUrl: siteUrl,
    state: {
        offset: 0,
        totalPages: 0
    },
    getOffset() {
        return this.state.offset;
    },
    setOffset(newValue) {
        this.state.offset = newValue;
    },
    getTotalPage() {
        return this.state.totalPages;
    },
    setTotalPage(newValue) {
        this.state.totalPages = newValue;
    }
}

Vue.component('post-listing', {
    data: function(){
        return {
            message: 'Load More',
            showButton: true,
            posts: [],
            showPosts: false,
            isLastPage: false
        }
    },
    props: ['numberOfPosts'],
    template: '#post-list-template',
    methods: {
        randomUnsplash: function(id) {
            var imageId = Math.floor(id / 5); // just because unsplash doesn't have 10k images and posts could have a > 10k ID
            var imageUrl = `https://unsplash.it/700/700?image=${imageId}`;
            return imageUrl;
        },
        image: function(post) {
            if (post._embedded['wp:featuredmedia']) {
                return post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url;
            } else {
                return this.randomUnsplash(post.id);
            }
        },
        getPosts: function() {
            var offset = store.getOffset();
            this.$http.get(`${store.siteUrl}/wp-json/wp/v2/posts?_embed&page=1&per_page=${this.numberOfPosts}&offset=${offset}`).then(response => {
                var postsArray = response.data;
                // this will append the posts to the posts array
                this.posts = this.posts.concat(postsArray);
                // setting the button message
                this.message = 'Load More';
                // making sure the posts are displayed - they are false by default
                this.showPosts = true;
                // getting needed info to know if we are on the last page when infinite loading
                var totalPages = response.headers.map['x-wp-totalpages'][0];
                var currentPage = Math.floor(offset / 10) + 1;
                if (currentPage == totalPages) {
                    // if it is the last page, set this variable to true,
                    // it will hide the loadmore button
                    this.isLastPage = true;
                }
            }, response => {
                console.log(response);
            });
        },
        loadMore: function() {
            this.message = 'Loading...';
            var currentOffset = store.getOffset();
            // setting the offset
            store.setOffset(currentOffset + 10);
            // getting posts (they will be appended)
            this.getPosts();
        }
    },
    created: function(){
        bus.$on('loadMore', this.loadMore);
    },
    mounted: function() {
        this.getPosts();
    }
});

var vm = new Vue({
    el: '#app',
    data: store.state
})
