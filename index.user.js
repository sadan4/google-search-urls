// ==UserScript==
// @name         google search urls
// @namespace    https://sadan.zip/userscripts
// @version      2025-01-14
// @description  try to take over the world!
// @author       sadan
// @match        *://*.google.com/search*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

// thanks SO https://stackoverflow.com/questions/2794137/sanitizing-user-input-before-adding-it-to-the-dom-in-javascript
function sanitize(string) {
  const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
  };
  const reg = /[&<>"'/]/ig;
  return string.replace(reg, (match)=>(map[match]));
}
function gp(x) {
    return x.parentElement;
}
setTimeout((function() {
    'use strict';
    const links = [...document.querySelectorAll("a[href]:has(cite)")];
    const urls = links.map(x => x?.href).filter(x => !!x).map(x => x.substring(0, 300)).map(sanitize)
    const toSet = links.map(x => x.querySelector("cite")).map((x, i) => {x.innerHTML = urls[i]})
    // remove ugly menu
    const p = links.map(gp).map(gp).map(x => x.querySelector("svg")).map(x => {x.style.display = "none";});
}), 10);
