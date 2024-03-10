const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header-menu');

navIcon.addEventListener('click', function () {
	if(this.classList.contains('active')) {
		this.classList.remove('active');
		nav.classList.remove('open');
	}
	else {
		this.classList.add('active');
		nav.classList.add('open');
	}
});

$(document).ready(function() {
	let containerEl = document.querySelector('#mix-cards');
	let mixer = mixitup(containerEl, {
		classNames: {
			block: ""
		}
	});
})

const backTopBtn = document.querySelector('#backtop');

backTopBtn.style.opacity = 0;

document.addEventListener('scroll', function () {
	if(window.scrollY > 500) {
		backTopBtn.style.opacity = 1;
	}else {
		backTopBtn.style.opacity = 0;
	}
});
