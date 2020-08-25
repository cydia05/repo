var counter = 5;
var counter_elem = null;

window.onload = (function () {
    counter_elem = document.getElementById("countdown");
    counter_elem.innerHTML = counter;

    setInterval(updater, 1000);
});

function updater() {
    if (counter > 0) {
        counter -= 1;
        counter_elem.innerHTML = counter;
    } else {
        window.location.replace("https://calculanota.github.io");
    }
}
