var t=0;function e(e){return"__private_"+t+++"_"+e}function i(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}class n{constructor(t){this.value=t}}var r=/*#__PURE__*/e("list"),s=/*#__PURE__*/e("compare"),h=/*#__PURE__*/e("parent"),o=/*#__PURE__*/e("leftChild"),a=/*#__PURE__*/e("rightChild"),u=/*#__PURE__*/e("heapifyUp"),c=/*#__PURE__*/e("heapifyDown");class f{constructor(t){Object.defineProperty(this,c,{value:b}),Object.defineProperty(this,u,{value:y}),Object.defineProperty(this,a,{value:v}),Object.defineProperty(this,o,{value:p}),Object.defineProperty(this,h,{value:l}),Object.defineProperty(this,r,{writable:!0,value:[]}),Object.defineProperty(this,s,{writable:!0,value:(t,e)=>{if(!t instanceof n||!e instanceof n)throw"Comparison argument must be an instance of HeapNode.";return e.value>t.value}}),t&&"function"==typeof t&&(i(this,s)[s]=t)}peek(){return i(this,r)[r][0].value}pull(){if(0===i(this,r)[r].length)return;const t=i(this,r)[r][0],e=i(this,r)[r].pop();return 0!==i(this,r)[r].length&&(i(this,r)[r][0]=e,i(this,c)[c](0)),t.value}insert(t){const e=i(this,r)[r].push(new n(t));return i(this,u)[u](e-1),t}getList(){return i(this,r)[r]}isEmpty(){return 0===i(this,r)[r].length}}function l(t){return Math.floor(.5*(t-1))}function p(t){const e=2*t+1;return i(this,r)[r][e]&&e}function v(t){const e=2*t+2;return i(this,r)[r][e]&&e}function y(t){if(!(i(this,r)[r].length<2))for(;i(this,h)[h](t)>=0;){const e=i(this,h)[h](t);let n=i(this,r)[r][t],o=i(this,r)[r][e];if(i(this,s)[s](o,n))break;[o,n]=[n,o],i(this,r)[r][e]=o,i(this,r)[r][t]=n,t=e}}function b(t){if(!(i(this,r)[r].length<2))for(;i(this,o)[o](t);){const e=i(this,o)[o](t),n=i(this,a)[a](t);let h=n&&i(this,s)[s](i(this,r)[r][n],i(this,r)[r][e])?n:e,u=i(this,r)[r][t],c=i(this,r)[r][h];if(i(this,s)[s](u,c))break;[u,c]=[c,u],i(this,r)[r][t]=u,i(this,r)[r][h]=c,t=h}}export{f as default};
//# sourceMappingURL=min-heap.js.map
