import React, {useState, useRef, useEffect} from 'react'
import {Button} from '../Button'
import {motion} from 'framer-motion'
import {HeroSection,
HeroWrapper,
HeroSlide,
HeroSlider,
HeroImage,
HeroContent,
SliderButtons,
PrevArrow,
NextArrow
} from './HeroElements'


const Hero = ({slides}) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  // useEffect(() => {
  //   const nextSlide = () =>{
  //     setCurrent(current => (current === length -1 ? 0 : current +1))
  //   }
  //   timeout.current = setTimeout(nextSlide, 4000)

  //   return function(){
  //     if(timeout.current) {
  //       clearTimeout(timeout.current)
  //     }
  //   }
  // },[current, length])

  const nextSlide = () => {
    if(timeout.current) {
        clearTimeout(timeout.current)
      }
    setCurrent(current === length -1 ? 0 : current +1)

  };

  const prevSlide = () => {
    if(timeout.current) {
        clearTimeout(timeout.current)
      }
    setCurrent(current === 0 ? length -1 : current - 1)
  };

  if(!Array.isArray(slides) || slides.length <=0){
    return null
  }

  const fadeLeft = {
    hidden: {opacity:0, x:-100},
    visible:{opacity:1, x:0}
  }

  return (
    <HeroSection>
      <HeroWrapper>
      {slides.map((slide, index) => {
        return (
          <HeroSlide key={index}>
          {index === current && (
            <HeroSlider>
            <HeroImage src={slide.image} alt={slide.alt} />
            <HeroContent>
            <motion.h1
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{duration:1}}
            >{slide.title}</motion.h1>
            <Button to={slide.path} primary='true'>
            Stuff
            </Button>
            </HeroContent>
          </HeroSlider>
            )}

          </HeroSlide>
          )
      })}
      <SliderButtons>
        <PrevArrow onClick={prevSlide}/>
        <NextArrow onClick={nextSlide} />
      </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  )
}

export default Hero
