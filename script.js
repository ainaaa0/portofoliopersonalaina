// ================================
// MENU MOBILE
// ================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {

        menuBtn.textContent = "✕";

    } else {

        menuBtn.textContent = "☰";

    }

});


// ================================
// TUTUP MENU SETELAH KLIK
// ================================

const navLinks =
    document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// ================================
// ANIMASI SAAT SCROLL
// ================================

const cards =
    document.querySelectorAll(
        ".skill-card, .project-card, .about-container"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


cards.forEach(function (card) {

    observer.observe(card);

});
