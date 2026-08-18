import PolicyPicture from '../assets/policy.png';
import VisionPicture from '../assets/vision.png';
import ScopePicture from '../assets/scope.png';
import MissionPicture from '../assets/mission.png'
import { motion } from 'motion/react';


export default function About() {
  return (
    <>
      <link rel="icon" type="image/svg+xml" href="logo.jpeg" />


      <motion.section
        className="section page-top simple-page"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{ duration: 0.9 }}
      >
        <span className="eyebrow">ABOUT SOLAR EDGE</span>
        <h1>Energy solutions designed for a more dependable tomorrow.</h1>
        <p className="lead move">Solar Edge helps customers explore practical solar products and energy solutions for homes, businesses and projects.</p>
        <motion.div
          className="about-grid"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
        >
          <article>
            <span><img src={PolicyPicture} alt="Picture of the policy logo" className="policy-pic" /></span>
            <h2>Company Policy</h2>
            <p>At Solar Edge, our policy is to provide reliable, safe, efficient, and high-quality renewable energy solutions that meet the needs of our customers. We are committed to professional service delivery, quality products, transparent communication, and responsible installation practices.</p>
          </article>
          <article>
            <span><img src={VisionPicture} alt="Picture of the Vision logo" className="vision-pic" /></span>
            <h2>Our Vision</h2>
            <p>To become a trusted and leading renewable-energy company, powering homes, businesses, and communities with reliable, affordable, and sustainable solar-energy solutions.</p>
          </article>
          <article>
            <span><img src={MissionPicture} alt="Picture of the mission logo" className="mission-pic" /></span>
            <h2>Our Mission</h2>
            <p>Our mission is to provide dependable, innovative, and affordable solar-energy solutions that give our customers access to cleaner, more stable, and cost-effective power.</p>
          </article>
          <article>
            <span><img src={ScopePicture} alt="Picture of the scope logo" className="scope-pic" /></span>
            <h2>Scope Of Services</h2>
            <p>Solar Edge provides solar-energy solutions such as Solar Power Installation, Inverter Solutions, Solar Battery Solutions, Solar Panel Solutions, Residential Solar Solutions, Commercial Solar Solutions, Solar System Mentainance, Solar System repairs and upgrades, Energy Consultations and System Designs, After-sales Technical Support for residential, commercial, and other eligible applications</p>
          </article>
        </motion.div>

        <motion.div
          className="commitment-div"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
        >
          <span className="eyebrow commitment-head">Our Commitment</span>
          <p className='commitment-p'>At Solar Edge, we believe that access to reliable electricity should be smarter, cleaner, and more sustainable. We don't just install solar systems, we provide dependable energy solutions designed for the future. Solar Edge - Powering a Brighter Future.</p>
        </motion.div>


      </motion.section>
    </>

  );
}