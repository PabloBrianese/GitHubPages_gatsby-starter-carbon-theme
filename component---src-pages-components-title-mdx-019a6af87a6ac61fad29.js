(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),b=a.n(i),s=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),d=a.n(l),m=a("QH2O"),p=a.n(m),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(u.b)("div",{className:d()(p.a.pageHeader,(t={},t[p.a.withTabs]=i.length,t[p.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},a)))))},h=a("BAC9"),x=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,b=r.subDirectory,o=i+"/edit/"+r.branch+b+"/src/pages"+t;return i?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:o},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),T=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),i=a===r,o=new RegExp(r+"/?(#.*)?$"),c=n.replace(o,a);return Object(u.b)("li",{key:e,className:d()((t={},t[T.selectedItem]=i,t),T.listItem)},Object(u.b)(s.Link,{className:T.link,to:""+c},e))}));return Object(u.b)("div",{className:T.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:T.list},i))))))},t}(r.a.Component),y=a("MjG9"),v=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,l=void 0===i?{}:i,d=t.relativePagePath,m=t.titleType,p=l.tabs,h=l.title,O=l.theme,T=l.description,A=l.keywords,k=Object(v.a)().interiorTheme,N=Object(s.useStaticQuery)("2456312558").site.pathPrefix,P=N?n.pathname.replace(N,""):n.pathname,w=p?P.split("/").filter(Boolean).slice(-1)[0]||b()(p[0],{lower:!0}):"",I=O||k;return Object(u.b)(c.a,{tabs:p,homepage:!1,theme:I,pageTitle:h,pageDescription:T,pageKeywords:A,titleType:m},Object(u.b)(g,{title:r?Object(u.b)(r,null):h,label:"label",tabs:p,theme:I}),p&&Object(u.b)(f,{title:h,slug:P,tabs:p,currentTab:w}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(x,{relativePagePath:d})),Object(u.b)(j.a,{pageContext:t,location:n,slug:P,tabs:p,currentTab:w}),Object(u.b)(o.a,null))}},"2DcG":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),b=a("013z"),s=(a("qKvR"),{}),o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},c=o("PageDescription"),l=o("Title"),d={_frontmatter:s},m=b.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(m,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c,{mdxType:"PageDescription"},Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<Title>")," component is used to provide a title to a subsequent component\n(table, image, video, code block). The ",Object(i.b)("inlineCode",{parentName:"p"},"Title")," should be used in favor of other\ntechniques for bolded text (",Object(i.b)("inlineCode",{parentName:"p"},"h4"),"s) to preserve page structure and heading\nhierarchy.")),Object(i.b)("h2",null,"Example"),Object(i.b)(l,{mdxType:"Title"},"This is a title"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsSAAALEgHS3X78AAABuElEQVQoz32R20rrQBSG59ot4n4bxRfQR9HamkO9UbY3gqet3uiN6J1QBUVBPFWxxVJru22lamySmWQySRMPlRoFoTWl2U5jkVbFn5/FzGJ9a81iwP9mua5LY7lcVhqEEJJlmUbv4tkTcD01klS2bddLPZIQUigUNKwhiFTNS8JaC/ABvKtUKpmmKUlSI5mIJxiGSWZOdZOImRqJ80jBCNDSYrFYrVYrlQptT6sxxjT5DkMILcta21hrb/sdml4XFm8jQRIby2c2dekCAygjWYKEGBom9EDfdvYvvb93oKpqfUNNkcNSlDtJMlK8Hx0z+MhvhH03h0N3QDMQNSYQ61DRJPv5YYDz/WptyeVytSUpLaKrP+dZ/0WaF1K8eMKiGIujnHEQsMD+/BN12It7c/bRwsvS4PWEb7s+1lDRjiAGkpd8Ostm06yQYj2ewRHGAMu9lWY7oV43/NdBSKXfAxWkziShPy7yqSsu84kHK4zT6FXWWe573Rh9omPNeyt/ruh8BPMxyCVE7jMPQgGnyQMOnb819kLhjq7OkeDw8+SZFjj8lv8J7unuHp+detwU8n27ejD6lX8D9pP+2N+4DqEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(n.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Colors",title:"Colors",src:"/GitHubPages_gatsby-starter-carbon-theme/static/5737718955f2cba55b78b5e66b0cc215/3cbba/design-for-ai-art.png",srcSet:["/GitHubPages_gatsby-starter-carbon-theme/static/5737718955f2cba55b78b5e66b0cc215/7fc1e/design-for-ai-art.png 288w","/GitHubPages_gatsby-starter-carbon-theme/static/5737718955f2cba55b78b5e66b0cc215/a5df1/design-for-ai-art.png 576w","/GitHubPages_gatsby-starter-carbon-theme/static/5737718955f2cba55b78b5e66b0cc215/3cbba/design-for-ai-art.png 1152w","/GitHubPages_gatsby-starter-carbon-theme/static/5737718955f2cba55b78b5e66b0cc215/0b124/design-for-ai-art.png 1728w","/GitHubPages_gatsby-starter-carbon-theme/static/5737718955f2cba55b78b5e66b0cc215/20ee3/design-for-ai-art.png 1896w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h2",null,"Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-mdx",metastring:"path=components/Title/Title.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Title",path:"components/Title/Title.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/Title"}),"<Title>This is a title</Title>\n\n![Colors](images/design-for-ai-art.png)\n")))}p.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-components-title-mdx-019a6af87a6ac61fad29.js.map