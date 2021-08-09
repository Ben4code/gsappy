import React, {useState, useEffect} from 'react';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Hero from './components/Hero'
import "./styles/App.scss";

function App() {
  const [loader, setLoader] = useState(true)

  useEffect(()=> {
    setTimeout(()=>{
      setLoader(false)
    }, 500);
  }, [])

  useEffect(()=> {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  return loader ? (
    <div className="loader"/>
  ): (
    <div>
      <Hero/>
    </div>
  )
}

export default App;
