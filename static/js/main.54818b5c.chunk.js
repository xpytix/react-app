(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{12:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var n=s(0),c=s(1),a=s.n(c),i=s(17),r=s.n(i),l=(s(24),s(12),s(15)),j=(s(25),s(6)),b=["btn--primary","btn--outline","btn--test"],d=["btn--medium","btn--large"],o=function(e){var t=e.children,s=e.type,c=e.onClick,a=e.buttonStyle,i=e.buttonSize,r=b.includes(a)?a:b[0],l=d.includes(i)?i:d[0];return Object(n.jsx)(j.b,{to:"/sign-up",className:"btn-mobile",children:Object(n.jsx)("button",{className:"btn ".concat(r," ").concat(l),onClick:c,type:s,children:t})})};s(31);var m=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),s=t[0],a=t[1],i=Object(c.useState)(!0),r=Object(l.a)(i,2),b=r[0],d=r[1],m=function(){return a(!1)},u=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(c.useEffect)((function(){u()}),[]),window.addEventListener("resize",u),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("nav",{className:"navbar",children:Object(n.jsxs)("div",{className:"navbar-container",children:[Object(n.jsxs)(j.b,{to:"/",className:"navbar-logo",onClick:m,children:[Object(n.jsx)("h1",{children:"Centrum druku Pi\u0144cz\xf3w "})," ",Object(n.jsx)("i",{className:"fas fa-palette"})]}),Object(n.jsx)("div",{className:"menu-icon",onClick:function(){return a(!s)},children:Object(n.jsx)("i",{className:s?"fas fa-times":"fas fa-bars"})}),Object(n.jsxs)("ul",{className:s?"nav-menu active":"nav-menu",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(j.b,{to:"/",className:"nav-links",onClick:m,children:"Start"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(j.b,{to:"/o-nas",className:"nav-links",onClick:m,children:"O nas"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(j.b,{to:"/warsztaty",className:"nav-links",onClick:m,children:"Us\u0142ugi"})}),Object(n.jsx)("li",{children:Object(n.jsx)(j.b,{to:"/rejestracja",className:"nav-links-mobile",onClick:m,children:"Kontakt"})})]}),b&&Object(n.jsx)(o,{buttonStyle:"btn--outline",children:"Kontakt"})]})})})},u=(s(32),s.p+"static/media/printing.3706958b.mp4");var x=function(){return Object(n.jsxs)("div",{className:"hero-container",children:[Object(n.jsx)("video",{playsInline:!0,autoPlay:!0,loop:!0,muted:!0,children:Object(n.jsx)("source",{src:u,type:"video/mp4"})}),Object(n.jsx)("h1",{children:"DZIA\u0141AJ Z NAMI "}),Object(n.jsx)("p",{children:"Na co czekasz? "}),Object(n.jsxs)("div",{className:"hero-btns",children:[Object(n.jsx)(o,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"Zadzwo\u0144 ju\u017c teraz!"}),Object(n.jsxs)(o,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large",onClick:console.log("hey"),children:["Do\u0142\u0105cz do nas! ",Object(n.jsx)("i",{className:"fab fa-facebook"})]})]})]})};s(33);var h=function(e){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("li",{className:"cards__item",children:Object(n.jsxs)(j.b,{className:"cards__item__link",to:e.path,children:[Object(n.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(n.jsx)("img",{className:"cards__item__img",src:e.src})}),Object(n.jsx)("div",{className:"cards__item__info",children:Object(n.jsx)("h5",{className:"cards__item__text",children:e.text})})]})})})},p=s.p+"static/media/1.ba629a56.jpg",O=s.p+"static/media/2.9e0a8d44.jpg",f=s.p+"static/media/3.d7189328.jpg",v=s.p+"static/media/4.f73b64d4.jpg",g=s.p+"static/media/5.574b1fdf.jpg";var y=function(){return Object(n.jsxs)("div",{className:"cards",children:[Object(n.jsx)("h1",{children:"Check out these EPIC Destinations!"}),Object(n.jsx)("div",{className:"cards__container",children:Object(n.jsxs)("div",{className:"cards__wrapper",children:[Object(n.jsxs)("ul",{className:"cards__items",children:[Object(n.jsx)(h,{src:p,text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",label:"Adventure",path:"/services"}),Object(n.jsx)(h,{src:O,text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",label:"Luxury",path:"/services"})]}),Object(n.jsxs)("ul",{className:"cards__items",children:[Object(n.jsx)(h,{src:f,text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",label:"Mystery",path:"/services"}),Object(n.jsx)(h,{src:v,text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",label:"Adventure",path:"/products"}),Object(n.jsx)(h,{src:g,text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",label:"Adrenaline",path:"/sign-up"})]})]})})]})};var N=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x,{}),Object(n.jsx)(y,{})]})},_=s(2);var k=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(m,{}),Object(n.jsx)(_.c,{children:Object(n.jsx)(_.a,{path:"/",exact:!0,component:N})})]})})},C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,35)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),n(e),c(e),a(e),i(e)}))};r.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),C()}},[[34,1,2]]]);
//# sourceMappingURL=main.54818b5c.chunk.js.map