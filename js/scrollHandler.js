 var slide0 = document.getElementById("slide0"),
     slide2 = document.getElementById("slide2"),
     slide3 = document.getElementById("slide3"),
     slide4 = document.getElementById("slide4"),
     slide5 = document.getElementById("slide5"),
     intro = document.getElementById("intro"),
     project = document.getElementById("project"),
     menu = document.getElementsByClassName("menu")[0],
     deP = document.getElementsByClassName("deP"),
     aboutMe = document.getElementsByClassName("bgw")[0],
     about = document.getElementById("about"),
     pj = document.getElementById("pj"),
     more = document.getElementById("more"),
     ski = document.getElementById("ski"),
     exhib_cont = document.getElementsByClassName("exhib_cont"),
     logoNav = document.getElementById("logoNav"),
     zoom = document.getElementById("zoom");

 var wsh = window.screen.availHeight,
     wInnerW = window.innerWidth,
     introSH = intro.scrollHeight,
     sl0SH = slide0.scrollHeight,
     sl2SH = slide2.scrollHeight,
     sl3SH = slide3.scrollHeight,
     sl4SH = slide4.scrollHeight,
     sl5SH = slide5.scrollHeight,
     projLen = project.children.length;


 addEvent(window, "scroll", scrollHandler);


 function addEvent(ele, ev, fn) {
     if (document.addEventListener) {
         ele.addEventListener(ev, fn);
     } else if (ev.attachEvent) {
         ele.attachEvent("on" + ev, fn);
     } else {
         ele["on" + ev] = fn;
     }
 }

 function getStyle(obj, attri) {
     return obj.currentStyle ? obj.currentStyle[attri] : window.getComputedStyle(obj, null)[attri];
 }

 function scrollHandler(e) {
     /*     var event = e || window.event,
         target = event.target || event.srcElement;*/
     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
         active = document.getElementsByClassName("active")[0];
     var Y = -(scrollTop / 5); //背景向上移动的距离为正常的1/5

     slide0.style.backgroundPosition = "50% " + (wsh - 231 + 2 * Y) + 'px'; //背景的基点是bottom center，因此得用屏幕高度

     var wInnerW2 = window.innerWidth;
     if (wInnerW2 != wInnerW) {
         introSH = intro.scrollHeight,
         sl0SH = slide0.scrollHeight,
         sl2SH = slide2.scrollHeight,
         sl3SH = slide3.scrollHeight,
         sl4SH = slide4.scrollHeight,
         sl5SH = slide5.scrollHeight;
     }

     /*navbar */
     if (scrollTop > 10) {
         deP[0].classList.add("scrollDePadding");
         deP[1].classList.add("scrollDePadding");
         menu.classList.add("scrollAddBBott");
         logoNav.classList.add("scrollAddBBott");

     } else {
         deP[0].classList.remove("scrollDePadding");
         deP[1].classList.remove("scrollDePadding");
         menu.classList.remove("scrollAddBBott");
         logoNav.classList.remove("scrollAddBBott");

     }
     if (scrollTop > 50) {
         zoom.classList.add("scrollZoom");
     } else {
         zoom.classList.remove("scrollZoom");
     }

     /*slide0 scroll to center*/
     if (scrollTop > introSH - 10 && scrollTop < 200 + sl0SH + introSH) {
         aboutMe.classList.add("scrollOpacity");
         aboutMe.classList.add("scrollToCenter")
     } else {
         aboutMe.classList.remove("scrollOpacity");
         aboutMe.classList.remove("scrollToCenter")
     }

     /*navigation active*/
     if (scrollTop < 90 + introSH + sl0SH) {
         active.classList.remove("active");
         about.classList.add("active");
     } else if (scrollTop >= 90 + introSH + sl0SH && scrollTop < 90 + introSH + sl0SH + sl3SH) {
         active.classList.remove("active");
         pj.classList.add("active");

     } else if (scrollTop >= 90 + introSH + sl0SH + sl3SH && scrollTop < 90 + introSH + sl0SH + sl2SH + sl3SH) {
         active.classList.remove("active");
         ski.classList.add("active");
     } else {
         active.classList.remove("active");
         more.classList.add("active");
     }

     if (scrollTop >= 90 + introSH + sl0SH && scrollTop < 290 + introSH + sl0SH + sl3SH) {
         for (var i = 0, eLen = exhib_cont.length; i < eLen; i++) {
             exhib_cont[i].classList.add("scrollOpacity");
             exhib_cont[i].classList.add("scrollToCenter");
         }
     } else {
         for (var i = 0, eLen = exhib_cont.length; i < eLen; i++) {
             exhib_cont[i].classList.remove("scrollOpacity");
             exhib_cont[i].classList.remove("scrollToCenter");
         }
     }
     /*slide4's li scroll to center*/
     if (scrollTop > 90 + introSH + sl0SH + sl2SH + sl3SH) {
         for (var i = 0; i < projLen; i++) {
             project.children[i].classList.add("scrollOpacity");
             project.children[i].classList.add("scrollToCenter");
         }
     } else {
         for (var i = 0; i < projLen; i++) {
             project.children[i].classList.remove("scrollOpacity");
             project.children[i].classList.remove("scrollToCenter");
         }
     }

 }