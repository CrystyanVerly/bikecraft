export function initAccordion() {
  const accordionButtons = document.querySelectorAll(
    '.question-container button',
  );

  if (!accordionButtons.length) return;

  function setAccordionState(button, expanded) {
    const answerId = button.getAttribute('aria-controls');
    const answer = answerId ? document.getElementById(answerId) : null;

    if (!answer) return;

    button.setAttribute('aria-expanded', String(expanded));
    answer.classList.toggle('accordion-active', expanded);
  }

  accordionButtons.forEach((button) => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    setAccordionState(button, isExpanded);

    button.addEventListener('click', () => {
      const currentlyExpanded =
        button.getAttribute('aria-expanded') === 'true';

      setAccordionState(button, !currentlyExpanded);
    });
  });
}
