var body = document.body;

var images = Array.from(document.querySelectorAll(".open-image .image"));
if (images.length > 0) {
    var modal = document.createElement('div');
    modal.classList = "custom-modal gallery";
    var popup = document.createElement('div');
    popup.classList = "popup";
    var photo = document.createElement('img');
    photo.classList.add('image');
    popup.appendChild(photo);
    modal.appendChild(popup);
    document.body.appendChild(modal);

    var close = document.createElement('button');
    close.classList = "close";
    close.innerHTML = "&times;";
    modal.insertBefore(close, modal.childNodes[0]);
    var prev_div = document.createElement('div');
    prev_div.classList = "slide_nav prev_div";
    var prev = document.createElement('button');
    prev.classList = "prev";
    prev.innerHTML = '<i class="fa fa-chevron-left" aria-hidden="true"></i>';
    prev_div.appendChild(prev);
    modal.appendChild(prev_div);
    var next_div = document.createElement('div');
    next_div.classList = "slide_nav next_div";
    var next = document.createElement('button');
    next.classList = "next";
    next.innerHTML = '<i class="fa fa-chevron-right" aria-hidden="true"></i>';
    next_div.appendChild(next);
    modal.appendChild(next_div);

    var index = 0;
    images.forEach(image => {
        image.addEventListener('click', () => {
            index = images.indexOf(image);
            photo.src = images[index].src;
            toggle();
        });
    });
    next.addEventListener('click', () => {
        index = index + 1;
        if (index >= images.length) index = 0;
        photo.src = images[index].src;
    });
    prev.addEventListener('click', () => {
        index = index - 1;
        if (index < 0) index = images.length - 1;
        photo.src = images[index].src;
    });

    close.onclick = function () {
        toggle();
    };
    window.onclick = function (event) {
        if (event.target == modal) {
            toggle();
        }
    };
    function toggle() {
        modal.classList.toggle('active');
        popup.classList.toggle('active');
        if (body.classList == 'active') {
            setTimeout(function () {
                body.classList.toggle('active');
            }, 500);
        }
        else {
            body.classList.toggle('active');
        }
    }
}


