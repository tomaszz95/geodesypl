let rodoBtn = document.querySelector('.more-info__rodo-btn')
let rodoInfo = document.querySelector('.more-info__rodo-info')
const newsBoxes = document.querySelectorAll('.news__box')
let boxesNumber = 0

// RODO
const openRodoInfo = () => {
	rodoInfo.classList.toggle('more-info__rodo-info--active')
	if (rodoInfo.classList.contains('more-info__rodo-info--active')) {
		rodoInfo.style.maxHeight = rodoInfo.scrollHeight + 'px'
	} else {
		rodoInfo.style.maxHeight = 0
	}
}

// NEWS BOXES
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
