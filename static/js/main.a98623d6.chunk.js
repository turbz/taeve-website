(this.webpackJsonptaevo=this.webpackJsonptaevo||[]).push([[0],[,function(e,a,t){e.exports=t.p+"static/media/tick.3d03ad2f.svg"},,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/exit-white.3d129382.svg"},function(e,a,t){e.exports=t.p+"static/media/logo-full-color.69096082.svg"},function(e,a,t){e.exports=t.p+"static/media/smartphone.86b77da6.svg"},function(e,a,t){e.exports=t.p+"static/media/menu-icon.ec5bad2e.svg"},function(e,a,t){e.exports=t.p+"static/media/exit.3727299d.svg"},function(e,a,t){e.exports=t.p+"static/media/user-friendly-icon.a9c20717.svg"},function(e,a,t){e.exports=t.p+"static/media/customer-icon.9177f071.svg"},function(e,a,t){e.exports=t.p+"static/media/password.667e8ccb.svg"},function(e,a,t){e.exports=t.p+"static/media/reporting-icon.aa137f8a.svg"},function(e,a,t){e.exports=t.p+"static/media/hr-atoms.2429634b.png"},function(e,a,t){e.exports=t.p+"static/media/recruiting-atoms.1acb7679.png"},function(e,a,t){e.exports=t.p+"static/media/imageTraining.72baed58.png"},function(e,a,t){e.exports=t.p+"static/media/imageReporting.fa17d488.png"},function(e,a,t){e.exports=t.p+"static/media/facebook.97de0aa6.svg"},function(e,a,t){e.exports=t.p+"static/media/twitter.7303a958.svg"},function(e,a,t){e.exports=t.p+"static/media/linkedin-icon.0bf2b9a5.svg"},function(e,a,t){e.exports=t.p+"static/media/job.33b14d8e.svg"},function(e,a,t){e.exports=t.p+"static/media/office.dfda738a.svg"},function(e,a,t){e.exports=t.p+"static/media/work.d7c926fa.svg"},function(e,a,t){e.exports=t(66)},,,,,function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(13),c=t.n(r),i=(t(39),t(40),t(3)),m=t(14),s=t.n(m),o=(t(58),t(15)),u=t.n(o);function E(){var e=Object(n.useState)(null),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),m=Object(i.a)(c,2),o=m[0],E=m[1],d=function(){document.getElementById("contact").reset()};return l.a.createElement(l.a.Fragment,null,o?null:t,l.a.createElement("section",{className:"Contact-Page "},l.a.createElement("div",{className:"info"},l.a.createElement("h2",null,"Contact Us"),l.a.createElement("p",null,"Talent has never been more important to the success of a business. Please contact us on:"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Email:")," info@taevo.co.za"),l.a.createElement("li",null,l.a.createElement("strong",null,"Cellphone:")," +27 061 582 4952"))),l.a.createElement("form",{id:"contact",onSubmit:function(e){e.preventDefault();var a=document.getElementById("name").value,t=document.getElementById("email").value,n=document.getElementById("message").value;s()({method:"POST",url:"http://localhost:5000/taevo-website/send",data:{name:a,email:t,message:n}}).then((function(e){"success"===e.data.msg?(r("message sent"),d(),r(l.a.createElement("div",{className:"contact-message"},l.a.createElement("span",null,"massage sent"),l.a.createElement("img",{src:u.a,alt:"close",onClick:function(){return E(!0)}})))):"fail"===e.data.msg&&alert("Message failed to send.")}))}},l.a.createElement("input",{type:"text",name:"name",className:"contact",id:"name",placeholder:"name",required:!0}),l.a.createElement("input",{type:"email",name:"email",className:"contact",id:"email",placeholder:"email address",required:!0}),l.a.createElement("textarea",{id:"message",className:"contact",placeholder:"Message",rows:"5",required:!0}),l.a.createElement("button",null,"Send"))))}t(59);var d=t(16),p=t.n(d),g=t(17),f=t.n(g),h=t(18),v=t.n(h),b=t(19),y=t.n(b);function k(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],c=function(){r(!t)};return l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,l.a.createElement("img",{src:p.a,alt:"taevo"}),l.a.createElement("span",null),l.a.createElement("img",{src:f.a,alt:"phone"}),l.a.createElement("span",null,"+27 061 582 4952")," "),l.a.createElement("nav",{className:t?"nav addClass animate__animated animate__slideInRight":"nav"},l.a.createElement("img",{src:y.a,alt:"close",className:"close",onClick:c}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#Home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{onClick:c,href:"#about"},"About Us")),l.a.createElement("li",null,l.a.createElement("a",{onClick:c,href:"#services"},"Services")),l.a.createElement("li",null,l.a.createElement("a",{onClick:c,href:"#pricing"},"Pricing")),l.a.createElement("li",null,l.a.createElement("a",{onClick:c,href:"#contact"},"Contact"))),l.a.createElement("ul",null,l.a.createElement("li",null),l.a.createElement("li",null,"Connect"),l.a.createElement("li",null,l.a.createElement("a",{onClick:c,href:"#contact"},"Try Our Services")))),l.a.createElement("img",{src:v.a,alt:"menu",className:"menu",onClick:c}))}t(60);var w=t(20),S=t.n(w),C=t(21),R=t.n(C),x=t(22),N=t.n(x),T=t(23),O=t.n(T);function A(){return l.a.createElement("section",{className:"App-Banner"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h4",null,l.a.createElement("span",null),l.a.createElement("span",null,"Get Work Done")),l.a.createElement("h2",null,"Forge the Tools of Transformation"),l.a.createElement("p",null,"A cloud-based Human resource information system that elevates a organizations ability to identify, recruit and develop its workforce and help organizations create the HR function that the business needs."),l.a.createElement("ul",null,l.a.createElement("li",null," ",l.a.createElement("a",{href:"#contact"},"Try Our Services")),l.a.createElement("li",null,l.a.createElement("span",null,"from"),l.a.createElement("span",null,"499"),l.a.createElement("span",null,l.a.createElement("span",null,"ZAR"),l.a.createElement("span",null),"/month"))))),l.a.createElement("div",{id:"features"},l.a.createElement("h3",null,l.a.createElement("span",null,"Our Solutions"),l.a.createElement("span",null,"Transform your employee experience.")),l.a.createElement("p",null,"Simple and easy-to-follow software solution that reduce human errors."),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:S.a,alt:"icon"}),l.a.createElement("span",null,"Provide trustworthy data to complete day-to-day task more efficient.")),l.a.createElement("li",null,l.a.createElement("img",{src:R.a,alt:"icon"}),l.a.createElement("span",null," ","Generate value using people analytics to solve business problems.")),l.a.createElement("li",null,l.a.createElement("img",{src:O.a,alt:"icon"}),l.a.createElement("span",null,"Automate human resources processes and reporting systems.")),l.a.createElement("li",null,l.a.createElement("img",{src:N.a,alt:"icon"}),l.a.createElement("span",null,"Maximizes connectivity and collaboration while mitigating risks.")))))}var H=t(24),I=t.n(H),P=t(25),U=t.n(P),z=t(26),j=t.n(z),_=t(27),B=t.n(_);t(61);function F(){return l.a.createElement("section",{id:"services",className:"Services"},l.a.createElement("article",{className:"Service-Card"},l.a.createElement("div",null,l.a.createElement("h2",null,"Headcount Management"),l.a.createElement("p",null,"Find exactly who you need, when you need them. Utilize our headcount management tool for both onboarding and offboarding employees. Get comprehensive data insight about each employee/department based on demographics, department spending, employee job history, etc."),l.a.createElement("a",{href:"#contact"},"Try Our Services")),l.a.createElement("div",null,l.a.createElement("img",{src:I.a,alt:"Human Resources Tools"}))),l.a.createElement("article",{className:"Service-Card"},l.a.createElement("div",null,l.a.createElement("img",{src:U.a,alt:"Human Resources Tools"})),l.a.createElement("div",null,l.a.createElement("h2",null,"Recruiting & Hiring"),l.a.createElement("p",null,"Talent armed with the skills of the future is more in demand than ever. Attract relevant talent and gain more insight about your candidates without leaving your screen."),l.a.createElement("a",{href:"#contact"},"Try Our Services"))),l.a.createElement("article",{className:"Service-Card"},l.a.createElement("div",null,l.a.createElement("h2",null,"Training & Development"),l.a.createElement("p",null,"Talent has never been more important to the success of a corporation. Customize training to fit the needs of your organization's most talented individuals."),l.a.createElement("a",{href:"#contact"},"Try Our Services")),l.a.createElement("div",null,l.a.createElement("img",{src:j.a,alt:"Recruiting"}))),l.a.createElement("article",{className:"Service-Card"},l.a.createElement("div",null,l.a.createElement("img",{src:B.a,alt:"Human Resources Tools"})),l.a.createElement("div",null,l.a.createElement("h2",null,"Reporting"),l.a.createElement("p",null,"There's nothing more frustrating than filling forms. Get live and automated reports directly from your browser. Which can also be downloaded!"),l.a.createElement("a",{href:"#contact"},"Try Our Services"))))}t(62),t(63);var M=t(28),D=t.n(M),W=t(29),G=t.n(W),V=t(30),Y=t.n(V);function Z(){return l.a.createElement("section",{className:"Main-Footer"},l.a.createElement("div",{className:"taevo-style"},l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("footer",null,l.a.createElement("div",{id:"about"},l.a.createElement("h2",null,"About us"),l.a.createElement("span",null),l.a.createElement("p",null,"taevo provides cutting-edge cloud-based software solutions to SMEs through the automation of HR functions, such as training & development, leave management, recruiting, headcount management, and reporting.",l.a.createElement("br",null),l.a.createElement("br",null),"taevo helps talent leaders to understand their workforce better and drive talent decision based on a deep understanding and insightful analysis or data.")),l.a.createElement("div",null,l.a.createElement("h2",null,"Customers"),l.a.createElement("span",null),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#services"},"Services")),l.a.createElement("li",null,l.a.createElement("a",{href:"#features"},"Features")),l.a.createElement("li",null,"FAQ"))),l.a.createElement("div",null,l.a.createElement("h2",null,"Company"),l.a.createElement("span",null),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#features"},"About")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact"},"Contact")))),l.a.createElement("div",null,l.a.createElement("h2",null,"Customers"),l.a.createElement("span",null),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("span",null,l.a.createElement("img",{src:D.a,alt:"facebook"})," "),l.a.createElement("a",{href:"https://tinyurl.com/uc9fsz6",rel:"noopener noreferrer",target:"_blank"},"Facebook")),l.a.createElement("li",null,l.a.createElement("span",null,l.a.createElement("img",{src:G.a,alt:"twitter"})," "),l.a.createElement("a",{href:"https://twitter.com/taevo_softwares",rel:"noopener noreferrer",target:"_blank"},"Twitter")),l.a.createElement("li",null,l.a.createElement("span",null,l.a.createElement("img",{src:Y.a,alt:"linkedin"})," "),l.a.createElement("a",{href:"https://tinyurl.com/un4s4o5",rel:"noopener noreferrer",target:"_blank"},"LinkedIn"))))))}t(64);var q=t(31),J=t.n(q),L=t(32),Q=t.n(L),$=t(33),K=t.n($),X=t(1),ee=t.n(X);function ae(){return l.a.createElement("section",{id:"pricing",className:"Pricing"},l.a.createElement("header",{className:"call-to-action"},l.a.createElement("h3",null,"Not satisfied? No payment is necessary."),l.a.createElement("p",null,"We let you test our complete suite of features - with zero risk"),l.a.createElement("a",{href:"#contact"},"TRY OUR SERVICE")),l.a.createElement("div",{className:"Card"},l.a.createElement("article",null,l.a.createElement("header",null,l.a.createElement("img",{src:J.a,alt:"swing"}),l.a.createElement("ul",null,l.a.createElement("li",null,"Recruiting"),l.a.createElement("li",null),l.a.createElement("li",null,"ZAR"),l.a.createElement("li",null,"1 250"),l.a.createElement("li",null,"per month"))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:ee.a,alt:"facebook"}),l.a.createElement("span",null,"Job Posting")),l.a.createElement("li",null,l.a.createElement("img",{src:ee.a,alt:"twitter"}),l.a.createElement("span",null,"Unlimited users")),l.a.createElement("li",null,l.a.createElement("img",{src:ee.a,alt:"linkedin"}),l.a.createElement("span",null,"Career Portal")),l.a.createElement("li",null,l.a.createElement("img",{src:ee.a,alt:"linkedin"}),l.a.createElement("span",null,"Document Storage")),l.a.createElement("li",null,l.a.createElement("img",{src:ee.a,alt:"linkedin"}),l.a.createElement("span",null,"Customer Support"))),l.a.createElement("footer",null,l.a.createElement("div",{className:"taevo-style"},l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("a",{href:"#contact"},"TRY OUR SERVICE"))),l.a.createElement("article",null,l.a.createElement("header",null,l.a.createElement("img",{src:Q.a,alt:"swing"}),l.a.createElement("ul",null,l.a.createElement("li",null,"Headcount"),l.a.createElement("li",null),l.a.createElement("li",null,"ZAR"),l.a.createElement("li",null,"1 250"),l.a.createElement("li",null,"per month"))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:ee.a,alt:"facebook"}),l.a.createElement("span",null,"Employee management")),l.a.createElement("li",null,l.a.createElement("img",{src:ee.a,alt:"twitter"}),l.a.createElement("span",null,"Unlimited users")),l.a.createElement("li",null,l.a.createElement("img",{src:ee.a,alt:"linkedin"}),l.a.createElement("span",null,"EE Reportiing")),l.a.createElement("li",null,l.a.createElement("img",{src:ee.a,alt:"linkedin"}),l.a.createElement("span",null,"Document Storage")),l.a.createElement("li",null,l.a.createElement("img",{src:ee.a,alt:"linkedin"}),l.a.createElement("span",null,"Customer Support"))),l.a.createElement("footer",null,l.a.createElement("div",{className:"taevo-style"},l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("a",{href:"#contact"},"TRY OUR SERVICE"))),l.a.createElement("article",null,l.a.createElement("header",null,l.a.createElement("img",{src:K.a,alt:"swing"}),l.a.createElement("ul",null,l.a.createElement("li",null,"Training"),l.a.createElement("li",null),l.a.createElement("li",null,"ZAR"),l.a.createElement("li",null,"1 250"),l.a.createElement("li",null,"per month"))),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:ee.a,alt:"facebook"}),l.a.createElement("span",null,"Training Planning")),l.a.createElement("li",null,l.a.createElement("img",{src:ee.a,alt:"twitter"}),l.a.createElement("span",null,"Unlimited users")),l.a.createElement("li",null,l.a.createElement("img",{src:ee.a,alt:"linkedin"}),l.a.createElement("span",null,"Seta Reporting")),l.a.createElement("li",null,l.a.createElement("img",{src:ee.a,alt:"linkedin"}),l.a.createElement("span",null,"Document Storage")),l.a.createElement("li",null,l.a.createElement("img",{src:ee.a,alt:"linkedin"}),l.a.createElement("span",null,"Customer Support"))),l.a.createElement("footer",null,l.a.createElement("div",{className:"taevo-style"},l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("a",{href:"#contact"},"TRY OUR SERVICE")))))}function te(){return l.a.createElement("div",{className:"Landing-Page"},l.a.createElement(k,null),l.a.createElement(A,null),l.a.createElement(F,null),l.a.createElement(ae,null),l.a.createElement(E,null),l.a.createElement(Z,null))}var ne=function(){return l.a.createElement("div",{className:"Taevo"},l.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(65);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[34,1,2]]]);
//# sourceMappingURL=main.a98623d6.chunk.js.map