(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"013z":function(e,t,a){"use strict";var A=a("q1tI"),n=a.n(A),r=a("NmYn"),b=a.n(r),l=a("Wbzz"),c=a("Xrax"),i=a("k4MR"),o=a("TSYQ"),s=a.n(o),d=a("QH2O"),m=a.n(d),j=a("qKvR"),g=function(e){var t,a=e.title,A=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(j.b)("div",{className:s()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===A,t))},Object(j.b)("div",{className:"bx--grid"},Object(j.b)("div",{className:"bx--row"},Object(j.b)("div",{className:"bx--col-lg-12"},Object(j.b)("h1",{id:"page-title",className:m.a.text},a)))))},p=a("BAC9"),u=function(e){var t=e.relativePagePath,a=e.repository,A=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||A,r=n.baseUrl,b=n.subDirectory,c=r+"/edit/"+n.branch+b+"/src/pages"+t;return r?Object(j.b)("div",{className:"bx--row "+p.row},Object(j.b)("div",{className:"bx--col"},Object(j.b)("a",{className:p.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),N=a("dI71"),h=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,A=e.slug,n=A.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),r=a===n,c=new RegExp(n+"/?(#.*)?$"),i=A.replace(c,a);return Object(j.b)("li",{key:e,className:s()((t={},t[h.selectedItem]=r,t),h.listItem)},Object(j.b)(l.Link,{className:h.link,to:""+i},e))}));return Object(j.b)("div",{className:h.tabsContainer},Object(j.b)("div",{className:"bx--grid"},Object(j.b)("div",{className:"bx--row"},Object(j.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(j.b)("nav",{"aria-label":t},Object(j.b)("ul",{className:h.list},r))))))},t}(n.a.Component),E=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,A=e.location,n=e.Title,r=t.frontmatter,o=void 0===r?{}:r,s=t.relativePagePath,d=t.titleType,m=o.tabs,p=o.title,N=o.theme,h=o.description,Q=o.keywords,f=Object(w.a)().interiorTheme,B=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=B?A.pathname.replace(B,""):A.pathname,y=m?C.split("/").filter(Boolean).slice(-1)[0]||b()(m[0],{lower:!0}):"",k=N||f;return Object(j.b)(i.a,{tabs:m,homepage:!1,theme:k,pageTitle:p,pageDescription:h,pageKeywords:Q,titleType:d},Object(j.b)(g,{title:n?Object(j.b)(n,null):p,label:"label",tabs:m,theme:k}),m&&Object(j.b)(x,{title:p,slug:C,tabs:m,currentTab:y}),Object(j.b)(E.a,{padded:!0},a,Object(j.b)(u,{relativePagePath:s})),Object(j.b)(O.a,{pageContext:t,location:A,slug:C,tabs:m,currentTab:y}),Object(j.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},G7Ao:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return m}));var A=a("wx14"),n=a("zLVn"),r=(a("q1tI"),a("7ljp")),b=a("013z"),l=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},i=c("PageDescription"),o=c("FeatureCard"),s={_frontmatter:l},d=b.a;function m(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(d,Object(A.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i,{mdxType:"PageDescription"},Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"<FeatureCard>")," component takes the same props as the ",Object(r.b)("inlineCode",{parentName:"p"},"<ResourceCard>"),"\ncomponent (except for ",Object(r.b)("inlineCode",{parentName:"p"},"aspectRatio"),", this is fixed at ",Object(r.b)("inlineCode",{parentName:"p"},"1:2")," for the card), this\ncomponent should not be used within ",Object(r.b)("inlineCode",{parentName:"p"},"<Row>")," or ",Object(r.b)("inlineCode",{parentName:"p"},"<Column>")," components as the grid\nis built in to the component already.")),Object(r.b)("h2",null,"Example"),Object(r.b)(o,{subTitle:"With subtitle",title:"Title",actionIcon:"arrowRight",href:"/",mdxType:"FeatureCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(A.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAMFAf/EABUBAQEAAAAAAAAAAAAAAAAAAAQD/9oADAMBAAIQAxAAAAHXzbizxBgqP//EABsQAAEEAwAAAAAAAAAAAAAAAAABAgMREhQz/9oACAEBAAEFAth5Pggt2Ixty9P/xAAXEQADAQAAAAAAAAAAAAAAAAAAAQIR/9oACAEDAQE/AY2kM//EABgRAQADAQAAAAAAAAAAAAAAAAEAAxIx/9oACAECAQE/Abc1okOT/8QAHhAAAgEDBQAAAAAAAAAAAAAAABEBAhAhEjFBUXH/2gAIAQEABj8C4Ib1dwZ3s1kq9P/EAB0QAAICAQUAAAAAAAAAAAAAAAABESExQVGBkaH/2gAIAQEAAT8hbFFJ1SJCYFZOSZr7pFkW7R2esf/aAAwDAQACAAMAAAAQHw//xAAXEQEBAQEAAAAAAAAAAAAAAAABABFx/9oACAEDAQE/EGoXewxS/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQARMYH/2gAIAQIBAT8QARW5yOwz/8QAHRABAQABBAMAAAAAAAAAAAAAAREAIVFhcTFB8P/aAAgBAQABPxBdMkoE5NcDSTahokO2+JPUPJec8HeQwosRRVfefK3z/9k=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(A.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"demo image",title:"demo image",src:"/GitHubPages_gatsby-starter-carbon-theme/static/8006174cef307d9cf1a013bc15b3dd6c/2e753/large-image.jpg",srcSet:["/GitHubPages_gatsby-starter-carbon-theme/static/8006174cef307d9cf1a013bc15b3dd6c/69549/large-image.jpg 288w","/GitHubPages_gatsby-starter-carbon-theme/static/8006174cef307d9cf1a013bc15b3dd6c/473e3/large-image.jpg 576w","/GitHubPages_gatsby-starter-carbon-theme/static/8006174cef307d9cf1a013bc15b3dd6c/2e753/large-image.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)(o,{title:"Title",actionIcon:"arrowRight",href:"/",color:"dark",mdxType:"FeatureCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",Object(A.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQL/2gAMAwEAAhADEAAAAaNb2wzDC5//xAAZEAADAAMAAAAAAAAAAAAAAAAAARECEDH/2gAIAQEAAQUChCC7klr/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIRIf/aAAgBAwEBPwFRwo//xAAXEQEAAwAAAAAAAAAAAAAAAAAAAQIR/9oACAECAQE/AZs1/8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAEREDH/2gAIAQEAAT8hvNipwzsiuf/aAAwDAQACAAMAAAAQk+//xAAWEQADAAAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QS6IP/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/EFHLV//EABwQAQABBAMAAAAAAAAAAAAAAAERABAxUUFhgf/aAAgBAQABPxAZ6qfpw2AQSarClsENv//Z')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(A.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"smart work",title:"smart work",src:"/GitHubPages_gatsby-starter-carbon-theme/static/f5d54501d6e63ea19dacdbac3f5010e3/2e753/smart-work.jpg",srcSet:["/GitHubPages_gatsby-starter-carbon-theme/static/f5d54501d6e63ea19dacdbac3f5010e3/69549/smart-work.jpg 288w","/GitHubPages_gatsby-starter-carbon-theme/static/f5d54501d6e63ea19dacdbac3f5010e3/473e3/smart-work.jpg 576w","/GitHubPages_gatsby-starter-carbon-theme/static/f5d54501d6e63ea19dacdbac3f5010e3/2e753/smart-work.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(r.b)("h2",null,"Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(A.a)({parentName:"pre"},{className:"language-mdx",metastring:"path=components/FeatureCard/FeatureCard.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/FeatureCard",path:"components/FeatureCard/FeatureCard.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/FeatureCard"}),'<FeatureCard\n  subTitle="With subtitle"\n  title="Title"\n  actionIcon="arrowRight"\n  href="/"\n  disabled\n  color="dark">\n\n![demo image](/images/large-image.jpg)\n\n</FeatureCard>\n')),Object(r.b)("h3",null,"Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"property"),Object(r.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"propType"),Object(r.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"required"),Object(r.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"default"),Object(r.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"children"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"node"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"Use large image as child, will display above the card")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"href"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"Set url for card")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"subTitle"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"Smaller title")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"title"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"Large title")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"actionIcon"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"launch")),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"Action icon, default is launch, options are ",Object(r.b)("inlineCode",{parentName:"td"},"Launch"),", ",Object(r.b)("inlineCode",{parentName:"td"},"ArrowRight"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Download"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Disabled"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Email"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"color"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"light"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"Set to ",Object(r.b)("inlineCode",{parentName:"td"},"dark")," for dark background")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"disabled"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"bool"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"false"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"Set for disabled card")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"className"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"Add custom class name")))))}m.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-feature-card-mdx-bd4fd170eaab12ee5a8e.js.map