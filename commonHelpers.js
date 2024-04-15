import{i as d,S as u}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function f(n){return n.map(t=>`<li class="gallery-item">
          <a href="${t.largeImageURL}" alt="${t.tags}">
              <img src="${t.webformatURL}" >
          </a>
              <div>
              <table>
                  <thead>
                      <tr>
                          <th>Likes</th>
                          <th>Views</th>
                          <th>Comments</th>
                          <th>Downloads</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>${t.likes}</td>
                          <td>${t.views}</td>
                          <td>${t.comments}</td>
                          <td>${t.downloads}</td>
                      </tr>
                  </tbody>
                  </table>
              </div>
         </li>`).join("")}function h(n){const t="https://pixabay.com/api",o="43362047-b69de0f8b7d88fd6ec05c5589",s=new URLSearchParams({key:o,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${t}/?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const m=document.querySelector('[name="search"]'),y=document.querySelector("input"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");let a;m.addEventListener("submit",p);function p(n){n.preventDefault();const t=n.currentTarget.elements.search.value.trim();c.innerHTML="",t&&(g(),h(t).then(o=>{if(o.hits.length===0)return d.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:"432",messageColor:"#fafafb",color:"#ef4040"});c.innerHTML=f(o.hits),a?a.refresh():a=new u(".gallery a")}).catch(o=>{console.log(o)}).finally(()=>{b()}),y.value="")}function g(){l.classList.remove("is-hidden")}function b(){l.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
