export function initSimpleAnime() {
	const animatedItems = document.querySelectorAll('[data-anime]');

	if (!animatedItems.length) return;

	function animateItems() {
		animatedItems.forEach((item) => {
			const delay = Number(item.getAttribute('data-anime'));

			if (Number.isNaN(delay)) return;

			setTimeout(() => {
				item.classList.add('anime');
			}, delay);
		});
	}

	function handleVisibility() {
		if (document.visibilityState === 'visible') {
			animateItems();
		}
	}

	handleVisibility();

	document.addEventListener('visibilitychange', handleVisibility);
}
