document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        validateForm();
    });

    function validateForm() {
        const name = document.getElementById('inputName');
        const email = document.getElementById('inputEmail');
        const phone = document.getElementById('inputPhone');

        let isValid = true;

        if (name.value.trim() === '') {
            showError(name, 'Name is required');
            isValid = false;
        } else {
            clearError(name);
        }

        if (email.value.trim() === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value)) {
            showError(email, 'Email is not valid');
            isValid = false;
        } else {
            clearError(email);
        }

        if (phone.value.trim() === '') {
            showError(phone, 'Phone is required');
            isValid = false;
        } else if (!isValidPhone(phone.value)) {
            showError(phone, 'Phone is not valid');
            isValid = false;
        } else {
            clearError(phone);
        }

        if (isValid) {
            // Submit form or perform further actions
            alert('Registration successful!');
            form.reset();
        }
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        formGroup.classList.add('has-error');
        const small = formGroup.querySelector('small');
        if (!small) {
            const errorElement = document.createElement('small');
            errorElement.className = 'form-text text-danger';
            errorElement.innerText = message;
            formGroup.appendChild(errorElement);
        } else {
            small.innerText = message;
        }
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        formGroup.classList.remove('has-error');
        const small = formGroup.querySelector('small');
        if (small) {
            formGroup.removeChild(small);
        }
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function isValidPhone(phone) {
        const re = /^\d{10}$/;
        return re.test(String(phone));
    }

    // Dynamic hero section text
    const heroText = document.querySelector('#home .display-4');
    const texts = ["Welcome to TechVolution 2024", "Join us for a journey into the future of technology", "Be part of the tech revolution"];
    let currentTextIndex = 0;

    setInterval(() => {
        currentTextIndex = (currentTextIndex + 1) % texts.length;
        heroText.innerText = texts[currentTextIndex];
    }, 3000);
});

//gallery
document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = [
        { type: "image", src: "path-to-your-image1.jpg", alt: "Image 1" },
        { type: "image", src: "path-to-your-image2.jpg", alt: "Image 2" },
        { type: "video", src: "path-to-your-video1.mp4", alt: "Video 1" },
        { type: "video", src: "path-to-your-video2.mp4", alt: "Video 2" },
    ];

    const carouselInner = document.querySelector("#galleryCarousel .carousel-inner");

    galleryItems.forEach((item, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.className = `carousel-item${index === 0 ? " active" : ""}`;

        if (item.type === "image") {
            const img = document.createElement("img");
            img.src = item.src;
            img.alt = item.alt;
            carouselItem.appendChild(img);
        } else if (item.type === "video") {
            const video = document.createElement("video");
            video.src = item.src;
            video.alt = item.alt;
            video.controls = true;
            carouselItem.appendChild(video);
        }

        carouselInner.appendChild(carouselItem);
    });
});

