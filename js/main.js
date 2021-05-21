console.log('i am app js');
// navbar change on scroll function
window.addEventListener('scroll', function (event) {
    let scroll = this.scrollY;
    console.log(scroll);
    const header = document.querySelector('header');
    if (scroll > 20) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});

//
let navLink = document.querySelector('.main-menu').querySelectorAll('.nav_link');
console.log(navLink);

navLink.forEach(ele => {
    console.log(ele);
});