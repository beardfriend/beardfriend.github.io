(self.webpackChunkbeardfriend_blog=self.webpackChunkbeardfriend_blog||[]).push([[691],{7757:function(t,e,n){t.exports=n(5666)},709:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return P}});var r=n(7294),o=n(5414),i=n(9),a=n(9790);function c(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(u){return void n(u)}c.done?e(l):Promise.resolve(l).then(r,o)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,l,"next",t)}function l(t){c(i,r,o,a,l,"throw",t)}a(void 0)}))}}var u=n(7757),s=n.n(u),f=n(3334),m=n(6776),d=n(5444),h=n(1496),p={root:null,rootMargin:"1px",threshold:.1};var g=i.ZP.div.withConfig({displayName:"Post__Spinner",componentId:"sc-1ugy1xr-0"})(["border-radius:50%;width:10em;height:10em;&:after{border-radius:50%;width:10em;height:10em;}top:-12rem;display:",";margin:0 auto;font-size:6px;position:relative;text-indent:-9999em;border-top:1.1em solid rgba(0,0,0,0.2);border-right:1.1em solid rgba(0,0,0,0.2);border-bottom:1.1em solid rgba(0,0,0,0.2);border-left:1.1em solid #000000;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:load8 1.1s infinite linear;animation:load8 1.1s infinite linear;@-webkit-keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes load8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}"],(function(t){return t.isLoading?"block":"none"}));function v(t){var e,n,o=t.node,i=t.setRef;return r.createElement(w,null,r.createElement(d.Link,{to:o.fields.slug},null!==o.featuredImg.childImageSharp.fixed&&r.createElement(h.Z,{className:"img",fluid:null===(e=o.featuredImg)||void 0===e?void 0:e.childImageSharp.fluid})),r.createElement(d.Link,{to:o.fields.slug},r.createElement("h1",{className:"title"},o.frontmatter.title)),r.createElement("p",{className:"subtitle"},o.frontmatter.subtitle),r.createElement("div",{className:"tagContainer"},null===(n=o.frontmatter.tags)||void 0===n?void 0:n.map((function(t){return r.createElement("h2",{key:t.id},"#",t)}))),r.createElement("p",{style:{position:"absolute",bottom:"2rem"}},o.frontmatter.date),r.createElement("div",{ref:i}))}var y=function(){var t=(0,r.useState)(!1),e=t[0],n=t[1],o=function(t,e){void 0===e&&(e=p);var n=(0,r.useState)(null),o=n[0],i=n[1],a=(0,r.useCallback)((function(e,n){var r=e[0];r.isIntersecting&&t(r,n)}),[]);return(0,r.useEffect)((function(){var t;return o&&(t=new IntersectionObserver(a,e)).observe(o),function(){return t&&t.disconnect()}}),[o,e,a]),[o,i]}((function(){!function(){b.apply(this,arguments)}()})),i=(o[0],o[1]),a=(0,d.useStaticQuery)("374812538").allMarkdownRemark.edges,c=(0,m.JD)(),u=c.NowCategory,f=c.NowTag,h=c.allPost,y=c.count,w=(0,m.Zd)();function b(){return(b=l(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(a.length<y)){t.next=2;break}return t.abrupt("return");case 2:return n(!0),t.next=5,new Promise((function(t){return setTimeout(t,600)}));case 5:"All"===u&&y<=a.length&&w({type:"ADD_COUNT"}),y<=h.length&&w({type:"ADD_COUNT"}),n(!1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return(0,r.useEffect)((function(){var t=[];a.map((function(e){var n=e.node;t.push(n)})),w({type:"SET_POST",payload:t})}),[]),(0,r.useEffect)((function(){var t=[];if("All"===u){if(0!==f.length)return a.map((function(e){var n=e.node;f.filter((function(t){var e;return null===(e=n.frontmatter.tags)||void 0===e?void 0:e.includes(t)})).length>0&&t.push(n)})),void w({type:"SET_POST",payload:t});a.map((function(e){var n=e.node;t.push(n)})),w({type:"SET_POST",payload:t})}else{if(0!==f.length)return a.map((function(e){var n=e.node;u===n.frontmatter.category&&f.filter((function(t){var e;return null===(e=n.frontmatter.tags)||void 0===e?void 0:e.includes(t)})).length>0&&t.push(n)})),void w({type:"SET_POST",payload:t});a.map((function(e){var n=e.node;u===n.frontmatter.category&&t.push(n)})),w({type:"SET_POST",payload:t})}}),[u,f]),0===h.length?r.createElement(r.Fragment,null,a.slice(0,y).map((function(t){var e=t.node;return r.createElement(v,{key:e.id,node:e,setRef:i})})),a.length<y?r.createElement("div",{style:{width:"100%",textAlign:"center",margin:"2rem 0"}},r.createElement("h1",{style:{fontSize:"2rem"}},"END")):r.createElement(g,{isLoading:e})):r.createElement(r.Fragment,null,h.slice(0,y).map((function(t){return r.createElement(r.Fragment,null,r.createElement(v,{key:t.id,node:t,setRef:i}))})),h.length<y?r.createElement("div",{style:{width:"100%",textAlign:"center",margin:"2rem 0"}},r.createElement("h1",{style:{fontSize:"2rem"}},"END")):r.createElement(g,{isLoading:e}))},w=i.ZP.div.withConfig({displayName:"Post__Layout",componentId:"sc-1ugy1xr-1"})(["position:relative;width:100%;max-width:850px;height:55rem;"," border-bottom:1px solid #dddddd;a{text-decoration:none;&:hover,:active,:visited{color:black;}}.img{min-width:100%;min-height:40rem;height:40rem;","}.title{cursor:pointer;font-size:3rem;font-weight:bold;margin-top:1rem;","}.tagContainer{display:flex;gap:1rem;margin-top:1rem;}.subtitle{position:absolute;right:0;font-size:1.5rem;text-align:right;","}"],f.Z.xs({height:"30rem"}),f.Z.xs({minHeight:"20rem",height:"20rem"}),f.Z.md({fontSize:"15px"}),f.Z.xs({fontSize:"1rem",marginTop:"0.5rem"})),b=n(9845),E=function(t){var e=t.open;return r.createElement(x,{open:e})},x=i.ZP.div.withConfig({displayName:"Background__BackGround",componentId:"sc-15h7b7k-0"})(["position:fixed;top:0;left:0;background:",";width:100%;height:100vh;z-index:99;display:",";"],(function(t){return t.open?"rgba(34,34,34,.7)":"none"}),(function(t){return t.open?"visible":"none"}));var k=function(t){var e=t.data,n=t.isMobile,o=(0,r.useState)(!1),i=o[0],a=o[1],c=(0,r.useRef)(),l=(0,m.Zd)(),u=(0,m.JD)(),s=u.NowCategory,f=u.AllTag,d=u.NowTag;function h(t){d.includes(t.tagname)?l({type:"DELETE_NOW_TAG",payload:t.tagname}):l({type:"ADD_NOW_TAG",payload:t.tagname})}(0,r.useEffect)((function(){var t=[],n=[];l({type:"RESET_TAG"});var r=e.map((function(e){var r=e.node;null!==r.frontmatter.tags&&("All"===s&&r.frontmatter.tags.map((function(e){var r={},o=n.find((function(t){return t.tagname===e}));void 0!==o?o.count+=1:(r={count:1,tagname:e},n.push(r)),!1===t.includes(e)&&t.push(e)})),r.frontmatter.category===s&&r.frontmatter.tags.map((function(e){var r={},o=n.find((function(t){return t.tagname===e}));void 0!==o?o.count+=1:(r={count:1,tagname:e},n.push(r)),!1===t.includes(e)&&t.push(e)})))}));return"All"===s?n.sort((function(t,e){var n=t.tagname.toLowerCase(),r=e.tagname.toLowerCase();return n<r?-1:n>r?1:0})).map((function(t){l({type:"TAG_MAP",payload:t})})):n.sort((function(t,e){var n=t.tagname.toLowerCase(),r=e.tagname.toLowerCase();return n<r?-1:n>r?1:0})).map((function(t){l({type:"TAG_MAP",payload:t})})),function(){return r}}),[s]),(0,r.useEffect)((function(){}),[d]);var p=(0,r.useCallback)((function(t){var e,n,r,o,l;i&&(console.log(t.clientX,t.clientY,null==c||null===(e=c.current)||void 0===e?void 0:e.getBoundingClientRect()),(t.clientX>(null==c||null===(n=c.current)||void 0===n?void 0:n.getBoundingClientRect().right)||t.clientX<(null==c||null===(r=c.current)||void 0===r?void 0:r.getBoundingClientRect().left)||t.clientY<(null==c||null===(o=c.current)||void 0===o?void 0:o.getBoundingClientRect().top)||t.clientY>(null==c||null===(l=c.current)||void 0===l?void 0:l.getBoundingClientRect().bottom))&&a(!1))}),[i]);return(0,r.useEffect)((function(){if(document.body.style.overflow=i?"hidden":"auto",i)return window.addEventListener("click",p),function(){window.removeEventListener("click",p)}}),[i]),n?r.createElement(r.Fragment,null,r.createElement(L,{onClick:function(){a(!i)},isOpen:i},"TAG"),i&&r.createElement(T,{ref:c},r.createElement(b.pYJ,{style:{fontSize:"2rem",cursor:"pointer",position:"relative",top:"-0.5rem",width:"100%"},onClick:function(){return l({type:"RESET_NOW_TAG"})}}),f.map((function(t,e){return r.createElement(C,{type:"button",isActive:d.includes(t.tagname),key:e,onClick:function(){return h(t)}},t.tagname,r.createElement("span",null,"(",t.count,")"))}))),r.createElement(E,{open:i})):r.createElement("div",{style:{marginRight:0,width:"20rem"}},r.createElement(_,null,r.createElement("div",{style:{display:"flex",gap:"2rem",justifyContent:"center",marginBottom:"1rem"}},r.createElement("h1",null,"TAG"),r.createElement(b.pYJ,{style:{fontSize:"2rem",cursor:"pointer",position:"relative",top:".5rem"},onClick:function(){return l({type:"RESET_NOW_TAG"})}})),f.map((function(t,e){return r.createElement(C,{type:"button",isActive:d.includes(t.tagname),key:e,onClick:function(){return h(t)}},t.tagname,r.createElement("span",null,"(",t.count,")"))}))))},_=i.ZP.div.withConfig({displayName:"TagList__TagContainer",componentId:"sc-1tvmy5x-0"})(["display:flex;flex-direction:column;gap:1rem;position:fixed;top:20rem;width:20rem;height:30vh;overflow-y:scroll;h1{font-size:2rem;text-align:center;}"]),C=i.ZP.button.withConfig({displayName:"TagList__Tag",componentId:"sc-1tvmy5x-1"})(["padding:0.8rem 1.4rem;margin-left:20px;color:",";font-size:1.5rem;"," background:",";@media screen and (min-width:768px){&:hover{cursor:pointer;background:",";}}&:not(:last-child){margin-bottom:1rem;}"],(function(t){return t.isActive?"white":"black"}),f.Z.sm({width:"100%",margin:0,height:"3rem"}),(function(t){return t.isActive?"black":"white"}),(function(t){return!t.isActive&&"#ebebeb"})),L=i.ZP.button.withConfig({displayName:"TagList__TagButton",componentId:"sc-1tvmy5x-2"})(["z-index:100;position:fixed;bottom:2rem;left:2rem;width:5rem;height:3rem;border-radius:5rem;background:",";color:white;font-weight:bold;"],(function(t){return t.isOpen?"black":"gray"})),T=i.ZP.div.withConfig({displayName:"TagList__MobileTagContainer",componentId:"sc-1tvmy5x-3"})(["z-index:100;overflow:scroll;position:fixed;width:20rem;height:30rem;bottom:6rem;left:2rem;background:#ebebeb;border:1px solid gray;padding:4rem 2rem;"]);var N=function(t){var e=t.data,n=(0,m.Zd)(),o=(0,m.JD)(),i=o.AllCategory,a=o.NowCategory;return(0,r.useEffect)((function(){var t=[],r=e.map((function(e){var n=e.node;i.includes(n.frontmatter.category)||(t.includes(n.frontmatter.category)||t.push(n.frontmatter.category))}));return t.sort().map((function(t){n({type:"CATEGORY_MAP",payload:t})})),function(){return r}}),[]),r.createElement(A,null,i.map((function(t){return r.createElement(S,{key:t,isActive:t===a,type:"button",onClick:function(){n({type:"NOW_CATEGORY",payload:t})}},t)})))},A=i.ZP.div.withConfig({displayName:"CategoryList__CategoryContainer",componentId:"k392c5-0"})(["overflow-x:auto;overflow-y:hidden;white-space:nowrap;height:5rem;"]),S=i.ZP.button.withConfig({displayName:"CategoryList__CategoryButton",componentId:"k392c5-1"})(["display:inline;padding:0.8rem 1.4rem;&:not(:first-child){margin-left:2rem;}color:",";font-size:1.3rem;border:1px solid #ebebeb;border-radius:1rem;background:",";width:fit-content;&:hover{cursor:pointer;background:",";}"],(function(t){return t.isActive?"white":"black"}),(function(t){return t.isActive?"black":"white"}),(function(t){return!t.isActive&&"#ebebeb"}));var P=function(){var t=(0,d.useStaticQuery)("374812538").allMarkdownRemark.edges,e=(0,m.JD)(),n=e.isMobile,i=(e.allPost,(0,m.Zd)());return(0,r.useLayoutEffect)((function(){}),[]),(0,r.useEffect)((function(){i({type:"SET_TITLE",payload:""})}),[]),r.createElement(a.Z,null,r.createElement(o.q,null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width"}),r.createElement("meta",{name:"google-site-verification",content:"udSyTzyvdORnQg9JYBJqNxUAZ-hvai2vuUSvQ4M4b3Y"}),r.createElement("title",null,"수염난친구블로그 : Home"),r.createElement("meta",{name:"description",content:"수염난친구 블로그입니다."}),r.createElement("meta",{name:"keywords",content:"메인페이지"}),r.createElement("meta",{name:"og:title",content:"수염난친구블로그 : Home"}),r.createElement("meta",{name:"og:site_name",content:"수염난친구블로그"}),r.createElement("meta",{name:"twitter:title",content:"수염난친구 블로그"}),r.createElement("meta",{name:"twitter:description",content:"수염난친구 블로그"}),r.createElement("meta",{name:"twitter:card",content:"summary"})),r.createElement(N,{data:t}),r.createElement(O,{isMobile:n},r.createElement(Z,{isMobile:n},r.createElement(y,null)),r.createElement(k,{data:t,isMobile:n})))},O=i.ZP.div.withConfig({displayName:"pages__MainContainer",componentId:"w13k7i-0"})(["",""],(function(t){if(!t.isMobile)return(0,i.iv)(["display:flex;gap:5rem;position:relative;margin-top:5rem;"])})),Z=i.ZP.div.withConfig({displayName:"pages__PostContainer",componentId:"w13k7i-1"})(["display:flex;flex-direction:column;gap:5rem;",""],(function(t){return t.isMobile?(0,i.iv)(["margin-top:5rem;"]):(0,i.iv)(["width:calc(100% - 25rem);"])}))},5666:function(t){var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new N(r||[]);return i._invoke=function(t,e,n){var r=f;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===h){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=C(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=h,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var l=s(t,e,n);if("normal"===l.type){if(r=n.done?h:m,l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=h,n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=u;var f="suspendedStart",m="suspendedYield",d="executing",h="completed",p={};function g(){}function v(){}function y(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,E=b&&b(b(A([])));E&&E!==n&&r.call(E,i)&&(w=E);var x=y.prototype=g.prototype=Object.create(w);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(o,i,a,c){var l=s(t[o],t,i);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(l.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function C(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,p;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function A(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return v.prototype=x.constructor=y,y.constructor=v,v.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(_.prototype),_.prototype[a]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new _(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),l(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=A,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:A(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(n){Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1830809fc96c529cff09.js.map