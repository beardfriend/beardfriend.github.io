"use strict";(self.webpackChunkbeardfriend_blog=self.webpackChunkbeardfriend_blog||[]).push([[326],{1046:function(e,t,i){i.d(t,{w_:function(){return l}});var a=i(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(r),o=function(){return o=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},s=function(e,t){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(i[a[r]]=e[a[r]])}return i};function d(e){return e&&e.map((function(e,t){return a.createElement(e.tag,o({key:t},e.attr),d(e.child))}))}function l(e){return function(t){return a.createElement(c,o({attr:o({},e.attr)},t),d(e.child))}}function c(e){var t=function(t){var i,r=e.attr,n=e.size,d=e.title,l=s(e,["attr","size","title"]),c=n||t.size||"1em";return t.className&&(i=t.className),e.className&&(i=(i?i+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,l,{className:i,style:o(o({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),d&&a.createElement("title",null,d),e.children)};return void 0!==n?a.createElement(n.Consumer,null,(function(e){return t(e)})):t(r)}},9790:function(e,t,i){i.d(t,{Z:function(){return m}});i(3334);var a=i(5444),r=i(7294),n=i(1279),o=i(6776),s=i(9);var d=function(e){e.isMobile;var t=(0,o.JD)().NowTitle,i=(0,r.useState)(!1),s=i[0],d=i[1];function m(){0===window.scrollY&&d(!1),window.scrollY>50&&d(!0)}return(0,r.useEffect)((function(){return console.log(s,window.scrollY),window.addEventListener("scroll",m),function(){return window.removeEventListener("scroll",m)}}),[s]),r.createElement(c,{isShow:s},r.createElement(u,null,r.createElement(f,null,r.createElement(a.Link,{to:"/",className:"title"},"수염난친구 블로그")),r.createElement(l,{isShow:s},s&&t),r.createElement(p,null,r.createElement("a",{href:"https://github.com/beardfriend",target:"_blank",rel:"noreferrer"},r.createElement(n.RrF,{className:"git"})))))},l=s.default.h1.withConfig({displayName:"Header__Title",componentId:"sc-muu8pi-0"})(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100px;@media screen and (min-width:375px){max-width:170px;}@media screen and (min-width:400px){max-width:200px;}@media screen and (min-width:600px){max-width:250px;}animation:",";-webkit-animation:",";@-webkit-keyframes showup{from{margin-top:-10%;}to{margint-top:0;}}@keyframes showup{from{margin-top:-10%;}to{margint-top:0;}}color:white;font-size:1.5rem;"],(function(e){return e.isShow&&"showup 0.6s"}),(function(e){return e.isShow&&"showup 0.6s"})),c=s.default.header.withConfig({displayName:"Header",componentId:"sc-muu8pi-1"})(["position:fixed;width:100%;height:6rem;padding:1.6rem 0;z-index:99;background:#0a0b0c;opacity:",";@keyframes back{from{opacity:0.9;}to{opcity:1;}}"],(function(e){return e.isShow?.8:1})),u=s.default.nav.withConfig({displayName:"Header__NavContainer",componentId:"sc-muu8pi-2"})(["display:flex;margin:0 auto;width:calc(100% - 2rem);max-width:110rem;justify-content:space-between;align-items:center;.title{color:white;}"]),f=(s.default.nav.withConfig({displayName:"Header__MobileContainer",componentId:"sc-muu8pi-3"})(["width:100%;align-items:center;position:fixed;z-index:99;height:60px;background:black;color:white;display:flex;gap:50px;overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding:0 1rem;.right{display:flex;gap:25px;align-items:center;}.title{font-size:20px;letter-spacing:-4px;font-weight:bold;}.menu{font-size:15px;opacity:0.8;}.git{color:white;font-size:25px;}"]),s.default.div.withConfig({displayName:"Header__Left",componentId:"sc-muu8pi-4"})(["a{color:white;}.title{font-size:20px;letter-spacing:-4px;font-weight:bold;}.menu{font-size:15px;opacity:0.8;}"])),p=s.default.div.withConfig({displayName:"Header__Right",componentId:"sc-muu8pi-5"})(["display:flex;gap:20px;.git{color:white;font-size:25px;}"]),m=function(e){var t=e.children,i=(0,o.Zd)(),a=(0,o.JD)();return(0,r.useLayoutEffect)((function(){window.innerWidth<768&&i({type:"SET_MOBILE",payload:!0});var e=function(){window.innerWidth<768?i({type:"SET_MOBILE",payload:!0}):i({type:"SET_MOBILE",payload:!1})};return window.addEventListener("resize",e),console.log("2"),function(){window.removeEventListener("resize",e)}}),[]),r.createElement(h,null,r.createElement(d,{isMobile:a.isMobile}),r.createElement(g,null,t))},h=s.default.div.withConfig({displayName:"MainLayout__FlexCol",componentId:"sc-17jkaf8-0"})(["display:flex;flex-direction:column;min-height:100vh;"]),g=s.default.div.withConfig({displayName:"MainLayout__Main",componentId:"sc-17jkaf8-1"})(["top:60px;margin:0 auto;width:calc(100% - 2rem);max-width:110rem;margin-top:2rem;position:relative;"])},3334:function(e,t,i){var a=i(9),r=Object.entries({xs:480,sm:576,md:768,lg:992,xl:1200,xxl:1600}).reduce((function(e,t){var i=t[0],r=t[1];return e[i]=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return(0,a.css)(["@media (max-width:","px){","}"],r,a.css.apply(void 0,[e].concat(i)))},e}),{xs:function(){return""},sm:function(){return""},md:function(){return""},lg:function(){return""},xl:function(){return""},xxl:function(){return""}});t.Z=r},1496:function(e,t,i){var a=i(5318);t.Z=void 0;var r,n=a(i(1506)),o=a(i(5354)),s=a(i(7316)),d=a(i(7154)),l=a(i(7294)),c=a(i(5697)),u=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,d.default)({},e),i=t.resolutions,a=t.sizes,r=t.critical;return i&&(t.fixed=i,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},p=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,i=e.fixed,a=h(t||i||[]);return a&&a.src},h=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(p);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},g=Object.create({}),w=function(e){var t=f(e),i=m(t);return g[i]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,x=new WeakMap;function S(e){return e.map((function(e){var t=e.src,i=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:n}),i&&l.default.createElement("source",{media:r,srcSet:i,sizes:n}))}))}function E(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function L(e){return e.map((function(e){var t=e.src,i=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:i,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,i=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:i,srcSet:a})}))}function O(e,t){var i=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:i)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var z=function(e,t){var i=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(x.has(e.target)){var t=x.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),x.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return i&&(i.observe(e),x.set(e,t)),function(){i.unobserve(e),x.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+l+o+s+i+a+t+n+r+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=l.default.forwardRef((function(e,t){var i=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(k,(0,d.default)({ref:t,src:i},n,{ariaHidden:o}));return a.length>1?l.default.createElement("picture",null,r(a),s):s})),k=l.default.forwardRef((function(e,t){var i=e.sizes,a=e.srcSet,r=e.src,n=e.style,o=e.onLoad,c=e.onError,f=e.loading,p=e.draggable,m=e.ariaHidden,h=(0,s.default)(e,u);return l.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:i,srcSet:a,src:r},h,{onLoad:o,onError:c,ref:t,loading:f,draggable:p,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=b&&w(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!y&&v&&!i.isCritical&&!i.seenBefore;var a=i.isCritical||b&&(y||!i.useIOSupport);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn,isHydrated:!1},i.imageRef=l.default.createRef(),i.placeholderRef=t.placeholderRef||l.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,n.default)(i)),i.handleRef=i.handleRef.bind((0,n.default)(i)),i}(0,o.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:w(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=w(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=f(e),(i=m(t))&&(g[i]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=f(this.props),t=e.title,i=e.alt,a=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,u=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,g=e.fixed,w=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,v=e.itemProp,x=e.loading,E=e.draggable,O=m||g;if(!O)return null;var z=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,d.default)({opacity:z?1:0,transition:N?"opacity "+y+"ms":"none"},s),_="boolean"==typeof w?"lightgray":w,V={transitionDelay:y+"ms"},j=(0,d.default)({opacity:this.state.imgLoaded?0:1},N&&V,s,u),T={title:t,alt:this.state.isVisible?"":i,style:j,className:p,itemProp:v},M=this.state.isHydrated?h(O):O[0];if(m)return l.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},l.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),_&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&V)}),M.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:T,imageVariants:O,generateSources:I}),M.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:T,imageVariants:O,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,S(O),l.default.createElement(k,{alt:i,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:x,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,d.default)({alt:i,title:t,loading:x},M,{imageVariants:O}))}}));if(g){var P=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete P.display,l.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},_&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:_,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},N&&V)}),M.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:T,imageVariants:O,generateSources:I}),M.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:T,imageVariants:O,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,S(O),l.default.createElement(k,{alt:i,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:x,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,d.default)({alt:i,title:t,loading:x},M,{imageVariants:O}))}}))}return null},t}(l.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),_=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function V(e){return function(t,i,a){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[i]=e,r),t,"prop",a)}}N.propTypes={resolutions:H,sizes:_,fixed:V(c.default.oneOfType([H,c.default.arrayOf(H)])),fluid:V(c.default.oneOfType([_,c.default.arrayOf(_)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var j=N;t.Z=j}}]);
//# sourceMappingURL=696db27a630c7a98ac73425722a5f58751a28ca5-27c7844c12cc327dcab2.js.map