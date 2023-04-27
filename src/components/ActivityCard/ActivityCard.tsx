import styles from './ActivityCard.module.scss'
import work from '../../assets/icon-work.svg'
import { ReactComponent as Dots } from '../../assets/icon-ellipsis.svg'
import { ISeat } from '../../data'

interface Props {
  title: string
  icon: string
  bgColor: string
  data: ISeat
}

const formatHour = (hour: number) => {
  const time = hour > 1 ? 'hrs' : 'hr'
  return hour + time
}

const ActivityCard = ({ title, icon, bgColor, data }: Props) => {
  const bgStyle = {
    backgroundColor: `var(${bgColor})`,
    backgroundImage: `url(${icon})`,
    backgroundPosition: 'top -11px right 16px',
    backgroundRepeat: 'no-repeat',
  }
  console.log(data, 'lol')

  return (
    <section className={styles.activity_card} style={bgStyle}>
      <div className={styles.card}>
        <div className={styles.activity_bar}>
          <p className={styles.activity}>{title}</p>

          <Dots fill={'var(--pale_blue)'} className={styles.dots} />
        </div>

        <p className={styles.hours}>{formatHour(data.current)}</p>
        <p className={styles.last}>Last Week - 36hrs</p>
      </div>
    </section>
  )
}

export default ActivityCard
