"use strict";(self.webpackChunkwebflow_dev_template=self.webpackChunkwebflow_dev_template||[]).push([[832],{832:(e,t,n)=>{n.r(t),n.d(t,{render:()=>o});var r=n(413);function o(){(0,r.kP)("wf-form-Generate-Product-Form",s,a,c),document.getElementById("product_shape").value="",document.getElementById("product_sole").value="",document.getElementById("product_material").value="",document.getElementById("product_pattern").value="",document.getElementById("product_laces").value="",document.getElementById("product_gender").value=""}function s(e){return{form:e.get("product_shape"),sole:e.get("product_sole"),bodyMaterial:e.get("product_material"),bodyPattern:e.get("product_pattern"),laces:e.get("product_laces"),generalstyle:e.get("product_gender")}}async function a(e){const t=document.querySelector(".starter-description"),n=document.querySelector(".results_components");(0,r.t8)();const o=(0,r.qr)();if(!(o>0))return{success:!1,data:"no remaining calls"};{n.classList.contains("hide")&&(t.classList.add("hide"),n.classList.remove("hide"));const e=[],s=document.querySelectorAll(".result-item"),a=document.querySelector(".results_generated-image-wrapper");s.forEach((t=>{e.push(t)})),a&&e.push(a),e.forEach((e=>{e.insertAdjacentHTML("beforeend",'<div class="skeleton-loader"></div>')})),(0,r.qN)(".success-message",`Please wait around 60 seconds for your sneaker image matches to be generated. You have ${o} generation attempt(s) left.`)}const s=await fetch("https://us-central1-quiet-amp-415709.cloudfunctions.net/genai_for_product_design_1",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),a=await s.json();return s.ok?{success:!0,data:a}:{success:!1,data:null}}function c(e){if(e.success){const t=e.data;t.similar_images.forEach(((e,t)=>{const n=document.getElementById(`result-image-${t+1}`);n&&(n.src=e.image_name,n.srcset=e.image_name)}));const n=document.getElementById("result-image-genai");n&&(n.src=t.dalle_image_url,n.srcset=t.dalle_image_url);const r=["result-image-genai","result-image-1","result-image-2","result-image-3"];let o=[];o=r.map((e=>{const t=document.getElementById(e);if(t)return t.src}));const s=document.querySelector(".lightbox_modal"),a=()=>{s.style.display="flex"},c=document.querySelector(".swiper-wrapper");for(;c.firstChild;)c.removeChild(c.firstChild);o.forEach((e=>{const t=document.createElement("div");t.classList.add("swiper-slide");const n=document.createElement("img");n.setAttribute("src",e),n.setAttribute("width","auto"),n.setAttribute("height","auto"),t.classList.add("thumbnail-small"),t.appendChild(n),c.appendChild(t)}));const l=new Swiper('[lightbox="swiper"]',{slidesPerView:1,spaceBetween:30,centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0,renderBullet:function(e,t){return`<span class="${t}" style="background-image: url('${o[e]}'); background-size: cover; background-position: center; width: 3rem; height: 3rem;"></span>`}}});document.addEventListener("keydown",(e=>{"ArrowLeft"===e.key?l.slidePrev():"ArrowRight"===e.key&&l.slideNext()})),r.map((e=>{const t=document.getElementById(e);if(t)return t})).forEach(((e,t)=>{e&&e.addEventListener("click",(()=>{a()}))}));const i=[],u=document.querySelectorAll(".result-item"),d=document.querySelector(".results_generated-image-wrapper");u.forEach((e=>{i.push(e)})),d&&i.push(d),i.forEach((e=>{e.querySelectorAll(".skeleton-loader").forEach((function(e){e.parentNode.removeChild(e)}))}))}else e.success||"no remaining calls"!==e.data?(0,r.PB)(".error-message","Something went wrong."):(0,r.PB)(".error-message","You have reached the maximum number of sneaker image generations allowed (3). Please try again in 12h.")}},413:(e,t,n)=>{function r(e,t,n,r=null,s=!0){const a=document.getElementById(e);a.parentElement.classList.remove("w-form"),a.onsubmit=async e=>{e.preventDefault();const s=a.querySelector('[w-el="SubmitButton"]');o(s,!0);try{const o=t(new FormData(a),e),s=await n(o);r(s)}catch(e){console.error(e)}finally{o(s,!1)}}}function o(e,t){e.value=t?e.getAttribute("data-wait"):e.getAttribute("data-initial-state")}function s(e){const t=e+"=",n=decodeURIComponent(document.cookie).split(";");for(let e=0;e<n.length;e++){let r=n[e];for(;" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}function a(){let e=parseInt(s("generateSneaker"),10);return isNaN(e)?3:e<3?3-e:0}function c(){const e="generateSneaker";let t=parseInt(s(e),10);if(!isNaN(t)&&t<3)t++;else{if(!isNaN(t))return;t=1}!function(e,t){const n=encodeURIComponent(t),r=new Date;r.setTime(r.getTime()+864e5);const o="expires="+r.toUTCString();document.cookie=e+"="+n+";"+o+";path=/;"}(e,String(t))}function l(e,t){const n=document.querySelector(e);n?(Array.from(n.children).forEach((e=>{e.textContent=t})),n.style.display="flex",setTimeout((function(){n.style.display="none"}),45e3)):console.error("Element not found with the given query selector.")}function i(e,t){const n=document.querySelector(e);n?(Array.from(n.children).forEach((e=>{e.textContent=t})),n.style.display="flex",n.style.display="flex",setTimeout((function(){n.style.display="none"}),45e3)):console.error("Element not found with the given query selector.")}n.d(t,{PB:()=>i,kP:()=>r,qN:()=>l,qr:()=>a,t8:()=>c})}}]);
//# sourceMappingURL=832.bundle.1.0.9.js.map