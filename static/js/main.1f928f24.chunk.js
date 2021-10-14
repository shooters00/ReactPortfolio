(this.webpackJsonpreactportfolio=this.webpackJsonpreactportfolio||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var i=a(1),c=a(6),n=a.n(c),s=a(2),r=(a(5),a.p+"static/media/headshot.f9ba16d9.jpg"),l=a(0);function o(){return Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("h1",{className:"col",children:"Edward Fatula"}),Object(l.jsxs)("section",{className:"background",children:[Object(l.jsx)("div",{className:"back-pic"}),Object(l.jsx)("img",{className:"col",src:r,alt:"Page author"}),Object(l.jsx)("h2",{children:"Welcome to my portfolio!"})]})]})}var j=function(e){var t=e.currentPage,a=e.handlePageChange;return e.props,Object(l.jsxs)("ul",{className:"nav nav-pills nav-fill justify-content-right",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"#about",onClick:function(){return a("About")},className:"About"===t?"nav-link active":"nav-link",children:"About"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"#portfolio",onClick:function(){return a("Portfolio")},className:"Portfolio"===t?"nav-link active":"nav-link",children:"Portfolio"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"#resume",onClick:function(){return a("Resume")},className:"Resume"===t?"nav-link active":"nav-link",children:"Resume"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{href:"#contact",onClick:function(){return a("Contact")},className:"Contact"===t?"nav-link active":"nav-link",children:"Contact"})})]})};a(3);function u(e){return Object(l.jsx)("div",{children:Object(l.jsx)("footer",{children:Object(l.jsx)("p",{children:"This page created as part of the Johns Hopkins University Full Stack Development Boot Camp."})})})}a(12);function b(e){return Object(i.useEffect)((function(){document.title="About"})),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"About Me"}),Object(l.jsx)("section",{className:"info-about",id:"info-about",children:Object(l.jsx)("p",{children:"Detail-driven engineer with over 20 years of experience as a project, program, and technical lead. Engineering experience encompassing systems architecture, requirements analysis, design, integration, test, and operations.  Expert in developing, defining, executing, and managing project schedules, team goals, system requirements, and metrics, as well as, identifying and mitigating risks.  Proven ability to create and foster working relationships with internal and external stakeholders and customers.  Highly successful leader of process improvement and organizational change."})})]})}function h(e){return Object(i.useEffect)((function(){document.title="Portfolio"})),Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:"card-header",children:[Object(l.jsx)("h3",{children:e.title}),Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("h4",{children:Object(l.jsx)("a",{href:e.repo,children:"Github Link"})}),Object(l.jsx)("h4",{children:Object(l.jsx)("a",{href:e.app,children:"App Link"})})]})}),Object(l.jsx)("a",{href:e.app,target:"_blank",children:Object(l.jsx)("img",{src:e.img,alt:e.alt})})]},e.title)})}var d=a.p+"static/media/Lightbulb.bf5454e8.png";function m(e){Object(i.useEffect)((function(){document.title="Portfolio"}));var t=[{title:"Light Bulb",repo:"www.google.com",app:"https://desolate-harbor-35577.herokuapp.com/",img:d,alt:"Light Bulb"},{title:"Light Bulb",repo:"www.google.com",app:"https://desolate-harbor-35577.herokuapp.com/",img:"/assets/images/Lightbulb.png",alt:"Light Bulb"},{title:"Light Bulb",repo:"www.google.com",app:"https://desolate-harbor-35577.herokuapp.com/",img:"/assets/images/Lightbulb.png",alt:"Light Bulb"},{title:"Light Bulb",repo:"www.google.com",app:"https://desolate-harbor-35577.herokuapp.com/",img:"/assets/images/Lightbulb.png",alt:"Light Bulb"},{title:"Light Bulb",repo:"www.google.com",app:"https://desolate-harbor-35577.herokuapp.com/",img:"/assets/images/Lightbulb.png",alt:"Light Bulb"},{title:"Light Bulb",repo:"www.google.com",app:"https://desolate-harbor-35577.herokuapp.com/",img:"/assets/images/Lightbulb.png",alt:"Light Bulb"}];return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Portfolio"}),t.map((function(e){return Object(l.jsx)(h,{title:e.title,repo:e.repo,app:e.app,img:e.img,alt:e.alt})}))]})}function p(e){return Object(i.useEffect)((function(){document.title="Resume"})),Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Resume"}),Object(l.jsx)("a",{href:"./assets/files/2021 - Edward Fatula Resume Class.pdf",target:"_blank",children:"Resume"}),Object(l.jsx)("p",{children:"Skills:"})]})}var g=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],n=Object(i.useState)(""),r=Object(s.a)(n,2),o=r[0],j=r[1],u=Object(i.useState)(""),b=Object(s.a)(u,2),h=b[0],d=b[1],m=Object(i.useState)(""),p=Object(s.a)(m,2),g=p[0],O=p[1],f=function(e){var t=e.target,a=t.name,i=t.value;"email"===a?c(i):"name"===a?j(i):O(i)};return Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["Hello ",o]}),Object(l.jsxs)("form",{className:"form",children:[Object(l.jsx)("input",{value:a,name:"email",onChange:f,type:"email",placeholder:"email"}),Object(l.jsx)("input",{value:o,name:"name",onChange:f,type:"text",placeholder:"name"}),Object(l.jsx)("input",{value:g,name:"message",onChange:f,type:"message",placeholder:"message"}),Object(l.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(a)&&o?(alert("Thank you for inquiring about my portfolio."),j(""),O(""),c("")):d("Email is invalid or name was not provided.")},children:"Submit"})]}),h&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:h})})]})};function O(){var e=Object(i.useState)("About"),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(o,{})}),Object(l.jsx)("div",{className:"col",children:Object(l.jsx)(j,{currentPage:a,handlePageChange:function(e){return c(e)}})}),Object(l.jsx)("div",{className:"row",children:"About"===a?Object(l.jsx)(b,{}):"Portfolio"===a?Object(l.jsx)(m,{}):"Resume"===a?Object(l.jsx)(p,{}):"Contact"===a?Object(l.jsx)(g,{}):void 0}),Object(l.jsx)("div",{className:"row",children:Object(l.jsx)(u,{})})]})})}var f=function(){return Object(l.jsx)(O,{})};a(13);n.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))},3:function(e,t,a){},5:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.1f928f24.chunk.js.map