document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".global-nav");

    if (!hamburger || !nav) return;

    hamburger.addEventListener("click", function () {
        const isOpen = nav.classList.toggle("is-open");
        hamburger.classList.toggle("is-open", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
        hamburger.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
    });

    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("is-open");
            hamburger.classList.remove("is-open");
            hamburger.setAttribute("aria-expanded", "false");
            hamburger.setAttribute("aria-label", "メニューを開く");
        });
    });
});

/* =========================
   PROBLEM 写真切り替え
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".problem-story");

    if (!section) return;

    const images = section.querySelectorAll(".problem-image");
    const steps = section.querySelectorAll(".problem-step");
    const current = document.getElementById("problem-current");

    function activateStep(index) {

        images.forEach((image, i) => {
            image.classList.toggle("active", i === index);
        });

        steps.forEach((step, i) => {
            step.classList.toggle("is-active", i === index);
        });

        if (current) {
            current.textContent =
                String(index + 1).padStart(2, "0");
        }
    }

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const index = Number(entry.target.dataset.index);

                activateStep(index);

            }

        });

    }, {
        threshold: 0.5
    });

    steps.forEach(step => observer.observe(step));

    activateStep(0);

});