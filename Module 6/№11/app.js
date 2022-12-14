const images = document.querySelector('.images');

function getRandomImg() {
    const random = Math.floor(Math.random() * 9);
      return '<img src="img/img'+random+'.jpg">';
    
}

images.innerHTML = getRandomImg();