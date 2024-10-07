// import gsap from 'gsap';

// const point1 = document.getElementById('point1');
// const point2 = document.getElementById('point2');
// const tooltip1 = document.getElementById('tooltip1');
// const tooltip2 = document.getElementById('tooltip2');
// const backBtn = document.getElementById('backBtn');
// const text = document.querySelector('.text');
// const image = document.querySelector('.image');

// point1.addEventListener('click', () => {
//   // Анимация увеличения изображения и появления подсказки
//   gsap.to(image, { scale: 2, x: -100, y: -100, duration: 1 });
//   gsap.to(text, { x: '-200%', duration: 1 });
//   gsap.to(tooltip1, { display: 'block', opacity: 1, duration: 1 });
//   gsap.to(backBtn, { display: 'block', opacity: 1, duration: 1 });
// });

// point2.addEventListener('click', () => {
//   // Анимация увеличения изображения и появления подсказки
//   gsap.to(image, { scale: 2, x: -100, y: -100, duration: 1 });
//   gsap.to(text, { x: '-200%', duration: 1 });
//   gsap.to(tooltip2, { display: 'block', opacity: 1, duration: 1 });
//   gsap.to(backBtn, { display: 'block', opacity: 1, duration: 1 });
// });

// backBtn.addEventListener('click', () => {
//   // Возврат в исходное состояние
//   gsap.to(image, { scale: 1, x: 0, y: 0, duration: 1 });
//   gsap.to(text, { x: '0%', duration: 1 });
//   gsap.to(tooltip1, { display: 'none', opacity: 0, duration: 1 });
//   gsap.to(tooltip2, { display: 'none', opacity: 0, duration: 1 });
//   gsap.to(backBtn, { display: 'none', opacity: 0, duration: 1 });
// });
