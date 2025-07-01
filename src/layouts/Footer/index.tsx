import style from './style.module.scss'
import { Link } from 'react-router'

const Footer = () => {
  return <footer className={style.footer}>
    <div className='container'>
      <div className={style.body}>
        <div className={style.main}>
          <Link to={'/'}>
            <img className={style.logo} src='/assets/img/footer/logo.svg' alt='logo' />
          </Link>

          <div className={style.contacts}>
            <Link to={'#'} className={style.contact}>
              <img src='/assets/img/footer/tiktok.png' alt='' />
            </Link>
            <Link to={'#'} className={style.contact}>
              <img src='/assets/img/footer/instagram.png' alt='' />
            </Link>
            <Link to={'#'} className={style.contact}>
              <img src='/assets/img/footer/telegram.png' alt='' />
            </Link>
          </div>
        </div>
        <div className={style.col}>
          <Link className={style.link} to={'/'}>Home</Link>
          <Link className={style.link} to={'#'}>Courses</Link>
          <Link className={style.link} to={'#'}>Discover careers</Link>
          <Link className={style.link} to={'#'}>Contact</Link>
          <Link className={style.link} to={'#'}>Faq</Link>
        </div>

        <div className={`${style.contacts} ${style.contactsMob}`}>
          <Link to={'#'} className={style.contact}>
            <img src='/assets/img/footer/tiktok.png' alt='' />
          </Link>
          <Link to={'#'} className={style.contact}>
            <img src='/assets/img/footer/instagram.png' alt='' />
          </Link>
          <Link to={'#'} className={style.contact}>
            <img src='/assets/img/footer/telegram.png' alt='' />
          </Link>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer