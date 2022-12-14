const images = document.querySelectorAll('.img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// next.addEventListener('click', ()=>{
//         images.classList.remove('showImg');   
// })

let index = 0;

const showImg = n => {
   for(image of images){
        image.classList.remove(':active');     
     }
     images[n].classList.add(':active');
}


const nextImg = () => {
   if(index == images.length - 1){
      index = 0;
      showImg()
   } else {
      index++;
      showImg();
   }
}



next.addEventListener('click', nextImg());