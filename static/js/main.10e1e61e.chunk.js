(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(13),r=(n(76),n(6)),c=n(7),l=n(11),s=n(8),u=n(12),m=(n(28),n(77),function(e){function t(e){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=new Date,t=String(e.getDate()),n=String(e.getMonth()+1),a=String(e.getFullYear());return o.a.createElement("div",{className:"nameComponent"},o.a.createElement("div",{className:"bigName"},"Bryan Moh"),o.a.createElement("div",{className:"smallName"},"".concat(t,".").concat(n,".").concat(a)))}}]),t}(a.Component)),d=n(131),v=(n(78),function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).showDrawer=function(){n.setState({visible:!0})},n.onClose=function(){n.setState({visible:!1})},n.state={visible:!1},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=new Date,t=(e.getDay(),e.getMonth(),e.getYear(),n(79));return o.a.createElement("div",{className:"navItemContainer"},o.a.createElement("button",{className:"smallName navitem",onClick:this.showDrawer},"About Me"),o.a.createElement(d.a,{title:"About Me",placement:"left",closable:!0,width:"55%",onClose:this.onClose,visible:this.state.visible},o.a.createElement("div",{className:"blog"},o.a.createElement("div",{className:"title"},"Hello there friend!"),o.a.createElement("img",{src:t,className:"picture"}),o.a.createElement("div",{className:"date"},o.a.createElement("i",null,"Written by Bryan Moh || 24.3.2019")),o.a.createElement("div",{className:"text"},o.a.createElement("p",null,"Not too sure how you found this page (I haven't told anyone about this site yet except for a few special people so...) but welcome anyway.  If you were looking for someone to hire or need a shoulder to cry on please be advised that I charge for both services and yes I am available to start immediately."),o.a.createElement("p",null,"My number is 04561- lol jks I wouldn't tell you that."),"Take care!"))))}}]),t}(a.Component)),f=function(e){function t(e){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"nav"},o.a.createElement(v,null),o.a.createElement("div",{className:"smallName navitem"},"Pizza"),o.a.createElement("div",{className:"smallName navitem"},"PVCE"),o.a.createElement("div",{className:"smallName navitem"},"Teaching"))}}]),t}(a.Component),h=function(e){function t(e){return Object(r.a)(this,t),Object(l.a)(this,Object(s.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"content"},o.a.createElement(m,null),o.a.createElement(f,null))}}]),t}(a.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(128);Object(i.render)(o.a.createElement(h,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/bry",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/bry","/service-worker.js");b?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):g(e)})}}()},28:function(e,t,n){},71:function(e,t,n){e.exports=n(129)},76:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){e.exports=n.p+"static/media/fancy_me.58843230.jpg"}},[[71,1,2]]]);
//# sourceMappingURL=main.10e1e61e.chunk.js.map