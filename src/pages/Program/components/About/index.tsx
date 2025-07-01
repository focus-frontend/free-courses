import style from './style.module.scss'
import Details from "./components/Details"
import Discover from "./components/Discover"
import Admission from "./components/Admission"
import Careers from "./components/Careers"

const About = () => {
  return <div className={style.about}>
    <Details />
    <Discover />
    <Admission />
    <Careers />
  </div>
}

export default About