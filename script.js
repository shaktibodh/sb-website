// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a nav link
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Testimonial Slider
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

// Function to show a specific slide
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show the current slide and activate the corresponding dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    // Update current slide index
    currentSlide = index;
}

// Event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Event listener for previous button
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);
    });
}

// Event listener for next button
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        showSlide(currentSlide);
    });
}

// Auto slide change
let slideInterval = setInterval(() => {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}, 5000);

// Pause auto slide on hover
const testimonialSlider = document.querySelector('.testimonial-slider');
if (testimonialSlider) {
    testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = 0;
            }
            showSlide(currentSlide);
        }, 5000);
    });
}

// Form Submission
const counselingForm = document.getElementById('counselingForm');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');

// Function to handle form submission
function handleFormSubmit(event, formName) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const formObject = {};
    
    formData.forEach((value, key) => {
        formObject[key] = value;
    });
    
    // In a real application, you would send this data to a server
    console.log(`${formName} Form Submitted:`, formObject);
    
    // Show success message
    alert(`Thank you! Your ${formName.toLowerCase()} form has been submitted successfully.`);
    
    // Reset form
    event.target.reset();
}

// Add event listeners to forms
if (counselingForm) {
    counselingForm.addEventListener('submit', (e) => handleFormSubmit(e, 'Counseling'));
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => handleFormSubmit(e, 'Contact'));
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => handleFormSubmit(e, 'Newsletter'));
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
document.body.appendChild(scrollTopBtn);

// Add styles for scroll to top button
const style = document.createElement('style');
style.textContent = `
    .scroll-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 99;
    }
    
    .scroll-top-btn.active {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-top-btn:hover {
        background-color: #e55b1a;
        transform: translateY(-3px);
    }
`;
document.head.appendChild(style);

// Show/hide scroll to top button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

// Scroll to top when button is clicked
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .course-card, .about-content, .section-header');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Add styles for scroll animations
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .feature-card, .course-card, .about-content, .section-header {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
`;
document.head.appendChild(animationStyle);

// Run animation on page load and scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);