"use strict";(self.webpackChunkwebflow_dev_template=self.webpackChunkwebflow_dev_template||[]).push([[223],{223:(e,t,n)=>{function r(e,t){e.value=t?e.getAttribute("data-wait"):e.getAttribute("data-initial-state")}function o(e){const t=e+"=",n=decodeURIComponent(document.cookie).split(";");for(let e=0;e<n.length;e++){let r=n[e];for(;" "===r.charAt(0);)r=r.substring(1);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return""}function s(e,t){const n=document.querySelector(e);n?(Array.from(n.children).forEach((e=>{e.textContent=t})),n.style.display="flex",n.style.display="flex",setTimeout((function(){n.style.display="none"}),45e3)):console.error("Element not found with the given query selector.")}function a(){!function(e,t,n,o=null,s=!0){const a=document.getElementById(e);a.parentElement.classList.remove("w-form"),a.onsubmit=async e=>{e.preventDefault();const s=a.querySelector('[w-el="SubmitButton"]');r(s,!0);try{const r=t(new FormData(a),e),s=await n(r);o(s)}catch(e){console.error(e)}finally{r(s,!1)}}}("wf-form-Generate-Product-Form",c,l,i),document.getElementById("product_shape").value="",document.getElementById("product_sole").value="",document.getElementById("product_material").value="",document.getElementById("product_pattern").value="",document.getElementById("product_laces").value="",document.getElementById("product_gender").value=""}function c(e){return{form:e.get("product_shape"),sole:e.get("product_sole"),bodyMaterial:e.get("product_material"),bodyPattern:e.get("product_pattern"),laces:e.get("product_laces"),generalstyle:e.get("product_gender")}}async function l(e){const t=document.querySelector(".starter-description"),n=document.querySelector(".results_components");!function(){const e="generateSneaker";let t=parseInt(o(e),10);if(!isNaN(t)&&t<3)t++;else{if(!isNaN(t))return;t=1}!function(e,t){const n=encodeURIComponent(t),r=new Date;r.setTime(r.getTime()+864e5);const o="expires="+r.toUTCString();document.cookie=e+"="+n+";"+o+";path=/;"}(e,String(t))}();const r=function(){let e=parseInt(o("generateSneaker"),10);return isNaN(e)?3:e<3?3-e:0}();if(!(r>0))return{success:!1,data:"no remaining calls"};{n.classList.contains("hide")&&(t.classList.add("hide"),n.classList.remove("hide"));const e=[],o=document.querySelectorAll(".result-item"),s=document.querySelector(".results_generated-image-wrapper");o.forEach((t=>{e.push(t)})),s&&e.push(s),e.forEach((e=>{e.insertAdjacentHTML("beforeend",'<div class="skeleton-loader"></div>')})),function(e,t){const n=document.querySelector(".success-message");n?(Array.from(n.children).forEach((e=>{e.textContent=t})),n.style.display="flex",setTimeout((function(){n.style.display="none"}),45e3)):console.error("Element not found with the given query selector.")}(0,`Please wait around 60 seconds for your sneaker image matches to be generated. You have ${r} generation attempt(s) left.`)}const s=await fetch("https://us-central1-quiet-amp-415709.cloudfunctions.net/genai_for_product_design_1",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}),a=await s.json();return s.ok?{success:!0,data:a}:{success:!1,data:null}}function i(e){if(e.success){const t=e.data;t.similar_images.forEach(((e,t)=>{const n=document.getElementById(`result-image-${t+1}`);n&&(n.src=e.image_name,n.srcset=e.image_name)}));const n=document.getElementById("result-image-genai");n&&(n.src=t.dalle_image_url,n.srcset=t.dalle_image_url);const r=["result-image-genai","result-image-1","result-image-2","result-image-3"];let o=[];o=r.map((e=>{const t=document.getElementById(e);if(t)return t.src}));const s=document.querySelector(".lightbox_modal"),a=()=>{s.style.display="flex"},c=document.querySelector(".swiper-wrapper");for(;c.firstChild;)c.removeChild(c.firstChild);o.forEach((e=>{const t=document.createElement("div");t.classList.add("swiper-slide");const n=document.createElement("img");n.setAttribute("src",e),n.setAttribute("width","auto"),n.setAttribute("height","auto"),t.classList.add("thumbnail-small"),t.appendChild(n),c.appendChild(t)}));const l=new Swiper('[lightbox="swiper"]',{slidesPerView:1,spaceBetween:30,centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0,renderBullet:function(e,t){return`<span class="${t}" style="background-image: url('${o[e]}'); background-size: cover; background-position: center; width: 3rem; height: 3rem;"></span>`}}});document.addEventListener("keydown",(e=>{"ArrowLeft"===e.key?l.slidePrev():"ArrowRight"===e.key&&l.slideNext()})),r.map((e=>{const t=document.getElementById(e);if(t)return t})).forEach(((e,t)=>{e&&e.addEventListener("click",(()=>{a()}))}));const i=[],u=document.querySelectorAll(".result-item"),d=document.querySelector(".results_generated-image-wrapper");u.forEach((e=>{i.push(e)})),d&&i.push(d),i.forEach((e=>{e.querySelectorAll(".skeleton-loader").forEach((function(e){e.parentNode.removeChild(e)}))}))}else e.success||"no remaining calls"!==e.data?s(".error-message","Something went wrong."):s(".error-message","You have reached the maximum number of sneaker image generations allowed (3). Please try again in 12h.")}n.r(t),n.d(t,{render:()=>a})}}]);
//# sourceMappingURL=223.bundle.1.0.6.js.map