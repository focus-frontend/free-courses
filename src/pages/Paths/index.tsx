import style from './style.module.scss'
import { Link } from 'react-router'

const Paths = () => {
  return <div className={style.paths}>
    <Link to={'/'}>Home</Link>
    <Link to={'/explore-topics'}>Explore Topics</Link>
    <Link to={'/university'}>University</Link>
    <Link to={'/program'}>Program</Link>
    <Link to={'/contacts'}>Contacts</Link>
  </div>
}

export default Paths