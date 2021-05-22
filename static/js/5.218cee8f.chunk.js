(this.webpackJsonpsocial_network_typescript=this.webpackJsonpsocial_network_typescript||[]).push([[5],{109:function(e,a,s){"use strict";s.d(a,"a",(function(){return i}));var t=s(3),n=(s(1),s(110)),o=s.n(n),c=s(2),i=function(e){var a=e.id,s=e.type,n=e.placeholder,i=e.formikFieldProps,l=e.className,r=e.value,d=e.onChange,u=e.autoFocus,m=e.onBlur,g=e.onKeyUp;return Object(c.jsx)("input",Object(t.a)({id:a,className:"login"===l?o.a.loginInput:o.a.formInput&&"status"===l?o.a.statusInput:o.a.formInput,type:s,placeholder:n,required:!0,autoFocus:u,onChange:d,onBlur:m,onKeyUp:g,value:r},i))}},110:function(e,a,s){e.exports={formInput:"UniversalInput_formInput__3Hjo-",loginInput:"UniversalInput_loginInput__3G6O5",statusInput:"UniversalInput_statusInput__1B1FK"}},112:function(e,a,s){"use strict";s.d(a,"a",(function(){return i}));var t=s(113),n=s.n(t),o=s(98),c=(s(1),s(2)),i=function(e){var a=e.onDeleteHandler,s=e.disabled;return Object(c.jsx)("div",{className:n.a.deleteBlock,children:Object(c.jsx)("div",{className:n.a.deleteButton,children:Object(c.jsx)("button",{disabled:s,onClick:a,children:Object(c.jsx)(o.a,{className:n.a.icon})})})})}},113:function(e,a,s){e.exports={deleteBlock:"DeleteButton_deleteBlock__jY_3E",deleteButton:"DeleteButton_deleteButton__3GOrh",icon:"DeleteButton_icon__1Oe5w"}},114:function(e,a,s){"use strict";s.d(a,"a",(function(){return i}));s(1);var t=s(115),n=s.n(t),o=s(19),c=s(2),i=function(e){var a=e.confirm,s=e.title,t=e.confirmCallback,i=e.cancelCallback;return Object(c.jsxs)("div",{className:a?n.a.modalContainer:n.a.noModal,children:[Object(c.jsx)("div",{className:n.a.text,children:s}),Object(c.jsxs)("div",{className:n.a.confirmBlock,children:[Object(c.jsx)(o.a,{callback:t,title:"Ok"}),Object(c.jsx)(o.a,{callback:i,title:"Cancel",className:!0})]})]})}},115:function(e,a,s){e.exports={modalContainer:"ConfirmModal_modalContainer__3sxOp",text:"ConfirmModal_text__j5Yf6",confirmBlock:"ConfirmModal_confirmBlock__2aHcg",noModal:"ConfirmModal_noModal__2C5TK"}},118:function(e,a,s){"use strict";s.d(a,"a",(function(){return l}));var t=s(3),n=(s(1),s(6)),o=s(9),c=s(2),i=function(e){return{isAuth:e.auth.isAuth}},l=function(e){return Object(o.b)(i)((function(a){return a.isAuth?Object(c.jsx)(e,Object(t.a)({},a)):Object(c.jsx)(n.a,{to:"/login"})}))}},142:function(e,a,s){e.exports={dialogsContainer:"Dialogs_dialogsContainer__2ddol",dialogs:"Dialogs_dialogs__IQAbO",messages:"Dialogs_messages__19JET"}},143:function(e,a,s){e.exports={dialogItemContainer:"Dialog_dialogItemContainer__3O1Vo",avatarBlock:"Dialog_avatarBlock__26loA",userNameBlock:"Dialog_userNameBlock__36tRM",active:"Dialog_active__3MTZy"}},144:function(e,a,s){e.exports={messageContainer:"Message_messageContainer__3RvXg",avatar:"Message_avatar__1lzDb",messageItem:"Message_messageItem__IMVlC"}},145:function(e,a,s){e.exports={formBlock:"DialogsMessageForm_formBlock__2tus_",formContainer:"DialogsMessageForm_formContainer__3S_gh",inputBlock:"DialogsMessageForm_inputBlock__3YRZX",error:"DialogsMessageForm_error__3WV57",buttonBlock:"DialogsMessageForm_buttonBlock__16i_i"}},169:function(e,a,s){"use strict";s.r(a);var t=s(59),n=s(1),o=s.n(n),c=s(142),i=s.n(c),l=s(143),r=s.n(l),d=s(17),u=s(46),m=s(2);function g(e){return Object(m.jsxs)("div",{className:r.a.dialogItemContainer,children:[Object(m.jsx)("div",{className:r.a.avatarBlock,children:Object(m.jsx)("img",{src:u.a,alt:"user-avatar"})}),Object(m.jsx)("div",{className:r.a.userNameBlock,children:Object(m.jsx)(d.c,{to:"/dialogs/".concat(e.id),activeClassName:r.a.active,className:r.a.dialogUserName,children:e.name})})]})}var j=s(24),_=s(144),b=s.n(_),f=s(112),v=s(114),O=function(e){var a=e.message,s=e.messageId,t=e.deleteMessage,o=Object(n.useState)(!1),c=Object(j.a)(o,2),i=c[0],l=c[1];return Object(m.jsxs)("div",{className:b.a.messageContainer,children:[Object(m.jsx)("div",{className:b.a.avatar,children:Object(m.jsx)("img",{src:u.a,alt:"userAvatar"})}),Object(m.jsxs)("div",{className:b.a.messageItem,children:[Object(m.jsx)("div",{children:a}),Object(m.jsx)(f.a,{onDeleteHandler:function(){l(!0)}})]}),Object(m.jsx)(v.a,{confirm:i,title:"Delete ?",confirmCallback:function(){t(s)},cancelCallback:function(){l(!1)}})]})},x=s(119),p=s(145),h=s.n(p),M=s(109),k=s(19),N=o.a.memo((function(e){var a=e.addNewMessage,s=Object(x.a)({initialValues:{newMessage:""},validate:function(e){var a={};return e.newMessage.length>100&&(a.newMessage="Max length is 100 symbols"),a},onSubmit:function(e){a(e.newMessage),s.resetForm({values:{newMessage:""}})}});return Object(m.jsx)("form",{onSubmit:s.handleSubmit,className:h.a.formBlock,children:Object(m.jsxs)("div",{className:h.a.formContainer,children:[Object(m.jsxs)("div",{className:h.a.inputBlock,children:[Object(m.jsx)(M.a,{type:"text",placeholder:"New message",formikFieldProps:s.getFieldProps("newMessage")}),s.touched.newMessage&&s.errors.newMessage?Object(m.jsx)("div",{className:h.a.error,children:s.errors.newMessage}):null]}),Object(m.jsx)("div",{className:h.a.buttonBlock,children:Object(m.jsx)(k.a,{title:"send",type:"submit",children:"Send message"})})]})})})),B=o.a.memo((function(e){var a=e.dialogs,s=e.messages,t=e.deleteMessage,n=e.addNewMessage,o=a.map((function(e){return Object(m.jsx)(g,{id:e.id,name:e.name},e.id)})),c=s.map((function(e){return Object(m.jsx)(O,{deleteMessage:t,message:e.message,messageId:e.id},e.id)}));return Object(m.jsxs)("div",{className:i.a.dialogsContainer,children:[Object(m.jsx)("div",{className:i.a.dialogs,children:o}),Object(m.jsxs)("div",{className:i.a.messages,children:[c,Object(m.jsx)(N,{addNewMessage:n})]})]})})),C=s(9),I=s(118),w=s(28);a.default=Object(w.c)(Object(C.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),{addNewMessage:t.a,deleteMessage:t.b}),I.a)(B)}}]);
//# sourceMappingURL=5.218cee8f.chunk.js.map