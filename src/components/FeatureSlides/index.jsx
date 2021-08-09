import React, {useRef, useState, useEffect} from 'react'
import FeatureSlide from './FeatureSlide'
import {gsap} from 'gsap'
import girl_full1 from '../../assets/girl_full1.jpg'
import girl_full2 from '../../assets/girl_full2.jpg'
import girl_full3 from '../../assets/girl_full3.jpg'
import cn from 'classnames'

const featureSlides = [
  {imageUrl: girl_full1, title: 'Captivating', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, delectus'},
  
  {imageUrl: girl_full2, title: 'Immersive', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, delectus, Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, delectus'},
  
  {imageUrl: girl_full3, title: 'Breath Taking', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, delectus'}
]

export default function FeatureSlides() {
  const [activeFeatureIndex, setFeatureIndex] = useState(0)
  const featureSliderRef = useRef(null)
  const featureSlidesRightRef = useRef(null)

  useEffect(() => {
    function stopTrigger(){
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: featureSlidesRightRef.current,
          start: 'top top',
          end: ()=>  `+=${featureSliderRef.current.offsetHeight}`,
          scrub: true,
          pin: true
        }
      })
      return tl
    }
    const master = gsap.timeline()
    master.add(stopTrigger())
  }, [])

  return (
    <div ref={featureSliderRef} className="feature-slides-container">
      <div className="feature-slides-left">
        {featureSlides.map((feature, index)=>(
          <FeatureSlide
            updateActiveImage={setFeatureIndex}
            key={feature.imageUrl}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
      <div ref={featureSlidesRightRef} className="feature-slides-right">
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
      </div>
    </div>
  )
}


function RenderImages ({activeFeatureIndex}){
  return featureSlides.map(({imageUrl}, index)=> (
    <img
    className={cn({'as-primary': activeFeatureIndex === index})} 
    src={imageUrl} 
    key={imageUrl}
    style={{backgroundImage: `url(${imageUrl})`}}
    alt="slide no" />
  ))
}