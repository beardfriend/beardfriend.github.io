(self.webpackChunkbeardfriend_blog=self.webpackChunkbeardfriend_blog||[]).push([[691],{4859:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(7294),a=n(5414),i=n(9),o=n(9790),l=n(3334),c=n(6776),m=n(5444),u=n(1496);function d(e){var t,n=e.node;return r.createElement(f,null,r.createElement(m.Link,{to:n.fields.slug},null!==n.featuredImg.childImageSharp.fixed&&r.createElement(u.Z,{className:"img",fluid:n.featuredImg.childImageSharp.fluid})),r.createElement(m.Link,{to:n.fields.slug},r.createElement("h1",{className:"title"},n.frontmatter.title)),r.createElement("p",{className:"subtitle"},n.frontmatter.subtitle),r.createElement("div",{className:"tagContainer"},null===(t=n.frontmatter.tags)||void 0===t?void 0:t.map((function(e){return r.createElement("h2",{key:e.id},"#",e)}))),r.createElement("p",{style:{position:"absolute",bottom:"2rem"}},n.frontmatter.date))}var s=function(){var e=(0,c.JD)(),t=e.NowCategory,n=e.NowTag,a=(0,m.useStaticQuery)("374812538").allMarkdownRemark.edges;return"All"===t?0===n.length?r.createElement(r.Fragment,null,a.map((function(e){var t=e.node;return r.createElement(d,{key:t.id,node:t})}))):r.createElement(r.Fragment,null,a.map((function(e){var t=e.node;if(n.filter((function(e){var n;return null===(n=t.frontmatter.tags)||void 0===n?void 0:n.includes(e)})).length>0)return r.createElement(d,{key:t.id,node:t})}))):0===n.length?r.createElement(r.Fragment,null,a.map((function(e){var n=e.node;if(n.frontmatter.category===t)return r.createElement(d,{key:n.id,node:n})}))):r.createElement(r.Fragment,null,a.map((function(e){var a=e.node;if(a.frontmatter.category===t&&n.filter((function(e){var t;return null===(t=a.frontmatter.tags)||void 0===t?void 0:t.includes(e)})).length>0)return r.createElement(d,{key:a.id,node:a})})))},f=i.ZP.div.withConfig({displayName:"Post__Layout",componentId:"sc-1ugy1xr-0"})(["position:relative;width:100%;max-width:850px;height:55rem;"," border-bottom:1px solid #dddddd;a{text-decoration:none;&:hover,:active,:visited{color:black;}}.img{min-width:100%;min-height:40rem;height:40rem;","}.title{cursor:pointer;font-size:3rem;font-weight:bold;margin-top:1rem;","}.tagContainer{display:flex;gap:1rem;margin-top:1rem;}.subtitle{position:absolute;right:0;font-size:1.5rem;text-align:right;","}"],l.Z.xs({height:"30rem"}),l.Z.xs({minHeight:"20rem",height:"20rem"}),l.Z.md({fontSize:"15px"}),l.Z.xs({fontSize:"1rem",marginTop:"0.5rem"})),g=n(9845);var p=function(e){var t=e.data,n=(e.isMobile,(0,c.Zd)()),a=(0,c.JD)(),i=a.NowCategory,o=a.AllTag,l=a.NowTag;return(0,r.useEffect)((function(){var e=[],r=[];n({type:"RESET_TAG"});var a=t.map((function(t){var n=t.node;null!==n.frontmatter.tags&&("All"===i&&n.frontmatter.tags.map((function(t){var n={},a=r.find((function(e){return e.tagname===t}));void 0!==a?a.count+=1:(n={count:1,tagname:t},r.push(n)),!1===e.includes(t)&&e.push(t)})),n.frontmatter.category===i&&n.frontmatter.tags.map((function(t){var n={},a=r.find((function(e){return e.tagname===t}));void 0!==a?a.count+=1:(n={count:1,tagname:t},r.push(n)),!1===e.includes(t)&&e.push(t)})))}));return"All"===i?r.sort((function(e,t){var n=e.tagname.toLowerCase(),r=t.tagname.toLowerCase();return n<r?-1:n>r?1:0})).map((function(e){n({type:"TAG_MAP",payload:e})})):r.sort((function(e,t){var n=e.tagname.toLowerCase(),r=t.tagname.toLowerCase();return n<r?-1:n>r?1:0})).map((function(e){n({type:"TAG_MAP",payload:e})})),function(){return a}}),[i]),(0,r.useEffect)((function(){}),[l]),r.createElement(v,null,r.createElement("div",{style:{display:"flex",gap:"2rem",justifyContent:"center",marginBottom:"1rem"}},r.createElement("h1",null,"TAG"),r.createElement(g.pYJ,{style:{fontSize:"2rem",cursor:"pointer",position:"relative",top:".5rem"},onClick:function(){return n({type:"RESET_NOW_TAG"})}})),o.map((function(e,t){return r.createElement(y,{type:"button",isActive:l.includes(e.tagname),key:t,onClick:function(){return function(e){l.includes(e.tagname)?n({type:"DELETE_NOW_TAG",payload:e.tagname}):n({type:"ADD_NOW_TAG",payload:e.tagname})}(e)}},e.tagname,r.createElement("span",null,"(",e.count,")"))})))},v=i.ZP.div.withConfig({displayName:"TagList__TagContainer",componentId:"sc-1tvmy5x-0"})(["display:flex;flex-direction:column;gap:1rem;position:fixed;top:20rem;width:20rem;h1{font-size:2rem;text-align:center;}"]),y=i.ZP.button.withConfig({displayName:"TagList__Tag",componentId:"sc-1tvmy5x-1"})(["padding:0.8rem 1.4rem;margin-left:20px;color:",";font-size:1.5rem;background:",";&:hover{cursor:pointer;background:",";}"],(function(e){return e.isActive?"white":"black"}),(function(e){return e.isActive?"black":"white"}),(function(e){return!e.isActive&&"#ebebeb"}));var h=function(e){var t=e.data,n=(0,c.Zd)(),a=(0,c.JD)(),i=a.AllCategory,o=a.NowCategory;return(0,r.useEffect)((function(){var e=[],r=t.map((function(t){var n=t.node;i.includes(n.frontmatter.category)||(e.includes(n.frontmatter.category)||e.push(n.frontmatter.category))}));return e.sort().map((function(e){n({type:"CATEGORY_MAP",payload:e})})),console.log(e),function(){return r}}),[]),r.createElement(E,null,i.map((function(e){return r.createElement(b,{key:e,isActive:e===o,type:"button",onClick:function(){n({type:"NOW_CATEGORY",payload:e})}},e)})))},E=i.ZP.div.withConfig({displayName:"CategoryList__CategoryContainer",componentId:"k392c5-0"})(["overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding:1.5rem 0;"]),b=i.ZP.button.withConfig({displayName:"CategoryList__CategoryButton",componentId:"k392c5-1"})(["display:inline;padding:0.8rem 1.4rem;&:not(:first-child){margin-left:2rem;}color:",";font-size:1.3rem;border:1px solid #ebebeb;border-radius:1rem;background:",";width:fit-content;&:hover{cursor:pointer;background:",";}"],(function(e){return e.isActive?"white":"black"}),(function(e){return e.isActive?"black":"white"}),(function(e){return!e.isActive&&"#ebebeb"}));var w=function(){var e=(0,m.useStaticQuery)("715170090").allMarkdownRemark.edges,t=(0,c.Zd)(),n=(0,c.JD)().isMobile;return(0,r.useEffect)((function(){t({type:"SET_TITLE",payload:""})}),[]),r.createElement(o.Z,null,r.createElement(a.q,null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"google-site-verification",content:"udSyTzyvdORnQg9JYBJqNxUAZ-hvai2vuUSvQ4M4b3Y"}),r.createElement("title",null,"수염난친구블로그 : Home"),r.createElement("meta",{name:"description",content:"수염난친구 블로그입니다!"})),r.createElement(h,{data:e}),r.createElement(k,{isMobile:n},r.createElement(C,{isMobile:n},r.createElement(s,null)),!n&&r.createElement("div",{style:{marginRight:0,width:"20rem"}},r.createElement(p,{data:e,isMobile:n}))))},k=i.ZP.div.withConfig({displayName:"pages__MainContainer",componentId:"w13k7i-0"})(["",""],(function(e){if(!e.isMobile)return(0,i.iv)(["display:flex;gap:5rem;position:relative;margin-top:5rem;"])})),C=i.ZP.div.withConfig({displayName:"pages__PostContainer",componentId:"w13k7i-1"})(["display:flex;flex-direction:column;gap:5rem;",""],(function(e){return e.isMobile?(0,i.iv)(["margin-top:5rem;"]):(0,i.iv)(["width:calc(100% - 25rem);"])}))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-2e4132c8a29ae482282e.js.map