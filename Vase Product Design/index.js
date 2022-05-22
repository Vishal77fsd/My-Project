let downArrow = document.querySelector("#down-arrow");
let productDetail = document.querySelector(".details");
let upArrow = document.querySelector("#up-arrow");
let left = document.querySelector(".left");

downArrow.addEventListener("click", () => {
    productDetail.style.display = "block";
    downArrow.style.display = "none";
    upArrow.style.display = "block";
});

upArrow.addEventListener("click", () => {
    productDetail.style.display = "none";
    downArrow.style.display = "block";
    upArrow.style.display = "none";
});

let itemContainer = document.querySelector(".items-container::before");

itemContainer.addEventListener("click", () => {
    left.style.display = "none";
});