"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{2207:function(e,t,n){n.r(t),n.d(t,{Head:function(){return C},default:function(){return P}});var l=n(1880),r=n(7294),a=n(1883),i=n(8771),o=n(8678),s=n(9357),c=n(4578);var m,u,d=function(e){function t(t){var n;return(n=e.call(this,t)||this).commentsEl=r.createRef(),n.state={status:"pending"},n}(0,c.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){const e=document.createElement("script");e.onload=()=>this.setState({status:"success"}),e.onerror=()=>this.setState({status:"failed"}),e.async=!0,e.src="https://utteranc.es/client.js",e.setAttribute("repo","Hchanghyeon/blog"),e.setAttribute("issue-term","pathname"),e.setAttribute("theme","github-light"),e.setAttribute("crossorigin","anonymous"),this.commentsEl.current.appendChild(e)},n.render=function(){const{status:e}=this.state;return r.createElement("div",{className:"comments-wrapper"},"failed"===e&&r.createElement("div",null,"Error. Please try again."),"pending"===e&&r.createElement("div",null,"Loading script..."),r.createElement("div",{ref:this.commentsEl}))},t}(r.Component),p=n(5086);const f=p.ZP.div(m||(m=(0,l.Z)(["\npadding: 0px 10px;\n  ul {\n    margin-top:5px;\n    li {\n        border-left-style: none;\n        list-style: none;\n        margin-bottom:5px;\n    p {\n        margin-bottom:7px;\n    }\n      a {\n        color:#868e96;\n        font-weight: bold;\n      }\n    }\n  }\n"]))),E=p.ZP.div(u||(u=(0,l.Z)(["\n    background-color: #f7f6f3;\n    padding:10px 20px;\n\n    h5 {\n        margin:10px 0px;\n    }\n"])));var h,g,b,v,x=e=>{let{content:t}=e;return r.createElement(E,null,r.createElement("h5",null,"목차"),r.createElement(f,{dangerouslySetInnerHTML:{__html:t}}))};const y=p.ZP.div(h||(h=(0,l.Z)(["\n\n"]))),Z=p.ZP.div(g||(g=(0,l.Z)(["\n  display: flex;\n"]))),k=p.ZP.div(b||(b=(0,l.Z)(["\n\n"]))),w=p.ZP.div(v||(v=(0,l.Z)(["\n\n\n  .TableContent {\n    position: fixed;\n\n  right:300px;\n  }\n  @media ( max-width: 300px ) {\n\n    .TableContent {\n      position: relative;\n    }\n  }\n"]))),C=e=>{let{data:{markdownRemark:t}}=e;return r.createElement(s.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};var P=e=>{var t;let{data:{previous:n,next:l,site:s,markdownRemark:c},location:m}=e;const u=(null===(t=s.siteMetadata)||void 0===t?void 0:t.title)||"Title";return r.createElement(y,null,r.createElement(o.Z,{location:m,title:u},r.createElement(Z,null,r.createElement(k,null,r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},c.frontmatter.title),r.createElement("p",null,c.frontmatter.date)),r.createElement(w,{className:"TableContent",r:!0},r.createElement(x,{content:c.tableOfContents})),r.createElement("section",{dangerouslySetInnerHTML:{__html:c.html},itemProp:"articleBody"}),r.createElement("hr",null),r.createElement("footer",null,r.createElement(i.Z,null))),r.createElement("nav",{className:"blog-post-nav"},r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.createElement("li",null,n&&r.createElement(a.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.createElement("li",null,l&&r.createElement(a.Link,{to:l.fields.slug,rel:"next"},l.frontmatter.title," →")))),r.createElement(d,null)))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-8b15ef36afaeafd7dea5.js.map