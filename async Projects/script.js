

const randomColor=()=>{
    let hexColors="0123456789ABCDEF";
    let color="#";

    for(let i=0; i<6; i++)
    {
        color += hexColors[Math.floor(Math.random()*16)]
    }
    return color;
}

let intervalId;

function startChangingColor(){
    if(!intervalId)
    {
        intervalId=setInterval(changeColor, 1000);
    }

    function changeColor()
    {
        document.body.style.backgroundColor=randomColor();
    }
}

function stopChangingColor(){
    clearInterval(intervalId);
    intervalId=null;
}

const start=document.querySelector('#start');

const stop=document.querySelector('#stop');

start.addEventListener('click', startChangingColor);

stop.addEventListener('click', stopChangingColor);


