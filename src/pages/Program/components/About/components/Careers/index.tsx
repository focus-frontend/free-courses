import style from './style.module.scss'

const Careers = () => {
  return <div className={style.careers}>
    <div className='container'>
      <div className={style.body}>
        <div className={style.left}>
          <h2 className={`h4-bold-responsive text-surface-secondary ${style.title}`}>
            <img className={style.decor} src='/assets/img/yellow-decor.svg' alt='Decor' />
            <span>Discover the careers you’ll have access to</span>
          </h2>

          <img className={`${style.img} ${style.imgMob}`} src='/assets/img/program/careers/img.png' alt='' />

          <ul className={`p-body-responsive ${style.careersList}`}>
            <li className={style.careersItem}>
              Developper
            </li>
            <li className={style.careersItem}>
              Community manager
            </li>
            <li className={style.careersItem}>
              Technician
            </li>
            <li className={style.careersItem}>
              Hacker
            </li>
            <li className={style.careersItem}>
              Analyst
            </li>
          </ul>
        </div>

        <div className={style.right}>
          <img className={style.img} src='/assets/img/program/careers/img.png' alt='' />
        </div>
      </div>
    </div>
  </div>
}

export default Careers