import styles from './ActivityCard.module.scss'
import { ReactComponent as Dots } from '../../assets/icon-ellipsis.svg'
import { ISeat } from '../../data'

interface Props {
  title: string
  icon: string
  bgColor: string
  data: ISeat
  time_text: string
}

const formatHour = (hour: number) => hour + (hour > 1 ? 'hrs' : 'hr')

const ActivityCard = ({ title, icon, bgColor, data, time_text }: Props) => {
  const bgStyle = {
    backgroundColor: `var(${bgColor})`,
    backgroundImage: `url(${icon})`,
    backgroundPosition: 'top -11px right 16px',
    backgroundRepeat: 'no-repeat',
  }

  return (
    <section className={styles.activity_card} style={bgStyle}>
      <div className={styles.card}>
        <div className={styles.activity_bar}>
          <p className={styles.activity}>{title}</p>
          <Dots fill={'var(--pale_blue)'} className={styles.dots} />
        </div>
        <div className={styles.time_info}>
          <p className={styles.hours}>{formatHour(data.current)}</p>
          <p className={styles.last}>
            {time_text} - {formatHour(data.previous)}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ActivityCard
