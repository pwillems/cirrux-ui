import{j as e,r}from"./index-CQ8HD40T.js";function l({checked:t,onChange:n,label:s,description:a,disabled:o=!1}){return e.jsxs("label",{className:`
        inline-flex items-center gap-3 select-none
        ${o?"opacity-50 cursor-not-allowed":"cursor-pointer"}
      `,children:[e.jsx("button",{type:"button",role:"switch","aria-checked":t,disabled:o,onClick:()=>n(!t),className:`
          relative inline-flex h-5 w-9 shrink-0 items-center
          rounded-full transition-colors duration-200
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
          ${t?"bg-accent":"bg-gray-300"}
          ${o?"cursor-not-allowed":"cursor-pointer"}
        `,children:e.jsx("span",{className:`
            inline-block h-3.5 w-3.5 rounded-full bg-white
            shadow-sm transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]
            ${t?"translate-x-[18px]":"translate-x-[3px]"}
          `})}),(s||a)&&e.jsxs("div",{className:"flex flex-col",children:[s&&e.jsx("span",{className:"text-base text-gray-900",children:s}),a&&e.jsx("span",{className:"text-xs text-gray-400",children:a})]})]})}function i(t){const[n,s]=r.useState(!1);return e.jsx(l,{...t,checked:n,onChange:s})}const u=()=>e.jsx(i,{}),d=()=>e.jsx(i,{label:"Email notifications"}),x=()=>e.jsx(i,{label:"Marketing emails",description:"Receive updates about new features and offers."}),f=()=>e.jsx(l,{checked:!1,onChange:()=>{},label:"Disabled toggle",disabled:!0}),b=()=>e.jsx(l,{checked:!0,onChange:()=>{},label:"Disabled checked",disabled:!0});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{u as Default,f as Disabled,b as DisabledChecked,x as WithDescription,d as WithLabel};
