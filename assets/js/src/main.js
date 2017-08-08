/* global document */

import 'whatwg-fetch';

const SiteProtocol = location.protocol;
const RealSiteUrl = location.host;
const SiteUrl = SiteProtocol + '//' + RealSiteUrl;

const Store = {
    siteUrl: SiteUrl,
    state: {
        message: 'Load more...',
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

// Revealing module pattern

const app = (function () {

    // private
    function randomUnsplash(id) {
        const imageId = Math.floor(id / 5); // just because unsplash doesn't have 10k images and posts could have a > 10k ID
        const imageUrl = `https://unsplash.it/700/700?image=${imageId}`;
        return imageUrl;
    };

    function getImage(post) {
        if (post._embedded['wp:featuredmedia']) {
            return post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url;
        } else {
            return randomUnsplash(post.id);
        }
    };

    function getPosts(numberOfPosts, offset){
        fetch(`${Store.siteUrl}/wp-json/wp/v2/posts?_embed&page=1&per_page=${numberOfPosts}&offset=${offset}`)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log('parsed json', json);
            const postsArray = json.data;
            // buildHTML
            // append the html to the container
            // reset message to default
            Store.state.message = 'Load More';
            // find out if we are on the last page
            const totalPages = json.headers.map['x-wp-totalpages'][0];
            const currentPage = Math.floor(offset / 10) + 1;
            if (currentPage == totalPages) {
                // if true
                // hide the loadmore button
            }
        }).catch(function(ex) {
            console.log('parsing failed', ex);
        })
    };

    function loadMore() {
        this.message = 'Loading...';
        const currentOffset = Store.getOffset();
        // setting the offset
        Store.setOffset(currentOffset + 10);
        // getting posts (they will be appended)
        getPosts(10, currentOffset + 10) ;
    }

    // making functions available to outside world
    return {
        getPosts: getPosts
    };
 
})();

app.getPosts(10, 0);