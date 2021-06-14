export default function windowSize() {
  displayWindowSize()

  function displayWindowSize() {
    const width = document.documentElement.clientWidth;
    const dots = document.querySelector('.glider-dots');
    const gliderBlock = document.querySelector('.glider');
    const gliderTrack = document.querySelector('.glider-track');
    const cards = document.querySelectorAll('.card');

    if (width >= 769) {
      cards.forEach((card) => card.classList.remove('glider-slide'));
      cards.forEach((card, i) => card.classList.remove(`right-${i}`));
      cards.forEach((card) => card.removeAttribute('data-gslide'));
      cards.forEach((card) => card.removeAttribute('style'));
      dots.style.display = 'none';
      gliderBlock.classList.remove('draggable');
      gliderTrack.classList.add('grid-cards');
      gliderTrack.classList.remove('glider-track');
      return
    }
    if (width < 769) {
      gliderTrack.classList.add('glider-track');
      gliderTrack.classList.remove('grid-cards');
      dots.style.display = 'flex';
    }
  }


}
