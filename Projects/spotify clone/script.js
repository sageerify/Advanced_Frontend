
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        alert(`Playing ${card.querySelector('h3').textContent}`);
    });
});
