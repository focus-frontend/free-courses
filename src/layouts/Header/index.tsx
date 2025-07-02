import style from './style.module.scss'
import { Link } from 'react-router'
import { ArrowDown, ArrowRightButton, Burger } from '@components/icons';
import { Button } from '@/components/UI';
import classNames from 'classnames';
import Menu from '../Menu';
import { useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return <>
    <Menu show={showMenu} onClose={() => setShowMenu(false)} />
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.body}>
          <img className={style.logo} src='/assets/img/logo.svg' alt='Logo' />

          <nav className={style.nav}>
            <Link className={`p-body-responsive ${style.link}`} to={'/'}>Home</Link>
            <Link className={`p-body-responsive ${style.link}`} to={'/courses'} >Courses</Link>
            <Link className={`p-body-responsive ${style.link}`} to={'/careers'}>
              Discover careers
              <ArrowDown />
            </Link>
            <Link className={`p-body-responsive ${style.link}`} to={'/contacts'}>Contact</Link>
            <Link className={`p-body-responsive ${style.link}`} to={'#'}>Faq</Link>

            <div className={style.buttons}>
              <Button className={style.login} type='blue'>Sign in</Button>
              <Button className={style.start} decor={true} type='yellow'>Get started <ArrowRightButton /></Button>
            </div>
          </nav>

          <div className={style.buttons}>
            <Button className={classNames(style.start, style.startMob)} decor={true} type='yellow'>Get started <ArrowRightButton /></Button>


            <button onClick={() => setShowMenu(true)} className={style.burgerButton}><Burger /></button>
          </div>
        </div>
      </div>
    </header></>
}

export default Header