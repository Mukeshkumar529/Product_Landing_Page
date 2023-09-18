src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"


window.addEventListener('scroll', ()=>{
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


const menu = document.querySelector(".nav_items");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})




const closeNav = () =>{
    menu.style.display = "none";
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)