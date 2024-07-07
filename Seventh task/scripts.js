let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const slideWidth = slides.querySelector('img').clientWidth;
    slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= 7) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000);


let currentTestimonialIndex = 0;

function showTestimonial(index) {
    const slides = document.querySelector('.testimonial-slides');
    const totalSlides = slides.children.length;
    if (index >= totalSlides) {
        currentTestimonialIndex = 0;
    } else if (index < 0) {
        currentTestimonialIndex = totalSlides - 1;
    } else {
        currentTestimonialIndex = index;
    }
    slides.style.transform = `translateX(${-currentTestimonialIndex * 100}%)`;
}

function nextTestimonial() {
    showTestimonial(currentTestimonialIndex + 1);
}

function prevTestimonial() {
    showTestimonial(currentTestimonialIndex - 1);
}

// Auto-slide
setInterval(nextTestimonial, 5000);