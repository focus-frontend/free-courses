import style from './style.module.scss'
import { Link } from 'react-router'
import { Button } from '@/components/UI'
import { ArrowDown, Close } from '@/components/icons'
import classNames from 'classnames'

type MenuPropsType = {
  onClose?: () => void;
  show?: boolean;
}

const Menu = ({ onClose, show }: MenuPropsType) => {
  return <>
    <div onClick={onClose} className={classNames(style.backward, show && style.active)}></div>
    <nav className={classNames(style.nav, show && style.active)}>
      <button onClick={onClose} className={style.close}><Close /></button>
      <Link className={`h5-bold-responsive ${style.link}`} to={'/'}>Home</Link>
      <Link className={`h5-bold-responsive ${style.link}`} to={'/courses'} >Courses</Link>
      <Link className={`h5-bold-responsive ${style.link}`} to={'/careers'}>
        Discover careers
        <ArrowDown />
      </Link>
      <Link className={`h5-bold-responsive ${style.link}`} to={'/contacts'}>Contact</Link>
      <Link className={`h5-bold-responsive ${style.link}`} to={'#'}>Faq</Link>

      <div className={style.buttons}>
        <Button className={style.login} type='blue'>Sign in</Button>
      </div>
    </nav>
  </>
}

export default Menu