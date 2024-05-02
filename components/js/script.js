const header = document.querySelector("header");
const bar = document.querySelector(".openNavBarBtn");
const sideBar = document.querySelector(".navList");
const closeSideBar = document.querySelector(".closeSideBar");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

if(bar){
    bar.addEventListener("click",() => {
        sideBar.classList.add("openNavSideBar");
    })
}

if(closeSideBar){
    closeSideBar.addEventListener("click",() => {
        sideBar.classList.remove("openNavSideBar");
    })
}