(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){e.exports=n.p+"static/media/cooked2.97841f30.md"},101:function(e,t,n){var a={"./aboutme/aboutme0.md":93,"./aboutme/aboutme1.md":94,"./cooked/cooked0.md":98,"./cooked/cooked1.md":99,"./cooked/cooked2.md":100};function r(e){var t=c(e);return n(t)}function c(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=101},111:function(e,t,n){e.exports=n(258)},116:function(e,t,n){},119:function(e,t,n){},22:function(e,t,n){},247:function(e,t,n){var a={"./aboutme0.md":93,"./aboutme1.md":94};function r(e){var t=c(e);return n(t)}function c(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=247},256:function(e,t,n){var a={"./cooked0.md":98,"./cooked1.md":99,"./cooked2.md":100};function r(e){var t=c(e);return n(t)}function c(e){var t=a[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=256},258:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=(n(116),n(10)),i=n.n(o),s=n(26),l=n(4),u=n(5),m=n(7),d=n(6),v=n(8),f=(n(22),n(119),n(260)),p=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bbar"},r.a.createElement("a",{href:"https://github.com/Brymo",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{shape:"circle",icon:"github",className:"button"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/bryan-moh-a7b380170/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{shape:"circle",icon:"linkedin",className:"button"})),r.a.createElement("a",{href:"https://www.facebook.com/bryan.moh.92",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.a,{shape:"circle",icon:"facebook",className:"button"})))}}]),t}(a.Component),h=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=new Date,t=String(e.getDate()),n=String(e.getMonth()+1),a=String(e.getFullYear());return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"nameComponent"},r.a.createElement("div",{className:"bigName"},"Bryan Moh"),r.a.createElement("div",{className:"smallName"},"".concat(t,".").concat(n,".").concat(a))),r.a.createElement(p,null))}}]),t}(a.Component),b=n(261),g=n(259),k=n(49),w=n.n(k);function x(e){var t=e.nextArticle,n=e.prevArticle,a=e.prevNext;return r.a.createElement("div",{className:"dNavContainer"},a.next?r.a.createElement("div",{className:"alive item",onClick:t},"< ".concat(a.next)):r.a.createElement("div",{className:"item"},"More coming soon!"),a.prev?r.a.createElement("div",{className:"alive item",onClick:n},"".concat(a.prev," >")):r.a.createElement("div",null))}var E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).format=function(e){var t=e.split("\n"),n=/\((.*)\)\s*$/g;return{title:t[0].match(n)[0].replace(/^\(/g,"").replace(/\)\s*$/g,""),date:t[1].match(n)[0].replace(/^\(/g,"").replace(/\)\s*$/g,""),text:e}},n.startLoad=function(){n.setState({loading:!0})},n.stopLoad=function(){n.setState({loading:!1})},n.showDrawer=function(){n.setState({visible:!0})},n.onClose=function(){n.setState({visible:!1})},n.nextArticle=function(){n.setState({articleId:n.state.articleId+1})},n.prevArticle=function(){n.setState({articleId:n.state.articleId-1})},n.getPrevNext=function(){var e=n.state,t=e.terms,a=e.articleId,r=t.length,c={prev:null,next:null};return r<=1?c:(0===a?c.next=t[1].title:a===r-1?c.prev=t[r-2].title:(c.next=t[a+1].title,c.prev=t[a-1].title),c)},n.state={visible:!1,terms:[],articleId:0,loading:!1},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.startLoad(),Object(s.a)(i.a.mark(function t(){var a,r,c,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=null,r=0,c=!0,o=[];case 4:if(!c){t.next=17;break}return t.prev=5,a=n(247)("./aboutme".concat(r,".md")),t.next=9,fetch(a).then(function(e){return e.text()}).then(function(t){o.push(e.format(t))});case 9:r++,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),c=!1;case 15:t.next=4;break;case 17:e.setState({terms:o,articleId:r-1}),e.stopLoad();case 19:case"end":return t.stop()}},t,null,[[5,12]])}))()}},{key:"render",value:function(){var e=this.state,t=e.terms,n=e.articleId,a=e.loading,c=this.props.latestPost;return r.a.createElement("div",{className:"navItemContainer"},r.a.createElement("button",{className:"smallName navitem",onClick:this.showDrawer},"About Me",c?r.a.createElement("sup",null,"new"):""),r.a.createElement(b.a,{title:"Who am I?",placement:"left",closable:!0,width:"70%",onClose:this.onClose,visible:this.state.visible},a?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(g.a,{size:"large"})):r.a.createElement("div",{className:"blog"},r.a.createElement(x,{prevNext:this.getPrevNext(),nextArticle:this.nextArticle,prevArticle:this.prevArticle}),r.a.createElement("div",{className:"title"},t[n].title),r.a.createElement("div",{className:"date"},r.a.createElement("i",null,"Written by Bryan Moh || ",t[n].date)),r.a.createElement(w.a,{source:t[n].text,className:"blogtext"}))))}}]),t}(a.Component),N=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).format=function(e){var t=e.split("\n"),n=/\((.*)\)\s*$/g;return{title:t[0].match(n)[0].replace(/^\(/g,"").replace(/\)\s*$/g,""),date:t[1].match(n)[0].replace(/^\(/g,"").replace(/\)\s*$/g,""),text:e}},n.startLoad=function(){n.setState({loading:!0})},n.stopLoad=function(){n.setState({loading:!1})},n.showDrawer=function(){n.setState({visible:!0})},n.onClose=function(){n.setState({visible:!1})},n.nextArticle=function(){n.setState({articleId:n.state.articleId+1})},n.prevArticle=function(){n.setState({articleId:n.state.articleId-1})},n.getPrevNext=function(){var e=n.state,t=e.terms,a=e.articleId,r=t.length,c={prev:null,next:null};return r<=1?c:(0===a?c.next=t[1].title:a===r-1?c.prev=t[r-2].title:(c.next=t[a+1].title,c.prev=t[a-1].title),c)},n.state={visible:!1,terms:[],articleId:0,loading:!1},n}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.startLoad(),Object(s.a)(i.a.mark(function t(){var a,r,c,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=null,r=0,c=!0,o=[];case 4:if(!c){t.next=17;break}return t.prev=5,a=n(256)("./cooked".concat(r,".md")),t.next=9,fetch(a).then(function(e){return e.text()}).then(function(t){o.push(e.format(t))});case 9:r++,t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),c=!1;case 15:t.next=4;break;case 17:e.setState({terms:o,articleId:r-1}),e.stopLoad();case 19:case"end":return t.stop()}},t,null,[[5,12]])}))()}},{key:"render",value:function(){var e=this.state,t=e.terms,n=e.articleId,a=e.loading,c=this.props.latestPost;return r.a.createElement("div",{className:"navItemContainer"},r.a.createElement("button",{className:"smallName navitem",onClick:this.showDrawer},"Cooked",console.log(c),c?r.a.createElement("sup",null,"new"):""),r.a.createElement(b.a,{title:"Cooked - A story about food",placement:"left",closable:!0,width:"70%",onClose:this.onClose,visible:this.state.visible},a?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(g.a,{size:"large"})):r.a.createElement("div",{className:"blog"},r.a.createElement(x,{prevNext:this.getPrevNext(),nextArticle:this.nextArticle,prevArticle:this.prevArticle}),r.a.createElement("div",{className:"title"},t[n].title),r.a.createElement("div",{className:"date"},r.a.createElement("i",null,"Written by Bryan Moh || ",t[n].date)),r.a.createElement(w.a,{source:t[n].text,className:"blogtext"}))))}}]),t}(a.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.latestPost;return r.a.createElement("div",{className:"nav"},r.a.createElement(E,{latestPost:"aboutme"===e}),r.a.createElement(N,{latestPost:"cooked"===e}),r.a.createElement("div",{className:"smallName navitem"},"PVCE"),r.a.createElement("div",{className:"smallName navitem"},"Teaching"))}}]),t}(a.Component),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).setLoading=function(e){a.setState({loading:e})},a.setLatest=function(e){a.setState({latest:e})},a.getDate=function(e){return e.split("\n")[1].match(/\((.*)\)\s*$/g)[0].replace(/^\(/g,"").replace(/\)\s*$/g,"")},a.dateToValue=function(e){var t=e.split(".");return 1e4*parseInt(t[2],10)+100*parseInt(t[1],10)+parseInt(t[0],10)},a.getLatestPostDate=function(){var e=Object(s.a)(i.a.mark(function e(t){var r,c,o,s,l,u;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(r=0,c=null,o=!0;!0===o;)try{c=n(101)("./".concat(t,"/").concat(t).concat(r,".md")),fetch(c),r++}catch(i){o=!1}if(0!==r){e.next=6;break}return e.abrupt("return","0.0.0");case 6:return e.next=8,n(101)("./".concat(t,"/").concat(t).concat(r-1,".md"));case 8:return c=e.sent,e.next=11,fetch(c);case 11:return s=e.sent,e.next=14,s.text();case 14:return l=e.sent,e.next=17,a.getDate(l);case 17:return u=e.sent,e.abrupt("return",u);case 19:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={loading:!0,latest:null},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=this;Object(s.a)(i.a.mark(function t(){var n,a,r,c,o;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=["aboutme","cooked","places","code"],a={newestName:null,newestDate:-1},r=0;case 3:if(!(r<n.length)){t.next=14;break}return t.next=6,e.getLatestPostDate(n[r]);case 6:return c=t.sent,t.next=9,e.dateToValue(c);case 9:(o=t.sent)>a.newestDate&&(a.newestName=n[r],a.newestDate=o),r++,t.next=3;break;case 14:e.setLatest(a.newestName),e.setLoading(!1);case 16:case"end":return t.stop()}},t)}))()}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.latest;return t?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(g.a,{size:"large"})):(console.log(n),r.a.createElement("div",{className:"content"},r.a.createElement(h,null),r.a.createElement(O,{latestPost:n})))}}]),t}(a.Component),y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(257);Object(c.render)(r.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/bry",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/bry","/service-worker.js");y?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):C(e)})}}()},93:function(e,t,n){e.exports=n.p+"static/media/aboutme0.8cdb7106.md"},94:function(e,t,n){e.exports=n.p+"static/media/aboutme1.7107e077.md"},98:function(e,t,n){e.exports=n.p+"static/media/cooked0.553b709c.md"},99:function(e,t,n){e.exports=n.p+"static/media/cooked1.9d0f794d.md"}},[[111,1,2]]]);
//# sourceMappingURL=main.5a5eae28.chunk.js.map