// Alpine Limousine NYC - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        navMenu.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                first_name: document.getElementById('first_name').value,
                last_name: document.getElementById('last_name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                company: document.getElementById('company').value,
                message: document.getElementById('message').value
            };
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Submit form data
            fetch('/contact-form/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showMessage('Thank you for your message! We will contact you soon.', 'success');
                    contactForm.reset();
                } else {
                    showMessage(data.message || 'An error occurred. Please try again.', 'error');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showMessage('An error occurred. Please try again.', 'error');
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
    
    // Show message function
    function showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message message-${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            z-index: 9999;
            max-width: 300px;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s ease;
        `;
        
        if (type === 'success') {
            messageDiv.style.backgroundColor = '#28a745';
        } else {
            messageDiv.style.backgroundColor = '#dc3545';
        }
        
        document.body.appendChild(messageDiv);
        
        // Animate in
        setTimeout(() => {
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after 5 seconds
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            messageDiv.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(messageDiv);
            }, 300);
        }, 5000);
    }
    
    // Animated counters (if present)
    function animateCounters() {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const increment = target / 200;
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 1);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                
                // Trigger counter animation if element has counter class
                if (entry.target.classList.contains('counter')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .service-card, .vehicle-card, .section-title').forEach(el => {
        observer.observe(el);
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = '#1a1a1a';
            header.style.backdropFilter = 'none';
        }
    });
    
    // Language selector functionality
    const languageFlags = document.querySelectorAll('.language-selector img');
    languageFlags.forEach(flag => {
        flag.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            // Here you would implement language switching logic
            console.log('Language switched to:', lang);
        });
    });
    
    // Fleet vehicle image lazy loading
    const vehicleImages = document.querySelectorAll('.vehicle-card img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    vehicleImages.forEach(img => {
        imageObserver.observe(img);
    });
    
    // Book ride button analytics tracking
    document.querySelectorAll('.btn-primary, .book-ride-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Track button click for analytics
            console.log('Book ride button clicked');
        });
    });
    
});

// Utility functions
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function openExternalBooking() {
    window.open('https://apps.alpinelimousinenyc.com/DefaultV2/Booking', '_blank');
}

function openExternalLogin() {
    window.open('https://apps.alpinelimousinenyc.com/DefaultV2/Account/Login', '_blank');
}
