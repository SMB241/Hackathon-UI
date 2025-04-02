document.querySelectorAll("details").forEach(detail => {
    const answer = detail.querySelector(".answer");
    answer.style.maxHeight = "0";
    answer.style.overflow = "hidden";
    answer.style.opacity = "0";
    answer.style.transition = "max-height 0.5s ease-in-out, opacity 0.4s ease-in-out";

    detail.addEventListener("toggle", () => {
        if (detail.open) {
            answer.style.display = "block";
            requestAnimationFrame(() => {
                answer.style.maxHeight = `${answer.scrollHeight}px`;
                answer.style.opacity = "1";
            });
        } else {
            requestAnimationFrame(() => {
                answer.style.maxHeight = "0";
                answer.style.opacity = "0";
            });
            setTimeout(() => answer.style.display = "none", 500);
        }
    });

    detail.querySelector("summary").addEventListener("click", event => {
        if (detail.open) {
            event.preventDefault();
            answer.style.maxHeight = "0";
            answer.style.opacity = "0";
            setTimeout(() => {
                detail.removeAttribute("open");
                answer.style.display = "none";
            }, 500);
        }
    });
});
