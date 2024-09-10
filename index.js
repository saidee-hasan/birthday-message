// wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {

    // hide elements initially
    const s1p1 = document.querySelector(".s1_1");
    const s1p2 = document.querySelector(".s1_2");
    s1p1.style.opacity = 0;
    s1p2.style.opacity = 0;

    document.querySelector('.s2').style.display = "none";
    document.querySelector('.s3').style.display = "none";
  
    const timeline = gsap.timeline({paused: true});
  
    // add animations to the timeline
    timeline.to(".s1", {duration: 0.5, opacity: 1, display: 'flex'})
            .to(".s1_1", {opacity: 1, duration: 1, delay: "-=1"})
            .to(".s1_1", {opacity: 0, duration: 1, delay: "-=1"})
            .to(".s1_2", {opacity: 1, duration: 1, delay: "-=1" })
            .to(".s1", {duration: 1, opacity: 0, display: 'none'})
            .to(".s2", {duration: 1, opacity: 1, display: 'block'})
            .to("#giftBtn", {duration: 1, scale: 1.1, repeat: -1, yoyo: true});
  
    // play the timeline after 3 seconds
    setTimeout(() => {
      timeline.play();
    }, 3000);
  

    document.querySelector('#giftBtn').addEventListener('click', () => {
        document.getElementById("myAudio").muted = false;
        document.getElementById("myAudio").play();

      // timeline for the gift button click event
      const giftTimeline = gsap.timeline();
      giftTimeline.to(".s2", {duration: 1, opacity: 0, display: 'none'})
                  .to(".s3", {duration: 1, opacity: 1, display: 'block'});
    });
  
  });
