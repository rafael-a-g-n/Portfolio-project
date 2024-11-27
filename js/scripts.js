const themeIcon = document.getElementById("theme-toggle");
const themeIconMenu = document.getElementById("theme-toggle_menu");
const menuBars = document.getElementById("menu-bars");
const menuBtn = document.getElementById("myNavMenu");
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
/* ----- THEME TOGGLE ----- */

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeIcon.classList.remove("uil-moon");
    themeIconMenu.classList.remove("uil-moon");
    themeIcon.classList.add("uil-sun");
    themeIconMenu.classList.add("uil-sun");
  } else {
    themeIcon.classList.remove("uil-sun");
    themeIconMenu.classList.remove("uil-sun");
    themeIcon.classList.add("uil-moon");
    themeIconMenu.classList.add("uil-moon");
  }
}

themeIcon.onclick = toggleTheme;
themeIconMenu.onclick = toggleTheme;

/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  if (menuBtn.className === "nav__menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav__menu";
  }
}

menuBars.onclick = myMenuFunction;

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["a Web Developer.", "a Tech Enthusiast.", "a Creative Thinker"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-box__text-card", {});
sr.reveal(".featured-box__name", { delay: 100 });
sr.reveal(".featured-box__text-info", { delay: 200 });
sr.reveal(".featured-box__text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-box__image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".form-control", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".contact-info", { delay: 100 });

/* ----- ## -- FORM VALIDATION -- ## ----- */

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  // Validation logic
  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Message is required";
    isValid = false;
  }

  // If the form is valid, you can submit it
  if (isValid) {
    // Handle form submission, e.g., send data to server
    console.log("Form data:", {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    });
    // form.submit();
  }
});

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("nav__link--active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("nav__link--active");
    }
  });
}

window.addEventListener("scroll", scrollActive);
