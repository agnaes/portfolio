// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Typing animation (requires Typed.js to be loaded in HTML)
  if (document.querySelector(".typing")) {
    new Typed(".typing", {
      strings: [
        "Graphic Designer",
        "UX/UI Designer",
        "Crazy plant lady",
        "Gourmet chef",
        "Retoucher",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
  }

  // Navigation and Sections
  const nav = document.querySelector(".nav");
  const navList = nav?.querySelectorAll("li") || [];
  const totalNavList = navList.length;
  const allSection = document.querySelectorAll(".section");
  const totalSection = allSection.length;

  function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }
  }

  function addBackSection(num) {
    if (allSection[num]) {
      allSection[num].classList.add("back-section");
    }
  }

  function showSection(element) {
    const target = element.getAttribute("href")?.split("#")[1];
    if (!target) return;

    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("active");
    }

    const targetSection = document.querySelector("#" + target);
    if (targetSection) {
      targetSection.classList.add("active");
    }
  }

  function updateNav(element) {
    const target = element.getAttribute("href")?.split("#")[1];
    if (!target) return;

    for (let i = 0; i < totalNavList; i++) {
      const navLink = navList[i].querySelector("a");
      navLink.classList.remove("active");

      const hrefTarget = navLink.getAttribute("href")?.split("#")[1];
      if (target === hrefTarget) {
        navLink.classList.add("active");
      }
    }
  }

  // Attach nav link click listeners
  for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a?.addEventListener("click", function () {
      removeBackSection();
      for (let j = 0; j < totalNavList; j++) {
        if (navList[j].querySelector("a")?.classList.contains("active")) {
          addBackSection(j);
        }
        navList[j].querySelector("a")?.classList.remove("active");
      }
      this.classList.add("active");
      showSection(this);
      if (window.innerWidth < 1200) {
        asideSectionTogglerBtn();
      }
    });
  }

  // Hire Me and About Me button listeners
  document.querySelectorAll(".hire-me, .about-me").forEach(button => {
    button.addEventListener("click", function () {
      const sectionIndex = parseInt(this.getAttribute("data-section-index"), 10);
      showSection(this);
      updateNav(this);
      removeBackSection();
      if (!isNaN(sectionIndex)) {
        addBackSection(sectionIndex);
      }
    });
  });

  // Toggler button and aside logic
  const navTogglerBtn = document.querySelector(".nav-toggler");
  const aside = document.querySelector(".aside");

  function asideSectionTogglerBtn() {
    aside?.classList.toggle("open");
    navTogglerBtn?.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.toggle("open");
    }
  }

  navTogglerBtn?.addEventListener("click", () => {
    asideSectionTogglerBtn();
  });
});
