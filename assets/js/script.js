/* 
   Main Script for Sri Vagdhevi Coaching Centre
   Handles interactions, animations, and form validation
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- Sticky Header & Scroll Effect ---
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active'); // Optional: animating the burger icon itself

            // Toggle hamburger animation state if implemented in CSS
            const spans = menuToggle.querySelectorAll('span');
            if (mobileMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            // Reset hamburger icon
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // --- Smooth Scrolling for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- Accordion Functionality (Courses & FAQ) ---

    // 1. Course Expandables
    const courseHeaders = document.querySelectorAll('.course-header');

    courseHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const parent = header.parentElement;

            // Close others (optional - for accordion effect)
            /* 
            document.querySelectorAll('.course-item').forEach(item => {
                if (item !== parent) item.classList.remove('active');
            });
            */

            parent.classList.toggle('active');
        });
    });

    // 2. FAQ Accordion
    const faqHeaders = document.querySelectorAll('.accordion-header');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const body = item.querySelector('.accordion-body');
            const arrow = header.querySelector('.arrow');

            // Close others
            document.querySelectorAll('.faq-section .accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-body').style.maxHeight = null;
                }
            });

            item.classList.toggle('active');

            if (item.classList.contains('active')) {
                body.style.maxHeight = body.scrollHeight + "px";
            } else {
                body.style.maxHeight = null;
            }
        });
    });



    // --- Contact Form Handling ---
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic Validation
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const course = document.getElementById('course').value;

            if (prevValidation(name, phone, course)) {
                // Determine WhatsApp Message
                const message = `Hello, I am interested in joining Sri Vagdhevi Coaching Centre.%0A%0AName: ${name}%0APhone: ${phone}%0ACourse: ${course}`;
                const whatsappUrl = `https://wa.me/916300181212?text=${message}`;

                // Open WhatsApp
                window.open(whatsappUrl, '_blank');

                // Reset form
                contactForm.reset();
                alert('Thank you! Redirecting to WhatsApp to send your details.');
            }
        });
    }

    function prevValidation(name, phone, course) {
        if (name.length < 3) {
            alert('Please enter a valid name.');
            return false;
        }
        if (phone.length < 10 || isNaN(phone)) {
            alert('Please enter a valid 10-digit phone number.');
            return false;
        }
        if (course === "") {
            alert('Please select a course.');
            return false;
        }
        return true;
    }

});
