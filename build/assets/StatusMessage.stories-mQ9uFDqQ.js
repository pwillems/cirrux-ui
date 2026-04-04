import{j as e}from"./index-CQ8HD40T.js";import{c}from"./createLucideIcon-CyW1AjLN.js";/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],r=c("circle-alert",o);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],d=c("circle-check-big",l);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],m=c("loader-circle",x),u={saving:{icon:e.jsx(m,{size:14,className:"animate-spin"}),className:"text-gray-500"},success:{icon:e.jsx(d,{size:14}),className:"text-success"},error:{icon:e.jsx(r,{size:14}),className:"text-error"}};function s({status:t,children:n}){const{icon:a,className:i}=u[t];return e.jsxs("div",{className:`inline-flex items-center gap-1.5 text-sm ${i}`,children:[a,e.jsx("span",{children:n})]})}const y=()=>e.jsx(s,{status:"saving",children:"Saving changes…"}),p=()=>e.jsx(s,{status:"success",children:"Changes saved"}),j=()=>e.jsx(s,{status:"error",children:"Failed to save"}),v=()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(s,{status:"saving",children:"Saving changes…"}),e.jsx(s,{status:"success",children:"Changes saved"}),e.jsx(s,{status:"error",children:"Failed to save"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{v as AllStates,j as Error,y as Saving,p as Success};
