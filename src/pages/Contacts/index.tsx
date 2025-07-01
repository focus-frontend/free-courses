import style from './style.module.scss'
import { type ItemType } from '@/components/UI/Breadcrumbs';
import Breadcrumbs from '../../components/UI/Breadcrumbs/index';
import { Button } from '@/components/UI';
import ArrowRightButton from '../../components/icons/ArrowRightButton';

const path: ItemType[] = [
  {
    href: '/',
    label: 'Homepage'
  },
  {
    href: '#',
    label: 'Master degree in Mathematics and Computer Science'
  },
  {
    href: '/contacts',
    label: 'Form'
  },
]

const Contacts = () => {
  return <div className={style.contacts}>
    <div className='container'>
      <div className={style.body}>
        <div className={style.left}>
          <Breadcrumbs items={path} />

          <h1 className={`h4-bold-responsive ${style.title}`}>
            <img src='/assets/img/yellow-decor.svg' alt='' />
            <span>Contact us</span>
          </h1>

          <p className='h6-responsive text'>Explore key areas of computer science From programming and data structures to artificial intelligence and cybersecurity, our courses cover the essential topics to build your tech skills and launch your career in IT.</p>

          <div className={style.from}>
            <input className={`p-bold-responsive ${style.input}`} type='text' placeholder='Name' />
            <input className={`p-bold-responsive ${style.input}`} type='text' placeholder='Email' />
            <textarea className={`p-bold-responsive ${style.textarea}`} rows={4} placeholder='Comment' />

            <Button className={style.button} type='yellow' decor={true}>
              <span>Send</span>
              <ArrowRightButton className={style.ButtonArrow} />
            </Button>
          </div>
        </div>

        <div className={style.right}>
          <img className={`${style.img} ${style.img1}`} src='/assets/img/contacts/img-1.png' alt='' />
          <img className={`${style.img} ${style.img2}`} src='/assets/img/contacts/img-2.png' alt='' />
        </div>
      </div>
    </div>
  </div>
}

export default Contacts