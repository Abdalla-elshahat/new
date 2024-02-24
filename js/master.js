document.querySelector(".setting-box .toggle .icon").onclick=function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("opend")
}
/* */
let maincolor=localStorage.getItem("opeation-color");
if(maincolor!==null){
    document.documentElement.style.setProperty("--main-color",maincolor);

    document.querySelectorAll(".colors-list li").forEach((li)=>{
        li.classList.remove('active');
        if(li.dataset.color==maincolor){
            li.classList.add('active');
        }
    })

}
/* */
/*بتغير لون ابيدج كلها*/
 let color=document.querySelectorAll(".colors-list li")
color.forEach((li)=>{
    li.addEventListener("click",function(e){
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color);//مهمه
localStorage.setItem("opeation-color",e.target.dataset.color);
e.target.parentElement.querySelectorAll(".active").forEach((li)=>{
    li.classList.remove('active');
})
e.target.classList.add("active")
    })
})
/*بتغير لون ابيدج كلها*/


let rbakg=document.querySelectorAll(".randombackground span")
rbakg.forEach((li)=>{
    li.addEventListener("click",function(e){
e.target.parentElement.querySelectorAll(".active").forEach((li)=>{
    li.classList.remove('active');
})
e.target.classList.add("active");


let bglocal=localStorage.getItem("randombg");
if(bglocal=='true'){
bgopeation=true;
}
else{
bgopeation=false
}

if(e.target.dataset.background=='yes'){
    bgopeation=true;
    randombg();
    localStorage.setItem("randombg",true);
}
else{
    bgopeation=false;
    clearInterval(intervel)
    localStorage.setItem("randombg",false);
}
    })
})

/*landing */
let landing=document.querySelector(".landing-page");
let arry=["1.jpg","2.jpg","3.jpg"];
let intervel;
let bgopeation=true;
if(bgopeation==true){
function randombg(){
 intervel=setInterval(function(){
let randomnumber=Math.floor(Math.random() * arry.length);
landing.style.backgroundImage='url("imges/' + arry[randomnumber] + '")';
},3000)
}
}
randombg();
/*landing */

let ourskills =document.querySelector(".skills");
window.onscroll=function(){
let offsettop=ourskills.offsetTop;//مهمه
let offsettheight=ourskills.offsetHeight//مهمه
let windowheight=this.innerHeight;//مهمه
let windoscrol=this.pageYOffset//مهمه;
if(Math.round(windoscrol) >=( offsettheight + offsettop -windowheight)){//مهمههههههههههههههههه
    let allskills=document.querySelectorAll(".skill-box .progress-skill span");
    allskills.forEach(function(skill){
skill.style.width = skill.dataset.progress;
    })
}
}

let imges=document.querySelectorAll(".gallary img");
imges.forEach((img)=>{
    img.addEventListener('click', function (event) {
        let pop=document.createElement("div");
        pop.className="pop";
        document.body.appendChild(pop)

        let popbox=document.createElement("div");
        popbox.className="pop-box";

        if(img.alt!=null){
            let alttext=document.createElement("h3");
            let imgtext=document.createTextNode(img.alt);
            alttext.appendChild(imgtext);
            popbox.appendChild(alttext);

        }

        let popimg=document.createElement("img");
        popimg.src= img.src;
        popbox.appendChild(popimg);
        document.body.appendChild(popbox);

let buttonclose=document.createElement("span")
let buttontext=document.createTextNode("x");
buttonclose.appendChild(buttontext);
buttonclose.className='close-button';
popbox.appendChild(buttonclose);
})});

document.addEventListener("click",function(e){
if(e.target.className == 'close-button'){
    e.target.parentNode.remove();
    document.querySelector(".pop").remove();
}
})


let bullets=document.querySelectorAll(".nav-bull .bulle");
let links=document.querySelectorAll(".links a");
function commenaction(element){
element.forEach((bullet)=>{
    bullet.addEventListener("click",function(e){
        e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({ behavior: "smooth"});//مهمه بتخليك تعمل السكرول علي الجز الي مدهوله
    });
    });
}
commenaction(links);
commenaction(bullets);
/* */
let bulletscontener=document.querySelector(".nav-bull");
let bulletspan=document.querySelectorAll(".testingopation span");
bulletslocalstorage=localStorage.getItem("testingopation");

if(bulletslocalstorage!==null){
    bulletspan.forEach((span)=>{
        span.classList.remove("active");
    })
    if(bulletslocalstorage === "block"){
        bulletscontener.style.display='block'; 
        document.querySelector(".testingopation .yes").classList.add("active")      
    }
    else{
        bulletscontener.style.display='none';
        document.querySelector(".testingopation .no").classList.add("active") 
    }
}
bulletspan.forEach((span)=>{
    span.addEventListener("click",(e)=>{
        e.target.parentElement.querySelectorAll(".active").forEach((element)=>{
            element.classList.remove('active');
        })
        e.target.classList.add("active");
if(span.dataset.opeation === "show"){
bulletscontener.style.display='block';
localStorage.setItem("testingopation","block");
}
else{
bulletscontener.style.display='none';
localStorage.setItem("testingopation","none");
}
    })
})
/* */

document.querySelector(".reset-opation").onclick = function(){ 
    localStorage.clear();
    window.location.reload();
}



let togglebtn=document.querySelector(".toogle-menue");
let tlinks=document.querySelector(".links");
togglebtn.onclick=function(e){
    e.stopPropagation();
this.classList.toggle("menu-active");
tlinks.classList.toggle("open");
}
document.addEventListener("click",function(ev){
    if((ev.target !== togglebtn) && (ev.target !== tlinks)){
if(tlinks.classList.contains("open")){
togglebtn.classList.toggle("menu-active");
tlinks.classList.toggle("open");
}
    }
})
tlinks.onclick=function(e){
    e.stopPropagation();
}