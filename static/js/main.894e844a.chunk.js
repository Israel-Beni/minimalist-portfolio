(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(37)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(15),c=a.n(l),r=(a(22),a(2)),i=a(3),m=a(6),s=a(5),u=a(4),d=(a(23),a(24),a(8)),p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={dropdownMenu:"closed"},n.menuItems={home:"HOME",portfolio:"PORTFOLIO",contact:"CONTACT ME"},n.renderMenu=n.renderMenu.bind(Object(m.a)(n)),n.toggleDropdownMenuState=n.toggleDropdownMenuState.bind(Object(m.a)(n)),n.renderDropdownMenu=n.renderDropdownMenu.bind(Object(m.a)(n)),n.toggleDropdownMenuDisplay=n.toggleDropdownMenuDisplay.bind(Object(m.a)(n)),n.handleMenuClick=n.handleMenuClick.bind(Object(m.a)(n)),n.activateRightMenuItem=n.activateRightMenuItem.bind(Object(m.a)(n)),n.handleRefresh=n.handleRefresh.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"toggleDropdownMenuState",value:function(){return"open"===this.state.dropdownMenu?this.setState({dropdownMenu:"closed"}):this.setState({dropdownMenu:"open"})}},{key:"renderDropdownMenu",value:function(){return"open"===this.state.dropdownMenu?o.a.createElement("svg",{onClick:this.handleMenuClick,xmlns:"http://www.w3.org/2000/svg",width:"18",height:"19"},o.a.createElement("path",{fill:"#33323D",fillRule:"evenodd",d:"M17.132.661l.707.707L9.707 9.5l8.132 8.132-.707.707L9 10.207.868 18.34l-.707-.707L8.293 9.5.161 1.368.868.661 9 8.793 17.132.661z"})):o.a.createElement("svg",{onClick:this.handleMenuClick,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"13"},o.a.createElement("g",{fill:"#33323D",fillRule:"evenodd"},o.a.createElement("path",{d:"M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z"})))}},{key:"toggleDropdownMenuDisplay",value:function(){var e=document.querySelector(" .navigation_menu");"closed"===this.state.dropdownMenu?(e.style.display="flex",e.style.padding="2.5rem 0",e.style.height="6.625rem"):(e.style.padding="0",e.style.height="0",e.style.display="flex")}},{key:"handleMenuClick",value:function(){console.log(document.querySelector(".header .navigation_menu")),this.toggleDropdownMenuDisplay(),this.toggleDropdownMenuState()}},{key:"activateRightMenuItem",value:function(e,t){var a=this;console.log(localStorage),e.push(t),e.length>=2&&(console.log("array",e),document.addEventListener("readystatechange",function(e){a.handlePageChange(t)}))}},{key:"handleRefresh",value:function(){}},{key:"componentDidMount",value:function(){console.log("Hello from ComponentDidMount in Header component"),this.props.activateHomeMenuItem("home")}},{key:"renderMenu",value:function(){var e=this;return Object.keys(this.menuItems).map(function(t){var a=e.menuItems[t];return o.a.createElement("li",{key:a,id:a.toLowerCase()},o.a.createElement(d.c,{to:"".concat(a.trim().replace(/ /,"-").toLowerCase()),activeclassname:"active"},a))})}},{key:"render",value:function(){return o.a.createElement("section",{className:"header"},o.a.createElement("div",{className:"logo_container"},o.a.createElement(d.b,{to:"/home"},o.a.createElement("img",{src:"/minimalist-portfolio/images/logo.svg",alt:"logo"}))),o.a.createElement("div",{className:"separator"}),o.a.createElement("div",{className:"icon_container"},this.renderDropdownMenu()),o.a.createElement("ul",{className:"navigation_menu"},this.renderMenu()))}}]),a}(o.a.Component),h=(a(25),a(26),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentWillUnmount",value:function(){console.log("Hello from ComponentDidUpdate in Banner"),this.props.deactivateHomeMenuItem("home")}},{key:"render",value:function(){return o.a.createElement("section",{className:"Banner",id:"Banner"},o.a.createElement("div",{className:"Banner_text"},o.a.createElement("div",{className:"hero_text"},o.a.createElement("h1",null,"Hey, I'm Israel Ben T. Degbe and I love building beautiful websites")),o.a.createElement("button",{className:"Banner_button"},o.a.createElement("a",{href:"#AboutMe"}),o.a.createElement("div",{className:"image_container"},o.a.createElement("div",{className:"background_filler"}),o.a.createElement("img",{src:"../../../images/icons/down-arrows.svg",alt:"down-arrows"})),o.a.createElement("span",null,"About Me"))))}}]),a}(o.a.Component)),v=(a(27),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"AboutMe",id:"AboutMe"},o.a.createElement("div",{className:"image_container"},o.a.createElement("img",{src:"../../../images/homepage_profile.jpg",alt:"profile"})),o.a.createElement("div",{className:"separator"}),o.a.createElement("div",{className:"info"},o.a.createElement("div",{className:"info_container"},o.a.createElement("h2",null,"About Me"),o.a.createElement("p",{className:"description"},"I'm a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I'm based in Chandigarh, India, but I'm happy to working remotely. However, I'm open to relocating. When I'm not coding, you'll find me playing guitar or piano, and sometimes writing poems and songs. I'd love you to check out my work."),o.a.createElement("button",{className:"go-to"},o.a.createElement(d.b,{to:"/portfolio",style:{textDecoration:"none",color:"inherit"}},"Go to portfolio")))))}}]),a}(o.a.Component)),f=(a(28),a(29),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("section",{className:"GetInTouch"},o.a.createElement("div",{className:"container"},o.a.createElement("h2",null,"Get in Touch"),o.a.createElement("div",{className:"separator"}),o.a.createElement("div",{className:"info"},o.a.createElement("p",{className:"description"},"I'd love to hear about what you're working on and how I could help. I'm currently looking for a new role and am open to a wide of range of opportunities. My preference would be to find a position in a company in Bengalore/Gurgaon. But I'm also happy to hear about opportunities that don't fit that description. I'm a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form."),o.a.createElement("div",{className:"social-media"},o.a.createElement("a",{href:"https://github.com/Israel-Beni"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"24",alt:"my github link"},o.a.createElement("path",{fill:"#33323D",d:"M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z"}))),o.a.createElement("a",{href:"#"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"20",alt:"my twitter link"},o.a.createElement("path",{fill:"#33323D",d:"M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"}))),o.a.createElement("a",{href:"https://www.linkedin.com/in/ben-t-degbe-902218175/"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",alt:"my linkedin link"},o.a.createElement("path",{fill:"#33323D",d:"M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z"})))))))}}]),a}(o.a.Component)),E=(a(30),a(16)),g={PUBLIC_KEY:"orIzph8pZLXfI3JIj",TEMPLATE_ID:"template_929dx83",SERVICE_ID:"service_a8wi10p"},b=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),E.a.sendForm(g.SERVICE_ID,g.TEMPLATE_ID,e.target,g.PUBLIC_KEY).then(function(e){alert("Message Sent, We will get back to you shortly",e.text)},function(e){alert("An error occurred, Please try again",e.text)})}},{key:"render",value:function(){return o.a.createElement("section",{className:"ContactForm"},o.a.createElement("h2",null,"Contact Me"),o.a.createElement("div",{className:"separator"}),o.a.createElement("form",{action:"",onSubmit:this.handleSubmit},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{id:"name",name:"name",type:"text",placeholder:"Jane Appleseed"})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"email"},"Email Address"),o.a.createElement("input",{id:"email",name:"email",type:"email",placeholder:"email@example.com"})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"message"},"Message"),o.a.createElement("textarea",{id:"message",name:"message",placeholder:"How can I help?"})),o.a.createElement("input",{type:"submit",className:"submit",value:"Submit Message"})))}}]),a}(o.a.Component),w=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){console.log("Hello from ComponentDidMount in ContactMe"),this.props.deactivateHomeMenuItem("home")}},{key:"render",value:function(){return o.a.createElement("section",{className:"ContactMe"},o.a.createElement(f,null),o.a.createElement(b,null))}}]),a}(o.a.Component),M=a(9),j=a.n(M),y=a(11),k=(a(32),a(33),function(){var e=Object(y.a)(j.a.mark(function e(){var t,a;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("data/projects.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,console.log("json: ",a),console.log("json.projects: ",a.projects),console.log("json.projects[0].name: ",a.projects[0].name),e.abrupt("return",a.projects);case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()),O=a(12);function I(e){if("string"===typeof e){var t,a=[],n=Object(O.a)(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;a.push(o)}}catch(l){n.e(l)}finally{n.f()}return a[0]=a[0].toUpperCase(),console.log(a),a.join("")}console.error("The passed in parameter should be of a string type")}var N=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).swatchModels=n.swatchModels.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"swatchModels",value:function(){var e=this.props.project;if(e){var t=e.name,a=e.about,n=e.images.portfolio;return"thumbnail-first"===this.props.model?o.a.createElement("div",{className:"thumbnail-first Project-container"},o.a.createElement("div",{className:"thumbnail-container"},o.a.createElement("img",{className:"desktop",src:"".concat("/minimalist-portfolio").concat(n.desktop),alt:"".concat(t,"-thumbnail")}),o.a.createElement("img",{className:"tablet",src:"".concat("/minimalist-portfolio").concat(n.tablet),alt:"".concat(t,"-thumbnail")}),o.a.createElement("img",{className:"mobile",src:"".concat("/minimalist-portfolio").concat(n.mobile),alt:"".concat(t,"-thumbnail")})),o.a.createElement("div",{className:"info"},o.a.createElement("h2",null,I(t)),o.a.createElement("p",{className:"description"},a),o.a.createElement("button",null,o.a.createElement("a",{href:e.urls.git,style:{textDecoration:"none",color:"#33323D"}},"View Project".toUpperCase())))):o.a.createElement("div",{className:"thumbnail-last Project-container"},o.a.createElement("div",{className:"info"},o.a.createElement("h2",null,I(t)),o.a.createElement("p",{className:"description"},a),o.a.createElement("button",null,o.a.createElement("a",{href:e.urls.git,style:{textDecoration:"none",color:"#33323D"}},"View Project".toUpperCase()))),o.a.createElement("div",{className:"thumbnail-container"},o.a.createElement("img",{className:"desktop",src:"".concat("/minimalist-portfolio").concat(n.desktop),alt:"".concat(t,"-thumbnail")}),o.a.createElement("img",{className:"tablet",src:"".concat("/minimalist-portfolio").concat(n.tablet),alt:"".concat(t,"-thumbnail")}),o.a.createElement("img",{className:"mobile",src:"".concat("/minimalist-portfolio").concat(n.mobile),alt:"".concat(t,"-thumbnail")})))}if(0===e.length)return o.a.createElement("div",{className:"loading"},o.a.createElement("img",{src:"../../../images/icons/icons8-spinner.gif",alt:""}))}},{key:"componentDidMount",value:function(){console.log("Hello from ComponentDidMount in Portfolio"),this.props.deactivateHomeMenuItem("home")}},{key:"render",value:function(){return o.a.createElement("div",{className:"Project"},this.swatchModels())}}]),a}(o.a.Component),C=a(1),H=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={projects:[]},n.model="thumbnail-last",n.swatchModels=n.swatchModels.bind(Object(m.a)(n)),n.renderProjects=n.renderProjects.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(y.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,k();case 3:e.t1=e.sent,e.t2={projects:e.t1},e.t0.setState.call(e.t0,e.t2),console.log("getData's name from componentDidMount: ",this.state.projects[0].name);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(y.a)(j.a.mark(function e(){return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("getData from componentDidUpdate: ",this.state.projects[0].name);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"swatchModels",value:function(){return console.log("this.props.match",this.props.match),"thumbnail-first"===this.model?this.model="thumbnail-last":this.model="thumbnail-first",this.model}},{key:"renderProjects",value:function(){var e=this;return this.state.projects.length>0?this.state.projects.map(function(t){return console.log("project.name:",t.name),o.a.createElement("li",{key:"".concat(t.name)},o.a.createElement(C.c,null,o.a.createElement(C.a,{path:"/",element:o.a.createElement(N,{model:e.swatchModels(),project:t,deactivateHomeMenuItem:e.props.deactivateHomeMenuItem})})))}):o.a.createElement("div",{className:"loading"},o.a.createElement("img",{src:"../../../images/icons/icons8-spinner.gif",alt:""}))}},{key:"render",value:function(){return o.a.createElement("section",{className:"Portfolio"},o.a.createElement("ul",null,this.renderProjects()))}}]),a}(o.a.Component),D=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).deactivateHomeMenuItem=n.deactivateHomeMenuItem.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"deactivateHomeMenuItem",value:function(e){var t=document.getElementById(e);console.log("home: ",t),"home"===e?t.removeAttribute("class"):console.log(),console.log(t.getAttribute("class"))}},{key:"render",value:function(){return o.a.createElement("main",{className:"ContentBlock"},o.a.createElement(C.c,null,o.a.createElement(C.a,{path:"/minimalist-portfolio/",element:o.a.createElement(h,{deactivateHomeMenuItem:this.props.deactivateHomeMenuItem})}),o.a.createElement(C.a,{path:"/minimalist-portfolio/home",element:o.a.createElement(h,{deactivateHomeMenuItem:this.props.deactivateHomeMenuItem})})),o.a.createElement(C.c,null,o.a.createElement(C.a,{path:"/minimalist-portfolio/",element:o.a.createElement("div",{className:"separator"})}),o.a.createElement(C.a,{path:"/minimalist-portfolio/home",element:o.a.createElement("div",{className:"separator"})})),o.a.createElement(C.c,null,o.a.createElement(C.a,{path:"/minimalist-portfolio/",element:o.a.createElement(v,null)}),o.a.createElement(C.a,{path:"/minimalist-portfolio/home",element:o.a.createElement(v,null)})),o.a.createElement(C.c,null,o.a.createElement(C.a,{path:"/minimalist-portfolio/contact-me",element:o.a.createElement(w,{deactivateHomeMenuItem:this.props.deactivateHomeMenuItem})})),o.a.createElement(C.c,null,o.a.createElement(C.a,{path:"/minimalist-portfolio/portfolio/*",element:o.a.createElement(H,{deactivateHomeMenuItem:this.props.deactivateHomeMenuItem})})))}}]),a}(o.a.Component),x=(a(34),a(35),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"ContactLink"},o.a.createElement("p",{className:"info"},"Interested in doing a project together?"),o.a.createElement("div",{className:"separator"}),o.a.createElement("button",{className:"contact-me"},o.a.createElement(d.b,{to:"/contact-me",style:{color:"inherit",textDecoration:"none"}},"Contact me")))}}]),a}(o.a.Component)),A=(a(36),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).links={home:"HOME",portfolio:"PORTFOLIO",contact:"CONTACT ME"},n.renderLinks=n.renderLinks.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"renderLinks",value:function(){var e=this;return Object.keys(this.links).map(function(t){var a=e.links[t];return o.a.createElement("li",{key:a},o.a.createElement(d.b,{to:"/"+a.trim().replace(/ /,"-").toLowerCase(),style:{color:"white",textDecoration:"none"}},a))})}},{key:"render",value:function(){return o.a.createElement("div",{className:"FooterBar"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"links"},o.a.createElement("div",{className:"logo-container"},o.a.createElement(d.b,{to:"/home"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"61",height:"32"},o.a.createElement("path",{fill:"white",fillRule:"evenodd",d:"M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"})))),o.a.createElement("ul",{className:"menu"},this.renderLinks())),o.a.createElement("div",{className:"separator"}),o.a.createElement("div",{className:"social-media"},o.a.createElement("a",{href:"https://github.com/Israel-Beni"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"25",height:"24",alt:"my github link"},o.a.createElement("path",{fill:"white",d:"M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z"}))),o.a.createElement("a",{href:"#"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"20",alt:"my twitter link"},o.a.createElement("path",{fill:"white",d:"M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"}))),o.a.createElement("a",{href:"https://www.linkedin.com/in/ben-t-degbe-902218175/"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",alt:"my linkedin link"},o.a.createElement("path",{fill:"white",d:"M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM7.2 20.4H3.6V9.6h3.6v10.8zM5.4 7.56c-1.2 0-2.16-.96-2.16-2.16 0-1.2.96-2.16 2.16-2.16 1.2 0 2.16.96 2.16 2.16 0 1.2-.96 2.16-2.16 2.16zm15 12.84h-3.6v-6.36c0-.96-.84-1.8-1.8-1.8-.96 0-1.8.84-1.8 1.8v6.36H9.6V9.6h3.6v1.44c.6-.96 1.92-1.68 3-1.68 2.28 0 4.2 1.92 4.2 4.2v6.84z"}))))))}}]),a}(o.a.Component)),S=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"Footer"},o.a.createElement(C.c,null,o.a.createElement(C.a,{path:"/minimalist-portfolio/",element:o.a.createElement(x,null)}),o.a.createElement(C.a,{path:"/minimalist-portfolio/home",element:o.a.createElement(x,null)}),o.a.createElement(C.a,{path:"/minimalist-portfolio/portfolio",element:o.a.createElement(x,null)})),o.a.createElement(A,null))}}]),a}(o.a.Component),L=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).activateHomeMenuItem=n.activateHomeMenuItem.bind(Object(m.a)(n)),n.deactivateHomeMenuItem=n.deactivateHomeMenuItem.bind(Object(m.a)(n)),n}return Object(i.a)(a,[{key:"activateHomeMenuItem",value:function(e){var t=document.getElementById(e);"home"===e?t.setAttribute("class","active"):console.log()}},{key:"deactivateHomeMenuItem",value:function(e){var t=document.getElementById(e);"home"===e?t.removeAttribute("class"):console.log()}},{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"separator_1"}),o.a.createElement(p,{activateHomeMenuItem:this.activateHomeMenuItem,deactivateHomeMenuItem:this.deactivateHomeMenuItem}),o.a.createElement("div",{className:"separator_2"}),o.a.createElement(C.c,null,o.a.createElement(C.a,{path:"/minimalist-portfolio/*",element:o.a.createElement(D,{deactivateHomeMenuItem:this.deactivateHomeMenuItem})})),o.a.createElement("div",{className:"separator_3"}),o.a.createElement(S,null)))}}]),a}(o.a.Component),_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),o(e),l(e),c(e)})};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null)),document.getElementById("root")),_()}],[[17,1,2]]]);
//# sourceMappingURL=main.894e844a.chunk.js.map