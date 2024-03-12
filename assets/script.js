const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// ****************************
let currentSlide = 0;

function showSlide(index) {
    const banner = document.getElementById('banner');
    const tagline = document.getElementById('tagline');
    const dots = document.querySelector('.dots');
    
    banner.querySelector('.banner-img').src = `./assets/images/slideshow/${slides[index].image}`;
    tagline.innerHTML = slides[index].tagLine;
    
    const dotHTML = slides.map((_, i) => `<div class="dot ${i === index ? 'dot_selected' : ''}" onclick="goToSlide(${i})"></div>`).join('');
    dots.innerHTML = dotHTML;
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

document.querySelector('.arrow_left').addEventListener('click', prevSlide);
document.querySelector('.arrow_right').addEventListener('click', nextSlide);
