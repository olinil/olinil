var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
});

var noScroll = document.getElementById("body");
window.addEventListener("load", function(){
    noScroll.style.overflow = "hidden";
});