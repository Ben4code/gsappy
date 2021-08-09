import React, {useEffect, useRef} from 'react'
import { gsap } from 'gsap'

export default function HeroBranding() {
  const ref = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top center",
        scrub: true,
      },
    });

    tl.to('.hero-container', {background: 'black', duration: 0.25}, '-=0.5')
    tl.to(".hero-branding", {background: "white", duration: 0.25, color: '#000'}, "-=0.5");
  }, [])

  return (
    <div ref={ref} className="hero-branding hero-text-section">
      <h1 id="hero-branding-text">Single ladies are waiting for you and are just a click away.</h1>
    </div>
  )
}
