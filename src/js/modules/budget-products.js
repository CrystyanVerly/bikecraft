export function initBudgetProducts() {
  const typeInputs = document.querySelectorAll('input[name="type"]');
  const productSections = document.querySelectorAll('.budget-product');

  if (!typeInputs.length) return;

  function updateProductSection() {
    const selectedType = document.querySelector('input[name="type"]:checked');

    productSections.forEach((section) => {
      const shouldShow =
        selectedType && section.id === `${selectedType.value}-budget`;

      section.classList.toggle('is-active', Boolean(shouldShow));
    });
  }

  function activateProduct(productId) {
    const element = document.getElementById(productId);

    if (element instanceof HTMLInputElement) {
      element.checked = true;
    }
  }

  const searchParams = new URLSearchParams(window.location.search);

  searchParams.forEach((value) => {
    activateProduct(value);
  });

  typeInputs.forEach((input) => {
    input.addEventListener('change', updateProductSection);
  });

  updateProductSection();
}
