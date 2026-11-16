// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. Scroll Reveal Animation (Fade & Slide up)
    // ==========================================
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // Triggers when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal-visible");
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    // Select elements to animate (Updated to include Package Cards and new Contact Cards)
    const elementsToAnimate = document.querySelectorAll(
        '.hero-text, .hero-image, .stat-item, .service-card, .package-card, .review-card, .contact-item'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add("reveal-hidden"); // Add initial hidden class
        observer.observe(el); // Start observing
    });


    // ==========================================
    // 2. Active Navbar Link Highlighting
    // ==========================================
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // If we have scrolled past the top of the section
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });

});