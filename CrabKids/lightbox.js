
          // Lightbox functionality
           const galleryItems = Array.from(document.querySelectorAll(".gallery-item img"));
           const lightbox = document.createElement("div");
           lightbox.classList.add("lightbox");
           document.body.appendChild(lightbox);
         
           const lightboxImg = document.createElement("img");
           lightbox.appendChild(lightboxImg);
         
           const closeButton = document.createElement("span");
           closeButton.classList.add("close");
           closeButton.innerHTML = "&times;";
           lightbox.appendChild(closeButton);
         
           const prevButton = document.createElement("span");
           prevButton.classList.add("nav-button", "left");
           prevButton.innerHTML = "&#10094;"; // Left arrow
           lightbox.appendChild(prevButton);
         
           const nextButton = document.createElement("span");
           nextButton.classList.add("nav-button", "right");
           nextButton.innerHTML = "&#10095;"; // Right arrow
           lightbox.appendChild(nextButton);
         
           let currentIndex = 0;
         
           // Open lightbox
           const openLightbox = (index) => {
             currentIndex = index;
             lightboxImg.src = galleryItems[currentIndex].src;
             lightbox.classList.add("active");
           };
         
           // Close lightbox
           const closeLightbox = () => {
             lightbox.classList.remove("active");
           };
         
           // Show previous image
           const showPrevious = () => {
             currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
             lightboxImg.src = galleryItems[currentIndex].src;
           };
         
           // Show next image
           const showNext = () => {
             currentIndex = (currentIndex + 1) % galleryItems.length;
             lightboxImg.src = galleryItems[currentIndex].src;
           };
         
           // Event listeners for gallery items
           galleryItems.forEach((item, index) => {
             item.addEventListener("click", () => openLightbox(index));
           });
         
           // Event listeners for lightbox buttons
           closeButton.addEventListener("click", closeLightbox);
           prevButton.addEventListener("click", showPrevious);
           nextButton.addEventListener("click", showNext);
         
           // Close lightbox when clicking outside the image
           lightbox.addEventListener("click", (e) => {
             if (e.target !== lightboxImg && e.target !== prevButton && e.target !== nextButton) {
               closeLightbox();
             }
           });
         
           // Keyboard navigation
           document.addEventListener("keydown", (e) => {
             if (lightbox.classList.contains("active")) {
               if (e.key === "ArrowLeft") showPrevious();
               if (e.key === "ArrowRight") showNext();
               if (e.key === "Escape") closeLightbox();
             }
           });

             // Close the menu when clicking outside the menu
  document.addEventListener("click", (e) => {
    if (!navbarMenu.contains(e.target) && e.target !== menuToggle) {
      navbarMenu.classList.remove("active");
    }
  });

  // Close the menu when selecting a menu option
  const menuItems = navbarMenu.querySelectorAll("a");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      navbarMenu.classList.remove("active");
    });
  });