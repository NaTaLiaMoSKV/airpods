import gsap from 'gsap';

// const body = document.querySelector('body');
const header = document.getElementById('overview__header');

const point1 = document.getElementById('point1');
const point2 = document.getElementById('point2');
const point3 = document.getElementById('point3');

const tooltip1 = document.getElementById('tooltip1');
const tooltip2 = document.getElementById('tooltip2');
const tooltip3 = document.getElementById('tooltip3');

const backBtn = document.querySelector('.read-more.backBtn');
const textBlock1 = document.querySelector('.review__description--first');
const textBlock2 = document.querySelector('.review__description--second');
const image = document.querySelector('.review__image');

point1.addEventListener('click', () => {
  handleImageZoomIn();
  gsap.to(image, { scale: 2.3, x: 250, y: 280, duration: 1 });
  gsap.to(tooltip1, { display: 'block', opacity: 1, duration: 1 });
});

point2.addEventListener('click', () => {
  handleImageZoomIn();
  gsap.to(image, { scale: 2.3, x: 220, y: -180, duration: 1 });
  gsap.to(tooltip2, { display: 'block', opacity: 1, duration: 1 });
});

point3.addEventListener('click', () => {
  handleImageZoomIn();
  gsap.to(image, { scale: 2.3, x: 250, y: -270, duration: 1 });
  gsap.to(tooltip3, { display: 'block', opacity: 1, duration: 1 });
});

function handleImageZoomIn() {
  gsap.to([point1, point2, point3], {
    display: 'none',
    duration: 0,
  });
  gsap.to(header, { opacity: 0, duration: 1 });

  gsap.to(textBlock1, { x: '-200%', duration: 1 });
  gsap.to(textBlock2, { x: '200%', duration: 1 });

  gsap.to(backBtn, { display: 'flex', opacity: 1, duration: 1 });
}

backBtn.addEventListener('click', () => {
  gsap.to(image, { scale: 1, x: 0, y: 0, duration: 1 });
  gsap.to(header, { opacity: 1, duration: 1 });

  gsap.to([tooltip1, tooltip2, tooltip3], {
    display: 'none',
    opacity: 0,
    duration: 0.5,
  });
  gsap.to([backBtn], {
    display: 'none',
    opacity: 0,
    duration: 0.5,
  });

  gsap.to(textBlock1, { x: 0, duration: 1 });
  gsap.to(textBlock2, { x: 0, duration: 1 });

  gsap.to([point1, point2, point3], {
    display: 'block',
    delay: 1,
  });
});
