
# Project 1

# Color Changer

## Solution

```javascript
    
const allcont=document.querySelectorAll('.color');

Array.from(allcont).forEach((btn, i)=>{
    btn.addEventListener('click', (e)=>{
        // console.log(e.target);
        if(e.target.id === "purple")
        {
            document.body.style.backgroundColor=e.target.id;
        }else if(e.target.id === "blue"){
            document.body.style.backgroundColor=e.target.id;
        }else if(e.target.id === "green"){
            document.body.style.backgroundColor=e.target.id;
        }else if(e.target.id === "yellow"){
            document.body.style.backgroundColor=e.target.id;
        }
    })
})
```

# Project 2

# BMI  CALCULATOR

# # Solution

```javascript
    
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
```

#  Project 3

# DIGITAL CLOCK

##  Solution

```javascript
    
// let  date=new Date();
// const actual=date.toLocaleTimeString();
// console.log(actual)

setInterval(function () {
    let date = new Date();
    const actual = date.toLocaleTimeString();
    // console.log(actual);
    document.querySelector('.show_clock').innerHTML=actual;
}, 1000);
```


