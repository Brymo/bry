(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){e.exports=n(257)},110:function(e,t,n){},111:function(e,t,n){},21:function(e,t,n){},239:function(e,t,n){e.exports=n.p+"static/media/aboutme.a6af7c0a.md"},240:function(e,t,n){e.exports=n.p+"static/media/fancy_me.58843230.jpg"},243:function(e,t,n){var a={"./cooked0.md":244,"./cooked1.md":245,"./cooked2.md":246};function c(e){var t=r(e);return n(t)}function r(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}c.keys=function(){return Object.keys(a)},c.resolve=r,e.exports=c,c.id=243},244:function(e,t,n){e.exports=n.p+"static/media/cooked0.553b709c.md"},245:function(e,t,n){e.exports=n.p+"static/media/cooked1.0e5084ce.md"},246:function(e,t,n){e.exports=n.p+"static/media/cooked2.72844740.md"},247:function(e,t,n){e.exports=n.p+"static/media/mrx.0f00ea85.jpg"},257:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(9),i=(n(110),n(4)),o=n(5),l=n(7),s=n(6),m=n(8),u=(n(21),n(111),n(260)),d=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"bbar"},c.a.createElement("a",{href:"https://github.com/Brymo",target:"_blank"},c.a.createElement(u.a,{shape:"circle",icon:"github",className:"button"})),c.a.createElement("a",{href:"https://www.linkedin.com/in/bryan-moh-a7b380170/",target:"_blank"},c.a.createElement(u.a,{shape:"circle",icon:"linkedin",className:"button"})),c.a.createElement("a",{href:"https://www.facebook.com/bryan.moh.92",target:"_blank"},c.a.createElement(u.a,{shape:"circle",icon:"facebook",className:"button"})))}}]),t}(a.Component),v=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=new Date,t=String(e.getDate()),n=String(e.getMonth()+1),a=String(e.getFullYear());return c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"nameComponent"},c.a.createElement("div",{className:"bigName"},"Bryan Moh"),c.a.createElement("div",{className:"smallName"},"".concat(t,".").concat(n,".").concat(a))),c.a.createElement(d,null))}}]),t}(a.Component),f=n(261),h=n(47),b=n.n(h),p=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).showDrawer=function(){n.setState({visible:!0})},n.onClose=function(){n.setState({visible:!1})},n.state={visible:!1,terms:null},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=n(239);fetch(t).then(function(e){return e.text()}).then(function(t){e.setState({terms:t})})}},{key:"render",value:function(){var e=n(240);return c.a.createElement("div",{className:"navItemContainer"},c.a.createElement("button",{className:"smallName navitem",onClick:this.showDrawer},"About Me"),c.a.createElement(f.a,{title:"About Me",placement:"left",closable:!0,width:"55%",onClose:this.onClose,visible:this.state.visible},c.a.createElement("div",{className:"blog"},c.a.createElement("div",{className:"title"},"Hello there friend!"),c.a.createElement("img",{src:e,className:"picture"}),c.a.createElement("div",{className:"date"},c.a.createElement("i",null,"Written by Bryan Moh || 24.3.2019")),c.a.createElement(b.a,{source:this.state.terms,className:"blogtext"}))))}}]),t}(a.Component),g=n(69),E=n.n(g),w=n(102),k=n(259);function N(e){var t=e.nextArticle,n=e.prevArticle,a=e.prevNext;return c.a.createElement("div",{className:"dNavContainer"},a.next?c.a.createElement("div",{className:"alive item",onClick:t},"< ".concat(a.next)):c.a.createElement("div",{className:"item"},"More coming soon!"),a.prev?c.a.createElement("div",{className:"alive item",onClick:n},"".concat(a.prev," >")):c.a.createElement("div",null))}var j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).format=function(e){var t=e.split("\n"),n=/\((.*)\)\s*$/g;return{title:t[0].match(n)[0].replace(/^\(/g,"").replace(/\)\s*$/g,""),date:t[1].match(n)[0].replace(/^\(/g,"").replace(/\)\s*$/g,""),text:e}},n.startLoad=function(){n.setState({loading:!0})},n.stopLoad=function(){n.setState({loading:!1})},n.showDrawer=function(){n.setState({visible:!0})},n.onClose=function(){n.setState({visible:!1})},n.nextArticle=function(){n.setState({articleId:n.state.articleId+1})},n.prevArticle=function(){n.setState({articleId:n.state.articleId-1})},n.getPrevNext=function(){var e=n.state,t=e.terms,a=e.articleId,c=t.length,r={prev:null,next:null};return c<=1?r:(0===a?r.next=t[1].title:a===c-1?r.prev=t[c-2].title:(r.next=t[a+1].title,r.prev=t[a-1].title),r)},n.state={visible:!1,terms:[],articleId:0,loading:!1},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.state.terms;this.startLoad(),Object(w.a)(E.a.mark(function t(){var a,c,r,i;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=null,c=0,r=!0,i=[];case 4:if(!r){t.next=18;break}return t.prev=5,a=n(243)("./cooked".concat(c,".md")),t.next=9,fetch(a).then(function(e){return e.text()}).then(function(t){i.push(e.format(t))});case 9:c++,t.next=16;break;case 12:t.prev=12,t.t0=t.catch(5),r=!1,console.log(t.t0);case 16:t.next=4;break;case 18:e.setState({terms:i,articleId:c-1}),e.stopLoad();case 20:case"end":return t.stop()}},t,null,[[5,12]])}))()}},{key:"render",value:function(){var e=this.state,t=e.terms,a=e.articleId,r=e.loading;n(247);return c.a.createElement("div",{className:"navItemContainer"},c.a.createElement("button",{className:"smallName navitem",onClick:this.showDrawer},"Cooked"),c.a.createElement(f.a,{title:"Cooked - A story about food",placement:"left",closable:!0,width:"70%",onClose:this.onClose,visible:this.state.visible},r?c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement(k.a,{size:"large"})):c.a.createElement("div",{className:"blog"},c.a.createElement(N,{prevNext:this.getPrevNext(),nextArticle:this.nextArticle,prevArticle:this.prevArticle}),c.a.createElement("div",{className:"title"},t[a].title),c.a.createElement("div",{className:"date"},c.a.createElement("i",null,"Written by Bryan Moh || ",t[a].date)),c.a.createElement(b.a,{source:t[a].text,className:"blogtext"}))))}}]),t}(a.Component),O=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"nav"},c.a.createElement(p,null),c.a.createElement(j,null),c.a.createElement("div",{className:"smallName navitem"},"PVCE"),c.a.createElement("div",{className:"smallName navitem"},"Teaching"))}}]),t}(a.Component),x=function(e){function t(e){return Object(i.a)(this,t),Object(l.a)(this,Object(s.a)(t).call(this,e))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"content"},c.a.createElement(v,null),c.a.createElement(O,null))}}]),t}(a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(256);Object(r.render)(c.a.createElement(x,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/bry",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/bry","/service-worker.js");y?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):C(e)})}}()}},[[105,1,2]]]);
//# sourceMappingURL=main.9fdbf70e.chunk.js.map