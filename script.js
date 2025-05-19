// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Typing animation (requires Typed.js to be loaded in HTML)
  if (document.querySelector(".typing")) {
    new Typed(".typing", {
      strings: [
        "Graphic Designer",
        "UX/UI Designer",
        "crazy plant lady",
        "outdoor sport enthusiast"
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

  const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
  navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn()
  })
  function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open")
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.toggle("open");
    }
  }
  // Handle all anchor links with hashes (for portfolio images, etc.)
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection && targetSection.classList.contains('section')) {
        e.preventDefault();
        // Remove active from all sections
        document.querySelectorAll('.section').forEach(function (sec) {
          sec.classList.remove('active');
        });
        // Add active to the target section
        targetSection.classList.add('active');
        // Optionally, update nav active state if needed
      }
    });
  });
});
