// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Typing animation (requires Typed.js to be loaded in HTML)
  if (document.querySelector(".typing")) {
    new Typed(".typing", {
      strings: [
        "Graphic Designer",
        "UX/UI Designer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
      // Formspree form submission without redirect
  const form = document.querySelector("form[action^='https://formspree.io']");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const data = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: {
            'Accept': 'application/json'
          }
        });
        if (response.ok) {
          alert("Message sent successfully!");
          form.reset();
        } else {
          const errorData = await response.json();
          alert(errorData.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("There was a problem submitting the form.");
        console.error(error);
      }
    });
  }

  }
  if (document.querySelector(".typing-project1")) {
  new Typed(".typing-project1", {
    strings: ["T Y P O G R A P H Y"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
  });
}

 if (document.querySelector(".typing-project2")) {
  new Typed(".typing-project2", {
    strings: ["T Y P O G R A P H Y"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
  });
}
if (document.querySelector(".typing-project3")) {
  new Typed(".typing-project3", {
    strings: ["T Y P O G R A P H Y"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
  });
}
 if (document.querySelector(".typing-project4")) {
  new Typed(".typing-project4", {
    strings: ["T Y P O G R A P H Y"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
  });
}
 if (document.querySelector(".typing-project5")) {
  new Typed(".typing-project5", {
    strings: ["T Y P O G R A P H Y"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
  });
}
 if (document.querySelector(".typing-project6")) {
  new Typed(".typing-project6", {
    strings: ["T Y P O G R A P H Y"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
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
          window.location.hash = targetId;
      }
    });
  });
});
document.querySelectorAll('.nav li a').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav li a').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

//(Place at end of body or in your main JS file)//

  document.querySelectorAll('.comparison-slider').forEach((container) => {
    const afterImg = container.querySelector('.img-after');
    const handle = container.querySelector('.slider-handle');

    const updateSlider = (x) => {
      const rect = container.getBoundingClientRect();
      let relativeX = x - rect.left;
      if (relativeX < 0) relativeX = 0;
      if (relativeX > rect.width) relativeX = rect.width;

      const percent = (relativeX / rect.width) * 100;
      afterImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
      handle.style.left = `${percent}%`;
    };

    container.addEventListener('mousemove', (e) => {
      updateSlider(e.clientX);
    });

    container.addEventListener('touchmove', (e) => {
      updateSlider(e.touches[0].clientX);
    }, { passive: true });
  });
