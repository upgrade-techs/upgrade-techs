document.addEventListener('DOMContentLoaded', () => {

    let carousel = document.getElementsByClassName('carousel') || null;

    if(carousel){
        let keys = Object.keys(carousel);

        keys.forEach((key) => {
            const current = carousel[key].getAttribute('id');
            const slides = document.getElementById(current).querySelectorAll('.carousel-item');
            const slidesCount = slides.length - 1;
            const prev = document.getElementById(current).querySelector('.carousel-control-prev');
            const next = document.getElementById(current).querySelector('.carousel-control-next');
            const currentSlide = () => {
                return [...slides].map(n => n.classList.contains('active')).findIndex(e => e === true);
            };

            const switchSlides = (current, nextSlide) => {
                [current, nextSlide].forEach(n => slides[n].classList.toggle('active'))
                
                if(carouselIndicatorsExist){
                    [current, nextSlide].forEach(n => carouselIndicator[n].classList.toggle('active'))
                }
            }

            const carouselIndicators = document.getElementById(current).querySelector('.carousel-indicators');
            const carouselIndicatorsExist = carouselIndicators ? true : false;

            if(carouselIndicatorsExist){
                const start = currentSlide();
                for(let i = 0; i <= slidesCount; i++){
                    carouselIndicators.innerHTML += `<button type="button" data-bs-target="#${current}" data-bs-slide-to="${i}" class="carousel-indicator ${start === i ? 'active' : ''}" aria-label="Slide ${i}"></button>`
                }
            }

            const carouselIndicator = document.getElementById(current).querySelectorAll('.carousel-indicator');

            const indicatorChange = indicator => {
                let current = currentSlide();
                let nextSlide = parseInt(indicator.getAttribute('data-bs-slide-to'));
                
                if(current !== nextSlide){
                    switchSlides(current, nextSlide);
                }
            }

            [...carouselIndicator].forEach(indicator => {
                indicator.addEventListener('click', () => indicatorChange(indicator));
            })
            
            const manageSlides = (direction) => {
                let current = currentSlide();
                let math = direction === 'prev' ? -1 : 1;
                let nextSlide = current + math;

                if(nextSlide < 0 || nextSlide > slidesCount){
                    nextSlide = nextSlide < 0 ? slidesCount : 0;
                }

                switchSlides(current, nextSlide);
            }

            prev.addEventListener('click', () => manageSlides('prev'));
            next.addEventListener('click', () => manageSlides('next'));
			
			setInterval(() => manageSlides(), 5000);
        })
    }
})