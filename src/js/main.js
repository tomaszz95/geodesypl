const nav = document.querySelector('.nav-mobile__items')
const navBtn = document.querySelector('.burger-btn')
const navItems = document.querySelectorAll('.nav-mobile__item')
let rodoBtn = document.querySelector('.more-info__rodo-btn')
let rodoInfo = document.querySelector('.more-info__rodo-info')
let footerYear = document.querySelector('.footer__year')
const newsBoxes = document.querySelectorAll('.news__box')
let boxesNumber = 0

const openMobileNav = () => {
	nav.classList.toggle('nav-mobile__items--active')
}

navItems.forEach(item => {
	item.addEventListener('click', () => {
		nav.classList.remove('nav-mobile__items--active')
	})
})

const openRodoInfo = () => {
	rodoInfo.classList.toggle('more-info__rodo-info--active')
	if (rodoInfo.classList.contains('more-info__rodo-info--active')) {
		rodoInfo.style.maxHeight = rodoInfo.scrollHeight + 'px'
	} else {
		rodoInfo.style.maxHeight = 0
	}
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const newsBoxesAnimation = () => {
	newsBoxes.forEach(box => {
		if (box.offsetTop - scrollY < 850 && !box.classList.contains('animationRight') && !box.classList.contains('animationLeft') && boxesNumber % 2 === 0) {
			box.classList.add('animationRight')
		} else if (box.offsetTop - scrollY < 850 && !box.classList.contains('animationLeft') && !box.classList.contains('animationRight') && boxesNumber % 2 === 1) {
			box.classList.add('animationLeft')
		} else {
			return
		}
		boxesNumber++
	})
}

window.addEventListener('scroll', newsBoxesAnimation)
rodoBtn.addEventListener('click', openRodoInfo)
navBtn.addEventListener('click', openMobileNav)
handleCurrentYear()
