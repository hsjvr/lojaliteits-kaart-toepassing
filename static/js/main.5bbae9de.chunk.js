(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5422:function(e,t,a){e.exports=a(5576)},5427:function(e,t,a){},5429:function(e,t,a){},5576:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),o=a.n(l),c=(a(5427),a(11)),i=a(12),s=a(14),u=a(13),m=a(15),p=(a(5429),a(5579)),d=a(5578),h=a(31),f=a(3),b=a(28),y=a(22),E=a(50),O=a.n(E),j=a(5580),C="LKT",v="Enter",w="Leaderboard",g="Loyalty Cards",k="Loyalty Card Code",x="Loyalty Card",M="Sign Out",L="Website",N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onClickListItem=function(e,t){if(t)return window.location.href=e,void a.props.onClose();a.props.history.push(e),a.props.onClose()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.classes.list},r.a.createElement(f.o,null,r.a.createElement(f.p,{button:!0,component:"a",onClick:function(){return e.onClickListItem("/",!1)}},r.a.createElement(f.r,null,r.a.createElement(y.d,null)),r.a.createElement(f.t,null," ",g," ")),r.a.createElement(f.p,{button:!0,component:"a",onClick:function(){return e.onClickListItem("/leaderboard",!1)}},r.a.createElement(f.r,null,r.a.createElement(y.e,null)),r.a.createElement(f.t,null," ",w," ")),r.a.createElement(f.p,{button:!0,component:"a",onClick:function(){return e.onClickListItem("https://janvanriebeeck.co.za",!0)}},r.a.createElement(f.r,null,r.a.createElement(y.b,null)),r.a.createElement(f.t,null," ",L," "))),r.a.createElement(f.h,null),r.a.createElement(f.o,null,r.a.createElement(f.p,{button:!0,component:"a",onClick:function(){return e.onClickListItem("/sign-in",!1)}},r.a.createElement(f.r,null,r.a.createElement(y.f,null)),r.a.createElement(f.t,null," ",M," "))))}}]),t}(r.a.Component),D=Object(b.withStyles)({list:{width:250}})(N),S=Object(j.a)(D),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(O.a,{open:this.props.open,onClose:this.props.onClose},r.a.createElement(S,{onClose:this.props.onClose}))}}]),t}(r.a.Component),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={drawer:{open:!1}},a.onClickMenu=function(){a.setState({drawer:Object(h.a)({},a.state.drawer,{open:!a.state.drawer.open})})},a.onCloseDrawer=function(){a.setState({drawer:Object(h.a)({},a.state.drawer,{open:!1})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:this.props.classes.root},r.a.createElement(f.a,{position:"static"},r.a.createElement(f.w,null,r.a.createElement(f.k,{onClick:this.onClickMenu,className:this.props.classes.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(y.g,null)),r.a.createElement(f.x,{variant:"h6",color:"inherit",className:this.props.classes.grow},C))),r.a.createElement(A,{open:this.state.drawer.open,onClose:this.onCloseDrawer}))}}]),t}(r.a.Component),B=Object(b.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(I),J=a(40),Y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.d,{style:{width:"100%"}},r.a.createElement(f.e,null,r.a.createElement(f.g,{style:{height:"150px"},image:"/lojaliteits-kaart-toepassing/images/loyalty-card-bg.jpg",title:"Loyalty Card Background"}),r.a.createElement(f.f,null,r.a.createElement(f.x,{gutterBottom:!0,variant:"h6"},x),r.a.createElement(f.x,{color:"textSecondary"},J(this.props.loyaltyCard.date).format("DD MMMM YYYY")),r.a.createElement(f.x,{component:"p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac ex sollicitudin, dictum sapien eget, aliquam mi."))))}}]),t}(r.a.Component),q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{padding:"16px"}},r.a.createElement(f.j,{style:{width:"100%"}},r.a.createElement(f.m,null,k),r.a.createElement(f.l,null)),r.a.createElement(f.i,{color:"primary",style:{bottom:"15px",outline:"none",position:"fixed",right:"15px"}},r.a.createElement(y.c,null)))}}]),t}(r.a.Component),G=a(139),P=a(35),T=a.n(P),R=a(51);var z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={users:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(R.a)(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.t1=h.a,e.t2={},e.t3=this.state,e.next=6,new Promise(function(e){setTimeout(function(){e([{firstName:"Desmond",lastName:"Murray",numberOfLoyaltyCards:Math.floor(7*Math.random())+1},{firstName:"Aylin",lastName:"Leonard",numberOfLoyaltyCards:Math.floor(7*Math.random())+1},{firstName:"Harrison",lastName:"Ellis",numberOfLoyaltyCards:Math.floor(7*Math.random())+1},{firstName:"Octavio",lastName:"Gilmore",numberOfLoyaltyCards:Math.floor(7*Math.random())+1},{firstName:"Ean",lastName:"Reese",numberOfLoyaltyCards:Math.floor(7*Math.random())+1}])},2e3)});case 6:e.t4=e.sent,e.t5={users:e.t4},e.t6=(0,e.t1)(e.t2,e.t3,e.t5),e.t0.setState.call(e.t0,e.t6);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.o,{dense:!0,subheader:r.a.createElement(f.u,{disableSticky:!0,component:"div"},w)},this.state.users?this.state.users.map(function(e){return r.a.createElement(f.p,null,r.a.createElement(f.q,null,r.a.createElement(f.b,null,"".concat(e.firstName[0]).concat(e.lastName[0]))),r.a.createElement(f.t,{primary:"".concat(e.firstName," ").concat(e.lastName)}),r.a.createElement(f.s,null,Object(G.a)(new Array(e.numberOfLoyaltyCards)).map(function(){return r.a.createElement(y.h,null)})))}):r.a.createElement(f.n,null)))}}]),t}(r.a.Component),F=a(5577),H=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={loyaltyCards:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(R.a)(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.t1=h.a,e.t2={},e.t3=this.state,e.next=6,new Promise(function(e){setTimeout(function(){e([{id:1,date:new Date(2019,1,14)},{id:2,date:new Date(2019,4,22)},{id:3,date:new Date(2019,7,17)}])},2e3)});case 6:e.t4=e.sent,e.t5={loyaltyCards:e.t4},e.t6=(0,e.t1)(e.t2,e.t3,e.t5),e.t0.setState.call(e.t0,e.t6);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.o,{dense:!0,subheader:r.a.createElement(f.u,{disableSticky:!0,component:"div"},g)},this.state.loyaltyCards?this.state.loyaltyCards.map(function(e){return r.a.createElement(f.p,{key:e.id},r.a.createElement(Y,{loyaltyCard:e}))}):r.a.createElement(f.n,null)),r.a.createElement(f.i,{color:"primary",style:{bottom:"15px",outline:"none",position:"fixed",right:"15px"},component:F.a,to:"/add-loyalty-card"},r.a.createElement(y.a,null)))}}]),t}(r.a.Component),K=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(f.v,{style:{margin:"8px",padding:"20px",textAlign:"center"}},r.a.createElement("img",{src:"/lojaliteits-kaart-toepassing/images/logo.jpg",alt:"Logo"}),r.a.createElement("br",null),r.a.createElement(f.c,{variant:"contained",color:"primary",component:F.a,to:"/"},v))}}]),t}(r.a.Component);J.locale("af",{months:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"]}),J.locale("af");var W=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(d.a,{path:"/add-loyalty-card",component:q}),r.a.createElement(d.a,{path:"/leaderboard",component:z}),r.a.createElement(d.a,{exact:!0,path:"/",component:H}),r.a.createElement(d.a,{path:"/sign-in",component:K})))}}]),t}(n.Component);o.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[5422,2,1]]]);
//# sourceMappingURL=main.5bbae9de.chunk.js.map