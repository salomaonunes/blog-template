var triggers=document.querySelectorAll(".video-trigger img");triggers.forEach((e=>{e.addEventListener("click",(()=>{var t=e.getAttribute("data-id"),r=document.querySelector(".video-"+t);if(r){var o=r.querySelector("iframe");r.style.display="flex",o&&set_iframe(o)}}))}));var closeBtn=document.querySelectorAll(".modal__close");for(let e of closeBtn)e.onclick=function(){closeModals()};async function set_iframe(e){e.src=e.getAttribute("data-src"),await new Promise((e=>setTimeout(e,200))),e.src=e.getAttribute("data-src")}var modals=document.querySelectorAll(".modal-overelay");function closeModals(){document.querySelectorAll(".video__modal").forEach((e=>{e.addEventListener("click",(()=>{e.style.display="none"}))}))}modals.forEach((e=>{e.addEventListener("click",closeModals)}));