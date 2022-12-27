const form = document.querySelector('#form'),
      inputArr = document.querySelectorAll('.input'),
      content = document.querySelector('.content');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    fillTable(content, inputArr);
    form.style.display = 'none';
 });

function fillTable(content, inputArr){
    const header = document.createElement('tr');
    const names = ['Имя', 'Фамилия', 'Пол', 'Город', 'Адрес', 'Английский', 'Украинский', 'Французский'];

    names.forEach((name) =>{
        const nameTd = document.createElement('td');
        nameTd.innerHTML = name;
        header.appendChild(nameTd);
    });
    content.appendChild(header);


    const tr = document.createElement('tr');
    for(let i = 0; i < inputArr.length; i++){       
        let td = null;
        
        switch(inputArr[i].type){
            case 'radio':  
                if(inputArr[i].checked){ 
                    td = document.createElement('td');
                    td.innerHTML = inputArr[i].value;       
                } 
            break;
            case 'checkbox':
                td = document.createElement('td');               
                if(inputArr[i].checked){
                     td.innerHTML = '+';
                } else {
                     td.innerHTML = '-';
                }
            break;
            default: 
            td = document.createElement('td');
            td.innerHTML = inputArr[i].value;
        }  
        if(!!td){
        tr.appendChild(td) ;
        }
    }
    content.appendChild(tr);
}