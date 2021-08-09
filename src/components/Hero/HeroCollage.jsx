import React, {useEffect} from "react";
import { photos } from "../../assets/sampleData";
import { gsap } from 'gsap'
// import LeftVideo from '../../assets/girl_video.mp4'
// import RightVideo from '../../assets/girl_video2.mp4'

// function VideoElement({ src }) {
//   return (
//     <div className="hero-element">
//       <video
//         className="collage-element"
//         playsInline=""
//         autoPlay
//         // webkit-playsInline
//         loop
//         src={src}
//       ></video>
//     </div>
//   );
// }

function ImageElement({ src }) {
  return (
    <div className="hero-element">
      <img className="collage-element" src={src} alt="element img" />
    </div>
  );
}

export default function HeroCollage() {
  const leftImages = photos.slice(0, 3);
  const rightImages = photos.slice(3, photos.length);

  useEffect(()=> {

    const tl = gsap.timeline({
      delay: 0.5
    })

    tl.fromTo('.hero-element', {y: 300}, {y: 0, duration: 1, delay: function(index){
      return 0.2 * index
    }})
  }, [])

  return (
    <div className="hero-collage">
      <div className="left-column">
        {leftImages.map((src) => (
          <ImageElement key={src} src={src} />
        ))}
      </div>

      {/* <VideoElement src={LeftVideo} /> */}

      <div className="right-column">
        {rightImages.map((src) => (
          <ImageElement key={src} src={src} />
        ))}
      </div>
      {/* <VideoElement src={RightVideo} /> */}
    </div>
  );
}
