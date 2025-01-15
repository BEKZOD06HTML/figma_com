
document.addEventListener("DOMContentLoaded", () => {
    const bagSpans = document.querySelectorAll(".bag_count"); 
    const addButtons = document.querySelectorAll(".add-btn");

    addButtons.forEach((addButton) => {
        addButton.addEventListener("click", () => {
            bagSpans.forEach(bagSpan => {
                let count = parseInt(bagSpan.textContent);
                bagSpan.textContent = count + 1;
            });

           
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const carousel = document.querySelector(".carousel");
    let currentIndex = 0;

    const steps = document.querySelectorAll(".carousel .step");
    const totalSteps = steps.length;

    // Next button click handler
    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalSteps - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;  // Loop back to the first item
        }
        updateCarousel();
    });

    // Prev button click handler
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalSteps - 1;  // Loop back to the last item
        }
        updateCarousel();
    });

    // Update the carousel by changing the scroll position
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * (100 / totalSteps)}%)`;
    }
});
