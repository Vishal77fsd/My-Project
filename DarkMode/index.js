function myFunction() {
    let element = document.body;
    let img = document.getElementById("myImg").style.filter;
    element.classList.toggle("dark-mode");

    img.classList.toggle("btnWhite");
    // document.getElementById("myImg").style.filter = "invert(1)";
}