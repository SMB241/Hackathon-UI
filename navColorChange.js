window.addEventListener("scroll", function () {
    const navbar = document.querySelector("nav");
    const newsSection = document.querySelector(".news");
    
    if (window.scrollY >= newsSection.offsetTop - navbar.offsetHeight) {
        navbar.style.backgroundColor = "#0D1B2A";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});
