document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.mySwiper', {
        // watchSlidesProgress: true,
        // slidesPerView: 3,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewhell: true,
        keybord: true,

    })
});


document.addEventListener('DOMContentLoaded', function () {
    const image = document.querySelector('.slider-image');
    const tooltip = document.querySelector('.tooltip');

    image.addEventListener('mouseover', function () {
        tooltip.style.display = "block";
    });

    image.addEventListener('mouseout', function () {
        tooltip.style.display = "none";
    });
});