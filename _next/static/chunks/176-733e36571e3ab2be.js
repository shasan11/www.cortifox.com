(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[176],{8963:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var i=n(5893);n(7294);var o=n(1664),r=n.n(o),s=n(5675),l=n.n(s),a={src:"/_next/static/media/titile.9b6539c6.svg",height:5,width:213,blurWidth:0,blurHeight:0};let c=t=>{let{top_title:e="Our Company",page_title:n="Our Company"}=t;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("section",{className:"breadcrumb__area breadcrumb-style pt-190 pb-210 p-relative z-index-1",style:{backgroundImage:"url(/assets/img/breadcrumb/breadcrumb-bg-1.jpg)"},children:[(0,i.jsx)("div",{className:"breadcrumb__bg-overlay m-img"}),(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row justify-content-center",children:(0,i.jsx)("div",{className:"col-xl-10",children:(0,i.jsxs)("div",{className:"breadcrumb__content text-center",children:[(0,i.jsxs)("h3",{className:"breadcrumb__title",children:[e,(0,i.jsx)(l(),{src:a,alt:"theme-pure"})]}),(0,i.jsxs)("div",{className:"breadcrumb__list breadcrumb__list-translate",children:[(0,i.jsxs)("span",{children:[" ",(0,i.jsx)(r(),{href:"/",children:"Home"})," "]}),(0,i.jsx)("span",{className:"dvdr",children:(0,i.jsx)("i",{className:"fa-regular fa-angle-right"})}),(0,i.jsx)("span",{children:"pages"}),(0,i.jsxs)("span",{className:"dvdr",children:[" ",(0,i.jsx)("i",{className:"fa-regular fa-angle-right"})," "]}),(0,i.jsx)("span",{children:n})]})]})})})})]})})};var u=c},6541:function(t,e,n){"use strict";var i=n(5893);n(5675),n(1664),n(7294),n(4024),n(2302),n(3918);let o={bg_img:"assets/img/footer/footer-bg.jpg",footer_info:(0,i.jsxs)(i.Fragment,{children:["The world’s first and largest digital marketplace ",(0,i.jsx)("br",{}),"for crypto collectibles and non-fungible tokens (NFTs). Buy"]}),map_link:"https://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1",address:(0,i.jsxs)(i.Fragment,{children:["86 Road Broklyn Street, 600 ",(0,i.jsx)("br",{})," New York, USA"]}),mail:"needhelp@company.com",phone:"+92 666 888 0000",service_links:[{title:"Parking permission",link:"#"},{title:"Fire Service Noc",link:"#"},{title:"Report a Parking Violation",link:"#"},{title:"Residential Parking",link:"#"},{title:"Vendor Registration",link:"#"},{title:"City Board Applications",link:"#"}]},{bg_img:r,footer_info:s,map_link:l,address:a,mail:c,phone:u,service_links:h}=o},5969:function(t,e,n){"use strict";n(5893),n(7294),n(5675)},8561:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var i=n(5893),o=n(7294),r=n(3913);let s=()=>{let{sticky:t}=(0,r.Z)(),[e,n]=(0,o.useState)(!1),s=()=>{!e&&window.pageYOffset>400?n(!0):e&&window.pageYOffset<=400&&n(!1)},l=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(0,o.useEffect)(()=>(window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)),[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"back-to-top-wrapper ".concat(t?"back-to-top-btn-show":""),children:(0,i.jsx)("button",{onClick:l,className:"back-to-top-btn","data-target":"html",id:"back_to_top",type:"button",children:(0,i.jsx)("svg",{width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M11 6L6 1L1 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})})})},l=()=>{window.WOW=n(5541),new WOW.WOW({live:!1}).init()},a=t=>{let{children:e}=t;return(0,o.useEffect)(()=>{setTimeout(()=>{l()},100)},[]),(0,i.jsxs)(i.Fragment,{children:[e,(0,i.jsx)(s,{})]})};var c=a},5541:function(){(function(){var t,e,n,i,o,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return -1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,i){var o;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=t:o.eventName=t,o},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o;for(o=this.keys,e=n=0,i=o.length;n<i;e=++n)if(o[e]===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,r;for(r=this.keys,n=i=0,o=r.length;i<o;n=++i)if(r[n]===t){this.values[n]=e;return}return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.resetAnimation=r(this.resetAnimation,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var e,n,i,o,r;if(this.stopped=!1,this.boxes=(function(){var t,n,i,o;for(t=0,i=this.element.querySelectorAll("."+this.config.boxClass),o=[],n=i.length;t<n;t++)e=i[t],o.push(e);return o}).call(this),this.all=(function(){var t,n,i,o;for(t=0,i=this.boxes,o=[],n=i.length;t<n;t++)e=i[t],o.push(e);return o}).call(this),this.boxes.length){if(this.disabled())this.resetStyle();else for(n=0,i=(o=this.boxes).length;n<i;n++)e=o[n],this.applyStyle(e,!0)}if(this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)return new t((r=this,function(t){var e,n,i,o,s;for(e=0,s=[],n=t.length;e<n;e++)o=t[e],s.push((function(){var t,e,n,r;for(t=0,n=o.addedNodes||[],r=[],e=n.length;t<e;t++)i=n[t],r.push(this.doSync(i));return r}).call(r));return s})).observe(document.body,{childList:!0,subtree:!0})},o.prototype.stop=function(){if(this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval)return clearInterval(this.interval)},o.prototype.sync=function(e){if(t.notSupported)return this.doSync(this.element)},o.prototype.doSync=function(t){var e,n,i,o,r;if(null==t&&(t=this.element),1===t.nodeType){for(n=0,o=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass),r=[],i=o.length;n<i;n++)e=o[n],0>s.call(this.all,e)?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},o.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},o.prototype.applyStyle=function(t,e){var n,i,o,r;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate((r=this,function(){return r.customStyle(t,e,i,n,o)}))},o.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},o.prototype.resetStyle=function(){var t,e,n,i,o;for(e=0,i=this.boxes,o=[],n=i.length;e<n;e++)t=i[e],o.push(t.style.visibility="visible");return o},o.prototype.resetAnimation=function(t){var e;if(t.type.toLowerCase().indexOf("animationend")>=0)return(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim()},o.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(t,e){var n,i,o,r;for(n in i=[],e)o=e[n],t[""+n]=o,i.push((function(){var e,i,s,l;for(e=0,s=this.vendors,l=[],i=s.length;e<i;e++)r=s[e],l.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=o);return l}).call(this));return i},o.prototype.vendorCSS=function(t,e){var n,o,r,s,l,a;for(n=0,s=(l=i(t)).getPropertyCSSValue(e),o=(r=this.vendors).length;n<o;n++)a=r[n],s=s||l.getPropertyCSSValue("-"+a+"-"+e);return s},o.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var t;if(this.scrolled&&(this.scrolled=!1,this.boxes=(function(){var e,n,i,o;for(e=0,i=this.boxes,o=[],n=i.length;e<n;e++)if(t=i[e]){if(this.isVisible(t)){this.show(t);continue}o.push(t)}return o}).call(this),!(this.boxes.length||this.config.live)))return this.stop()},o.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,n,i,o,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,o=(r=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,e=(i=this.offsetTop(t))+t.clientHeight,i<=o&&e>=r},o.prototype.util=function(){return null!=this._util?this._util:this._util=new e},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o}()}).call(this)}}]);