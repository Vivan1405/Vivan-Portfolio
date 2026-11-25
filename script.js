/* ===================================
   VIVAN BARI - PORTFOLIO ANIMATIONS
   =================================== */

// Find the elements we want to animate

const revealElements = document.querySelectorAll(
    `
    .about-section .section-heading,
    .projects-section .section-heading,
    .skills-section .section-heading,
    .highlights-section .section-heading,
    .contact-section .section-heading,
    .featured-project,
    .skill-card,
    .milestone-card,
    .certification-item,
    .contact-main,
    .contact-card
    `
);

// Check whether the visitor prefers reduced motion

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;


// Enable animations only when supported

if (
    !prefersReducedMotion &&
    "IntersectionObserver" in window
) {

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.08,
            rootMargin: "0px 0px -35px 0px"
        }

    );


    // Observe each element

    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

}