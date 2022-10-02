let sliders = [];

class Slider {
    constructor(container, photos) {
        this.container = container;
        this.photos = photos;
    }
}

// Table assign with objects of all node elements

for(let i = 1; i <= 5; i++ ) {
    sliders[i - 1] = new Slider(
        document.querySelector(`.section-timeline__stage-img--${i}`),
        [...document.querySelectorAll(`.section-timeline__stage-img--${i} > .section-timeline__photo`)])
}

// Make all sliders clickable with event listeners

sliders.forEach((slider) => {
    let counter = 0;

    slider.container.addEventListener('click', (e) => {
        let {photos} = slider;

        if(e.target.classList.contains('section-timeline__prev-button')) {
            photos[counter].classList.remove('section-timeline__photo--active');
            counter--;
            console.log(counter);
            counter < 0 ? counter = photos.length - 1 : null;
            photos[counter].classList.add('section-timeline__photo--active');
        }

        if(e.target.classList.contains('section-timeline__next-button')) {
            photos[counter].classList.remove('section-timeline__photo--active');
            counter++;
            console.log(counter);
            counter > photos.length - 1 ? counter = 0 : null;
            photos[counter].classList.add('section-timeline__photo--active');
        }
    })
});