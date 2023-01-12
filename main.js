
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
        })


    }
});


