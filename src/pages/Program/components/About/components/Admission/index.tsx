import style from './style.module.scss'

const Admission = () => {
  return <div className={style.admission}>
    <div className='container'>
      <div className={style.body}>
        <div className={style.left}>
          <h2 className={`h4-bold-responsive ${style.title}`}>
            <img className={style.decor} src='/assets/img/yellow-decor.svg' alt='Decor' />
            <span>Admission</span>
          </h2>

          <p className={`p-responsive ${style.text}`}>
            The high status of a classical research University is underpinned by the numerous academic achievements of its staff. The staff at the University have a broad range of formal achievements recognised, in particular with the State Prize of Ukraine in Science and Technology, Awards from the National Academy of Sciences of Ukraine and branches of the national academies of sciences, Orders
          </p>
        </div>
      </div>
    </div>
  </div>
}

export default Admission