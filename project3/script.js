
// let  date=new Date();
// const actual=date.toLocaleTimeString();
// console.log(actual)

setInterval(function () {
    let date = new Date();
    const actual = date.toLocaleTimeString();
    // console.log(actual);
    document.querySelector('.show_clock').innerHTML=actual;
}, 1000);