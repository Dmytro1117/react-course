import{u as r,j as t,d as u,a as i,b as p,c as d,f as m}from"./index-59b4180e.js";const x="_wrapper_g32v1_1",_="_text_g32v1_19",b="_button_g32v1_29",a={wrapper:x,text:_,button:b},h=({id:s,text:e})=>{const n=r(),c=()=>n(u(s));return t.jsxs("div",{className:a.wrapper,children:[t.jsx("p",{className:a.text,children:e}),t.jsx("button",{type:"button",className:a.button,onClick:c,children:"Delete"})]})},f=s=>s.tasks.loading,j=s=>s.tasks.items,k="_list_bwf0t_1",T={list:k},g=()=>{const s=i(j);return t.jsx("ul",{className:T.list,children:s.map(({id:e,text:n})=>t.jsx("li",{children:t.jsx(h,{id:e,text:n})},e))})},v="_form_1ltcp_1",N="_input_1ltcp_15",w="_button_1ltcp_37",o={form:v,input:N,button:w},E=()=>{const s=r(),e=n=>{n.preventDefault();const c=n.currentTarget,l=c.elements.text.value;if(l!==""){s(p(l)),c.reset();return}alert("Task cannot be empty. Enter some text!")};return t.jsxs("form",{className:o.form,onSubmit:e,children:[t.jsx("input",{name:"text",className:o.input}),t.jsx("button",{type:"submit",className:o.button,children:"Add task"})]})};function y(){const s=r(),e=i(f);return d.useEffect(()=>{s(m())},[s]),t.jsxs(t.Fragment,{children:[t.jsx("title",{children:"Your tasks"}),t.jsx(E,{}),t.jsx("div",{children:e&&"Request in progress..."}),t.jsx(g,{})]})}export{y as default};
