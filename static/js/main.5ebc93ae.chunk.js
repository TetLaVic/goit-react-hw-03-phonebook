(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__cZc7i",labelForm:"ContactForm_labelForm__1vZS8",inputForm:"ContactForm_inputForm__10QEr",buttonForm:"ContactForm_buttonForm__2Ggy7"}},,,,function(t,e,n){t.exports={labelFilter:"Filter_labelFilter__11zTH",inputFilter:"Filter_inputFilter__2cjO6"}},function(t,e,n){t.exports={listItem:"ContactListItem_listItem__1Hl-V",buttonListItem:"ContactListItem_buttonListItem__33ohT"}},,,function(t,e,n){t.exports={contactList:"ContactList_contactList__fr4GT"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(13),r=n.n(o),i=(n(20),n(7)),s=n(15),l=n(2),u=n(3),m=n(5),b=n(4),h=(n(21),n(24)),j=n(8),d=n(6),p=n.n(d),f=n(0),O=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.reset=function(){t.setState({name:"",number:""})},t.handleChange=function(e){e.preventDefault();var n=e.currentTarget,a=n.name,c=n.value,o=t.state,r=Object(j.a)({},a,c);t.setState(Object(i.a)(Object(i.a)({},o),r))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t}return Object(u.a)(n,[{key:"render",value:function(){var t=Object(h.a)(),e=Object(h.a)();return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.contactForm,children:[Object(f.jsxs)("label",{htmlFor:t,className:p.a.labelForm,children:["Name",Object(f.jsx)("input",{type:"text",name:"name",id:t,value:this.state.name,onChange:this.handleChange,className:p.a.inputForm})]}),Object(f.jsxs)("label",{htmlFor:e,className:p.a.labelForm,children:["Number",Object(f.jsx)("input",{type:"tel",name:"number",id:e,value:this.state.number,onChange:this.handleChange,className:p.a.inputForm})]}),Object(f.jsx)("button",{type:"submit",className:p.a.buttonForm,children:"Add contact"})]})}}]),n}(a.Component),C=n(10),F=n.n(C),v=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=Object(h.a)(),e=this.props,n=e.filterState,a=e.onFilterChange;return Object(f.jsxs)("label",{htmlFor:t,className:F.a.labelFilter,children:["Find contacts by name",Object(f.jsx)("input",{type:"text",name:"filter",id:t,value:n,onChange:a,className:F.a.inputFilter})]})}}]),n}(a.Component),_=n(11),x=n.n(_),g=function(t){var e=t.name,n=t.number,a=t.id,c=t.onDeleteContact;return Object(f.jsxs)("li",{id:a,className:x.a.listItem,children:[e,": ",n,Object(f.jsx)("button",{onClick:function(){c(a)},className:x.a.buttonListItem,children:"Delete"})]})},S=n(14),y=n.n(S),N=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.onContactsToShow,n=t.onDeleteContact,a=e();return Object(f.jsx)("ul",{children:a.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(f.jsx)(g,{name:e,number:a,id:c,onDeleteContact:n,className:y.a.contactList},c)}))})}}]),n}(a.Component),w=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleNewContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.map((function(t){return t.name})).includes(n))alert("".concat(n," is already in contacts."));else{var c={contacts:[].concat(Object(s.a)(t.state.contacts),[{name:n,id:Object(h.a)(),number:a}])};t.setState(Object(i.a)(Object(i.a)({},t.state),c))}},t.getContactsToShow=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){var e=t.name;return!!e&&e.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(O,{onSubmit:this.handleNewContact}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(v,{filterState:this.state.filter,onFilterChange:this.handleFilterChange}),Object(f.jsx)(N,{onContactsToShow:this.getContactsToShow,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.5ebc93ae.chunk.js.map