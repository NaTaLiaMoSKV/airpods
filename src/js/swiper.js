import blackImg1 from '../images/black/black-1.jpg';
import blackImg2 from '../images/black/black-2.jpg';
import blackImg3 from '../images/black/black-3.jpg';
import blackImg4 from '../images/black/black-4.jpg';
import blackImg5 from '../images/black/black-5.jpg';

import blueImg1 from '../images/blue/blue-1.jpg';
import blueImg2 from '../images/blue/blue-2.jpg';
import blueImg3 from '../images/blue/blue-3.jpg';
import blueImg4 from '../images/blue/blue-4.jpg';
import blueImg5 from '../images/blue/blue-5.jpg';

import starlightImg1 from '../images/starlight/starlight-1.jpg';
import starlightImg2 from '../images/starlight/starlight-2.jpg';
import starlightImg3 from '../images/starlight/starlight-3.jpg';
import starlightImg4 from '../images/starlight/starlight-4.jpg';
import starlightImg5 from '../images/starlight/starlight-5.jpg';

import purpleImg1 from '../images/purple/purple-1.jpg';
import purpleImg2 from '../images/purple/purple-2.jpg';
import purpleImg3 from '../images/purple/purple-3.jpg';
import purpleImg4 from '../images/purple/purple-4.jpg';
import purpleImg5 from '../images/purple/purple-5.jpg';

import orangeImg1 from '../images/orange/orange-1.jpg';
import orangeImg2 from '../images/orange/orange-2.jpg';
import orangeImg3 from '../images/orange/orange-3.jpg';
import orangeImg4 from '../images/orange/orange-4.jpg';
import orangeImg5 from '../images/orange/orange-5.jpg';

const colorItems = document.querySelectorAll('.color__item');
const images = document.querySelectorAll('.swiper-image');

colorItems.forEach(item => {
  item.addEventListener('click', () => {
    colorItems.forEach(i => {
      i.classList.remove('active');
    });
    item.classList.add('active');

    const colorId = item.id;
    let newPaths = [];

    switch (colorId) {
      case 'black':
        newPaths = [blackImg1, blackImg2, blackImg3, blackImg4, blackImg5];
        break;
      case 'blue':
        newPaths = [blueImg1, blueImg2, blueImg3, blueImg4, blueImg5];
        break;
      case 'starlight':
        newPaths = [
          starlightImg1,
          starlightImg2,
          starlightImg3,
          starlightImg4,
          starlightImg5,
        ];
        break;
      case 'purple':
        newPaths = [purpleImg1, purpleImg2, purpleImg3, purpleImg4, purpleImg5];
        break;
      case 'orange':
        newPaths = [orangeImg1, orangeImg2, orangeImg3, orangeImg4, orangeImg5];
        break;
      default:
        break;
    }

    newPaths.forEach((path, index) => {
      if (images[index]) {
        images[index].src = path;
      }
    });
  });
});
