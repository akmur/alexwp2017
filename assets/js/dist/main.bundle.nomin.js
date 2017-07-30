/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vue__);\n/* global document */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3JjL21haW4uanM/NGJkMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgZG9jdW1lbnQgKi9cblxuaW1wb3J0ICcuL3Z1ZSc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvanMvc3JjL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("var bus = new Vue();\n\nvar siteUrl;\nvar siteProtocol = location.protocol;\nvar realSiteUrl = location.host;\n\nif (realSiteUrl === 'localhost:3000') {\n    siteUrl = siteProtocol + '//alexwp2017.dev';\n} else {\n    siteUrl = siteProtocol + '//' + realSiteUrl;\n}\n\nvar store = {\n    siteUrl: siteUrl,\n    state: {\n        offset: 0,\n        totalPages: 0\n    },\n    getOffset() {\n        return this.state.offset;\n    },\n    setOffset(newValue) {\n        this.state.offset = newValue;\n    },\n    getTotalPage() {\n        return this.state.totalPages;\n    },\n    setTotalPage(newValue) {\n        this.state.totalPages = newValue;\n    }\n}\n\nVue.component('post-listing', {\n    data: function(){\n        return {\n            message: 'Load More',\n            showButton: true,\n            posts: [],\n            showPosts: false,\n            isLastPage: false\n        }\n    },\n    props: ['numberOfPosts'],\n    template: '#post-list-template',\n    methods: {\n        randomUnsplash: function(id) {\n            var imageId = Math.floor(id / 5); // just because unsplash doesn't have 10k images and posts could have a > 10k ID\n            var imageUrl = `https://unsplash.it/700/700?image=${imageId}`;\n            return imageUrl;\n        },\n        image: function(post) {\n            if (post._embedded['wp:featuredmedia']) {\n                return post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url;\n            } else {\n                return this.randomUnsplash(post.id);\n            }\n        },\n        getPosts: function() {\n            var offset = store.getOffset();\n            this.$http.get(`${store.siteUrl}/wp-json/wp/v2/posts?_embed&page=1&per_page=${this.numberOfPosts}&offset=${offset}`).then(response => {\n                var postsArray = response.data;\n                // this will append the posts to the posts array\n                this.posts = this.posts.concat(postsArray);\n                // setting the button message\n                this.message = 'Load More';\n                // making sure the posts are displayed - they are false by default\n                this.showPosts = true;\n                // getting needed info to know if we are on the last page when infinite loading\n                var totalPages = response.headers.map['X-WP-TotalPages'][0];\n                var currentPage = Math.floor(offset / 10) + 1;\n                if (currentPage === totalPages) {\n                    // if it is the last page, set this variable to true,\n                    // it will hide the loadmore button\n                    this.isLastPage = true;\n                }\n            }, response => {\n                // error callback\n            });\n        },\n        loadMore: function() {\n            this.message = 'Loading...';\n            var currentOffset = store.getOffset();\n            // setting the offset\n            store.setOffset(currentOffset + 10);\n            // getting posts (they will be appended)\n            this.getPosts();\n        }\n    },\n    created: function(){\n        bus.$on('loadMore', this.loadMore);\n    },\n    mounted: function() {\n        this.getPosts();\n    }\n});\n\nvar vm = new Vue({\n    el: '#app',\n    data: store.state\n})\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc3JjL3Z1ZS5qcz80OWM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MsZ0VBQWdFLFFBQVE7QUFDeEU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDhCQUE4QixjQUFjLDhDQUE4QyxtQkFBbUIsVUFBVSxPQUFPO0FBQzlIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGJ1cyA9IG5ldyBWdWUoKTtcblxudmFyIHNpdGVVcmw7XG52YXIgc2l0ZVByb3RvY29sID0gbG9jYXRpb24ucHJvdG9jb2w7XG52YXIgcmVhbFNpdGVVcmwgPSBsb2NhdGlvbi5ob3N0O1xuXG5pZiAocmVhbFNpdGVVcmwgPT09ICdsb2NhbGhvc3Q6MzAwMCcpIHtcbiAgICBzaXRlVXJsID0gc2l0ZVByb3RvY29sICsgJy8vYWxleHdwMjAxNy5kZXYnO1xufSBlbHNlIHtcbiAgICBzaXRlVXJsID0gc2l0ZVByb3RvY29sICsgJy8vJyArIHJlYWxTaXRlVXJsO1xufVxuXG52YXIgc3RvcmUgPSB7XG4gICAgc2l0ZVVybDogc2l0ZVVybCxcbiAgICBzdGF0ZToge1xuICAgICAgICBvZmZzZXQ6IDAsXG4gICAgICAgIHRvdGFsUGFnZXM6IDBcbiAgICB9LFxuICAgIGdldE9mZnNldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUub2Zmc2V0O1xuICAgIH0sXG4gICAgc2V0T2Zmc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUub2Zmc2V0ID0gbmV3VmFsdWU7XG4gICAgfSxcbiAgICBnZXRUb3RhbFBhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLnRvdGFsUGFnZXM7XG4gICAgfSxcbiAgICBzZXRUb3RhbFBhZ2UobmV3VmFsdWUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZS50b3RhbFBhZ2VzID0gbmV3VmFsdWU7XG4gICAgfVxufVxuXG5WdWUuY29tcG9uZW50KCdwb3N0LWxpc3RpbmcnLCB7XG4gICAgZGF0YTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdMb2FkIE1vcmUnLFxuICAgICAgICAgICAgc2hvd0J1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIHBvc3RzOiBbXSxcbiAgICAgICAgICAgIHNob3dQb3N0czogZmFsc2UsXG4gICAgICAgICAgICBpc0xhc3RQYWdlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczogWydudW1iZXJPZlBvc3RzJ10sXG4gICAgdGVtcGxhdGU6ICcjcG9zdC1saXN0LXRlbXBsYXRlJyxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHJhbmRvbVVuc3BsYXNoOiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgdmFyIGltYWdlSWQgPSBNYXRoLmZsb29yKGlkIC8gNSk7IC8vIGp1c3QgYmVjYXVzZSB1bnNwbGFzaCBkb2Vzbid0IGhhdmUgMTBrIGltYWdlcyBhbmQgcG9zdHMgY291bGQgaGF2ZSBhID4gMTBrIElEXG4gICAgICAgICAgICB2YXIgaW1hZ2VVcmwgPSBgaHR0cHM6Ly91bnNwbGFzaC5pdC83MDAvNzAwP2ltYWdlPSR7aW1hZ2VJZH1gO1xuICAgICAgICAgICAgcmV0dXJuIGltYWdlVXJsO1xuICAgICAgICB9LFxuICAgICAgICBpbWFnZTogZnVuY3Rpb24ocG9zdCkge1xuICAgICAgICAgICAgaWYgKHBvc3QuX2VtYmVkZGVkWyd3cDpmZWF0dXJlZG1lZGlhJ10pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zdC5fZW1iZWRkZWRbJ3dwOmZlYXR1cmVkbWVkaWEnXVswXS5tZWRpYV9kZXRhaWxzLnNpemVzLnRodW1ibmFpbC5zb3VyY2VfdXJsO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21VbnNwbGFzaChwb3N0LmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UG9zdHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHN0b3JlLmdldE9mZnNldCgpO1xuICAgICAgICAgICAgdGhpcy4kaHR0cC5nZXQoYCR7c3RvcmUuc2l0ZVVybH0vd3AtanNvbi93cC92Mi9wb3N0cz9fZW1iZWQmcGFnZT0xJnBlcl9wYWdlPSR7dGhpcy5udW1iZXJPZlBvc3RzfSZvZmZzZXQ9JHtvZmZzZXR9YCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHBvc3RzQXJyYXkgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBhcHBlbmQgdGhlIHBvc3RzIHRvIHRoZSBwb3N0cyBhcnJheVxuICAgICAgICAgICAgICAgIHRoaXMucG9zdHMgPSB0aGlzLnBvc3RzLmNvbmNhdChwb3N0c0FycmF5KTtcbiAgICAgICAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBidXR0b24gbWVzc2FnZVxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICdMb2FkIE1vcmUnO1xuICAgICAgICAgICAgICAgIC8vIG1ha2luZyBzdXJlIHRoZSBwb3N0cyBhcmUgZGlzcGxheWVkIC0gdGhleSBhcmUgZmFsc2UgYnkgZGVmYXVsdFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Bvc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyBnZXR0aW5nIG5lZWRlZCBpbmZvIHRvIGtub3cgaWYgd2UgYXJlIG9uIHRoZSBsYXN0IHBhZ2Ugd2hlbiBpbmZpbml0ZSBsb2FkaW5nXG4gICAgICAgICAgICAgICAgdmFyIHRvdGFsUGFnZXMgPSByZXNwb25zZS5oZWFkZXJzLm1hcFsnWC1XUC1Ub3RhbFBhZ2VzJ11bMF07XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRQYWdlID0gTWF0aC5mbG9vcihvZmZzZXQgLyAxMCkgKyAxO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGFnZSA9PT0gdG90YWxQYWdlcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiBpdCBpcyB0aGUgbGFzdCBwYWdlLCBzZXQgdGhpcyB2YXJpYWJsZSB0byB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyBpdCB3aWxsIGhpZGUgdGhlIGxvYWRtb3JlIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTGFzdFBhZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAvLyBlcnJvciBjYWxsYmFja1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRNb3JlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9ICdMb2FkaW5nLi4uJztcbiAgICAgICAgICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gc3RvcmUuZ2V0T2Zmc2V0KCk7XG4gICAgICAgICAgICAvLyBzZXR0aW5nIHRoZSBvZmZzZXRcbiAgICAgICAgICAgIHN0b3JlLnNldE9mZnNldChjdXJyZW50T2Zmc2V0ICsgMTApO1xuICAgICAgICAgICAgLy8gZ2V0dGluZyBwb3N0cyAodGhleSB3aWxsIGJlIGFwcGVuZGVkKVxuICAgICAgICAgICAgdGhpcy5nZXRQb3N0cygpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpe1xuICAgICAgICBidXMuJG9uKCdsb2FkTW9yZScsIHRoaXMubG9hZE1vcmUpO1xuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuZ2V0UG9zdHMoKTtcbiAgICB9XG59KTtcblxudmFyIHZtID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwJyxcbiAgICBkYXRhOiBzdG9yZS5zdGF0ZVxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2pzL3NyYy92dWUuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);