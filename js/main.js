"use strict"; //'use strict'

// jquery

var str = 'L O A D I N G . . .';
var typing = ' ';
var i = 0;
(function type() {
  if(i < str.length){
    typing = typing+str.charAt(i);
    $('#type').text(typing+'|');
  }else{
    $('#type').text(typing);
    return false;
  }
  var ran = Math.floor(Math.random() * 200) + 50;//this gives a random delay between each character so it feels more realistic
  //set ran to a fixed number if you want consistent speed.
  setTimeout(function(){
    type();
  }, ran)
  i++;
}());

$(window).on('load', function() {
  setTimeout(function() {
      document.body.classList.remove('no-scroll');
  }, 9900);
});


// js
const blink = document.querySelectorAll(".yellow")
const loadingPage = document.querySelector(".load")
const sparkle = document.querySelectorAll(".sparkle")
const section = document.querySelectorAll(".section")
const title = document.querySelector(".title")
console.log(section)

function colorChange(){
    blink.forEach(element => {
        element.classList.add("colorChange")
    });
    sparkle.forEach(element => {
        element.classList.add("colorChange")
    });


}
self.setTimeout("colorChange()",4600);

function toTop(){
  loadingPage.classList.add("totop")
  section.forEach(element => {
    element.style.display = "block";
  });
  
}
self.setTimeout("toTop()",9500);

function on(){
  title.classList.add("on")
}
self.setTimeout("on()",9900);


const projects = document.querySelectorAll('.page');
  console.log(projects);

  const projectNav = document.querySelectorAll(".navi");
  console.log(projectNav,"네비게이션")


for(let i=0;i<projectNav.length; i++){
  projectNav[i].addEventListener("click",e=>{
    e.preventDefault();
  for(let el of projectNav){
    el.classList.remove('on')
  };
  for(let el of projects){
    el.classList.remove('on')
  };
    projectNav[i].classList.add('on');
    projects[i].classList.add('on');
  })
} 





let act = (idx,projectNav) => {//스크롤이벤트 발생시 .on지우고 채우는 함수
  for(let el of projectNav){
      el.classList.remove("on");
  }
  projectNav[idx-2].classList.add("on");
} 

// 마우스 효과
document.body.addEventListener("mousemove", evt => {
  const mouseX = evt.clientX;
  const mouseY = evt.clientY;
  
  gsap.set(".cursor", {
    x: mouseX,
    y: mouseY
  })
  
  gsap.to(".shape", {
    x: mouseX,
    y: mouseY,
    stagger: -0.125
  })
})

// 페이지에 on붙이기
let nowHeight;
nowHeight = window.innerHeight;
window.addEventListener('resize',()=>{
  nowHeight = window.innerHeight;
})
console.log(nowHeight)

const sections = document.querySelectorAll(".page");
console.log(sections,"페이지 수")
for(let i=0;i<sections.length;i++){
    sections[i].style.height = nowHeight + 'px';
    sections[i].classList.add('on')
}


window.addEventListener("scroll",()=>{
    let scroll = document.querySelector("html").scrollTop;
    for(let i=0;i<section.length;i++){
      if(scroll>=i*nowHeight && scroll<(i+1)*nowHeight){
          activation1(i,sections)
      }   
  }
})
let activation1 =(index,sections)=>{
  for(let el of sections){
      el.classList.remove("on")
  }
  sections[index].classList.add("on")
}


// navigation버튼 클릭시 해당페이지로 이동
for(let k=0;k<projectNav.length;k++){
    projectNav[k].addEventListener("click",e=>{
        e.preventDefault();
        window.scroll({
            top:(k+2)*nowHeight,
            left:0,
            behavior:'smooth'
        })
    })
}

window.addEventListener("scroll", ()=>{

  let scroll = document.querySelector("html").scrollTop;
  
  for(let i=0; i<sections.length; i++){
      if(scroll >= 0 && scroll < (i+1)*nowHeight){
          activation1(i,sections);
      }
  }


  let contents = document.querySelectorAll(".page")
  for(let i=0; i<contents.length; i++){
      contents[i].addEventListener("wheel", e=>{
          if(e.wheelDelta > 0){
              let prev = e.currentTarget.previousElementSibling.offsetTop;
              window.scroll({
                  top: prev,
                  left: 0,
                  behavior: "smooth"
                  
              });
          }else if(e.wheelDelta < 0){
              let next = e.currentTarget.nextElementSibling.offsetTop;
              window.scroll({
                  top: next,
                  left: 0,
                  behavior: "smooth"
              });
          }
      });
  };
})






// 숨긴nav보이기
let sticky = document.querySelector(".sticky")
window.addEventListener('scroll',()=>{ // 윈도우에서 스크롤을 움직이면
  const projectPage = document.querySelectorAll(".project")
  let scroll = document.querySelector('html').scrollTop; // 스크롤 값구하기

  for(j=2;j<projects.length-1;j++){//스크롤 값에 따라서 클래스 함수발생.
      if(scroll>=(j*nowHeight) && scroll <= [(j+1)*nowHeight]){
          act1(j,projectNav);
          sticky.classList.add("on")
      }
      if(scroll<(2*nowHeight) || scroll>(5*nowHeight)){
          sticky.classList.remove("on")
      }
  }
})
let act1 = (idx,projectNav) => {//스크롤이벤트 발생시 .on지우고 채우는 함수
  for(let el of projectNav){
      el.classList.remove("on");
  }
  projectNav[idx-2].classList.add("on");
} 

window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

var s = Splitting();
