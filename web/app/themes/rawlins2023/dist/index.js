(()=>{function e(e,o,t){return{mount:function(){$(e.root).attr("data-slide-count",e.length),e.Components.Slides.forEach((function(e){var o=e.slideIndex+1;$(e.slide).attr("data-slide-num",o)})),window.innerWidth>=980&&(e.root.addEventListener("mouseenter",(function(){o.AutoScroll.play()})),e.root.addEventListener("mouseleave",(function(){o.AutoScroll.pause()})))}}}const{AutoScroll:o}=window.splide.Extensions;function t(){document.body.classList.remove("flyout-active"),document.querySelectorAll(".work__flyout").forEach((function(e,o){e.classList.remove("work__flyout--active")}))}$(window).on("load",(function(){$("body").removeClass("loading"),document.querySelectorAll(".work__item__video video").forEach((function(e){let o=e.videoWidth,t=e.videoHeight;e.parentElement.style.aspectRatio=o+"/"+t}));for(var a=document.getElementsByClassName("splide"),i=0;i<a.length;i++){const d=new Splide(a[i],{type:"loop",drag:"free",snap:!0,perPage:6,autoWidth:!0,height:"387px",waitForTransition:!0,pagination:!1,cloneStatus:!1,slideFocus:!1,pauseOnHover:!1,omitEnd:!0,live:!1,updateOnMove:!1,focus:!1,pauseOnFocus:!1,lazyLoad:!0,autoScroll:{speed:.5,pauseOnHover:!1,autoStart:!1},breakpoints:{980:{height:"243px",perPage:4},768:{perPage:1}}});function n(t){window.innerWidth>=980?t.mount({AutoScroll:o,HoverSlider:e}):t.mount({HoverSlider:e})}n(d),d.on("drag",(function(){$(".work__item__images").addClass("dragging"),$(".work__item__image").removeClass("hover")})),d.on("dragged",(function(){$(".work__item__images").removeClass("dragging")})),$(window).on("resize",(function(){d.destroy(),n(d)})),document.querySelectorAll(".work__item__image").forEach((function(e,o){e.addEventListener("mouseenter",(function(){this.classList.add("hover")})),e.addEventListener("mouseleave",(function(){this.classList.remove("hover")}))}))}$(document).on("click",".work__item__video__volume-up",(function(){const e=$(this).prev("video");$(this).removeClass("active"),e[0].muted=!e[0].muted,$(this).next().addClass("active")})),$(document).on("click",".work__item__video__volume-down",(function(){const e=$(this).prev().prev("video");console.log(e),$(this).removeClass("active"),e[0].muted=!e[0].muted,$(this).prev().addClass("active")})),document.querySelectorAll(".work__item__link--more-info a").forEach((function(e,o){e.addEventListener("click",(function(e){const o=this.hash;e.preventDefault(),t(),document.body.classList.add("flyout-active"),document.querySelector(o).classList.add("work__flyout--active")}))})),document.querySelectorAll(".work__flyout__close").forEach((function(e,o){e.addEventListener("click",t)}))})),$((function(){$(document).on("click tap",".splide__slide",(function(){!function(e){e.find("img").attr("data-src");var o=$(e).attr("id").slice(-2),t=Math.round(100*o)/100;$(".site-container").attr("data-scroll-pos",$(document).scrollTop()),$(".site-container").addClass("modal-active"),e.closest(".splide__list").children().clone().appendTo(".modal__images"),$(".modal__images > *").removeAttr("class"),$(".modal__images > *").attr("class","modal__image"),$(".modal__images"),$(".splide__slide").removeClass("work__item__image--in-view"),$(".modal__image").eq(t-1).addClass("modal__image--active"),e.addClass("work__item__image--in-view"),$(".modal").addClass("modal--active"),$(".modal .modal__image--active video")[0].muted=!$(".modal .modal__image--active video")[0].muted}($(this))})),$(".modal__close").on("click",(function(){a()})),$(document).keyup((function(e){"Escape"===e.key?a():"39"==e.keyCode?o():"37"==e.keyCode&&t()}));var e=new Hammer(document.getElementById("modal"));function o(){var e=$(".modal__image--active");i(),$(".modal__image").removeClass("modal__image--active"),$(e).is(":last-child")?$(".modal__image").first().addClass("modal__image--active"):$(e).next().addClass("modal__image--active"),$(".modal .modal__image--active video")[0].muted=!$(".modal .modal__image--active video")[0].muted}function t(){var e=$(".modal__image--active");i(),$(".modal__image").removeClass("modal__image--active"),$(e).is(":first-child")?$(".modal__image").last().addClass("modal__image--active"):$(e).prev().addClass("modal__image--active"),$(".modal .modal__image--active video")[0].muted=!$(".modal .modal__image--active video")[0].muted}function a(){var e=$(".site-container").attr("data-scroll-pos");i(),$(".site-container").removeClass("modal-active"),$(document).scrollTop(e),$(".modal").removeClass("modal--active"),$(".modal__images").html("")}function i(){const e=document.querySelectorAll("video"),o=document.querySelectorAll(".work__item__video__volume-up"),t=document.querySelectorAll(".work__item__video__volume-down");e.forEach((e=>{e.muted=!0})),t.forEach((e=>{e.classList.remove("active")})),o.forEach((e=>{e.classList.add("active")}))}e.on("swipeleft",(function(){o()})),e.on("swiperight",(function(){t()})),$(".modal__nav__item--next").on("click",(function(){o()})),$(".modal__nav__item--prev").on("click",(function(){t()})),$(document).on("swiperight",$(".modal--active"),(function(){o()})),$(".modal--active").not(".modal__nav, .modal__image").click((function(){a()}))})),$((function(){$(".pw-protection__row .c-button").on("click",(function(e){e.preventDefault(),$(".pw-protection__row form").submit()}))}))})();
//# sourceMappingURL=index.js.map
