/* global require location document */

const axios = require('axios');

const SiteProtocol = location.protocol;
const RealSiteUrl = location.host;
const SiteUrl = SiteProtocol + '//' + RealSiteUrl;

const Store = {
    siteUrl: SiteUrl,
    state: {
        message: '',
        offset: 0,
        totalPages: 0
    },
    getMessage(){
        return this.state.message;
    },
    setMessage(newValue){
        this.state.message = newValue;
    },
    getOffset(){
        return this.state.offset;
    },
    setOffset(newValue){
        this.state.offset = newValue;
    },
    getTotalPages(){
        return this.state.totalPages;
    },
    setTotalPages(newValue){
        this.state.totalPages = newValue;
    }
};

const app = (function(){

    // private
    function randomUnsplash(id){
        const imageId = Math.floor(id / 5); // just because unsplash doesn't have 10k images and posts could have a > 10k ID
        const imageUrl = `https://unsplash.it/700/700?image=${imageId}`;
        return imageUrl;
    }

    function getImage(post){
        if (post._embedded['wp:featuredmedia']){
            return post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url;
        } else {
            return randomUnsplash(post.id);
        }
    }

    function buildHTML(element, response){
        const PostsHTML = response.data.map((post, index) => {
            const PostImage = getImage(post);
            const PostClass = index % 2 === 0 ? 'Heading' : 'Heading Heading--alt';
            return `
                    <a class="Section Section--link" href="${post.link}">
                        <div class="${PostClass}">
                            <div class="Heading__titleGroup">
                                <div class="Heading__titleGroupContent">
                                    <h1 class="Section__title Title Title__h1">${post.title.rendered}</h1>
                                </div>
                            </div>
                            <div class="Heading__featuredImage">
                                <picture>
                                    <img src="${PostImage}" alt="${post.title.rendered}">
                                </picture>
                            </div>
                        </div>
                    </a>
                `;
        });
        element.insertAdjacentHTML('beforeend', PostsHTML.join(''));
    }

    function getPosts(selector){
        const Element = document.querySelector(selector);
        const NumberOfPosts = Element.getAttribute('data-posts-number');
        const Offset = Store.getOffset();
        axios.get(`${Store.siteUrl}/wp-json/wp/v2/posts?_embed&page=1&per_page=${NumberOfPosts}&offset=${Offset}`)
            .then(response => {
                // buildHTML
                buildHTML(Element, response);
                // reset message to default
                Store.setMessage('Load More...');
                setButtonMessage();
                // set total pages number
                Store.setTotalPages(response.headers['x-wp-totalpages'][0]);
                // find out if we are on the last page
                hideLoadMore();
            }).catch(function(ex){
                console.log('parsing failed', ex);
            })
    }

    function hideLoadMore(){
        const TotalPages = Store.getTotalPages();
        const CurrentPage = Math.floor(Store.state.offset / 10) + 1;
        if (CurrentPage == TotalPages){
            document.getElementById('loadMore').parentNode.style.display = 'none';
        }
    }

    function setButtonMessage(){
        const loadMoreButton = document.querySelector('#loadMore');
        if (loadMoreButton) {
            loadMoreButton.innerText = Store.getMessage();
        }
    }

    function loadMore(){
        const currentOffset = Store.getOffset();
        Store.setOffset(currentOffset + 10);
        Store.setMessage('Loading...');
        setButtonMessage();
        getPosts('#PageListing');
    }

    function init(){
        getPosts('#PageListing');
    }

    // making functions available to outside world
    return {
        init,
        loadMore
    };

})();

app.init();
const loadMoreButton = document.querySelector('#loadMore');
if (loadMoreButton) {
    loadMoreButton.addEventListener('click', app.loadMore, false);
}