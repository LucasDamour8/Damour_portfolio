// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

function closeMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.remove('active');
}

// Smooth scrolling for navigation links
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

// Form submission handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const firstName = this.firstName.value;
        const lastName = this.lastName.value;
        const email = this.email.value;
        const phone = this.phone.value;
        const service = this.service.value;
        const message = this.message.value;
        
        // Basic validation
        if (!firstName || !lastName || !email || !service || !message) {
            alert('Please fill in all required fields!');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address!');
            return;
        }
        
        // Show success message
        alert(`Thank you ${firstName}! Your message has been sent successfully. We'll get back to you soon at ${email}.`);
        
        // Reset form
        this.reset();
    });
}

// Tab functionality for Recent Works
const tabLinks = document.querySelectorAll('.tab-link');
const workItems = document.querySelectorAll('.work-item');

tabLinks.forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all tabs
        tabLinks.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Get selected category
        const category = this.getAttribute('data-category');
        
        // Filter work items
        workItems.forEach(item => {
            if (category === 'all') {
                item.style.display = 'block';
            } else {
                const itemCategories = item.getAttribute('data-category');
                if (itemCategories.includes(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const nav = document.getElementById('mainNav');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !menuToggle.contains(e.target)) {
        nav.classList.remove('active');
    }
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});