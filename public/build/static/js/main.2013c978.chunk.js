(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{187:function(e,t,a){e.exports=a(340)},193:function(e,t,a){},194:function(e,t,a){},340:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(46),l=a.n(c),i=(a(192),a(193),a(15)),o=a(16),u=a(18),s=a(17),m=a(19),h=(a(194),a(21)),p=a(47),d=a(20),g=a.n(d),f=a(26),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={fullName:"",email:"",originalPassword:"",message:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(f.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.post("".concat("https://irontask.herokuapp.com","/api/signup"),this.state,{withCredentials:!0}).then(function(e){var a=e.data.userDoc;t.props.onUserChange(a)}).catch(function(e){if(e.response&&e.response.data)return t.setState({message:e.response.data.message})})}},{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement("section",null,r.a.createElement("h2",null," You are signed up! "),r.a.createElement("p",null," Welcome, ",this.props.currentUser.fullName,"! Your email is: ",r.a.createElement("b",null," ",this.props.currentUser.email," "))):r.a.createElement("section",null,r.a.createElement("h2",null," Sign Up "),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null," Full Name "),r.a.createElement("input",{value:this.state.fullName,onChange:function(t){return e.genericSync(t)},type:"text",name:"fullName",placeholder:"Miller"}),r.a.createElement("label",null," Email "),r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"superstar@ironhack.com"}),r.a.createElement("label",null," Password "),r.a.createElement("input",{value:this.state.originalPassword,onChange:function(t){return e.genericSync(t)},type:"password",name:"originalPassword",placeholder:"*******"}),r.a.createElement("button",null," Sign Up ")),this.state.message&&r.a.createElement("div",null," ",this.state.message," "))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",originalPassword:"",message:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(f.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.post("".concat("https://irontask.herokuapp.com","/api/login"),this.state,{withCredentials:!0}).then(function(e){console.log("Login Page",e.data);var a=e.data.userDoc;t.props.onUserChange(a),console.log("success")}).catch(function(e){if(e.response&&e.response.data)return t.setState({message:e.response.data.message})})}},{key:"render",value:function(){var e=this;return this.props.currentUser?r.a.createElement(p.a,{to:"/"}):r.a.createElement("section",{className:"LoginPage"},r.a.createElement("h2",null,"Log In"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null," Email:  "),r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"email",name:"email",placeholder:"superstar@ironhack.com"}),r.a.createElement("label",null," Password: "),r.a.createElement("input",{value:this.state.originalPassword,onChange:function(t){return e.genericSync(t)},type:"password",name:"originalPassword",placeholder:"****"}),r.a.createElement("button",null,"Log In")),this.state.message&&r.a.createElement("div",null," ",this.state.message," "))}}]),t}(n.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("section",null,r.a.createElement("h1",null," Home Page "),r.a.createElement("p",null," Welcome to Iron Task "))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={technicians:[],singleTech:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("https://irontask.herokuapp.com","/api/usersListApi?role=Technician"),{withCredentials:!0}).then(function(t){e.setState({technicians:t.data.data})})}},{key:"pickupUser",value:function(e){this.props.sendUser(e.target.value)}},{key:"render",value:function(){var e=this,t=this.state.technicians;return r.a.createElement("div",null,r.a.createElement("select",{onChange:function(t){return e.pickupUser(t)}},r.a.createElement("option",null,"--Select Technician--"),t.map(function(e){return r.a.createElement("option",{key:e._id,value:e.fullName}," ",e.fullName," ")})))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={clients:[],singleClient:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("https://irontask.herokuapp.com","/clients/clientListApi"),{withCredentials:!0}).then(function(t){e.setState({clients:t.data.data})})}},{key:"pickupUser",value:function(e){this.props.sendUser(e.target.value)}},{key:"render",value:function(){var e=this,t=this.state.clients;return r.a.createElement("div",null,r.a.createElement("select",{onChange:function(t){return e.pickupUser(t)}},r.a.createElement("option",null,"--Select Account Name--"),t.map(function(e){return r.a.createElement("option",{key:e._id,value:e.accountName}," ",e.accountName," ")})))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={accountName:"",contact:"",status:"",priority:"",issueType:"",primaryResource:"",ticketTitle:"",ticketDescription:"",isSubmitSuccessful:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(f.a)({},a,n))}},{key:"getClient",value:function(e){this.setState({accountName:e})}},{key:"getTech",value:function(e){this.setState({primaryResource:e})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.post("".concat("https://irontask.herokuapp.com","/tickets/addTicket"),this.state,{withCredentials:!0}).then(function(e){console.log("new ticket: ",e.data),t.setState({isSubmitSuccessful:!0})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement("h2",null," Add Ticket"),r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null," Account Name: "),r.a.createElement(S,{sendUser:function(t){return e.getClient(t)}}),r.a.createElement("br",null),r.a.createElement("label",null," Contact: "),r.a.createElement("input",{value:this.state.contact,onChange:function(t){return e.genericSync(t)},type:"text",name:"contact",placeholder:""}),r.a.createElement("br",null),r.a.createElement("label",null," Status: "),r.a.createElement("select",{value:this.state.status,name:"status",onChange:function(t){return e.genericSync(t)}},r.a.createElement("option",{value:"--Select Status--"},"--Select Status-- "),r.a.createElement("option",{value:"New"}," New "),r.a.createElement("option",{value:"In Progress"}," In Progress "),r.a.createElement("option",{value:"Waiting on Customer"}," Waiting on Customer "),r.a.createElement("option",{value:"Complete"}," Complete ")),r.a.createElement("br",null),r.a.createElement("label",null," Priority: "),r.a.createElement("select",{value:this.state.priority,name:"priority",onChange:function(t){return e.genericSync(t)}},r.a.createElement("option",{value:"--Select Priority--"},"--Select Priority-- "),r.a.createElement("option",{value:"Low"}," Low "),r.a.createElement("option",{value:"Medium"}," Medium "),r.a.createElement("option",{value:"High"}," High ")),r.a.createElement("br",null),r.a.createElement("label",null," Issue Type: "),r.a.createElement("select",{value:this.state.issueType,name:"issueType",onChange:function(t){return e.genericSync(t)}},r.a.createElement("option",{value:"--Select Issue Type--"},"--Select Issue Type-- "),r.a.createElement("option",{value:"Infrastructure"},"Infrastructure"),r.a.createElement("option",{value:"Hardware"}," Hardware "),r.a.createElement("option",{value:"Software"}," Software "),r.a.createElement("option",{value:"User Administration"}," User Administration ")),r.a.createElement("br",null),r.a.createElement("label",null," Primary Resource: "),r.a.createElement(y,{sendUser:function(t){return e.getTech(t)}}),r.a.createElement("br",null),r.a.createElement("label",null," Ticket Title: "),r.a.createElement("input",{value:this.state.ticketTitle,onChange:function(t){return e.genericSync(t)},type:"text",name:"ticketTitle",placeholder:""}),r.a.createElement("br",null),r.a.createElement("label",null," Ticket Description: "),r.a.createElement("textarea",{value:this.state.ticketDescription,onChange:function(t){return e.genericSync(t)},type:"text",name:"ticketDescription",placeholder:""}),r.a.createElement("br",null),r.a.createElement("button",null,"Submit")))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={accountName:"",address1:"",Phone:"",active:!1,isSubmitSuccessful:!1},a.toggleChange=function(){a.setState({active:!a.state.active})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(f.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),console.log(this.state),g.a.post("".concat("https://irontask.herokuapp.com","/clients/addClient"),this.state,{withCredentials:!0}).then(function(e){console.log("new client: ",e.data),t.setState({isSubmitSuccessful:!0})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null,"Account Name:"),r.a.createElement("input",{value:this.state.accountName,onChange:function(t){return e.genericSync(t)},type:"text",name:"accountName",placeholder:""}),r.a.createElement("br",null),r.a.createElement("label",null,"Address:"),r.a.createElement("input",{value:this.state.address1,onChange:function(t){return e.genericSync(t)},type:"text",name:"address1",placeholder:""}),r.a.createElement("br",null),r.a.createElement("label",null,"Phone:"),r.a.createElement("input",{value:this.state.Phone,onChange:function(t){return e.genericSync(t)},type:"text",name:"Phone",placeholder:""}),r.a.createElement("br",null),r.a.createElement("label",null,"Active:"),r.a.createElement("input",{type:"checkbox",name:"active",checked:this.state.active,onChange:this.toggleChange}),r.a.createElement("br",null),r.a.createElement("button",null,"Submit")))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={clientArray:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("https://irontask.herokuapp.com","/clients/clientList"),{withCredentials:!0}).then(function(t){console.log("ClientList",t.data.data),e.setState({clientArray:t.data.data})}).catch(function(e){console.log("Phone List ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this.state.clientArray;return r.a.createElement("section",null,r.a.createElement("h2",null," Clients "),r.a.createElement("p",null,"Currently we have: ",e.length," clients."),r.a.createElement("ul",null,e.map(function(e){return r.a.createElement("li",{key:e._id},r.a.createElement(h.b,{to:"/edit-client/".concat(e._id)},e.accountName))})))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={accountName:"",address1:"",Phone:"",active:!1},a.toggleChange=function(){a.setState({active:!a.state.active})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(f.a)({},a,n))}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;g.a.get("".concat("https://irontask.herokuapp.com","/clients/clientListEdit/").concat(t.clientId)).then(function(t){console.log(t.data.data),e.setState({accountName:t.data.data.accountName,address1:t.data.data.address1,Phone:t.data.data.Phone,active:t.data.data.active}),console.log(e.state)}).catch(function(e){alert("Sorry! Something went wrong.")})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.match.params;console.log("submit",this.state),g.a.put("".concat("https://irontask.herokuapp.com","/clients/updateClient/").concat(t.clientId),this.state,{withCredentials:!0}).then(function(e){console.log("updated client: ",e.data)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null,"Account Name:"),r.a.createElement("input",{value:this.state.accountName,onChange:function(t){return e.genericSync(t)},type:"text",name:"accountName"}),r.a.createElement("br",null),r.a.createElement("label",null,"Address:"),r.a.createElement("input",{value:this.state.address1,onChange:function(t){return e.genericSync(t)},type:"text",name:"address1"}),r.a.createElement("br",null),r.a.createElement("label",null,"Phone:"),r.a.createElement("input",{value:this.state.Phone,onChange:function(t){return e.genericSync(t)},type:"text",name:"Phone"}),r.a.createElement("br",null),r.a.createElement("label",null,"Active:"),r.a.createElement("input",{type:"checkbox",name:"active",checked:this.state.active,onChange:this.toggleChange}),r.a.createElement("br",null),r.a.createElement("button",null,"Update")))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={userArray:[]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("https://irontask.herokuapp.com","/api/usersList"),{withCredentials:!0}).then(function(t){console.log("UserList",t.data.data),e.setState({userArray:t.data.data})}).catch(function(e){console.log("User List ERROR",e),alert("Sorry! Something went wrong.")})}},{key:"render",value:function(){var e=this.state.userArray;return r.a.createElement("section",null,r.a.createElement("h2",null," Users "),r.a.createElement("p",null,"Currently we have: ",e.length," users."),r.a.createElement("ul",null,e.map(function(e){return r.a.createElement("li",{key:e._id},r.a.createElement(h.b,{to:"/edit-user/".concat(e._id)},e.fullName))})))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={fullName:"",email:"",status:"",role:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(f.a)({},a,n))}},{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params;g.a.get("".concat("https://irontask.herokuapp.com","/api/profile/").concat(t.userId)).then(function(t){console.log("response",t.data.data),e.setState({fullName:t.data.data.fullName,email:t.data.data.email,status:t.data.data.status,role:t.data.data.role}),console.log(e.state)}).catch(function(e){alert("Sorry! Something went wrong.")})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.match.params;console.log("pre-submit",this.state),g.a.put("".concat("https://irontask.herokuapp.com","/api/updateUser/").concat(t.userId),this.state,{withCredentials:!0}).then(function(e){console.log("updated user: ",e.data.data)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("section",null,r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",null,"User Name:"),r.a.createElement("input",{value:this.state.fullName,onChange:function(t){return e.genericSync(t)},type:"text",name:"fullName"}),r.a.createElement("br",null),r.a.createElement("label",null,"User Email:"),r.a.createElement("input",{value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"text",name:"email"}),r.a.createElement("br",null),r.a.createElement("label",null,"Role:"),r.a.createElement("select",{value:this.state.role,name:"role",onChange:function(t){return e.genericSync(t)}},r.a.createElement("option",{value:"Admin"}," Admin "),r.a.createElement("option",{value:"Technician"},"Technician"),r.a.createElement("option",{value:"Client"}," Client ")),r.a.createElement("br",null),r.a.createElement("label",null,"Status:"),r.a.createElement("select",{value:this.state.status,name:"status",onChange:function(t){return e.genericSync(t)}},r.a.createElement("option",{value:"Pending"},"Pending"),r.a.createElement("option",{value:"Active"},"Active"),r.a.createElement("option",{value:"Inactive"},"Inactive")),r.a.createElement("br",null),r.a.createElement("button",null,"Update")))}}]),t}(n.Component),P=a(353),A=a(350),N=a(352),L=a(348),T=a(349),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",originalPassword:"",message:null},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"genericSync",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(f.a)({},a,n))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),g.a.post("".concat("https://irontask.herokuapp.com","/api/login"),this.state,{withCredentials:!0}).then(function(e){console.log("Login Page",e.data);var a=e.data.userDoc;t.props.onUserChange(a),console.log("success")}).catch(function(e){if(e.response&&e.response.data)return t.setState({message:e.response.data.message})})}},{key:"render",value:function(){var e=this;return r.a.createElement(P.a,{centered:!0,columns:2},r.a.createElement(P.a.Column,null,r.a.createElement(A.a,{as:"h2",textAlign:"center"},"Login"),r.a.createElement(N.a,null,r.a.createElement(L.a,{size:"large",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(L.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"Email address",value:this.state.email,onChange:function(t){return e.genericSync(t)},type:"email",name:"email"}),r.a.createElement(L.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",value:this.state.originalPassword,onChange:function(t){return e.genericSync(t)},name:"originalPassword"}),r.a.createElement(T.a,{color:"blue",fluid:!0,size:"large"},"Login")))))}}]),t}(n.Component),I=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).state={currentUser:null,role:""},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat("https://irontask.herokuapp.com","/api/checkuser"),{withCredentials:!0}).then(function(t){console.log("Check User in APP.JS: ",t.data.userDoc);var a=t.data.userDoc;e.syncCurrentUser(a)})}},{key:"syncCurrentUser",value:function(e){this.setState({currentUser:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null," Iron Task "),r.a.createElement("nav",null,r.a.createElement(h.c,{to:"/"}," Home "),"Client"===this.state.role?r.a.createElement("span",null,r.a.createElement(h.c,{to:"/client-list"},"Client List "),r.a.createElement(h.c,{to:"/user-list"},"User List "),r.a.createElement(h.c,{to:"/add-client"}," Add Client "),r.a.createElement(h.c,{to:"/signup-page"}," Signup "),r.a.createElement(h.c,{to:"/login-page2"}," Login Page 2 ")):r.a.createElement("span",null,r.a.createElement(h.c,{to:"/signup-page"}," Signup "),r.a.createElement(h.c,{to:"/login-page"}," Login "),r.a.createElement(h.c,{to:"/add-ticket"}," Add Ticket "),r.a.createElement(h.c,{to:"/login-page2"}," Login Page 2 "),r.a.createElement(h.c,{to:"/client-list"},"Client List "),r.a.createElement(h.c,{to:"/user-list"},"User List ")))),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:b}),r.a.createElement(p.b,{path:"/signup-page",render:function(){return r.a.createElement(v,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(p.b,{path:"/login-page",render:function(){return r.a.createElement(E,{currentUser:e.state.currentUser,onUserChange:function(t){return e.syncCurrentUser(t)}})}}),r.a.createElement(p.b,{path:"/add-ticket",component:k}),r.a.createElement(p.b,{path:"/add-client",component:C}),r.a.createElement(p.b,{path:"/client-list",component:O}),r.a.createElement(p.b,{path:"/edit-client/:clientId",component:j}),r.a.createElement(p.b,{path:"/user-list",component:w}),r.a.createElement(p.b,{path:"/edit-user/:userId",component:U}),r.a.createElement(p.b,{path:"/login-page2",component:D})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(h.a,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[187,1,2]]]);
//# sourceMappingURL=main.2013c978.chunk.js.map