import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Welcome to QuickKeys, where we believe that a home is more than just a place—it's where the heart feels at ease. Specializing in practical and comfortable housing solutions, 
              we aim to make your rental experience seamless and hassle-free.
             At QuickKeys, we focus on creating spaces where you can truly feel at home, because your comfort is our priority.</p>
            <p>At QuickKeys, we take pride in offering homes that are warm, inviting, and designed with your needs in mind. Our rentals may not be luxurious, but they provide the perfect balance of comfort and practicality.
               With our slogan, "Where heart meets home,"
              we're committed to helping you find a space that feels just right for you.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
