let sw = document.querySelector('.sw');

function func() {
    let start = document.querySelector('.start');
    let advance = document.querySelector('.advance');
    let premium = document.querySelector('.premium');

    if (sw.style.justifyContent == 'flex-end') {
        sw.style.justifyContent = 'start';
        start.innerHTML = '600грн';
        advance.innerHTML = '900грн';
        premium.innerHTML = '1300грн';
    }
    else {
        sw.style.justifyContent = 'flex-end';
        start.innerHTML = '400грн';
        advance.innerHTML = '700грн';
        premium.innerHTML = '1100грн';
    }
}
