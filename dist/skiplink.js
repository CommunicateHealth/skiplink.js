(function t(){"use strict";var i=100;window.addEventListener("DOMContentLoaded",e);window.addEventListener("hashchange",e);function e(){var t=window.location.hash,e,n,i=/^#[a-zA-Z0-9%_-]+$/g;if(!i.test(t)){return}e=document.querySelector(t);if(e){n=document.querySelector(e.dataset.skiplinkScrollFrom)||e;setTimeout(function(){window.scrollTo(window.scrollX,r(n));o(e)},10)}}function o(t){if(!/^(?:a|select|input|button|textarea)$/i.test(t.tagName)){t.setAttribute("tabindex",-1);t.addEventListener("blur",n,true)}t.focus({preventScroll:true})}function n(t){t.target.removeAttribute("tabindex")}function r(t){var e=t.getBoundingClientRect(),n=t.dataset.skiplinkPadding||i;return window.scrollY+e.top-n}})();