let drops = document.querySelector(".drops")
for (let i = 0; i < 75; i++) {
    drops.innerHTML += `<div class="drip"></div>`
    let drip = document.querySelectorAll(".drip")
    drip[i].style.animationDelay = `${0.13333333333333333 * i}s`
    
   
}
let range = document.querySelector(".range")
range.addEventListener("click",(e)=>{
let color = Math.random() * 360;
let drip = document.querySelectorAll(".drip")
  drip.forEach((d)=>{
      
      d.style.borderColor=`hsl(${color},100%,50%)`
  })
})