(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"013z":function(e,t,a){"use strict";var A=a("q1tI"),n=a.n(A),r=a("NmYn"),b=a.n(r),o=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),l=a("TSYQ"),s=a.n(l),m=a("QH2O"),d=a.n(m),g=a("qKvR"),p=function(e){var t,a=e.title,A=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(g.b)("div",{className:s()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===A,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:d.a.text},a)))))},j=a("BAC9"),u=function(e){var t=e.relativePagePath,a=e.repository,A=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||A,r=n.baseUrl,b=n.subDirectory,i=r+"/edit/"+n.branch+b+"/src/pages"+t;return r?Object(g.b)("div",{className:"bx--row "+j.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},h=a("FCXl"),O=a("dI71"),y=a("I8xM"),P=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,A=e.slug,n=A.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=b()(e,{lower:!0,strict:!0}),r=a===n,i=new RegExp(n+"/?(#.*)?$"),c=A.replace(i,a);return Object(g.b)("li",{key:e,className:s()((t={},t[y.selectedItem]=r,t),y.listItem)},Object(g.b)(o.Link,{className:y.link,to:""+c},e))}));return Object(g.b)("div",{className:y.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":t},Object(g.b)("ul",{className:y.list},r))))))},t}(n.a.Component),f=a("MjG9"),B=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,A=e.location,n=e.Title,r=t.frontmatter,l=void 0===r?{}:r,s=t.relativePagePath,m=t.titleType,d=l.tabs,j=l.title,O=l.theme,y=l.description,x=l.keywords,N=Object(B.a)().interiorTheme,E=Object(o.useStaticQuery)("2456312558").site.pathPrefix,C=E?A.pathname.replace(E,""):A.pathname,Q=d?C.split("/").filter(Boolean).slice(-1)[0]||b()(d[0],{lower:!0}):"",w=O||N;return Object(g.b)(c.a,{tabs:d,homepage:!1,theme:w,pageTitle:j,pageDescription:y,pageKeywords:x,titleType:m},Object(g.b)(p,{title:n?Object(g.b)(n,null):j,label:"label",tabs:d,theme:w}),d&&Object(g.b)(P,{title:j,slug:C,tabs:d,currentTab:Q}),Object(g.b)(f.a,{padded:!0},a,Object(g.b)(u,{relativePagePath:s})),Object(g.b)(h.a,{pageContext:t,location:A,slug:C,tabs:d,currentTab:Q}),Object(g.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"rj9+":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return j}));var A=a("wx14"),n=a("zLVn"),r=(a("q1tI"),a("7ljp")),b=a("013z"),o=(a("qKvR"),{}),i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=i("PageDescription"),l=i("Row"),s=i("Column"),m=i("Title"),d=i("GifPlayer"),g={_frontmatter:o},p=b.a;function j(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(p,Object(A.a)({},g,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"PageDescription"},Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"<GifPlayer>")," component is used to pause and play images that are gif’s. It\nworks by replacing the gif with a static image on pause.")),Object(r.b)("h2",null,"Example"),Object(r.b)(l,{mdxType:"Row"},Object(r.b)(s,{colLg:"4",mdxType:"Column"},Object(r.b)(m,{mdxType:"Title"},"Light"),Object(r.b)(d,{mdxType:"GifPlayer"},Object(r.b)("img",{src:"/GitHubPages_gatsby-starter-carbon-theme/eace5aec0b1ab4ae6425dc7088a68411/IBM_Cloud_Pictograms.gif",alt:"IBM Cloud Pictograms"}),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"480px"}},"\n      ",Object(r.b)("span",Object(A.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAeAlbc5xNAAf/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAIBEBEg/9oACAEBAAEFAjKUZcjj/8QAFhEAAwAAAAAAAAAAAAAAAAAAESAh/9oACAEDAQE/ATU//8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGRAAAQUAAAAAAAAAAAAAAAAAEQABECAh/9oACAEBAAY/Ap1EtX//xAAbEAACAgMBAAAAAAAAAAAAAAABEQAhECBBkf/aAAgBAQABPyEBw4K11L562df/2gAMAwEAAgADAAAAEGAAAP/EABYRAQEBAAAAAAAAAAAAAAAAABEBIP/aAAgBAwEBPxCkY//EABcRAQADAAAAAAAAAAAAAAAAAAERICH/2gAIAQIBAT8QDJp//8QAHRABAQACAQUAAAAAAAAAAAAAAREhQQAQIDFhcf/aAAgBAQABPxB3DWVdcgUafJ0d2AjL4w2cREqXdLoPXb//2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(A.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IBM Cloud Pictograms",title:"IBM Cloud Pictograms",src:"/GitHubPages_gatsby-starter-carbon-theme/static/35f178dcd2991ea7403a3bf70ed0533d/ee01e/IBM_Cloud_Pictograms.jpg",srcSet:["/GitHubPages_gatsby-starter-carbon-theme/static/35f178dcd2991ea7403a3bf70ed0533d/69549/IBM_Cloud_Pictograms.jpg 288w","/GitHubPages_gatsby-starter-carbon-theme/static/35f178dcd2991ea7403a3bf70ed0533d/ee01e/IBM_Cloud_Pictograms.jpg 480w"],sizes:"(max-width: 480px) 100vw, 480px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(r.b)(l,{mdxType:"Row"},Object(r.b)(s,{colLg:"8",mdxType:"Column"},Object(r.b)(m,{mdxType:"Title"},"Dark"),Object(r.b)(d,{color:"dark",mdxType:"GifPlayer"},Object(r.b)("img",{src:"/GitHubPages_gatsby-starter-carbon-theme/4a9aad9f2d6ef59256ca8dfbb9936c5b/IBM_Cloud_Platform_Prototype.gif",alt:"IBM Cloud Platform Prototype"}),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1120px"}},"\n      ",Object(r.b)("span",Object(A.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAMBAgT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAF+9ElgD//EABsQAAEEAwAAAAAAAAAAAAAAAAECBBAREhMh/9oACAEBAAEFAj11qTFDKzH/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAdEAABBAIDAAAAAAAAAAAAAAABAAIQQRESITGR/9oACAEBAAY/AmMzwQr9jaxa7Mf/xAAcEAEAAgEFAAAAAAAAAAAAAAABADERIUFRkfH/2gAIAQEAAT8haos1SZaOyVpGo2jhPchU/9oADAMBAAIAAwAAABDQD//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EAB0QAQACAAcAAAAAAAAAAAAAAAEAERAhMUFRofH/2gAIAQEAAT8QHAILQpcO8IACmhkSvrq5Adie0wv/2Q==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",Object(A.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IBM Cloud Platform Prototype",title:"IBM Cloud Platform Prototype",src:"/GitHubPages_gatsby-starter-carbon-theme/static/80dd337880305f90105eb98c2fb1c156/177a2/IBM_Cloud_Platform_Prototype.jpg",srcSet:["/GitHubPages_gatsby-starter-carbon-theme/static/80dd337880305f90105eb98c2fb1c156/69549/IBM_Cloud_Platform_Prototype.jpg 288w","/GitHubPages_gatsby-starter-carbon-theme/static/80dd337880305f90105eb98c2fb1c156/473e3/IBM_Cloud_Platform_Prototype.jpg 576w","/GitHubPages_gatsby-starter-carbon-theme/static/80dd337880305f90105eb98c2fb1c156/177a2/IBM_Cloud_Platform_Prototype.jpg 1120w"],sizes:"(max-width: 1120px) 100vw, 1120px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(r.b)("h2",null,"Code"),Object(r.b)("p",null,"Place two images inside of the GifPlayer component. The first image will be used\nas the gif, the second image will be used as the static image on pause. Only\nprovide two images inside the component, do not place any other children inside\nthe component."),Object(r.b)(m,{mdxType:"Title"},"Light"),Object(r.b)("pre",null,Object(r.b)("code",Object(A.a)({parentName:"pre"},{className:"language-mdx",metastring:"path=components/GifPlayer/GifPlayer.js src= https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/GifPlayer",path:"components/GifPlayer/GifPlayer.js",src:"","https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/GifPlayer":!0}),"<Column colLg='4'>\n<GifPlayer>\n\n![IBM Cloud Pictograms](/images/IBM_Cloud_Pictograms.gif) // must be gif\n\n![IBM Cloud Pictograms](/images/IBM_Cloud_Pictograms.jpg) // must be static\nimage\n\n</GifPlayer>\n</Column>\n")),Object(r.b)(m,{mdxType:"Title"},"Dark"),Object(r.b)("pre",null,Object(r.b)("code",Object(A.a)({parentName:"pre"},{className:"language-mdx",metastring:"path=components/GifPlayer/GifPlayer.js src= https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/GifPlayer",path:"components/GifPlayer/GifPlayer.js",src:"","https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src/components/GifPlayer":!0}),"<Column colLg='8'>\n<GifPlayer color='dark'>\n\n![IBM Cloud Platform Prototype](/images/IBM_Cloud_Platform_Prototype.gif) //\nmust be gif\n\n![IBM Cloud Platform Prototype](/images/IBM_Cloud_Platform_Prototype.jpg) //must\nbe static image\n\n</GifPlayer>\n</Column>\n")),Object(r.b)("h3",null,"Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"property"),Object(r.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"propType"),Object(r.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"required"),Object(r.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"default"),Object(r.b)("th",Object(A.a)({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"children"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"node"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"yes"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"Pass in the images that will be rendered. Only pass in the images, no other children")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"color"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"light")),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"Specify if the icon color should be light or dark")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"className"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null})),Object(r.b)("td",Object(A.a)({parentName:"tr"},{align:null}),"Specify an optional className to be applied to the container node")))))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-components-gif-player-mdx-0563271fbf656c6e6cac.js.map