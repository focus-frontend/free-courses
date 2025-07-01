import style from './style.module.scss'
import { Button } from '@components/UI';
import { ArrowRightButton } from '@components/icons';

const Touch = () => {
  return <div className={style.touch}>
    <img className={style.decor} src='/assets/img/home/touch/decor.svg' alt='Decor' />

    <div className='container'>
      <div className={style.body}>
        <h2 className={style.title}>Get in touch</h2>
        <p className={`h6 ${style.text}`}>
          Get in contact with our client services
        </p>

        <Button decor={true} type='yellow' className={style.button}>
          <span>GET STARTED</span>
          <ArrowRightButton className={style.ButtonArrow} />
        </Button>
      </div>
    </div>
  </div>
}

export default Touch