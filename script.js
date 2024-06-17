const menuicon = document.querySelector(".menuicon");
const cross= document.querySelector(".close");
const verNav=document.querySelector(".vertical-nav");
const verBar=document.querySelector(".vertical-bar");
menuicon.addEventListener("click",()=>{
    menuicon.classList.add("hide");
    cross.classList.remove("hide");
    verBar.classList.remove("hide");
});
function hideNavbar() {
    menuicon.classList.remove("hide");
    cross.classList.add("hide");
    verBar.classList.add("hide");
}
cross.addEventListener("click",()=>{
    hideNavbar();
});
document.addEventListener('click', function(event) {
    if (!menuicon.contains(event.target) && !verBar.contains(event.target)) {
    hideNavbar();
    }
});