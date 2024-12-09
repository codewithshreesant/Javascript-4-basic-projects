
const form=document.querySelector('.form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // console.log("form submitted");

    let height=parseInt(document.querySelector('#height').value);
    let weight=parseInt(document.querySelector('#weight').value);
    // console.log("Height ", typeof(height));
    // console.log("Weight ", typeof(weight));
    let result=document.querySelector('.result');
    if(height == '' || height < 0 || isNaN(height))
    {
        result.innerHTML=`${height}`;
    }else if(weight  == '' || weight < 0 || isNaN(weight))
    {
        result.innerHTML=`${weight}`;
    }else{
        let bmi=weight/((height*height)/1000).toFixed(2);
        result.innerHTML=bmi;
    }


})