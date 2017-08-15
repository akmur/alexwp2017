'use strict';

/* global require location document */

var axios = require('axios');

var SiteProtocol = location.protocol;
var RealSiteUrl = location.host;
var SiteUrl = SiteProtocol + '//' + RealSiteUrl;

var Store = {
    siteUrl: SiteUrl,
    state: {
        message: '',
        offset: 0,
        totalPages: 0
    },
    getMessage: function getMessage() {
        return this.state.message;
    },
    setMessage: function setMessage(newValue) {
        this.state.message = newValue;
    },
    getOffset: function getOffset() {
        return this.state.offset;
    },
    setOffset: function setOffset(newValue) {
        this.state.offset = newValue;
    },
    getTotalPages: function getTotalPages() {
        return this.state.totalPages;
    },
    setTotalPages: function setTotalPages(newValue) {
        this.state.totalPages = newValue;
    }
};

var app = function () {

    // private
    function randomUnsplash(id) {
        var imageId = Math.floor(id / 5); // just because unsplash doesn't have 10k images and posts could have a > 10k ID
        var imageUrl = 'https://unsplash.it/700/700?image=' + imageId;
        return imageUrl;
    }

    function getImage(post) {
        if (post._embedded['wp:featuredmedia']) {
            return post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url;
        } else {
            return randomUnsplash(post.id);
        }
    }

    function buildHTML(element, response) {
        var PostsHTML = response.data.map(function (post, index) {
            var PostImage = getImage(post);
            var PostClass = index % 2 === 0 ? 'Heading' : 'Heading Heading--alt';
            return '\n                    <a class="Section Section--link" href="' + post.link + '">\n                        <div class="' + PostClass + '">\n                            <div class="Heading__titleGroup">\n                                <div class="Heading__titleGroupContent">\n                                    <h1 class="Section__title Title Title__h1">' + post.title.rendered + '</h1>\n                                </div>\n                            </div>\n                            <div class="Heading__featuredImage">\n                                <picture>\n                                    <img src="' + PostImage + '" alt="' + post.title.rendered + '">\n                                </picture>\n                            </div>\n                        </div>\n                    </a>\n                ';
        });
        element.insertAdjacentHTML('beforeend', PostsHTML.join(''));
    }

    function getPosts(selector) {
        var Element = document.querySelector(selector);
        var NumberOfPosts = Element.getAttribute('data-posts-number');
        var Offset = Store.getOffset();
        axios.get(Store.siteUrl + '/wp-json/wp/v2/posts?_embed&page=1&per_page=' + NumberOfPosts + '&offset=' + Offset).then(function (response) {
            // buildHTML
            buildHTML(Element, response);
            // reset message to default
            Store.setMessage('Load More...');
            setButtonMessage();
            // set total pages number
            Store.setTotalPages(response.headers['x-wp-totalpages'][0]);
            // find out if we are on the last page
            hideLoadMore();
        }).catch(function (ex) {
            console.log('parsing failed', ex);
        });
    }

    function hideLoadMore() {
        var TotalPages = Store.getTotalPages();
        var CurrentPage = Math.floor(Store.state.offset / 10) + 1;
        if (CurrentPage == TotalPages) {
            document.getElementById('loadMore').parentNode.style.display = 'none';
        }
    }

    function setButtonMessage() {
        var loadMoreButton = document.querySelector('#loadMore');
        if (loadMoreButton) {
            loadMoreButton.innerText = Store.getMessage();
        }
    }

    function loadMore() {
        var currentOffset = Store.getOffset();
        Store.setOffset(currentOffset + 10);
        Store.setMessage('Loading...');
        setButtonMessage();
        getPosts('#PageListing');
    }

    function init() {
        getPosts('#PageListing');
    }

    // making functions available to outside world
    return {
        init: init,
        loadMore: loadMore
    };
}();

app.init();
var loadMoreButton = document.querySelector('#loadMore');
if (loadMoreButton) {
    loadMoreButton.addEventListener('click', app.loadMore, false);
}
