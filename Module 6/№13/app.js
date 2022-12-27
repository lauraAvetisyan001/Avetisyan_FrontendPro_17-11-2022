const images = document.querySelectorAll('.img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

const showImg = n => {
   for(image of images){
      image.classList.remove('active');
   }
   images[n].classList.add('active');
};


// const showImg = n => {
//    for(image of images){
//     image.classList.remove('activ');
//    }
//    image[n].classList.add('activ');
// }


const nextSlide = () => {
   if(index == images.length - 1){
      index = 0;
      showImg();
   } else {
      index++;
      showImg();
   }
}

const prevSlide = () => {
   if(index == 0){
      index = images.length - 1
      showImg()
   } else {
      index--;
      showImg();
   }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

