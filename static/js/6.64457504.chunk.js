(this.webpackJsonpsocial_network_typescript=this.webpackJsonpsocial_network_typescript||[]).push([[6],{128:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var s=t(1),n=t.n(s),r=t(129),o=t.n(r),l=function(e){var a=e.id,t=e.type,s=e.placeholder,r=e.formikFieldProps,l=e.className;return n.a.createElement("input",Object.assign({id:a,className:"login"===l?o.a.loginInput:o.a.formInput,type:t,placeholder:s,required:!0},r))}},129:function(e,a,t){e.exports={formInput:"UniversalInput_formInput__E3x54",loginInput:"UniversalInput_loginInput__2pjhI"}},131:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var s=t(132),n=t.n(s),r=t(116),o=t(1),l=t.n(o),i=function(e){var a=e.onDeleteHandler;return l.a.createElement("div",{className:n.a.deleteBlock,onClick:a},l.a.createElement("div",{className:n.a.deleteButton},l.a.createElement(r.a,null)))}},132:function(e,a,t){e.exports={deleteBlock:"DeleteButton_deleteBlock__1DwRq",deleteButton:"DeleteButton_deleteButton__2-oVS"}},135:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var s=t(1),n=t.n(s),r=t(4),o=t(14),l=function(e){return{isAuth:e.auth.isAuth}},i=function(e){return Object(o.b)(l)((function(a){return a.isAuth?n.a.createElement(e,a):n.a.createElement(r.a,{to:"/login"})}))}},145:function(e,a,t){e.exports=t.p+"static/media/userAvatar.707da3eb.png"},160:function(e,a,t){e.exports={dialogsContainer:"Dialogs_dialogsContainer__2ScwE",dialogs:"Dialogs_dialogs__1jA_L",messages:"Dialogs_messages__30CF3"}},161:function(e,a,t){e.exports={dialogItemContainer:"Dialog_dialogItemContainer__2O2Oc",avatarBlock:"Dialog_avatarBlock__3DYGb",userNameBlock:"Dialog_userNameBlock__21A0J",active:"Dialog_active__1bc4r"}},162:function(e,a,t){e.exports={messageContainer:"Message_messageContainer___x9uY",avatar:"Message_avatar__13I4C",messageItem:"Message_messageItem__2HFyK"}},163:function(e,a,t){e.exports={formBlock:"DialogsMessageForm_formBlock__4ssQx",formContainer:"DialogsMessageForm_formContainer__oi5jg",inputBlock:"DialogsMessageForm_inputBlock__1TyCm",buttonBlock:"DialogsMessageForm_buttonBlock__Dy0IW"}},185:function(e,a,t){"use strict";t.r(a);var s=t(59),n=t(1),r=t.n(n),o=t(160),l=t.n(o),i=t(161),c=t.n(i),m=t(13),u=t(145),g=t.n(u);function d(e){return r.a.createElement("div",{className:c.a.dialogItemContainer},r.a.createElement("div",{className:c.a.avatarBlock},r.a.createElement("img",{src:g.a,alt:"user-avatar"})),r.a.createElement("div",{className:c.a.userNameBlock},r.a.createElement(m.c,{to:"/dialogs/".concat(e.id),activeClassName:c.a.active,className:c.a.dialogUserName},e.name)))}var _=t(162),v=t.n(_),p=t(131),f=function(e){var a=e.message,t=e.messageId,s=e.deleteMessage;return r.a.createElement("div",{className:v.a.messageContainer},r.a.createElement("div",{className:v.a.avatar},r.a.createElement("img",{src:g.a,alt:"userAvatar"})),r.a.createElement("div",{className:v.a.messageItem},r.a.createElement("div",null,a),r.a.createElement(p.a,{onDeleteHandler:function(){s(t)}})))},E=t(136),N=t(42),k=t.n(N),M=t(163),B=t.n(M),b=t(128),w=t(19),I=r.a.memo((function(e){var a=e.addNewMessage,t=Object(E.a)({initialValues:{newMessage:""},validate:function(e){var a={};return e.newMessage.length>100&&(a.newMessage="Max length is 100 symbols"),a},onSubmit:function(e){a(e.newMessage),t.resetForm({values:{newMessage:""}})}});return r.a.createElement("form",{onSubmit:t.handleSubmit,className:B.a.formBlock},r.a.createElement("div",{className:B.a.formContainer},r.a.createElement("div",{className:B.a.inputBlock},r.a.createElement(b.a,{type:"text",placeholder:"New message",formikFieldProps:t.getFieldProps("newMessage")}),t.touched.newMessage&&t.errors.newMessage?r.a.createElement("div",{className:k.a.registrationError},t.errors.newMessage):null),r.a.createElement("div",{className:B.a.buttonBlock},r.a.createElement(w.a,{title:"send",type:"submit"},"Send message"))))})),D=r.a.memo((function(e){var a=e.dialogs,t=e.messages,s=e.deleteMessage,n=e.addNewMessage,o=a.map((function(e){return r.a.createElement(d,{key:e.id,id:e.id,name:e.name})})),i=t.map((function(e){return r.a.createElement(f,{key:e.id,deleteMessage:s,message:e.message,messageId:e.id})}));return r.a.createElement("div",{className:l.a.dialogsContainer},r.a.createElement("div",{className:l.a.dialogs},o),r.a.createElement("div",{className:l.a.messages},i,r.a.createElement(I,{addNewMessage:n})))})),C=t(14),h=t(135),x=t(20);a.default=Object(x.d)(Object(C.b)((function(e){return{dialogs:e.dialogsPage.dialogs,messages:e.dialogsPage.messages}}),{addNewMessage:s.a,deleteMessage:s.b}),h.a)(D)}}]);
//# sourceMappingURL=6.64457504.chunk.js.map