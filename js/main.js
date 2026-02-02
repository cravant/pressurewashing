/* ==========================================
   ELITE PRESSURE WASHING - JAVASCRIPT
   ========================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // MOBILE NAVIGATION TOGGLE
    // ==========================================
    
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = mobileToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
    
    
    // ==========================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ==========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default if it's not just "#"
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    
    // ==========================================
    // SCROLL ANIMATIONS - FADE IN ON SCROLL
    // ==========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
    
    
    // ==========================================
    // NAVBAR SCROLL EFFECT
    // ==========================================
    
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add shadow when scrolled
        if (currentScroll > 10) {
            navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        }
        
        lastScroll = currentScroll;
    });
    
    
    // ==========================================
    // CONTACT FORM HANDLING
    // ==========================================
    
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Let Formspree handle the actual submission
            // We'll just show a success message after submission
            
            // Get the form button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Change button text to show it's submitting
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // After form is submitted (Formspree will redirect or show their message)
            // This is just for enhanced UX before Formspree takes over
            setTimeout(function() {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }
    
    
    // ==========================================
    // FORM INPUT VALIDATION & STYLING
    // ==========================================
    
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
    
    formInputs.forEach(input => {
        // Add focus styling
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
            
            // Validate on blur
            if (this.hasAttribute('required') && !this.value) {
                this.style.borderColor = '#dc3545';
            } else {
                this.style.borderColor = '#e9ecef';
            }
        });
        
        // Real-time validation
        input.addEventListener('input', function() {
            if (this.hasAttribute('required') && this.value) {
                this.style.borderColor = '#28a745';
            }
        });
    });
    
    
    // ==========================================
    // PHONE NUMBER FORMATTING (OPTIONAL)
    // ==========================================
    
    const phoneInput = document.getElementById('phone');
    
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            if (value.length > 0) {
                if (value.length <= 3) {
                    value = `(${value}`;
                } else if (value.length <= 6) {
                    value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
                } else {
                    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
                }
            }
            
            e.target.value = value;
        });
    }
    
    
    // ==========================================
    // SERVICE CARD HOVER EFFECTS (ENHANCED)
    // ==========================================
    
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    
    // ==========================================
    // TESTIMONIAL CARD ANIMATION
    // ==========================================
    
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.15}s`;
    });
    
    
    // ==========================================
    // CLICK-TO-CALL TRACKING (OPTIONAL)
    // ==========================================
    
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Phone call initiated:', this.getAttribute('href'));
            // Here you could add analytics tracking
            // Example: gtag('event', 'phone_call', { phone_number: this.getAttribute('href') });
        });
    });
    
    
    // ==========================================
    // BACK TO TOP BUTTON (OPTIONAL ENHANCEMENT)
    // ==========================================
    
    // Create back to top button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);
    
    // Style the button
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #00a8e8, #00c9ff);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 16px rgba(0, 168, 232, 0.3);
        z-index: 999;
    `;
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effect
    backToTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 24px rgba(0, 168, 232, 0.4)';
    });
    
    backToTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 16px rgba(0, 168, 232, 0.3)';
    });
    
    
    // ==========================================
    // PAGE LOAD ANIMATION
    // ==========================================
    
    // Trigger animations after page loads
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(function() {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
    
    
    // ==========================================
    // CONSOLE MESSAGE (OPTIONAL - FOR DEVELOPERS)
    // ==========================================
    
    console.log('%c🚀 Elite Pressure Washing Website', 'color: #00a8e8; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #6c757d; font-size: 14px;');
    console.log('%cReady to transform properties!', 'color: #28a745; font-size: 14px;');
    
});


// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
