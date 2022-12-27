const btn = document.querySelector('.btn'),
      form = document.querySelector('.form'),
      about = document.querySelector('.about'),
      inputArr = document.querySelectorAll('.input'),
      btnBuy = document.querySelector('.btn-buy'),
      done = document.querySelector('.done');


btn.addEventListener('click', ()=>{
    about.style.display = 'block';
    btn.style.display = 'none';   
});

       
let isValid = true;

const chekInput = () => {
    inputArr.forEach((i) => {
        if(!i.value){
            isValid = false; 
        }      
    });   
    if(isValid){
        showInfo()
    } else {       
        alert('Вы заполнили не все поля')
    }  
};

const showInfo = (e) =>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
        let info = document.createElement('p')
        info.innerHTML = `<p>Спасибо за заказ! \n Количество товара: ${data.product} \n Отделение НП: ${data.poshta}</p>`
        done.appendChild(info)
        form.style.display = 'none';
};

form.addEventListener('submit', showInfo);
btnBuy.addEventListener('click', chekInput);