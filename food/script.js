// Select elements
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navLinksList = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const cartCount = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

let cartItems = 0;

// Sticky Navbar on Scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('responsive');
});

// Smooth Scrolling
navLinksList.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    navLinks.classList.remove('responsive');
  });
});

// Active Link Highlighting
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinksList.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});
// Add to Cart Functionality
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartItems++;
    cartCount.textContent = cartItems;
  });
});
