// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}


// testimonials
var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
	containerWidth = container.offsetWidth;
	setParams(containerWidth);
}

function setParams(w) {
	if (w < 551) {
		slidesPerPage = 1;
	} else {
		if (w < 901) {
			slidesPerPage = 2;
		} else {
			if (w < 1101) {
				slidesPerPage = 3;
			} else {
				slidesPerPage = 4;
			}
		}
	}
	slidesCount = slides - slidesPerPage;
	if (currentPosition > slidesCount) {
		currentPosition -= slidesPerPage;
	};
	currentMargin = - currentPosition * (100 / slidesPerPage);
	slider.style.marginLeft = currentMargin + '%';
	if (currentPosition > 0) {
		buttons[0].classList.remove('inactive');
	}
	if (currentPosition < slidesCount) {
		buttons[1].classList.remove('inactive');
	}
	if (currentPosition >= slidesCount) {
		buttons[1].classList.add('inactive');
	}
}

setParams();

function slideRight() {
	if (currentPosition != 0) {
		slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
		currentMargin += (100 / slidesPerPage);
		currentPosition--;
	};
	if (currentPosition === 0) {
		buttons[0].classList.add('inactive');
	}
	if (currentPosition < slidesCount) {
		buttons[1].classList.remove('inactive');
	}
};

function slideLeft() {
	if (currentPosition != slidesCount) {
		slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
		currentMargin -= (100 / slidesPerPage);
		currentPosition++;
	};
	if (currentPosition == slidesCount) {
		buttons[1].classList.add('inactive');
	}
	if (currentPosition > 0) {
		buttons[0].classList.remove('inactive');
	}
};