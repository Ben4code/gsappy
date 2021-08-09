import React from 'react'
import HeroHeader from './HeroHeader'
import HeroCollage from './HeroCollage'
import HeroPhoneBlock from './HeroPhoneBlock'
import HeroUsedBy from './HeroUsedBy'
import HeroBranding from './HeroBranding'
import FeatureSlides from '../FeatureSlides'
import Footer from './Footer'
import Nav from './Nav'

export default function Hero() {
  return (
    <>
    <Nav/>
    <div className="hero-container">
      <HeroHeader/>
      <div className="hero-media">
        <HeroCollage/>
        <HeroPhoneBlock/>
      </div>
      <HeroUsedBy/>
      <HeroBranding/>
      <FeatureSlides/>
      <Footer/>
    </div>
    </>
  )
}
