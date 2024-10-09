document.addEventListener("DOMContentLoaded", function() {
  let nav = document.querySelector("nav");
  let menuBtn = document.querySelector(".menu-button"); // Make sure this exists
  let IPL = document.querySelector(".IPL");

  // Sticky navigation
  window.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  });

  // Handle nav link clicks
  let navLinks = document.querySelectorAll(".menu li a");
  navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      IPL.classList.remove("active");
      if (menuBtn) { // Check if menuBtn exists
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
      }
    });
  });

  // Hire me function
  function Hire_me() {
    if (confirm("Press OK to move forward")) {
      window.location.href = "mailto:rj0110836@gmail.com";
    } else {
      alert("You canceled it");
    }
  }

  let hireButton = document.getElementById("hireButton");
  if (hireButton) {
      hireButton.addEventListener("click", Hire_me);
  }

  // Download CV function
  function Download_CV() {
    if (confirm("Press OK to download")) {
      try {
        const link = document.createElement("a");
        link.href = 'https://drive.google.com/uc?export=download&id=1e_KRw7z-w9wtCZQCeclS23Eh-Qvb9y6A'; // Replace with actual hosted link
        link.download = ""; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        alert("An error occurred during download.");
      }
    } else {
      alert("You canceled it");
    }
  }

  let downloadButton = document.getElementById("downloadButton");
  if (downloadButton) {
      downloadButton.addEventListener("click", Download_CV);
  }
});
