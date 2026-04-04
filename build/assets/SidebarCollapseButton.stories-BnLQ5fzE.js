import{j as e,r as i}from"./index-CQ8HD40T.js";import{u as l,S as d}from"./SidebarLayoutContext-BmVLrE6o.js";import{c as s}from"./createLucideIcon-CyW1AjLN.js";/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]],p=s("panel-left-close",c);/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]],u=s("panel-left-open",x);function m({collapsed:t}){const{toggleCollapsed:a}=l();return e.jsx("button",{type:"button",onClick:a,"aria-label":t?"Expand sidebar":"Collapse sidebar",title:t?"Expand sidebar":"Collapse sidebar",className:`
        mt-auto inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-400 transition-colors
        hover:bg-gray-100 hover:text-gray-700
        ${t?"self-center":"self-start"}
      `,children:t?e.jsx(u,{size:15}):e.jsx(p,{size:15})})}function o({initialCollapsed:t=!1}){const[a,n]=i.useState(t);return e.jsx(d.Provider,{value:{collapsed:a,toggleCollapsed:()=>n(r=>!r),mobileOpen:!1,setMobileOpen:()=>{}},children:e.jsxs("div",{className:"flex items-center gap-4 p-4",children:[e.jsx(m,{collapsed:a}),e.jsxs("span",{className:"text-sm text-gray-400",children:["Sidebar is ",a?"collapsed":"expanded"]})]})})}const b=()=>e.jsx(o,{}),g=()=>e.jsx(o,{initialCollapsed:!0});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Collapsed,b as Expanded};
