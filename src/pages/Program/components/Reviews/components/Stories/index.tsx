import style from './style.module.scss'
import { Star } from '@/components/icons'
import classNames from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react';
import { FreeMode } from 'swiper/modules';

type StoryType = {
  avatar: string;
  name: string;
  role: string;
  text: string
}

const storiesItem: StoryType = {
  avatar: "/assets/img/program/stories/avatar.png",
  name: "Nathan Clark",
  role: "Student",
  text: "“Drewl has done so much work with Headless platforms, and we knew the Drewl team was incredibly well-versed in that space.”"
}

const items = Array.from({ length: 4 }, () => ({ ...storiesItem }));


const Stories = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  return <div className={style.stories}>
    <div className='container'>
      <div className={style.body}>
        <div className={style.left}>
          <h2 className={`h4-bold-responsive ${style.title}`}>
            <img className={style.decor} src='/assets/img/yellow-decor.svg' alt='Decor' />
            <span>STUDENT STORIES</span>
          </h2>

          <ul className={style.list}>
            {items.map((item, index) => <Card key={index} {...item} />)}
          </ul>

          <Swiper
            className={style.slider}
            spaceBetween={24}
            slidesPerView={'auto'}
            freeMode={true}
            modules={[FreeMode]}
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          >
            {
              items.map((item, index) => {
                return <SwiperSlide key={index}>
                  <Card {...item} />
                </SwiperSlide>
              })
            }



          </Swiper>

          <div className={style.pagination}>
            {items.map((_, index) => {
              return (
                <div
                  key={index}
                  className={classNames(
                    style.paginationMark,
                    currentSlide === index && style.active
                  )}
                ></div>
              );
            })}
          </div>
        </div>

        <div className={style.right}>
          <div className={style.reviews}>
            <div className={style.reviewsDisplay}>
              <div className={style.reviewsStars}>
                <Star className={style.reviewsStar} /><span className='h3-bold-responsive text-surface-secondary'>4,5</span>
              </div>

              <p className={`p-body-responsive text-secondary-light ${style.reviewsCount}`}>(1k reviews)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const Card = ({ avatar, name, role, text }: StoryType) => {
  return <div className={style.card}>
    <div className={style.cardLeft}>
      <img className={style.cardAvatar} src={avatar} alt='Avatar' />

      <div className={style.cardInfo}>
        <p className='p-bold-responsive'>{name}</p>
        <p className={`small text-secondary-light`}>{role}</p>
      </div>
    </div>

    <p className={`p-responsive ${style.cardText}`}>{text}</p>

    <img className={style.cardDecor} src='/assets/img/program/stories/decor.svg' alt='Decor' />
  </div>
}

export default Stories