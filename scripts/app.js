const modal = document.querySelector('.modal');
const modalImage  = document.querySelectorAll('.modal-image img');
const scaledImage = document.querySelector('.scaled-image');
const imageCaption = document.querySelector('.image-caption');

modalImage.forEach(image => {
	image.addEventListener('click', () => {
		modal.classList.add("open");

		const originalImage = image.getAttribute("data-original");
		scaledImage.src = originalImage;
		const altText = image.alt;
		imageCaption.textContent = altText;
	});
});

modal.addEventListener('click', (e) => {
	if(e.target.classList.contains("modal")){
		modal.classList.remove("open");
	};
});