import{a as h,S as L,i}from"./assets/vendor-6e0bf343.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();function f(r){return r.map(e=>`<li class="gallery-item">
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
         </li>`).join("")}const b="43362047-b69de0f8b7d88fd6ec05c5589";h.defaults.baseURL="https://pixabay.com/";async function m(r,e){try{const o={params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}},{data:a}=await h.get("api/",o);return a}catch(o){console.log(o)}}const v=document.querySelector('[name="search"]'),w=document.querySelector("input"),u=document.querySelector(".gallery"),p=document.querySelector(".loader");let g=new L(".gallery a");const l=document.querySelector(".js-button-load");let c=null,n=1;v.addEventListener("submit",S);l.addEventListener("click",P);async function S(r){if(r.preventDefault(),c=r.currentTarget.elements.search.value.trim(),R(),l.classList.add("is-hidden"),u.innerHTML="",n=1,!!c)try{const{hits:e,totalHits:o}=await m(c,n);if(o>0&&i.info({position:"topRight",message:`We found ${o} images`,maxWidth:"432"}),e.length===0)return i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",maxWidth:"432",messageColor:"#fafafb",color:"#ef4040"});u.innerHTML=f(e),g.refresh(),o>15&&l.classList.remove("is-hidden"),w.value=""}catch(e){console.log(e),e.response===401&&i.error({position:"topRight",message:"You not authorization"}),e.response.status===404&&i.error({position:"topRight",message:"Bad request, please try again "}),e.response.status===500&&i.error({position:"topRight",message:"Server error"})}finally{y()}}async function P(){n+=1;try{const{hits:r,totalHits:e}=await m(c,n);u.insertAdjacentHTML("beforeend",f(r)),g.refresh();const{height:o}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"}),Math.ceil(e/15)===n&&(l.classList.add("is-hidden"),i.info({position:"topRight",message:"We're sorry, but you've reached the end of search results",maxWidth:"432"}))}catch(r){console.log(r.response.status)}finally{y()}}function R(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
