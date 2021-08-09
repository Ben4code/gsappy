import React, {useRef, useEffect} from 'react'
import useOnScreen from '../../hooks/useOnScreen'

export default function Index({
  title,
  description,
  index,
  updateActiveImage
}) {
  const ref = useRef(null)
  const onScreen = useOnScreen(ref, '0px')

  useEffect(() => {
    if(onScreen){
      updateActiveImage(index)
    }
  }, [onScreen, index, updateActiveImage])

  return (
    <div ref={ref} className='feature-slide'>
      <h3 className="feature-slide-title">{title}</h3>
      <p className="feature-slide-description">{description}</p>
    </div>
  )
}
