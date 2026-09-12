export function initBikeGallery() {
	const galleryImages = document.querySelectorAll(
		'.bikes-gallery-container img',
	);

	if (!galleryImages.length) return;

	function moveImageToFront(event) {
		if (window.matchMedia('(min-width: 800px)').matches) {
			event.currentTarget.parentElement.prepend(event.currentTarget);
		}
	}

	function scaleImage(event) {
		event.currentTarget.style.transform = 'scale(1.025)';
	}

	function resetImageScale(event) {
		event.currentTarget.style.transform = 'scale(1)';
	}

	galleryImages.forEach((image) => {
		image.style.transition = 'transform 0.4s ease';

		image.addEventListener('click', moveImageToFront);
		image.addEventListener('mouseenter', scaleImage);
		image.addEventListener('mouseleave', resetImageScale);
	});
}
