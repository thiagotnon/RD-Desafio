export default function initGlider() {
  window._ = new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    draggable: true,
    dots: '.dots',
    scrollLock: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next',
    },
  });
}
