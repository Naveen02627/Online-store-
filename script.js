

// Define an array to hold the section IDs in the desired order
const sections = ['#home', '#kids-section', '#men-section', '#women-section', '#about-page'];
let currentSectionIndex = 0;
let scrollingPaused = false;
let interactionTimeout;

// Function to scroll to the next section
function scrollToNextSection() {
    if (!scrollingPaused) {
        currentSectionIndex = (currentSectionIndex + 1) % sections.length;
        const nextSectionId = sections[currentSectionIndex];
        const nextSection = document.querySelector(nextSectionId);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Automatically scroll to the next section every 10 seconds
const scrollInterval = setInterval(scrollToNextSection, 10000);

// Stop scrolling when reaching the about section for 50 seconds
setTimeout(() => {
    scrollingPaused = true;
    setTimeout(() => {
        scrollingPaused = false;
    }, 50000); // 50 seconds
}, 40000); // 40 seconds

// Function to handle user interaction with subsections
function handleSubsectionInteraction() {
    scrollingPaused = true;
    clearTimeout(interactionTimeout);
    interactionTimeout = setTimeout(() => {
        scrollingPaused = false;
    }, 15000); // Resume scrolling after 15 seconds of inactivity
}

// Add event listeners to subsections to pause scrolling
const subsections = ['#kids-section', '#men-section', '#women-section'];
subsections.forEach(subsection => {
    const subsectionElement = document.querySelector(subsection);
    if (subsectionElement) {
        subsectionElement.addEventListener('mouseover', handleSubsectionInteraction);
        subsectionElement.addEventListener('click', handleSubsectionInteraction);
    }
});


document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('nav .menu-container').classList.toggle('show-menu');
});
