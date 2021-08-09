import React, {useEffect, useRef} from "react";
import imgSrc from "../../assets/phone.png";
import VideoUrl from '../../assets/girl_video3.mp4'
import {gsap} from "gsap";

export default function HeroPhoneBlock() {
  const phoneRef = useRef(null)
  const videoFile = useRef(0)

  useEffect(()=>{
    function intro(){
      const tl = gsap.timeline()
      tl.fromTo(phoneRef.current, {y:200}, {y:0, duration: 1})
      return tl
    }

    function stopTrigger(){
      const tl = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: phoneRef.current,
          start: 'top top',
          end: '+=1000',
          pin: true,
          scrub: true,
          // onUpdate: self => videoPosition.current = self.progress,
          onEnter: ()=> videoFile.current.play(),
          onLeave: ()=> videoFile.current.pause(),
          onEnterBack: ()=> videoFile.current.play(),
          onLeaveBack: ()=> videoFile.current.pause()
        }
      })
      tl.to(phoneRef.current, {scale: 1.6}, '+=0.2')
      tl.to('.hero-container', {background: 'black', duration: 0.25}, '-=0.5')
      return tl
    }

    const master = gsap.timeline()
    master.add(intro())
    
    setTimeout(()=>{
      master.add(stopTrigger())
    }, 1000)
  })

  
  return (
    <div className="hero-phone-black" ref={phoneRef}>
      <div
        className="hero-phone-template"
        style={{ 
          backgroundImage: `url(${imgSrc})`,
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.8)'
        }}
      >
        <video
          ref={videoFile}
          className="collage-element"
          playsInline=""
          // autoPlay={videoPosition.current}
          // webkit-playsInline
          loop
          src={VideoUrl}
        ></video>
      </div>
    </div>
  );
}
