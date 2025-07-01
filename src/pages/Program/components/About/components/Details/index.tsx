import { InfoCard } from '@/components/UI'
import style from './style.module.scss'
const Details = () => {
  return <div className={style.details}>
    <div className='container'>
      <div className={style.body}>
        <div className={style.left}>
          <h2 className={`h4-bold-responsive ${style.title}`}>
            <img className={style.decor} src='/assets/img/yellow-decor.svg' alt='' />
            Details program
          </h2>

          <div className={style.info}>
            <InfoCard title='Degree type' value='Master' img='/assets/img/UI/infoCard/head.png' />
            <InfoCard title='mode' value='On campus/Online' img='/assets/img/UI/infoCard/house.png' />
            <InfoCard title='duration' value='1 to 3 hours' img='/assets/img/UI/infoCard/timer.png' />
            <InfoCard title='Tuition' value='50K' img='/assets/img/UI/infoCard/money.png' />
          </div>
        </div>

        <div className={style.right}>
          <img className={style.img} src='/assets/img/program/details/img.png' alt='Image' />
        </div>

      </div>
    </div>
  </div>
}

export default Details