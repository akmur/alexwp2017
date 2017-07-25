var bus = new Vue();

var store = {
    debug: true,
    siteUrl: 'http://alexwp2017.dev',
    state: {
        message: 'Load more',
        page: 1,
        totalPages: 1,
        showPosts: true,
        activePost: 0
    },
    getLoadingMessage() {
        return this.state.message;
    },
    setLoadingMessage(message) {
        this.state.message = message;
    },
    getPageAction() {
        return this.state.page;
    },
    setPageAction(newValue) {
        this.state.page = newValue;
    },
    setTotalPageAction(newValue) {
        this.state.totalPages = newValue;
    }
}

Vue.component('post-heading-listing', {
    data: function(){
        return {
            posts: []
        }
    },
    props: ['numberOfPosts'],
    template: '#post-heading-template',
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
        getPosts: function(offset) {
            if (!offset) {
                offset = 0;
            }
            this.$http.get(`${store.siteUrl}/wp-json/wp/v2/posts?_embed&page=1&per_page=${this.numberOfPosts}&offset=${offset}`).then(response => {
                var postsArray = response.data;
                // this will append the posts to the posts array
                this.posts = this.posts.concat(postsArray);
                var totalPages = response.headers.map['X-WP-TotalPages'][0];
                store.setTotalPageAction(totalPages);
                store.setLoadingMessage('Load More');
            }, response => {
                // error callback
            });
        },
        loadMore: function() {
            // getting current image
            var currentPage = store.getPageAction();
            // setting the offset
            var offset = currentPage * 10;
            // getting posts (they will be appended)
            this.getPosts(offset);
            // increasing current page
            store.setPageAction(currentPage + 1);
        },
        loadPost: function(id){
            store.state.showPosts = false;
            store.state.activePost = id;
            bus.$emit('loadPost');
            window.scrollTo(0, 0);
        }
    },
    created: function(){
        bus.$on('loadMore', this.loadMore);
    },
    mounted: function() {
        this.getPosts();
    }
});

Vue.component('post-single', {
    template: '#post-single-template',
    data: function(){
        return {
            isActive: false,
            post: ''
        }
    },
    methods: {
        style: function(post){
            return `background: url(${post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url}) no-repeat center center / cover`
        },
        getSingle: function() {
            this.$http.get(`${store.siteUrl}/wp-json/wp/v2/posts/${store.state.activePost}?_embed`).then(response => {
                this.post = response.data;
                this.isActive = true;
                window.history.pushState({page: this.post.id}, this.post.title.rendered, this.post.slug);
            }, response => {
                // error callback
            });
        },
    },
    created: function() {
        bus.$on('loadPost', this.getSingle);
    }
});

Vue.component('posts-pagination', {
    template: '#posts-pagination-template',
    props: ['page', 'totalPages', 'message'],
    methods: {
        loadMore: function(){
            bus.$emit('loadMore');
            store.setLoadingMessage('Loading...');
        },
    }
});

var vm = new Vue({
    el: '#app',
    data: store.state
})


window.onpopstate = function(event) {
    if (window.location.href === 'http://localhost:3000/posts/') {
        store.state.showPosts = true;
        store.state.activePost = 0;
        window.scrollTo(0, 0);
    } else {
        store.state.showPosts = false;
        store.state.activePost = 0;
        window.location.reload();
    }
}