//// NAVBAR SHADOW

const Navbar = document.querySelector(".navbar");

window.addEventListener("scroll", ()=>{

  window.scrollY >= 64  
  ? Navbar.classList.add("sticky") 
 :Navbar.classList.remove("sticky");



  console.log("scrolled")
})


//// NAVIGATION (NAV-BAR) FUNCTIONS
const navCont = document.querySelector(".navbar-container");
const navOverlay = document.querySelector(".navbar-overlay");
const navToggle = document.querySelector(".open");
const navClose = document.querySelector(".close");

navToggle.addEventListener("click", () => {
  navCont.classList.add("slide-in");
  navOverlay.classList.add("visible");
});

navClose.addEventListener("click", () => {
  navCont.classList.remove("slide-in");
  navOverlay.classList.remove("visible");
});

//// NAV LINKS FUNCTIION

const navLinks = document.querySelectorAll(".navbar-link");

navLinks.forEach((link) =>
  link.addEventListener("click", () => {

    //remove class from the current link
navLinks.forEach(btn => btn.classList.remove("active-btn"))
// add class to the clicked link
    link.classList.add("active-btn");

    /// remove both navbar-container and blurry background
     navCont.classList.remove("slide-in");
  navOverlay.classList.remove("visible");

  })
);


//// OVERLAY FUNCTION

navOverlay.addEventListener("click", ()=>{

     navCont.classList.remove("slide-in");
       navOverlay.classList.remove("visible");

})





//// ACCORDION

const accordionToggle = document.querySelectorAll(".faq-accordion-content");

function accordionEffect() {
  const expand = this.getAttribute("aria-expanded") == "true";

  accordionToggle.forEach((tog) => tog.setAttribute("aria-expanded", "false"));

  if (!expand) {
    this.setAttribute("aria-expanded", "true");
  }
}

accordionToggle.forEach((item) => {
  item.addEventListener("click", accordionEffect);
});


////// HOW TO CREATE CAROOUSEL FUNCTION WITH JS WITHOUT DUPLICATION OR REPEATITION OF INVESTOR IMAGE


/// Note that you must have your css styling already when doing this 
/// you can as well do the duplication in the html for testing purpose to be sure of what ypure styling  


const duplicate = document.querySelector(".investor-images").cloneNode(true);
// this means duplicate or repeat this class eLement

// make sure the cloneNode() value is set to true for proper cloning, repetition or duplication 


parent= document.querySelector(".investor-content").appendChild(duplicate);
// this means show the duplicated class element




