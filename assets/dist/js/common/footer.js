function DropdownGroup(e,t){const s=document.getElementsByClassName(t),l=document.getElementsByClassName(e);console.log(s),console.log(l);let o=[];function n(){for(let e=0;e<s.length;e++)l[e].classList.remove("active"),s[e].style.height=o[e]-o[e]+"px"}for(let e=0;e<s.length;e++){o[e]=0;for(let t=0;t<s[e].children.length;t++)o[e]=s[e].children[t].clientHeight+o[e];s[e].style.height=o[e]-o[e]+"px",l[e].addEventListener("click",(()=>{l[e].classList.contains("active")?(l[e].classList.remove("active"),s[e].style.height=o[e]-o[e]+"px"):(n(),l[e].classList.add("active"),s[e].style.height=`${o[e]}px`)}))}}DropdownGroup("footer-faq-change","footer-faq-items");