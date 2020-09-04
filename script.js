let slider = document.querySelector('.slider');
let dots = document.querySelectorAll('.dot')
// create a simple instance
// by default, it only adds horizontal recognizers
let mc = new Hammer(slider);
let translate = 0;
let whidth = slider.clientWidth;


dots.forEach((element, index) => {
    function slide() {
        translate = -index*whidth;
        slider.style.transform = `translateX(${translate}px)`;
        dotsColoring();
    }
    element.addEventListener("click", slide);
})

// listen to events...
mc.on("swipeleft swiperight", function (ev) {
    if (ev.type == 'swipeleft') {
        translate -= whidth;
    } else translate += whidth;

    if (translate < -3 * whidth) {
        translate = 0
    } else if (translate > 0) {
        translate = -3 * whidth
    }
    slider.style.transform = `translateX(${translate}px)`;
    dotsColoring();
});

function dotsColoring() {
    switch (translate) {
        case -3 * whidth:
            dots.forEach((dot) => {
                dot.classList.remove('active');
            })
            dots[3].classList.add('active');
            break

        case -2 * whidth:  // if (x === 'value2')
            dots.forEach((dot) => {
                dot.classList.remove('active');
            })
            dots[2].classList.add('active');
            break

        case -1 * whidth:  // if (x === 'value2')
            dots.forEach((dot) => {
                dot.classList.remove('active');
            })
            dots[1].classList.add('active');
            break

        default:
            dots.forEach((dot) => {
                dot.classList.remove('active');
            })
            dots[0].classList.add('active');
            break
    }
}

