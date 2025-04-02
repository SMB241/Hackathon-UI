const createScrollFunctionality = (prevSelector, nextSelector, contentSelector) => {
    const prevButton = document.querySelector(prevSelector);
    const nextButton = document.querySelector(nextSelector);
    const scrollContent = document.querySelector(contentSelector);
    const imageWidth = 350;
    let currentIndex = 0;

    if (!prevButton || !nextButton || !scrollContent) return;

    const updateScroll = () => {
        scrollContent.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < scrollContent.children.length - 1) {
            currentIndex++;
            updateScroll();
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateScroll();
        }
    });
};

// Apply functionality to both containers
createScrollFunctionality('.prev', '.next', '.image-scroll-content');
createScrollFunctionality('.prev-news', '.next-news', '.image-scroll-content-news');
