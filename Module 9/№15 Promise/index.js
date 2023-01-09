const input = document.querySelector('.input'),
      post = document.querySelector('.post'),
      btnId = document.querySelector('.btnId'),
      btnComments = document.querySelector('.btnComments'),
      commentsBlock = document.querySelector('.commentsBlock');

async function getResponse(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let content = await response.json(); 
      
    const responseComms = await fetch('https://jsonplaceholder.typicode.com/comments');
    let comments = await responseComms.json();


    btnId.addEventListener('click', ()=>{   
        const inputValue = input.value;  
        const searchPost = content.find((el)=> el.id == inputValue);
        
        post.innerHTML = `<h5>${searchPost.title}</h5> <h5>${searchPost.body}</h5> `;       
    });
       
   
    let commKey;
    btnComments.addEventListener('click', ()=>{
        for(commKey in comments){   
            commentsBlock.innerHTML = `<h5>Комментарии: ${comments[commKey].name}</h5>`
        }
    });

};
getResponse()

.catch(error => alert(error.message));