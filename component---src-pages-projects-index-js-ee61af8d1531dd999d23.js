"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[216],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,l=/[_.\- ]+/,s=new RegExp("^"+l.source),i=new RegExp(l.source+n.source,"gu"),c=new RegExp("\\d+"+n.source,"gu"),o=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const l=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),o=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?o(e):l(e);return e!==l(e)&&(e=((e,r,n)=>{let l=!1,s=!1,i=!1;for(let c=0;c<e.length;c++){const o=e[c];l&&t.test(o)?(e=e.slice(0,c)+"-"+e.slice(c),l=!1,i=s,s=!0,c++):s&&i&&a.test(o)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),i=s,s=!1,l=!0):(l=r(o)===o&&n(o)!==o,i=s,s=n(o)===o&&r(o)!==o)}return e})(e,l,o)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,l):l(e),n.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,c.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(c,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},8032:function(e,t,a){a.d(t,{G:function(){return P},L:function(){return b},M:function(){return L},P:function(){return k},_:function(){return i},a:function(){return s},b:function(){return u},c:function(){return o},g:function(){return m},h:function(){return c}});var r=a(7294),n=(a(3204),a(5697)),l=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const o=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function d(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,l,i,c){const o={};l&&(o.backgroundColor=l,"fixed"===a?(o.width=r,o.height=n,o.backgroundColor=l,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),i&&(o.objectFit=i),c&&(o.objectPosition=c);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return d}const p=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},b=function(e){let{children:t}=e,a=i(e,p);return r.createElement(r.Fragment,null,r.createElement(g,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],v=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:c}=e,o=i(e,f);return r.createElement("img",s({},o,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=i(e,v);const c=l.sizes||(null==t?void 0:t.sizes),o=r.createElement(h,s({},l,t,{sizes:c,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:c})})),o):o};var y;h.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},E.displayName="Picture",E.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],k=function(e){let{fallback:t}=e,a=i(e,w);return t?r.createElement(E,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};k.displayName="Placeholder",k.propTypes={fallback:n.string,sources:null==(y=E.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const L=function(e){return r.createElement(r.Fragment,null,r.createElement(E,s({},e)),r.createElement("noscript",null,r.createElement(E,s({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=E.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],S=e=>e.replace(/\n/g,""),j=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},x={image:l().object.isRequired,alt:j},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],_=new Set;let O,R;const q=function(e){let{as:t="div",image:n,style:l,backgroundColor:o,className:u,class:m,onStartLoad:p,onLoad:g,onError:b}=e,f=i(e,I);const{width:v,height:h,layout:E}=n,y=d(v,h,E),{style:w,className:k}=y,L=i(y,T),N=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const S=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(E,v,h);return(0,r.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=N.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void _.add(C);if(R&&_.has(C))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;N.current&&(N.current.innerHTML=a(s({isLoading:!0,isLoaded:_.has(C),image:n},f)),_.has(C)||(t=requestAnimationFrame((()=>{N.current&&(r=i(N.current,C,_,l,p,g,b))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{_.has(C)&&R&&(N.current.innerHTML=R(s({isLoading:_.has(C),isLoaded:_.has(C),image:n},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},L,{style:s({},w,l,{backgroundColor:o}),className:k+(u?" "+u:""),ref:N,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(q,e):null}));P.propTypes=x,P.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function W(e){return function(t){let{src:a,__imageData:n,__error:l}=t,c=i(t,A);return l&&console.warn(l),n?r.createElement(e,s({image:n},c)):(console.warn("Image not loaded",a),null)}}const z=W((function(e){let{as:t="div",className:a,class:n,style:l,image:c,loading:o="lazy",imgClassName:p,imgStyle:g,backgroundColor:f,objectFit:v,objectPosition:h}=e,E=i(e,N);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),g=s({objectFit:v,objectPosition:h,backgroundColor:f},g);const{width:y,height:w,layout:j,images:x,placeholder:I,backgroundColor:T}=c,_=d(y,w,j),{style:O,className:R}=_,q=i(_,C),P={fallback:void 0,sources:[]};return x.fallback&&(P.fallback=s({},x.fallback,{srcSet:x.fallback.srcSet?S(x.fallback.srcSet):void 0})),x.sources&&(P.sources=x.sources.map((e=>s({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,s({},q,{style:s({},O,l,{backgroundColor:f}),className:R+(a?" "+a:"")}),r.createElement(b,{layout:j,width:y,height:w},r.createElement(k,s({},m(I,!1,j,y,w,T,v,h))),r.createElement(L,s({"data-gatsby-image-ssr":"",className:p},E,u("eager"===o,!1,P,o,g)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),U={src:l().string.isRequired,alt:j,width:M,height:M,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};z.displayName="StaticImage",z.propTypes=U;const D=W(P);D.displayName="StaticImage",D.propTypes=U},5991:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),n=a(4160),l=a(7896);function s(){const e=(0,l.useLocation)().pathname.replace("/portfolio","").replace(/\/$/,"");return r.createElement("nav",null,r.createElement("div",{className:"links"},r.createElement(n.rU,{to:"/",className:""===e?"active":""},"Inicio"),r.createElement(n.rU,{to:"/projects",className:"/projects"===e?"active":""},"Portfolio"),r.createElement(n.rU,{to:"/about",className:"/about"===e?"active":""},"Currículum")))}function i(e){let{children:t}=e;const a=(0,l.useLocation)().pathname.replace("/portfolio","").replace(/\/$/,"");return r.createElement("div",{className:"layout"},r.createElement(s,null),!["/projects","/about","/projects"].includes(a)&&r.createElement("div",null,r.createElement("div",{className:"leftside"},r.createElement("div",null),r.createElement("div",null),r.createElement("div",{class:"bb1 building-wrap"},r.createElement("div",{class:"bb1a bb1-window"}),r.createElement("div",{class:"bb1b bb1-window"}),r.createElement("div",{class:"bb1c bb1-window"}),r.createElement("div",{class:"bb1d"})),r.createElement("div",{class:"bb3"}),r.createElement("div",null),r.createElement("div",{class:"bb4 building-wrap"},r.createElement("div",{class:"bb4a"}),r.createElement("div",{class:"bb4b"}),r.createElement("div",{class:"bb4c window-wrap"},r.createElement("div",{class:"bb4-window"}),r.createElement("div",{class:"bb4-window"}),r.createElement("div",{class:"bb4-window"}),r.createElement("div",{class:"bb4-window"}))),r.createElement("div",null),r.createElement("div",null)),r.createElement("div",{class:"foreground-buildings"},r.createElement("div",null),r.createElement("div",null),r.createElement("div",{class:"fb1 building-wrap"},r.createElement("div",{class:"fb1a"}),r.createElement("div",{class:"fb1b"}),r.createElement("div",{class:"fb1c"})),r.createElement("div",{class:"fb2"},r.createElement("div",{class:"fb2b window-wrap"},r.createElement("div",{class:"fb2-window"}),r.createElement("div",{class:"fb2-window"}),r.createElement("div",{class:"fb2-window"}))),r.createElement("div",null),r.createElement("div",{class:"fb3 building-wrap"},r.createElement("div",{class:"fb3a window-wrap"},r.createElement("div",{class:"fb3-window"}),r.createElement("div",{class:"fb3-window"}),r.createElement("div",{class:"fb3-window"})),r.createElement("div",{class:"fb3b"}),r.createElement("div",{class:"fb3a"}),r.createElement("div",{class:"fb3b"})),r.createElement("div",{class:"fb4"},r.createElement("div",{class:"fb4b"},r.createElement("div",{class:"fb4-window"}),r.createElement("div",{class:"fb4-window"}),r.createElement("div",{class:"fb4-window"}),r.createElement("div",{class:"fb4-window"}),r.createElement("div",{class:"fb4-window"}),r.createElement("div",{class:"fb4-window"}))),r.createElement("div",{class:"fb5"}),r.createElement("div",{class:"fb6"}),r.createElement("div",null),r.createElement("div",null))),r.createElement("div",{className:"content"},t))}},3432:function(e,t,a){a.r(t);var r=a(7294),n=a(4160),l=a(8032),s=a(5991);const i=e=>{let{project:t}=e;const a=(0,l.c)(t.frontmatter.thumb);return r.createElement("div",{className:"project-card"},r.createElement("title",null,"Rafael Montenegro - Portfolio Web"),r.createElement(l.G,{image:a,alt:t.frontmatter.title,className:"project-image"}),r.createElement("h2",{className:"project-title"},t.frontmatter.title),r.createElement("p",{className:"project-description"},t.frontmatter.description),r.createElement("div",{className:"project-technologies"},t.frontmatter.stack.split(",").map(((e,t)=>r.createElement("span",{key:t,className:"tech-badge"},e)))))};t.default=e=>{let{data:t}=e;const a=t.projects.nodes;return r.createElement(s.Z,null,r.createElement("section",{className:"project-container"},r.createElement("div",{className:"project-grid"},a.map((e=>r.createElement(n.rU,{to:e.frontmatter.slug,key:e.id,target:"_blank"},r.createElement(i,{key:e.id,project:e})))))))}}}]);
//# sourceMappingURL=component---src-pages-projects-index-js-ee61af8d1531dd999d23.js.map