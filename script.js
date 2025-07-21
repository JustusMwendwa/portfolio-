// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('show');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
        navUl.classList.remove('show'); // Close mobile menu after click
    });
});

// Slideshow functionality
        let slideIndex = 1;
        showSlides(slideIndex);
        
        function moveSlide(n) {
            showSlides(slideIndex += n);
        }
        
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }
        
        function showSlides(n) {
            let slides = document.getElementsByClassName("slide");
            let dots = document.getElementsByClassName("dot");
            
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            
            // Hide all slides
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove("active", "prev");
                slides[i].style.opacity = "0";
            }
            
            // Mark previous slide
            let prevIndex = slideIndex - 2;
            if (prevIndex < 0) prevIndex = slides.length - 1;
            slides[prevIndex].classList.add("prev");
            
            // Show current slide
            slides[slideIndex-1].classList.add("active");
            slides[slideIndex-1].style.opacity = "1";
            
            // Update dots
            for (let i = 0; i < dots.length; i++) {
                dots[i].classList.remove("active");
            }
            dots[slideIndex-1].classList.add("active");
        }
        
        // Auto-advance slides every 5 seconds
        setInterval(() => moveSlide(1), 5000);