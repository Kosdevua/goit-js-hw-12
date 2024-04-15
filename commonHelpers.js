import{S as p,i as h}from"./assets/vendor-8c59ed88.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();function f(r){return r.map(e=>`<li class="gallery-item">
          <a href="${e.largeImageURL}" alt="${e.tags}">
              <img src="${e.webformatURL}" >
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
                          <td>${e.likes}</td>
                          <td>${e.views}</td>
                          <td>${e.comments}</td>
                          <td>${e.downloads}</td>
                      </tr>
                  </tbody>
                  </table>
              </div>
         </li>`).join("")}function m(r,e){const s="https://pixabay.com/api",i="43362047-b69de0f8b7d88fd6ec05c5589",t=new URLSearchParams({key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15});return e++,fetch(`${s}/?${t}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const y=document.querySelector('[name="search"]'),L=document.querySelector("input"),u=document.querySelector(".gallery"),g=document.querySelector(".loader");let d;const l=document.querySelector(".js-button-load");let a=null,n=1;d?d.refresh():d=new p(".gallery a");y.addEventListener("submit",w);l.addEventListener("click",b);function b(){n+=1,m(a,n).then(r=>{u.insertAdjacentHTML("beforeend",f(r.hits));const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),Math.ceil(r.total/15)===n&&(l.classList.add("is-hidden"),alert("that's all!!!"))}).catch(console.log)}function w(r){r.preventDefault(),a=r.currentTarget.elements.search.value.trim(),v(),l.classList.add("is-hidden"),u.innerHTML="",n=1,a&&(m(a,n).then(e=>{if(e.total>0&&h.info({position:"topRight",message:`We found ${e.total} images`,maxWidth:"432"}),e.hits.length===0)return h.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:"432",messageColor:"#fafafb",color:"#ef4040"});u.innerHTML=f(e.hits),e.totalHits>15&&l.classList.remove("is-hidden")}).catch(e=>{console.log(e)}).finally(()=>{S()}),L.value="")}function v(){g.classList.remove("is-hidden")}function S(){g.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
