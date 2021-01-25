import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import spaceship from '../../assets/img/HeroImg/spaceship.svg'
import planet1 from '../../assets/img/HeroImg/planet1.svg'
import planet2 from '../../assets/img/HeroImg/planet2.svg'
import planet3 from '../../assets/img/HeroImg/planet3.svg'
import star1 from '../../assets/img/HeroImg/star1.svg'

import './Hero.css'

//install framer-motion
function Hero() {


  const Image = styled(motion.img)`
  position: absolute;
  width: 50%;
  height: 50%;
  max-width: 150px;
  max-height: 150px;

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
width:10%;

  }

  `
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  }


  return (


    <div className="animationStuff" id="home">
      <div className="columnLeft">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="introName"
        >Sophia Orlando</motion.h1>
        <motion.p
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          // style={{ fontSize: "40px", lineHeight: 1.3 }}
          className="introDescription"
        >An innovative software engineer with an emphasis on ReactJS and UX/UI design. Take a look at my skills and some
        of my recent projects.</motion.p>
      </div>
      <div className="columnRight">
        <Image src={spaceship} alt="spaceship" className="spaceship"
          whileTap={{ scale: 0.9 }}
          drag={true}
          dragConstraints={{ left: 0, right: 50, top: 0, bottom: 50 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
        <Image src={planet1} alt="planet1" className="orangePlanet"
          whileTap={{ scale: 0.6 }}
          drag={true}
          dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
        <Image src={planet2} alt="planet2" className="bluePlanet"
          whileTap={{ scale: 0.8 }}
          drag={true}
          dragConstraints={{ left: 0, right: 50, top: 0, bottom: 50 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        />
        <Image src={planet3} alt="planet3" className="greenPlanet"
          whileTap={{ scale: 0.8 }}
          drag={true}
          dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        />
        <Image src={star1} alt="star1" className="image4"
          whileTap={{ scale: 0.8 }}
          drag={true}
          dragConstraints={{ left: 50, right: 0, top: 50, bottom: 10 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        />
        <Image src={star1} alt="star1" className="image5"
          whileTap={{ scale: 0.8 }}
          drag={true}
          dragConstraints={{ left: 50, right: 0, top: 50, bottom: 10 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        />
        <Image src={star1} alt="star1" className="image6"
          whileTap={{ scale: 0.8 }}
          drag={true}
          dragConstraints={{ left: 50, right: 0, top: 50, bottom: 10 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        />
      </div>
    </div>
  )
}

export default Hero
