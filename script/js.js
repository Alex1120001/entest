
// якір
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
// перемикач

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

