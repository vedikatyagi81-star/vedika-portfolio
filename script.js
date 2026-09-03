/* =====================================
   WEBSITE LOADING ANIMATION
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.8s ease";

    setTimeout(function () {
        document.body.style.opacity = "1";
    }, 100);

});


/* =====================================
   PROJECT BUTTONS
===================================== */

const projectButtons = document.querySelectorAll(".project button");

projectButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const projectName =
            this.parentElement.querySelector("h3").innerText;

        alert(
            "You clicked on " +
            projectName +
            "! Project link will be added soon."
        );

    });

});


/* =====================================
   NAVBAR SCROLL EFFECT
===================================== */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.padding = "12px 8%";
        navbar.style.boxShadow =
            "0 5px 25px rgba(0,0,0,0.12)";

    } else {

        navbar.style.padding = "18px 8%";
        navbar.style.boxShadow =
            "0 3px 20px rgba(0,0,0,0.08)";

    }

});


/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */

const revealElements = document.querySelectorAll(
    ".skill-card, .project, .info-card"
);


function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

}


/* Initial styles for animation */

revealElements.forEach(function (element) {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition =
        "all 0.7s ease";

});


window.addEventListener(
    "scroll",
    revealOnScroll
);


/* Run animation on page load */

revealOnScroll();


/* =====================================
   ACTIVE NAVIGATION LINK
===================================== */

const sections = document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav ul a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.style.color = "#6366f1";

        }

    });

});


/* =====================================
   CONTACT BUTTON MESSAGE
===================================== */

const contactButton =
    document.querySelector(".contact .btn");


if (contactButton) {

    contactButton.addEventListener(
        "click",
        function () {

            console.log(
                "Contact button clicked!"
            );

        }
    );

}


/* =====================================
   CONSOLE MESSAGE
===================================== */

console.log(
    "%cWelcome to Vedika's Portfolio Website! 🚀",
    "color: #6366f1; font-size: 18px; font-weight: bold;"
);
