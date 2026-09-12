export function initActiveMenu() {
	const menuLinks = document.querySelectorAll('.header-menu a');

	if (!menuLinks.length) return;

	const currentPath = window.location.pathname;

	menuLinks.forEach((link) => {
		const linkPath = new URL(link.href).pathname;

		link.classList.toggle('menu-active', linkPath === currentPath);
	});
}
