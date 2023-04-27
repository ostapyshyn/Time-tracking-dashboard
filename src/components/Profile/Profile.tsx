import styles from './Profile.module.scss'
import profile from '../../assets/image-jeremy.png'

interface Props {
  period: string
  setPeriod: (name: string) => void
}

const Profile = ({ period, setPeriod }: Props) => {
  const activeStyle = {
    color: '#fff',
  }

  return (
    <section>
      <div className={styles.about}>
        <img src={profile} alt="profile user image" className={styles.profile_img} />
        <h2 className={styles.report}>Report for</h2>
        <h1 className={styles.name}>Jeremy Robson</h1>
      </div>

      <ul className={styles.list}>
        <li
          className={styles.period}
          onClick={() => setPeriod('daily')}
          style={{ ...(period === 'daily' ? activeStyle : null) }}>
          Daily
        </li>
        <li
          className={styles.period}
          onClick={() => setPeriod('weekly')}
          style={{ ...(period === 'weekly' ? activeStyle : null) }}>
          Weekly
        </li>
        <li
          className={styles.period}
          onClick={() => setPeriod('monthly')}
          style={{ ...(period === 'monthly' ? activeStyle : null) }}>
          Monthly
        </li>
      </ul>
    </section>
  )
}

export default Profile
