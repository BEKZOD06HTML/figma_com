

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.product_filter button');
    const carouselItems = document.querySelectorAll('.carousel-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            button.classList.add('active');
            
            const category = button.getAttribute('data-category');
            
            carouselItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block'; 
                } else {
                    item.style.display = 'none'; 
                }
            });
        });
    });
});

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

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    const prevBtn2 = document.querySelector('.prev-btn');
    const nextBtn2 = document.querySelector('.next-btn');
    let scrollAmount = 0;

    nextBtn2.addEventListener('click', () => {
        const carouselWidth = carousel.offsetWidth; // Visible width of the carousel
        const scrollWidth = carousel.scrollWidth; // Total scrollable width
        scrollAmount += carouselWidth;

        if (scrollAmount >= scrollWidth) {
            scrollAmount = 0; // Reset to the start
        }

        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth',
        });
    });

    prevBtn2.addEventListener('click', () => {
        const carouselWidth = carousel.offsetWidth;
        scrollAmount -= carouselWidth;

        if (scrollAmount < 0) {
            scrollAmount = carousel.scrollWidth - carouselWidth; // Scroll to the end
        }

        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth',
        });
    });
});
nextBtn2.addEventListener('click', () => {
    console.log('Next button clicked');
    // Other logic here
});
