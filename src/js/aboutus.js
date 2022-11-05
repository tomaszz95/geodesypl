const thumbnails = document.querySelectorAll('.aboutus__details-gallery-img')
const popup = document.querySelector('.aboutus__details-popup')
const popupClose = document.querySelector('.aboutus__details-popup--close')
const popupImg = document.querySelector('.aboutus__details-popup--img')
const arrowLeft = document.querySelector('.aboutus__details-popup--arrow-prev')
const arrowRight = document.querySelector('.aboutus__details-popup--arrow-next')
let currentImgIndex

const sliderBox = document.querySelector('.aboutus__details-rel-slider')
const leftBtn = document.querySelector('.aboutus__details-rel-btn--prev')
const rightBtn = document.querySelector('.aboutus__details-rel-btn--next')
const carouselBox = document.querySelectorAll('.aboutus__details-rel-box')
let carouselWidth
const carouselSpeed = 2000
let index = 0

let personBtn = document.querySelectorAll('.aboutus__team-button')
let accordionInfo = document.querySelector('.aboutus__team-allpeople')

const showNextImg = () => {
	if (currentImgIndex === thumbnails.length - 1) {
		currentImgIndex = 0
	} else {
		currentImgIndex++
	}
	popupImg.src = thumbnails[currentImgIndex].src
}

const showPrevImg = () => {
	if (currentImgIndex === 0) {
		currentImgIndex = thumbnails.length - 1
	} else {
		currentImgIndex--
	}
	popupImg.src = thumbnails[currentImgIndex].src
}

const closePopup = () => {
	popup.classList.add('fade-out')
	setTimeout(() => {
		popup.classList.add('hidden')
		popup.classList.remove('fade-out')
		thumbnails.forEach(element => {
			element.setAttribute('tabindex', 1)
		})
	}, 300)
}

thumbnails.forEach((thumbnail, index) => {
	const showPopup = e => {
		popup.classList.remove('hidden')
		popupImg.src = e.target.src
		currentImgIndex = index
		thumbnails.forEach(element => {
			element.setAttribute('tabindex', -1)
		})
	}
	thumbnail.addEventListener('click', showPopup)

	thumbnail.addEventListener('keydown', e => {
		if (e.code === 'Enter' || e.key === 13) {
			showPopup(e)
		}
	})
})

const handleCarousel = () => {
	index++
	changeImage()
}

let startCarousel = setInterval(handleCarousel, carouselSpeed)

const changeImage = () => {
	if (index > carouselBox.length - 1) {
		index = 0
	} else if (index < 0) {
		index = carouselBox.length - 1
	}
	let carouselWidth = carouselBox[0].clientWidth
	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`
}

const handleRightArrow = () => {
	index++
	resetInterval()
}

const handleLeftArrow = () => {
	index--
	resetInterval()
}

const resetInterval = () => {
	changeImage()
	clearInterval(startCarousel)
	startCarousel = setInterval(handleCarousel, carouselSpeed)
}

function openPersonInfo() {
	this.nextElementSibling.classList.toggle('active')
	if (this.nextElementSibling.classList.contains('active')) {
		this.nextElementSibling.style.maxHeight = 75 + 'px'
		this.nextElementSibling.style.padding = `1rem 1rem 3rem`
	} else {
		this.nextElementSibling.style.maxHeight = 0
		this.nextElementSibling.style.padding = 0
	}
}

personBtn.forEach(btn => btn.addEventListener('click', openPersonInfo))

rightBtn.addEventListener('click', handleRightArrow)

leftBtn.addEventListener('click', handleLeftArrow)

popupClose.addEventListener('click', closePopup)

arrowRight.addEventListener('click', showNextImg)

arrowLeft.addEventListener('click', showPrevImg)

document.addEventListener('keydown', e => {
	if (!popup.classList.contains('hidden')) {
		if (e.code === 'ArrowRight' || e.key === 39) {
			showNextImg()
		} else if (e.code === 'ArrowLeft' || e.key === 37) {
			showPrevImg()
		} else if (e.code === 'Escape' || e.key === 27) {
			closePopup()
		}
	}
})

popup.addEventListener('click', e => {
	if (e.target === popup) {
		closePopup()
	}
})
