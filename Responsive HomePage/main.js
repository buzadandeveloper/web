let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 75){
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }
});