(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5412:function(e,t,n){e.exports=n(5554)},5417:function(e,t,n){},5419:function(e,t,n){},5554:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(24),o=n.n(l),c=(n(5417),n(18)),i=n(19),s=n(21),u=n(20),m=n(22),p=(n(5419),n(5556)),h=n(5555),b=n(66),d=n(17),f=n(5),E=n(25),j=n(45),y=n.n(j),w=n(5557),O=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onClickListItem=function(e,t){if(t)return window.location.href=e,void n.props.onClose();n.props.history.push(e),n.props.onClose()},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.classes.list},r.a.createElement(f.i,null,r.a.createElement(f.j,{button:!0,component:"a",onClick:function(){return e.onClickListItem("/",!1)}},r.a.createElement(f.k,null,r.a.createElement(E.c,null)),r.a.createElement(f.l,null," Lojaliteits Kaarte ")),r.a.createElement(f.j,{button:!0,component:"a",onClick:function(){return e.onClickListItem("/",!1)}},r.a.createElement(f.k,null,r.a.createElement(E.d,null)),r.a.createElement(f.l,null," Ranglys ")),r.a.createElement(f.j,{button:!0,component:"a",onClick:function(){return e.onClickListItem("https://janvanriebeeck.co.za",!0)}},r.a.createElement(f.k,null,r.a.createElement(E.b,null)),r.a.createElement(f.l,null," Webwerf "))),r.a.createElement(f.f,null),r.a.createElement(f.i,null,r.a.createElement(f.j,{button:!0,component:"a",onClick:function(){return e.onClickListItem("/sign-in",!1)}},r.a.createElement(f.k,null,r.a.createElement(E.e,null)),r.a.createElement(f.l,null," Teken Uit "))))}}]),t}(r.a.Component),k=Object(d.withStyles)({list:{width:250}})(O),C=Object(w.a)(k),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{open:this.props.open,onClose:this.props.onClose},r.a.createElement(C,{onClose:this.props.onClose}))}}]),t}(r.a.Component),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={drawer:{open:!1}},n.onClickMenu=function(){n.setState({drawer:Object(b.a)({},n.state.drawer,{open:!n.state.drawer.open})})},n.onCloseDrawer=function(){n.setState({drawer:Object(b.a)({},n.state.drawer,{open:!1})})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.classes.root},r.a.createElement(f.a,{position:"static"},r.a.createElement(f.m,null,r.a.createElement(f.h,{onClick:this.onClickMenu,className:this.props.classes.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(E.f,null)),r.a.createElement(f.n,{variant:"h6",color:"inherit",className:this.props.classes.grow},"<My App>"))),r.a.createElement(g,{open:this.state.drawer.open,onClose:this.onCloseDrawer}))}}]),t}(r.a.Component),x=Object(d.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(v),L=n(36),M=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.b,{style:{margin:"8px"}},r.a.createElement(f.c,null,r.a.createElement(f.e,{style:{height:"150px"},image:"images/loyalty-card-bg.jpg",title:"Loyalty Card Background"}),r.a.createElement(f.d,null,r.a.createElement(f.n,{gutterBottom:!0,variant:"h6"},"Lojaliteits Kaart"),r.a.createElement(f.n,{color:"textSecondary"},L(this.props.loyaltyCard.date).format("DD MMMM YYYY")),r.a.createElement(f.n,{component:"p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac ex sollicitudin, dictum sapien eget, aliquam mi."))))}}]),t}(r.a.Component),D=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loyaltyCards:[{id:1,date:new Date(2019,1,14)},{id:2,date:new Date(2019,4,22)},{id:3,date:new Date(2019,7,17)}]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.loyaltyCards.map(function(e){return r.a.createElement(M,{key:e.id,loyaltyCard:e})}),r.a.createElement(f.g,{color:"primary",style:{bottom:"10px",position:"fixed",right:"10px"}},r.a.createElement(E.a,null)))}}]),t}(r.a.Component);L.locale("af",{months:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"]}),L.locale("af");var A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{basename:"/lojaliteits-kaart-toepassing"},r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(h.a,{exact:!0,path:"/",component:D})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5412,2,1]]]);
//# sourceMappingURL=main.511e4f18.chunk.js.map