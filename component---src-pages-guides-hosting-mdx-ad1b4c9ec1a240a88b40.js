(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),b=a.n(r),o=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),p=a.n(l),u=a("QH2O"),d=a.n(u),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(m.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,b=i.subDirectory,s=r+"/edit/"+i.branch+b+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),x=a("I8xM"),w=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),r=a===i,s=new RegExp(i+"/?(#.*)?$"),c=n.replace(s,a);return Object(m.b)("li",{key:e,className:p()((t={},t[x.selectedItem]=r,t),x.listItem)},Object(m.b)(o.Link,{className:x.link,to:""+c},e))}));return Object(m.b)("div",{className:x.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:x.list},r))))))},t}(i.a.Component),v=a("MjG9"),T=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,l=void 0===r?{}:r,p=t.relativePagePath,u=t.titleType,d=l.tabs,g=l.title,f=l.theme,x=l.description,y=l.keywords,N=Object(T.a)().interiorTheme,P=Object(o.useStaticQuery)("2456312558").site.pathPrefix,k=P?n.pathname.replace(P,""):n.pathname,I=d?k.split("/").filter(Boolean).slice(-1)[0]||b()(d[0],{lower:!0}):"",C=f||N;return Object(m.b)(c.a,{tabs:d,homepage:!1,theme:C,pageTitle:g,pageDescription:x,pageKeywords:y,titleType:u},Object(m.b)(h,{title:i?Object(m.b)(i,null):g,label:"label",tabs:d,theme:C}),d&&Object(m.b)(w,{title:g,slug:k,tabs:d,currentTab:I}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:p})),Object(m.b)(O.a,{pageContext:t,location:n,slug:k,tabs:d,currentTab:I}),Object(m.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"S/7w":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n,i=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),o=a("013z"),s=(a("qKvR"),{}),c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",e)}),l={_frontmatter:s},p=o.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(p,Object(i.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)(c,{mdxType:"PageDescription"},Object(b.b)("p",null,"When building sites using the Carbon Gatsby Theme, there are a number of\ndifferent ways you can host your site. While the Carbon team does not have an\nopinionated stance on how you host your projects, these are some resources\nothers have found helpful for hosting.")),Object(b.b)("h2",null,"GH Pages"),Object(b.b)("p",null,Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"https://pages.github.com/"}),"GitHub Pages")," pages is a simple, low maintenance approach to get your site hosted quickly. For internal sites, or sites with proprietary information, IBMers can leverage ",Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"https://w3.ibm.com/help/#/article/github_ent_ibm/github_overview?requestedTopicId=github_overview"}),"Github Enterprise"),". Regardless of whether your projects is external or internal, there are a few steps (see below) to allow your site to work with GitHub Pages."),Object(b.b)("p",null,Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/"}),"Get started")),Object(b.b)("h3",null,"Examples"),Object(b.b)("p",null,Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"https://pages.github.ibm.com/fed/"}),"https://pages.github.ibm.com/fed/")," -\n",Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.ibm.com/FED/fed.github.ibm.com"}),"View configuration")),Object(b.b)("p",null,Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"https://pages.github.ibm.com/ai-applications/design/"}),"https://pages.github.ibm.com/ai-applications/design/")," -\n",Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.ibm.com/ai-applications/design"}),"View configuration")),Object(b.b)("h2",null,"Cirrus"),Object(b.b)("p",null,"Built on Redhat OpenShift, this is the CIO-preferred solution for internally\nhosted applications and is provided to all IBMers."),Object(b.b)("p",null,Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"https://w3.ibm.com/w3publisher/cio-cirrus-platform"}),"Get started")),Object(b.b)("h3",null,"Examples"),Object(b.b)("p",null,Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"https://w3.ibm.com/design"}),"https://w3.ibm.com/design")," -\n",Object(b.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.ibm.com/Design/w3-design/blob/master/Dockerfile"}),"View configuration")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-hosting-mdx-ad1b4c9ec1a240a88b40.js.map