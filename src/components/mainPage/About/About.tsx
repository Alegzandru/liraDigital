import styles from './About.module.scss'

const About = () => (
  <div className="h-screen w-full bg-ui-black100 flex flex-row justify-center items-center px-container-sm md:px-container-md lg:px-container-lg">
    <h2 className="font-Poppins text-ui-white text-sm-h2-poppins md:text-md-h2-poppins lg:text-lg-h2-poppins font-bold text-center">
      We work <span className={styles.about_activePhrase}>together and toward.</span> To bring ideas to life. With intention and meaning. For today, tomorrow, and beyond.
    </h2>
  </div>
)

export default About
