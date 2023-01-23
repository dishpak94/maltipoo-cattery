
document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.querySelectorAll('.btn');
    let columns = document.querySelectorAll('.column');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            let attr = this.getAttribute('data-item-type');

            for (var j = 0; j < columns.length; j++) {
                let contains = columns[j].classList.contains(attr);

                if (contains) {
                    columns[j].style.display = 'block';
                } else {
                    columns[j].style.display = 'none';
                }
            }


            // let current = document.getElementsByClassName('active');
            // current[0].className = current[0].className.replace('active', '');
            // this.className += 'active';


        })
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let image = document.querySelector('.care-link-wool');
    let imageB = document.querySelector('.care-link-earsandeyes');
    let imageC = document.querySelector('.care-link-claws');
    let imageD = document.querySelector('.care-link-food');
    let imageE = document.querySelector('.care-link-walk');
    let imageF = document.querySelector('.care-link-training');

    let popup = document.querySelector('.care-wool-popup');
    let popupB = document.querySelector('.care-earsandeyes-popup');
    let popupC = document.querySelector('.care-claws-popup');
    let popupD = document.querySelector('.care-food-popup');
    let popupE = document.querySelector('.care-walk-popup');
    let popupF = document.querySelector('.care-training-popup');

    let closeButton = document.querySelector('.care-popup-close-button');
    let textPopup = document.querySelector('.care-popup-text');

    image.addEventListener('click', () => {
        popup.classList.add('care-popup-visible');

    });

    closeButton.addEventListener('click', () => {
        popup.classList.remove('care-popup-visible');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            popup.classList.remove('care-popup-visible');
        }
    });

    popup.addEventListener('click', (e) => {
        let target = e.target;

        if (target !== textPopup) {
            popup.classList.remove('care-popup-visible');
        }
    })


    imageB.addEventListener('click', () => {
        popupB.classList.add('care-popup-visible');

    });

    closeButton.addEventListener('click', () => {
        popupB.classList.remove('care-popup-visible');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            popupB.classList.remove('care-popup-visible');
        }
    });

    popupB.addEventListener('click', (e) => {
        let target = e.target;

        if (target !== textPopup) {
            popupB.classList.remove('care-popup-visible');
        }
    })




    imageC.addEventListener('click', () => {
        popupC.classList.add('care-popup-visible');

    });

    closeButton.addEventListener('click', () => {
        popupC.classList.remove('care-popup-visible');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            popupC.classList.remove('care-popup-visible');
        }
    });

    popupC.addEventListener('click', (e) => {
        let target = e.target;

        if (target !== textPopup) {
            popupC.classList.remove('care-popup-visible');
        }
    })




    imageD.addEventListener('click', () => {
        popupD.classList.add('care-popup-visible');

    });

    closeButton.addEventListener('click', () => {
        popupD.classList.remove('care-popup-visible');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            popupD.classList.remove('care-popup-visible');
        }
    });

    popupD.addEventListener('click', (e) => {
        let target = e.target;

        if (target !== textPopup) {
            popupD.classList.remove('care-popup-visible');
        }
    })



    imageE.addEventListener('click', () => {
        popupE.classList.add('care-popup-visible');

    });

    closeButton.addEventListener('click', () => {
        popupE.classList.remove('care-popup-visible');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            popupE.classList.remove('care-popup-visible');
        }
    });

    popupE.addEventListener('click', (e) => {
        let target = e.target;

        if (target !== textPopup) {
            popupE.classList.remove('care-popup-visible');
        }
    })




    imageF.addEventListener('click', () => {
        popupF.classList.add('care-popup-visible');

    });

    closeButton.addEventListener('click', () => {
        popupF.classList.remove('care-popup-visible');
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            popupF.classList.remove('care-popup-visible');
        }
    });

    popupF.addEventListener('click', (e) => {
        let target = e.target;

        if (target !== textPopup) {
            popupF.classList.remove('care-popup-visible');
        }
    })
});


