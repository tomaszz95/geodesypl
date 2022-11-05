const nav = document.querySelector('.nav-mobile__items')
const navBtn = document.querySelector('.burger-btn')
const navItems = document.querySelectorAll('.nav-mobile__item')
let footerYear = document.querySelector('.footer__year')

// NAV
const openMobileNav = () => {
	nav.classList.toggle('nav-mobile__items--active')
}

navItems.forEach(item => {
	item.addEventListener('click', () => {
		nav.classList.remove('nav-mobile__items--active')
	})
})

// CURRENT YEAR
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

navBtn.addEventListener('click', openMobileNav)

handleCurrentYear()