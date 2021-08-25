const btn=document.querySelector("button");
const color=document.querySelector("#color");
const section=document.querySelector(".bg")
const hex=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
let hexnum='#';

btn.addEventListener("click",()=>{ 
    color.textContent=getRandomNum(hex,hexnum);
    section.style.backgroundColor=getRandomNum(hex,hexnum);;
})

function getRandomNum(hex,hexnum){
    let index=0;
    for(let i=0;i<6;i++){
        index=Math.floor(Math.random()*hex.length);
        hexnum+=hex[index];
    }
    return hexnum;
}