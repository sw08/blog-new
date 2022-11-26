var section = 1;

function move() {
    window.scrollTo({left:0, top: document.getElementById(`${section}`).getBoundingClientRect().top + window.pageYOffset})
}

function next() {
    section++;
    move();
}

function previous() {
    section--;
    move();
}

window.onload = move;

window.addEventListener("wheel", function (event) {
    event.preventDefault();
}, {passive: false});

window.onwheel = (event) => {
    if (event.deltaY < 0) {
        if (section != 1) {
            previous();
        }
    } else if (event.deltaY > 0) {
        if (section != 3) {
            next();
        }
    }
};