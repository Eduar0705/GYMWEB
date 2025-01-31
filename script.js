document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")
    // Toggle nav
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active")
      // Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ""
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })
    // Burger animation
        burger.classList.toggle("toggle")
    })
    // Simple testimonial carousel
    const testimonials = document.querySelectorAll(".testimonial")
    let currentTestimonial = 0

    function showNextTestimonial() {
        testimonials[currentTestimonial].style.display = "none"
        currentTestimonial = (currentTestimonial + 1) % testimonials.length
        testimonials[currentTestimonial].style.display = "block"
}
    // Initialize testimonials
    testimonials.forEach((testimonial, index) => {
        if (index !== 0) {
            testimonial.style.display = "none"
        }
    })
    // Change testimonial every 5 seconds
    setInterval(showNextTestimonial, 5000)
})