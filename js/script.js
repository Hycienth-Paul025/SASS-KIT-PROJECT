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
