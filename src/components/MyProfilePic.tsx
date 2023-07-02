import Image from "next/image"
import styles from '@assets/MyProfilePic.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)
export default function MyProfilePic() {
  return (
    <section className={cx('wrapper')}>
      <Image
        src='/images/smileblush.png'
        alt="picture"
        width={200}
        height={200}
        priority={true}
        className={cx('picture')}

      />
    </section>
  )
}
