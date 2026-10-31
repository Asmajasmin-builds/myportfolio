// =========================================
// PAGE LOADED
// =========================================

console.log("ASMA JASMIN Portfolio Loaded");


// =========================================
// SCROLL REVEAL ANIMATION
// =========================================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


// =========================================
// SCROLL TO TOP BUTTON
// =========================================

const scrollTopBtn = document.getElementById("scrollTopBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});


// =========================================
// SCROLL TO TOP
// =========================================

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});