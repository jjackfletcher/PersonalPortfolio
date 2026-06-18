function closeMenu() {
  const menu = document.getElementById("nav-menu");
  const button = document.getElementById("mobile-button");

  if (menu && button) {
    menu.classList.remove("show_menu");
    button.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }
}

function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  const button = document.getElementById("mobile-button");

  if (menu && button) {
    const isOpen = menu.classList.toggle("show_menu");
    button.setAttribute("aria-expanded", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
  }
}

function changeTheme() {
  const button = document.getElementById("theme-button");
  const lightMode = document.body.classList.toggle("light-mode");

  if (button) {
    button.textContent = lightMode ? "Dark mode" : "Light mode";
    button.setAttribute("aria-label", lightMode ? "Switch to dark mode" : "Switch to light mode");
  }
}

function setActiveLink() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".site-nav a");
  let activeSection = "home";

  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 150) {
      activeSection = section.id;
    }
  });

  links.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + activeSection);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("mobile-button");
  const themeButton = document.getElementById("theme-button");
  const yearText = document.getElementById("current-year");

  if (yearText) {
    yearText.textContent = new Date().getFullYear();
  }

  if (menuButton) {
    menuButton.addEventListener("click", toggleMenu);
  }

  if (themeButton) {
    themeButton.addEventListener("click", changeTheme);
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  setActiveLink();
});

window.addEventListener("scroll", setActiveLink);

window.addEventListener("resize", function () {
  if (window.innerWidth > 1120) {
    closeMenu();
  }
});
