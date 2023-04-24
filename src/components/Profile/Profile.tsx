import styles from './Profile.module.scss'
import profile from '../../assets/image-jeremy.png'

const Profile = () => {
  return (
    <section>
      <div className={styles.about}>
        <img src={profile} alt="profile user image" className={styles.profile_img} />
        <h2 className={styles.report}>Report for</h2>
        <h1 className={styles.name}>Jeremy Robson</h1>
      </div>

      <ul className={styles.list}>
        <li className={styles.period}>Daily</li>
        <li className={styles.period}>Weekly</li>
        <li className={styles.period}>Monthly</li>
      </ul>
    </section>
  )
}

export default Profile
