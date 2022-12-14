const btnOne = document.querySelector('.btnOne');
const btnTwo = document.querySelector('.btnTwo');


const actionOne = btnOne.getAttribute('action');
const actionTwo = btnTwo.getAttribute('action');


const chekOne = () => {
    if(actionOne.indexOf('https://') == -1 && actionOne.indexOf('http://') == -1){
        btnOne.setAttribute('action', `https://${actionOne}`);
    } else {
        btnOne.setAttribute('action', `${actionOne}`);
    }
};



const chekTwo = () => {
    if(actionTwo.indexOf('https://') == -1 && actionTwo.indexOf('http://') == -1){        
        btnTwo.setAttribute('action', `https://${actionTwo}`);
    } else {
        btnTwo.setAttribute('action', `${actionTwo}`);
    }
};

chekOne();
chekTwo();




// const chekOne = () =>{
//     if(btnOne.innerHTML.action !== 'https://'){       
//         const act = btnOne.getAttribute('action');
//         btnOne.setAttribute('action', `https://${act}`);   
//     }
// };