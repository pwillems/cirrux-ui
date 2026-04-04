import{j as e}from"./index-CQ8HD40T.js";const n={primary:"bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700",secondary:"bg-surface text-gray-700 border border-gray-200 hover:bg-gray-50 active:bg-gray-100",ghost:"bg-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-100 active:bg-gray-200",danger:"bg-surface text-error border border-gray-200 hover:bg-error-light active:bg-red-100"},i={sm:"h-7 px-2.5 text-sm gap-1.5 rounded-sm",md:"h-8 px-3 text-base gap-2 rounded-md",lg:"h-9 px-4 text-md gap-2 rounded-md"};function b({variant:a="secondary",size:t="md",icon:r,children:s,className:o="",disabled:g,...d}){return e.jsxs("button",{className:`
        inline-flex items-center justify-center font-medium
        transition-all duration-150 cursor-pointer
        active:scale-[0.97]
        disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
        ${n[a]}
        ${i[t]}
        ${o}
      `,disabled:g,...d,children:[r&&e.jsx("span",{className:"shrink-0",children:r}),s]})}export{b as B};
