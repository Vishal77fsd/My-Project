const close = document.getElementById("close");
const open = document.getElementById("open");
const container = document.getElementById("container");

open.addEventListener("click", () => {
    // container.style.display = "flex"
    container.classList.add("active");
});


close.addEventListener("click", () => {
    // container.style.display = "none"
    container.classList.remove("active");
});