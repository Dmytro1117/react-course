import{u as o,j as s,l as r}from"./index-59b4180e.js";const i="_form_gu3nn_1",m="_label_gu3nn_9",l={form:i,label:m},c=()=>{const n=o(),t=a=>{a.preventDefault();const e=a.currentTarget;n(r({email:e.elements.email.value,password:e.elements.password.value})),e.reset()};return s.jsxs("form",{className:l.form,onSubmit:t,autoComplete:"off",children:[s.jsxs("label",{className:l.label,children:["Email",s.jsx("input",{type:"email",name:"email"})]}),s.jsxs("label",{className:l.label,children:["Password",s.jsx("input",{type:"password",name:"password"})]}),s.jsx("button",{type:"submit",children:"Log In"})]})};function p(){return s.jsxs("div",{children:[s.jsx("title",{children:"Login"}),s.jsx(c,{})]})}export{p as default};
