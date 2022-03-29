// document.addEventListener("onclick", slide);

let slides = document.getElementById("nav-bar");

function slide() {
  let slide = document.getElementById("link");
  if(slides.style.display === "none")
  {
    slides.style.display = "block";
  }
  else{
    slides.style.display = "none";
  }
}
