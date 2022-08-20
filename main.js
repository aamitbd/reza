let mobileMenu= document.querySelector("#mobile-menu");
let navMenu= document.querySelector("#nav-menu");

mobileMenu.addEventListener("click", ()=> {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "block";
    }
})