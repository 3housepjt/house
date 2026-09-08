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
