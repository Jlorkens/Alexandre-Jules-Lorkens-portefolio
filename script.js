
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.textContent = '☀️';
} else {
  darkModeToggle.textContent = '🌙';
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.textContent = '☀️';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    darkModeToggle.textContent = '🌙';
  }
});


const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

if (slides.length) {
  prevBtn?.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextBtn?.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 6000);
}


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModalBtn = document.getElementById("closeModal");
  const viewImageButtons = document.querySelectorAll(".view-image-btn");

  viewImageButtons.forEach(button => {
    button.addEventListener("click", () => {
      const imgSrc = button.getAttribute("data-img-src");
      const altText = button.parentElement.querySelector("img").alt || "Image projet";

      modalImage.src = imgSrc;
      modalImage.alt = altText;
      modal.classList.add("active");
      modal.setAttribute("aria-hidden", "false");
      closeModalBtn.focus();
    });
  });

  
  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    modalImage.src = "";
    modalImage.alt = "";
  });

  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      modalImage.src = "";
      modalImage.alt = "";
    }
  });

  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      modalImage.src = "";
      modalImage.alt = "";
    }
  });
});
