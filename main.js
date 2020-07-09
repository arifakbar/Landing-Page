var startBtn = document.querySelector('#startBtn');
var overlay = document.querySelector('#overlay');
var mainPage = document.querySelector('#mainPage');
startBtn.addEventListener('click', function () {
    gsap.to('#openingPage h1', { opacity: 0, y: -100, duration: 1, ease: "expo.ease" });
    gsap.to('#openingPage h4', { delay: 0.5, opacity: 0, scale: 0, duration: 1, ease: "expo.ease" });
    gsap.to('#openingPage button', { delay: 1, opacity: 0, scale: 2, duration: 1, ease: "expo.ease" });
    gsap.to('#openingPage', { delay: 1.8, opacity: 0, y: '-100%', duration: 1, ease: "expo.ease" });
    setTimeout(() => { overlay.style.display = 'flex'; }, 2000);                                                //VIMP
    gsap.from('#parts', { delay:2.1,stagger: 0.3, duration: 2, opacity: 0, x: 20, ease: "expo.inOut" });
    gsap.from('#svgs h3', { opacity: 0, y: 40, duration: 1.5, delay: 4.1, ease: "expo.inOut" });
    gsap.from('#svgs h5', { opacity: 0, duration: 2, delay: 5, ease: "expo.inOut", scale: 1.5 });
    gsap.to('#svgs', { opacity: 0, delay: 7.3, y: '-100px', duration: 2, ease: "expo.inOut" });
    gsap.to('#parts', { stagger: 0.1, duration: 2, delay: 8.3, opacity: 0, y: "-100%", ease: "expo.inOut" });
    gsap.to('#overlay', { opacity: 0, delay: 10.3, x: '-100%', ease: "expo.inOut" });
    setTimeout(() => { mainPage.style.display = 'flex'; }, 10000); 
    gsap.from('#mainPage #nav div', {stagger:0.3,delay:10.2, duration: 1.5, opacity: 0, x: 20, ease: "expo.inOut" });
    gsap.from('#rightRotatedMenus', {stagger:0.3, opacity: 0, delay: 10.7, y: '-100%',duration:2, ease: "expo.inOut" });
    gsap.from('#rightMain,#leftMainImg', { opacity: 0, delay: 11.5, scale:0, duration: 1.5, ease: "expo.inOut" });
    gsap.from('#headingMain,#paraMain', { opacity: 0, delay: 12.5, y:'100px', duration: 1.5, ease: "expo.inOut" });
    gsap.from('#scrollDown', { opacity: 0, delay: 13.5, x:'100px', duration: 1, ease: "expo.inOut" });
});



