import styles from './ActivityCard.module.scss'
import work from '../../assets/icon-work.svg'
import { ReactComponent as Dots } from '../../assets/icon-ellipsis.svg'

interface Props {
  title: string
  icon: string
  bgColor: string
}

const ActivityCard = ({ title, icon, bgColor }: Props) => {
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

        <p className={styles.hours}>32hrs</p>
        <p className={styles.last}>Last Week - 36hrs</p>
      </div>
    </section>
  )
}

export default ActivityCard
