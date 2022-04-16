const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
    createNofitication();
});

function createNofitication() {
    console.log("Clicked");
    const notif = document.createElement("div");
    notif.classList.add("toast")

    notif.innerText = "This Challenge Is Crazy!";
    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);

}