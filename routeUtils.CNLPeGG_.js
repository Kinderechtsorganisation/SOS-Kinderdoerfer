function r(e){const n={x:0,y:0};if(e.hash){const t=document.querySelector(e.hash);t&&(n.y=t.getBoundingClientRect().top+window.pageYOffset)}return n}function o(e){return e.substr(-1)==="/"?e.replace(/\/$/,""):e}export{o as r,r as s};
