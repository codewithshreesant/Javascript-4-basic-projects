
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