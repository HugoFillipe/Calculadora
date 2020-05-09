let btnN = document.querySelectorAll('.btnN')
let btnS = document.querySelectorAll('.btnS')
let btnEqual = document.querySelector('.btn-equal')
let btnClear = document.querySelector('.btn-clear')
let screen = document.querySelector('.screen')

btnN.forEach(btn => {
  btn.addEventListener('click',e =>{
    let valuer = btn.innerHTML
    screen.value += valuer
  })
});



btnS.forEach(btn => {
  btn.addEventListener('click',e =>{
    let valuer = btn.innerHTML
    screen.value += valuer
    console.log(valuer)
  })
});



btnClear.addEventListener('click',e =>{
  screen.value = null
})



btnEqual.addEventListener('click',e=>{
  screen.value = eval(screen.value)
})