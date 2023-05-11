const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransition() {
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", () => {
      document.querySelector(".active-btn").classList.remove("active-btn");
      sectBtn[i].classList.add("active-btn");
    });
  }

  allSections.addEventListener("click", (e) => {
    id = e.target.dataset.id;
    if (id) {
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      document.getElementById(id).classList.add("active");
    }
  });

  //toggle theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

PageTransition();
