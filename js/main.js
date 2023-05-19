let icon = document.getElementsByClassName("links");
let nav = document.querySelector(".nav ul");

console.log(nav)

icon[0].onclick = function () {
    nav.classList.toggle("show")
}