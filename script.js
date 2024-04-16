

let circle = document.querySelector(".circle")
let QR = document.querySelector(".scanPage")

QR.addEventListener(`mousemove`, function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;

    setTimeout(function(){
        circle.style.opacity = 1
        // circle.style.scale = 1
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    },200);
});

QR.addEventListener("mouseleave",function () {
    circle.style.opacity =0
})

gsap.from(".hiddenDiv h1",{
    y:100,
    duration:1,
})
gsap.from(".hiddenDiv p",{
    y:100,
    duration:1,
    opacity:1
})

gsap.to(".movingiImgs",{
    x:-2000,
    duration:50,
    ease:"linear",
    repeat:-1,
})

 gsap.registerPlugin(ScrollTrigger);

    gsap.to(".coins-heading h1,p", {
        opacity: 0,
        y:500,
        scale:0.9
    });

    ScrollTrigger.create({
        trigger: ".coins-heading",
        start: "bottom bottom", 
        end: "center center", 
        onEnter: function() {
            gsap.to(".coins-heading h1,p", {opacity: 1, duration: 1,y:0,scale:1,stagger:.2,}); 
        },
        onLeaveBack: function() {
            gsap.to(".coins-heading h1,p", {opacity: 0, duration: 1,y:200,scale:0}); 
        },
        scrub: true,
        stagger:1,
    });



    gsap.registerPlugin(ScrollTrigger);

    gsap.to("coinscoins", {
        scale:.3,
    });

    ScrollTrigger.create({
        trigger: ".coins", // Triggering element
        start: "bottom 60%", // Jab screen ke center se shuruwat karein
        end: "center center", // Jab screen ke center pe pohunchein
        onEnter: function() {
            gsap.to(".coins ", {opacity: 1, duration: 1,scale:1}); 
        },
        onLeaveBack: function() {
            gsap.to(".coins", {opacity: 0, duration: 1,scale:0});
        },
        scrub: true, 
        stagger:1,
    });