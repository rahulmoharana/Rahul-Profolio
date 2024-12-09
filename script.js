
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
$(".intro h1").scramble(2000, 20, "alphabet", true);
const headings = document.querySelectorAll(".skill-con h2")
headings.forEach((elem)=>{
    elem.addEventListener("mouseover",function(){
        elem.style.backgroundColor=elem.attributes.color.value;
        elem.style.color="black"
    }),
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor="transparent";
        elem.style.color="";
        
    })
})
gsap.from("nav a" ,{
    y:200,
    opacity:0,
    duration:.5,
    

})
let tl = gsap.timeline({
    scrollTrigger: {
        trigger:'#skills',
        // markers:true,
        // pin:true,
        start:'20% 50%',
        end:'50% 50%',
        scrub:true,
        
    }
});


tl.to("#css",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#java",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#javascript",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#c",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#canva",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#frontend",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#backend",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#sql",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#node",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#express",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#figma",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#html",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#lenis",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#tailwind",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#gsap",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#uiux",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#api",{
    opacity:1,
    filter:"blur(0px)"
})
.to("#react",{
    opacity:1,
    filter:"blur(0px)"
})

let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        // markers:true,
        start:"0% 50%",
        end:"20% 50%",
        scrub:1

    }
})
tl2.to(".line",{
    width:"100%"
})


const circle= document.querySelector(".circle");
circle.addEventListener("mouseenter",function(){
    gsap.to(".overley",{
        y:-120,
        borderRadius:"0"
    })
})
circle.addEventListener("mouseleave",function(){
    gsap.to(".overley",{
        y:0,
        borderRadius:"50%"
    })

})
const project = document.querySelector("#projects");
const rect = document.querySelector(".rect")
project.addEventListener("mouseenter",function(){
    rect.style.transform = "scale(1)"

})
project.addEventListener("mousemove",function(e){
   rect.style.left = e.x +10 +"px",
   rect.style.top = e.y +"px"

})
project.addEventListener("mouseleave",function(){
    rect.style.transform = "scale(0)"

})
const links = document.querySelectorAll(".links a")
links.forEach((elem)=>{
    elem.addEventListener("mouseover",function(){
        rect.style.backgroundImage ="url('"+ elem.attributes.image.value+"')"
        elem.style.backgroundColor="white"
        elem.style.color="black"

    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor="black"
        elem.style.color="white"
    })
})
const tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:'#projects',
        // markers:true,
        // pin:true,
        start:'top 20%',
        end:'30% 50%',
        scrub:true,
        staggeer:0.25
    }
})
const h1links = document.querySelectorAll(".links a h1")
h1links.forEach((elem)=>{
    tl3.from(elem,{
        y:200,
        rotate:20,
        transformOrigin:"left"
    },"a")

})
const paralinks = document.querySelectorAll(".links a p")
paralinks.forEach((elem)=>{
    tl3.from(elem,{
        y:200,
        rotate:20,
        transformOrigin:"left"
        

    },"a")

})
const tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#contact",
        markers:true,
        start:"0% 50%",
        end:"50% 60%",
        scrub:1
    }
})
tl4.from(".card",{
   
    onStart:function(){
        $(".main-content p").scramble(2000, 20, "alphabet", true);
    }
})















