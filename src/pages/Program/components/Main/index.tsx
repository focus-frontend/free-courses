import style from './style.module.scss'
import { Button } from '@/components/UI';
import Breadcrumbs, { type ItemType } from '@/components/UI/Breadcrumbs';
import { Star, ArrowRightButton } from '@/components/icons';
import InfoCard from '../../../../components/UI/InfoCard/index';

const path: ItemType[] = [
  { href: '/', label: 'Homepage' },
  { href: '/university', label: 'Univesity of kyiv' },
  { href: '/program', label: 'Master degree in Mathematics and Computer Science' },
]

const Main = () => {
  return <div className={style.main}>
    <div className={style.wrapper}>
      <img className={style.img} src='/assets/img/program/main/img.png' alt='University' />
      <div className='container'>
        <div className={style.body}>
          <div className={style.texts}>
            <Breadcrumbs className={style.breadcrumbs} items={path} />

            <img className={style.logo} src='/assets/img/program/main/logo.png' alt='Logo' />

            <h1 className={`h4-bold-responsive ${style.title}`}>
              <img className={style.decor} src='/assets/img/program/decor.svg' alt='Decor' />
              <span>Master degree in Mathematics and Computer Science</span>
            </h1>

            <div className={style.rates}>
              <div className={style.stars}>
                <Star className={style.star} />

                <span className="p-body-responsive">4,5</span>
              </div>

              <div className={`p-body-responsive ${style.reviews}`}>
                (1k reviews)
              </div>
            </div>

            <div className={`p-body-responsive ${style.languages}`}>
              <span>English</span>
              <span>&</span>
              <span>Ukrainian</span>
            </div>

            <div className={style.info}>
              <InfoCard img='/assets/img/UI/infoCard/head.png' title='Degree type' value='Master' />
              <InfoCard img='/assets/img/UI/infoCard/timer.png' title='duration' value='1 to 3 hours' />
              <InfoCard img='/assets/img/UI/infoCard/house.png' title='mode' value='On campus/Online' />
            </div>

            <Button className={style.button} decor={true} type="yellow">
              <span>Ask for information</span>
              <ArrowRightButton className={style.arrow} />
            </Button>

            <div className={style.offer}>
              <span className="p-body-responsive">Offered by</span>
              <img src="/assets/img/university/main/logo.png" alt="" />
            </div>

            <img className={style.imgMob} src='/assets/img/program/main/img-mob.png' alt='University' />

          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Main