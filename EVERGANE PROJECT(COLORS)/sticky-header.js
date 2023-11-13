window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.pageYOffset > 100) {
    header.classList.add("sticky");
    } else {
    header.classList.remove("sticky");
    }
    });