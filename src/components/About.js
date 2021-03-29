import React from 'react'
import { Container } from 'react-bootstrap'
import projectGif from '../assets/demo/projectGif.gif'
import styles from '../assets/about.module.css';

const About = () => (
  <Container className={`${styles.aboutContainer} px-3`}>
    <h2><i>About the Application</i></h2>
    <div>
      <i>SIBYMeals</i>
      &nbsp; is an application to help users prepare meals conveniently for
      their loved ones. With our catalogue list of various foods, you can choose
      a certain category of foods &amp; view details on each listed food item.
      The detailed page for each food item gives you the cooking instructions
      &amp; a source link which gives you more information on the ingredients
      you need &amp; their prospective measurements.
    </div>
    <div className="my-3">
      <img style={{ width: '80%' }} alt='project gif' src={`${projectGif}`} />
    </div>
  </Container>
)

export default About
