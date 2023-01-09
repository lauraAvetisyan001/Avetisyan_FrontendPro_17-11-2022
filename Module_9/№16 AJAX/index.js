let url = fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then(function (resp) {
         return resp.json() 
    })
    .then(function (data) {    

       document.querySelector('.city-name').innerHTML = data.name;
       document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&deg;';
       document.querySelector('.pressure').innerHTML = data.main.pressure;
       document.querySelector('.description').innerHTML = data.weather[0]['description'];
       document.querySelector('.humidity').innerHTML = data.main.humidity;
       document.querySelector('.speed').innerHTML = data.wind.speed;
       document.querySelector('.deg').innerHTML = data.wind.deg +'&deg;';
       document.querySelector('.icon').innerHTML = `<img src='http://openweathermap.org/img/w/10d.png'>`;    
    })