let hover1=document.getElementById("hover1"),hover2=document.getElementById("hover2"),hover3=document.getElementById("hover3"),banner1=document.getElementById("banner1"),banner2=document.getElementById("banner2"),banner3=document.getElementById("banner3");hover1.addEventListener("mouseover",(function(e){hover1.style.color="#1C1C1C",hover2.style.color="#68686866",hover3.style.color="#68686866",banner1.style.display="block",banner2.style.display="none",banner3.style.display="none"}),!1),hover2.addEventListener("mouseover",(function(e){hover1.style.color="#68686866",hover2.style.color="#1C1C1C",hover3.style.color="#68686866",banner1.style.display="none",banner2.style.display="block",banner3.style.display="none"}),!1),hover3.addEventListener("mouseover",(function(e){hover1.style.color="#68686866",hover2.style.color="#68686866",hover3.style.color="#1C1C1C",banner1.style.display="none",banner2.style.display="none",banner3.style.display="block"}),!1);let slider=tns({container:".home-slider",slideBy:"page",controls:!1,autoplayButtonOutput:!1,autoplayButton:!1,autoplay:!0,controlsPosition:"bottom",navPosition:"bottom",mouseDrag:!0,playButton:!1,navAsThumbnails:!0,gutter:50});