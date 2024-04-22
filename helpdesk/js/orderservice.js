   // Get the modal
   var modalorder = document.getElementById("ModalOrder");
    
   // Get the button that opens the modal
   var btnorder = document.getElementById("orderButton");
   
   // Get the <span> element that closes the order modal
   var spanorder = document.getElementsByClassName("close-order")[0];
   
   // When the user clicks the button, open the order modal 
   btnorder.onclick = function() {
     modalorder.style.display = "block";
   }
   
   // When the user clicks on <span> (x), close the order modal
   spanorder.onclick = function() {
     modalorder.style.display = "none";
   }
   
   // Get the modal
   var modalguest = document.getElementById("ModalGuest");
   
   // Get the button that opens the modal
   var btnguest = document.getElementById("guestButton");
   
   // Get the <span> element that closes the guest modal
   var spanguest = document.getElementsByClassName("close-guest")[0];
   
   // When the user clicks the button, open the guest modal 
   btnguest.onclick = function() {
     modalguest.style.display = "block";
   }
   
   // When the user clicks on <span> (x), close the guest modal
   spanguest.onclick = function() {
     modalguest.style.display = "none";
   }
   
   // When the user clicks anywhere outside of the modal, close the modal
   window.onclick = function(event) {
     if (event.target == modalorder) {
       modalorder.style.display = "none";
     }
     if (event.target == modalguest) {
       modalguest.style.display = "none";
     }
   }

   document.addEventListener("DOMContentLoaded", function() {
    const orderButton = document.getElementById("orderButton");
  
    orderButton.addEventListener("click", function() {
      orderButton.classList.add("button-clicked");
      setTimeout(() => {
        orderButton.classList.remove("button-clicked");
      }, 300);
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const orderButton = document.getElementById("addorder");
  
    orderButton.addEventListener("click", function() {
      orderButton.classList.add("button-clicked");
      setTimeout(() => {
        orderButton.classList.remove("button-clicked");
      }, 300);
    });
  });
  
  const quantityInputs = document.querySelectorAll('.quantity-input');
  
  quantityInputs.forEach(input => {
    input.addEventListener('input', function() {
      this.value = this.value.replace(/[^0-9]/g, ''); // I-dispose ang lahat ng mga hindi numerong character
    });
  })
  
  
  // window.addEventListener('scroll', function() {
  //   const header = document.querySelector('header');
  //   if (window.scrollY > 100) {
  //     header.classList.add('sticky');
  //   } else {
  //     header.classList.remove('sticky');
  //   }
  // });
  
  document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-gallery .image');
  
    images.forEach(function(image) {
      image.addEventListener('mouseover', function() {
        image.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
      });
  
      image.addEventListener('mouseout', function() {
        image.style.boxShadow = 'none';
      });
    });
  });
  
      document.addEventListener("DOMContentLoaded", function() {
        const scrollToTopButton = document.getElementById("scrollToTopButton");
  
        scrollToTopButton.addEventListener("click", function() {
          window.scrollTo({
            top: 0,
            behavior: "smooth"
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