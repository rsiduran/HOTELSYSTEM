let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    currentSlide = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Autoplay
setInterval(nextSlide, 5000); // Change slide every 5 seconds


function showDetails(choice) {
    // Hide all details
    var allDetails = document.querySelectorAll('.rooms-details > div');
    allDetails.forEach(function(detail) {
        detail.style.display = 'none';
    });

    // Show details for the selected choice
    var selectedDetail = document.getElementById('details-' + choice);
    if (selectedDetail) {
        selectedDetail.style.display = 'block';
    }
}

// Get all buttons with class "book-now-button"
var bookNowButtons = document.querySelectorAll(".book-now-button");

// Loop through each button and add a click event listener
bookNowButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    modal.style.display = "block";
  });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var scrollToTopBtn = document.querySelector('.scroll-to-top');

  window.addEventListener('scroll', function() {
      if (window.pageYOffset > 100) {
          scrollToTopBtn.classList.add('show');
      } else {
          scrollToTopBtn.classList.remove('show');
      }
  });

  scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});

const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.parentElement;
    parent.classList.toggle('active');
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const helpItems = document.querySelectorAll(".help-item");
  
  helpItems.forEach(function(item) {
    item.style.opacity = "0";
    item.style.transition = "opacity 1s ease-in";
  });
  
  setTimeout(function() {
    helpItems.forEach(function(item) {
      item.style.opacity = "1";
    });
  }, 500);
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Initialize ScrollReveal and apply animations
ScrollReveal().reveal(".section__subheader", { ...scrollRevealOption });
ScrollReveal().reveal(".book-now-text p", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".book-now-text .btn", { ...scrollRevealOption, delay: 1000 });

ScrollReveal().reveal(".booking-container", { ...scrollRevealOption });
ScrollReveal().reveal(".booking-number, .booking-description, .rooms-number, .rooms-description", { ...scrollRevealOption, delay: 500 });

ScrollReveal().reveal("#image-slider .slider-content > *", { ...scrollRevealOption });
ScrollReveal().reveal("#image-slider .slides > *", { ...scrollRevealOption, interval: 200 });

ScrollReveal().reveal(".rooms-button h3", { ...scrollRevealOption });
ScrollReveal().reveal(".choice-button", { ...scrollRevealOption, interval: 200 });

ScrollReveal().reveal(".testimonial", { ...scrollRevealOption, interval: 200 });

ScrollReveal().reveal(".About .container", { ...scrollRevealOption });

ScrollReveal().reveal(".footer-distributed", { ...scrollRevealOption });

const navbarScrollRevealOption = {
  distance: "30px",
  origin: "top",
  duration: 1000,
  delay: 200,
  easing: "ease"
};

ScrollReveal().reveal(".navbar-brand", { ...navbarScrollRevealOption });
ScrollReveal().reveal(".nav-link", { ...navbarScrollRevealOption, interval: 100 });

// validation for form

document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("booking-form");

  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Pigilan ang default na pag-submit ng form

      // msg sa form
      var confirmation = confirm("Are you sure you want to submit this form?");

      // Kung ang user ay nag-confirm, i-submit ang form
      if (confirmation) {
          this.submit();
      }
  });
});
