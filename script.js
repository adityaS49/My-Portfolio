// toggle style switcher 
// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener("click",()=>{
//     document.querySelector(".style-switcher").classList.toggle("open");
// })
// window.addEventListener("scroll",()=>{
//     if(document.querySelector(".style-switcher").classList.contains("open")){
//         document.querySelector(".style-switcher").classList.remove("open") 
//     }
// })

                // color-themes
const alternateStyles = document.querySelectorAll(".alternate-style");
    function setActiveStyle(color){
        alternateStyles.forEach((style)=>{
            if(color === style.getAttribute("title")){
                style.removeAttribute("disabled");
            }
            else{
                style.setAttribute("disabled","true")
            }
        })
    } 

// const dayNight = document.querySelector(".day-night");
// dayNight.addEventListener("click",()=>{
//     dayNight.querySelector("i").classList.toggle("fa-sun");
//     dayNight.querySelector("i").classList.toggle("fa-moon");
//     document.body.classList.toggle("dark");
// })
//  window.addEventListener("load",()=>{
//     if(document.body.classList.contains("dark"))
//     {
//        dayNight.querySelector("i").classList.add("fa-sun");
//     }
//     else{
//         dayNight.querySelector('i').classList.add("fa-moon");
//     }
//  })

 const sections = document.querySelectorAll("section");
 const navbarLinks = document.querySelectorAll(".nav a");
 
 function handleScroll() {
   let currentSection = null;
 
   sections.forEach(section => {
     if (window.scrollY >= section.offsetTop - 50 && window.scrollY < section.offsetTop + section.offsetHeight) {
       currentSection = section;
     }
   });
 
   navbarLinks.forEach(link => {
     link.classList.remove("active");
     if (currentSection && link.hash === `#${currentSection.id}`) {
       link.classList.add("active");
     }
   });
 }
 
 window.addEventListener("scroll", handleScroll);


const toggle = document.getElementById("toggler");
const close = document.getElementById("close-menu");
const aside = document.querySelector(".aside");

toggle.addEventListener("click",()=>{
  if(aside.style.left="-270px"){
    aside.style.left = "0";
  }
    
    toggler.style.display = "none"
    close.style.display = "block"

})


close.addEventListener("click",()=>{
  
  if(aside.style.left="0"){
    aside.style.left = "-270px";
  }
  toggler.style.display = "block"
  close.style.display = "none"
})