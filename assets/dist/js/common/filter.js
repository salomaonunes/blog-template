var filterItems=document.querySelectorAll(".filter__category--item"),categoryId=document.querySelector(".filter").getAttribute("id-category"),title=document.querySelector(".filter__category--title"),filter=document.querySelector(".filter__category"),link=document.querySelector(".hero").getAttribute("url"),archive_btnMore=document.querySelector(".loadMore--btn");function checkCards(){return document.querySelectorAll(".postCards__card").length}filterItems.forEach((function(e){e.addEventListener("click",(function(){var t=e.getAttribute("post-type");filter.setAttribute("type",t);var r=document.querySelector(".filter__category--item.hide");r&&r.classList.remove("hide"),e.classList.add("hide"),filter.removeAttribute("open");var o=t.charAt(0).toUpperCase()+t.slice(1);"post"==t?o="Artigo":"conteudos-especiais"==t&&(o="Conteúdos Especiais"),title.innerHTML=o,loadPosts(categoryId,t,18)}))})),archive_btnMore&&archive_btnMore.addEventListener("click",(()=>{var e=checkCards(),t=filter.getAttribute("type");loadPosts(categoryId,t,e+=6)}));let cardBox2=document.querySelector(".postCards");async function loadPosts(e,t,r){let o={category:e,post_type:t,posts_page:r},c=await fetch(link+"/wp-admin/admin-ajax.php?action=filter",{mode:"no-cors",method:"POST",body:new URLSearchParams(o).toString(),headers:{"Content-type":"application/x-www-form-urlencoded"}}),a=await c.text();cardBox2.innerHTML=a}function btnMore_Ajax(){var e=checkCards(),t=filter.getAttribute("type");loadPosts(categoryId,t,e+=6)}function btnLessAjax(){var e=checkCards();e>18&&(e-=6);var t=filter.getAttribute("type");loadPosts(categoryId,t,e)}