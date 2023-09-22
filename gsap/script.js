gsap.to(".section1 .text1 span:nth-child(2)",{
    x:-26,
    duration:2,
    delay:1
})
gsap.to(".section1 .text1 span:nth-child(3)",{
    x:-51,
    duration:2,
    marginRight:-50,
    delay:2
})


let slide_indicator=document.querySelectorAll(".image-slider span")
console.log(slide_indicator)
let images=document.querySelector(".images");
let image_slides=document.querySelectorAll(".images img")
let counter=0;
let totalImages=3;
const size=image_slides[0].clientWidth;


let firstImg=(index)=>{
    slide_indicator[index].style.backgroundColor="#7b7272";
    slide_indicator[1].style.backgroundColor="white";
    slide_indicator[2].style.backgroundColor="white";
    images.style.transition="transform 1s ease-in-out"
    images.style.transform='translateX('+(-size*index)+'px)';
}
let middleImg=(index)=>{
    slide_indicator[index].style.backgroundColor="#7b7272";
    slide_indicator[0].style.backgroundColor="white";
    slide_indicator[2].style.backgroundColor="white";
    images.style.transition="transform 1s ease-in-out"
    images.style.transform='translateX('+(-size*index)+'px)';
}
let lastImg=(index)=>{
    slide_indicator[index].style.backgroundColor="#7b7272";
    slide_indicator[0].style.backgroundColor="white";
    slide_indicator[1].style.backgroundColor="white";
    images.style.transition="transform 1s ease-in-out"
    images.style.transform='translateX('+(-size*index)+'px)';
}
slide_indicator.forEach((item,index)=>{
    
    item.addEventListener("click",(e)=>{
      if(index===2){
        lastImg(index)
      }
      else if(index===1){
        middleImg(index)
      }
      else{
        firstImg(index)
      }
    })
})
gsap.from(".right-side .boxes .box",{
    opacity:0,
    scale:0,
    duration:2,
    stagger:0.5,
    scrollTrigger:{
        trigger:".right-side .boxes .box",
        scroller:"body",
        // markers:true,
        // start:"top 80%",
        // end:"top 90%"
    }
})
// menuIcon
let right_menu_icon=document.getElementById("menu-icon");
let right_menu=document.querySelector(".rightMenu");
right_menu_icon.addEventListener("click",()=>{
    right_menu.style.display="block";
})
let close_btn=document.querySelector(".ri-close-line");
close_btn.addEventListener("click",()=>{
    right_menu.style.display="none";
})