const swiper = new Swiper('.swiper', {
    loop: true, // creates a infinite loop of slides
    navigation: { // activate navigation with navigation buttons
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {// activate paginations
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    // keyboard and mousewheel navigation
    keyboard: true,
    mousewheel: true,

    // for other than sliding effect

    // effect: 'creative',
    // creativeEffect: {
    //  prev: {
    //      // will set `translateZ(-400px)` on previous slides
    //      translate: [0, 0, -400],
    //  },
    //  next: {
    //      // will set `translateX(100%)` on next slides
    //      translate: ['100%', 0, 0],
    //  },
    // },
    // effect: 'coverflow',
})