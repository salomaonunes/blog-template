var tag_btnLess=document.querySelector(".less__tag"),tag_btnMore=document.querySelector(".more__tag");let tagBox=document.querySelector(".tag__cards");var link=document.querySelector(".tag-url").getAttribute("url"),tag_name=document.querySelector(".tag-url").getAttribute("tag");function checkCards(){return document.querySelectorAll(".tag__card").length}async function loadPosts(t,e){let a={posts_page:t,tag_name:e},o=await fetch(link+"/wp-admin/admin-ajax.php?action=loadTags",{mode:"no-cors",method:"POST",body:new URLSearchParams(a).toString(),headers:{"Content-type":"application/x-www-form-urlencoded"}}),n=await o.text();tagBox.innerHTML=n}function loadMoreBtn_tag(){nposts=checkCards(),nposts+=6,loadPosts(nposts,tag_name)}function loadLessBtn_tag(){nposts=checkCards(),nposts<=6?nposts-=3:nposts-=6,loadPosts(nposts,tag_name)}tag_btnMore&&tag_btnMore.addEventListener("click",(()=>{nposts=checkCards(),nposts+=6,loadPosts(nposts,tag_name)}));