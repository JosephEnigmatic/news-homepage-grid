import './scss/style.scss'

const mobileMenu = document.querySelector('.header__navigation-mobile');
const overlay = document.querySelector('.overlay');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn')

openBtn.addEventListener('click', () => {
    mobileMenu.classList.add('open')
    mobileMenu.classList.remove('close')

    overlay.classList.add('open')
    overlay.classList.remove('close')

    document.body.style.overflow = 'hidden'
})

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('close')
    mobileMenu.classList.remove('open')

    overlay.classList.add('close')
    overlay.classList.remove('open')

    document.body.style.overflow = 'auto'
})

// resize closing of mobile menu
window.addEventListener('resize', () => {
    const mobileBreakpoint = 1100;

    if(window.innerWidth > mobileBreakpoint) {
        mobileMenu.classList.add('close')
        mobileMenu.classList.remove('open')
    
        overlay.classList.add('close')
        overlay.classList.remove('open')
    }
})