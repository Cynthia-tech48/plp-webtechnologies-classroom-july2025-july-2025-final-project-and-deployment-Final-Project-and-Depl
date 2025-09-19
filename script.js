// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Booking form and modal logic
const bookingForm = document.getElementById('booking-form');
const modal = document.getElementById('booking-modal');
const closeBtn = document.querySelector('.close-button');

if (bookingForm) {
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const serviceType = document.getElementById('service-type').value;

        if (name === '' || email === '' || phone === '' || serviceType === '') {
            alert('Please fill in all required fields.');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        const phoneRegex = /^\d{10,}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number (at least 10 digits).');
            return;
        }

        document.getElementById('modal-name').textContent = name;
        document.getElementById('modal-email').textContent = email;
        document.getElementById('modal-service').textContent = serviceType;
        modal.style.display = 'block';

        bookingForm.reset();
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}

// Animation on scroll
const faders = document.querySelectorAll('.fade-in-up');

const appearOptions = {
    threshold: 0.4,
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.style.animationDelay = `${entry.target.dataset.delay || 0}s`;
            entry.target.style.opacity = '1';
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});