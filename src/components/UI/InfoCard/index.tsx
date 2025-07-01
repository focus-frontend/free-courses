import style from './style.module.scss'

type PropsType = {
  className?: string
  img: string
  title: string;
  value: string;
}

const InfoCard = ({ className, img, title, value }: PropsType) => {
  return <div className={`${style.infoCard} ${className}`}>
    <img className={style.infoImg} src={img} alt={title} />
    <div className={style.infoText}>
      <p className={`p-body-responsive ${style.infoTitle}`}>
        {title}
      </p>
      <p className='p-bold-responsive'>{value}</p>
    </div>
  </div>
}

export default InfoCard