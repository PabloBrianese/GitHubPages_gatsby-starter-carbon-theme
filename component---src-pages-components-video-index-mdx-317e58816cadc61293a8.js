(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),b=a.n(n),r=a("NmYn"),o=a.n(r),c=a("Wbzz"),i=a("Xrax"),l=a("k4MR"),d=a("TSYQ"),s=a.n(d),m=a("QH2O"),p=a.n(m),j=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,b=e.tabs,r=void 0===b?[]:b;return Object(j.b)("div",{className:s()(p.a.pageHeader,(t={},t[p.a.withTabs]=r.length,t[p.a.darkMode]="dark"===n,t))},Object(j.b)("div",{className:"bx--grid"},Object(j.b)("div",{className:"bx--row"},Object(j.b)("div",{className:"bx--col-lg-12"},Object(j.b)("h1",{id:"page-title",className:p.a.text},a)))))},u=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,b=a||n,r=b.baseUrl,o=b.subDirectory,i=r+"/edit/"+b.branch+o+"/src/pages"+t;return r?Object(j.b)("div",{className:"bx--row "+u.row},Object(j.b)("div",{className:"bx--col"},Object(j.b)("a",{className:u.link,href:i},"Edit this page on GitHub"))):null},h=a("FCXl"),N=a("dI71"),x=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,b=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===b,i=new RegExp(b+"/?(#.*)?$"),l=n.replace(i,a);return Object(j.b)("li",{key:e,className:s()((t={},t[x.selectedItem]=r,t),x.listItem)},Object(j.b)(c.Link,{className:x.link,to:""+l},e))}));return Object(j.b)("div",{className:x.tabsContainer},Object(j.b)("div",{className:"bx--grid"},Object(j.b)("div",{className:"bx--row"},Object(j.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(j.b)("nav",{"aria-label":t},Object(j.b)("ul",{className:x.list},r))))))},t}(b.a.Component),y=a("MjG9"),T=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,b=e.Title,r=t.frontmatter,d=void 0===r?{}:r,s=t.relativePagePath,m=t.titleType,p=d.tabs,u=d.title,N=d.theme,x=d.description,f=d.keywords,k=Object(T.a)().interiorTheme,V=Object(c.useStaticQuery)("2456312558").site.pathPrefix,w=V?n.pathname.replace(V,""):n.pathname,P=p?w.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",C=N||k;return Object(j.b)(l.a,{tabs:p,homepage:!1,theme:C,pageTitle:u,pageDescription:x,pageKeywords:f,titleType:m},Object(j.b)(O,{title:b?Object(j.b)(b,null):u,label:"label",tabs:p,theme:C}),p&&Object(j.b)(v,{title:u,slug:w,tabs:p,currentTab:P}),Object(j.b)(y.a,{padded:!0},a,Object(j.b)(g,{relativePagePath:s})),Object(j.b)(h.a,{pageContext:t,location:n,slug:w,tabs:p,currentTab:P}),Object(j.b)(i.a,null))}},"48Wm":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return h}));var n=a("wx14"),b=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),c=a("gTqz"),i=a.n(c),l=a("zKcW"),d=a.n(l),s=(a("qKvR"),{}),m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},p=m("PageDescription"),j=m("Title"),O=m("Video"),u={_frontmatter:s},g=o.a;function h(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)(g,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(p,{mdxType:"PageDescription"},Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"<Video>")," component can render a Vimeo player or a html video player.")),Object(r.b)("h2",null,"Example"),Object(r.b)(j,{mdxType:"Title"},"Vimeo"),Object(r.b)(O,{title:"Carbon homepage video",vimeoId:"359578263",mdxType:"Video"}),Object(r.b)(j,{mdxType:"Title"},"Video"),Object(r.b)(O,{src:"/videos/hero-video.mp4",poster:"/images/poster.png",mdxType:"Video"},Object(r.b)("track",{kind:"captions",default:!0,src:"/videos/vtt/hero-video.vtt",srcLang:"en"})),Object(r.b)(j,{mdxType:"Title"},"Video in MDX"),Object(r.b)(O,{src:i.a,poster:d.a,mdxType:"Video"}),Object(r.b)("h2",null,"Code"),Object(r.b)(j,{mdxType:"Title"},"Vimeo"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-mdx",metastring:"path=components/Video/Video.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Video",path:"components/Video/Video.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Video"}),'<Video title="Carbon homepage video" vimeoId="322021187" />\n')),Object(r.b)(j,{mdxType:"Title"},"Video"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-mdx",metastring:"path=components/Video/Video.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Video",path:"components/Video/Video.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Video"}),'<Video src="/videos/hero-video.mp4" poster="/images/poster.png">\n  <track\n    kind="captions"\n    default\n    src="/videos/vtt/hero-video.vtt"\n    srcLang="en"\n  />\n</Video>\n')),Object(r.b)(j,{mdxType:"Title"},"Video in MDX"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-mdx",metastring:"path=components/Video.mdx src=https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/pages/components/Video/index.mdx",path:"components/Video.mdx",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/pages/components/Video/index.mdx"}),"import localVideo from './local-video.mp4';\nimport localPoster from './local-poster.jpg';\n\n<Video src={localVideo} poster={localPoster} />\n")),Object(r.b)("h3",null,"Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"property"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"propType"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"vimeoId"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To find your ",Object(r.b)("inlineCode",{parentName:"td"},"vimeoId"),", go to the Vimeo page and find the video you want to put on your website. Once it is loaded, look at the URL and look for the numbers that come after the slash (/).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"src"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Use the html ",Object(r.b)("inlineCode",{parentName:"td"},"<video>")," player with a local ",Object(r.b)("inlineCode",{parentName:"td"},".mp4")," video")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"title"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Vimeo title")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"poster"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Provides an image to show before the video loads, only works with ",Object(r.b)("inlineCode",{parentName:"td"},"src"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"children"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track"}),Object(r.b)("inlineCode",{parentName:"a"},"<track>"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"non-vimeo only")," – Provide ",Object(r.b)("inlineCode",{parentName:"td"},".vtt")," file in your static directory to make your videos more accessible. Then add a track element with a src pointing to it Check out ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API#Tutorial_on_how_to_write_a_WebVTT_file"}),"this simple tutorial")," for getting started with writing vtt files.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"autoPlay"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Whether or not the video should autoplay.")))))}h.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-video-index-mdx-317e58816cadc61293a8.js.map