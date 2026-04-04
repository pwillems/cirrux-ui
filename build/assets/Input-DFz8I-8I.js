import{j as e}from"./index-CQ8HD40T.js";function d({label:r,hint:s,error:t,className:a="",id:x,...c}){const o=x||(r==null?void 0:r.toLowerCase().replace(/\s+/g,"-"));return e.jsxs("div",{className:"flex flex-col gap-1.5",children:[r&&e.jsx("label",{htmlFor:o,className:"text-sm font-medium text-gray-700",children:r}),e.jsx("input",{id:o,className:`
          h-9 w-full rounded-md border px-3
          text-base text-gray-900
          placeholder:text-gray-400
          transition-colors duration-150
          ${t?"border-error bg-error-light focus:border-error":"border-gray-200 bg-gray-50 focus:border-gray-400 focus:bg-surface"}
          focus:outline-none
          ${a}
        `,...c}),s&&!t&&e.jsx("p",{className:"text-xs text-gray-400",children:s}),t&&e.jsx("p",{className:"text-xs text-error",children:t})]})}export{d as I};
