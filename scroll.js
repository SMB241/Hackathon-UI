// Set the number of buttons in the lesson scroll container
const scrollContainer = document.querySelector('.lesson-scroll');
const scrollButtons = document.querySelector('.scroll-buttons');
const prevButton = scrollButtons.querySelector('.prev');
const nextButton = scrollButtons.querySelector('.next');

// Scroll distance per click (adjust this to your preference)
const scrollAmount = 200;

// Function to scroll left
function prevLesson() {
    scrollContainer.scrollBy({
        left: -scrollAmount, 
        behavior: 'smooth'
    });
}

// Function to scroll right
function nextLesson() {
    scrollContainer.scrollBy({
        left: scrollAmount, 
        behavior: 'smooth'
    });
}

// Attach event listeners to buttons
prevButton.addEventListener('click', prevLesson);
nextButton.addEventListener('click', nextLesson);
