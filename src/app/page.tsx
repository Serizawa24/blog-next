import styles from './page.module.css'
import classnames from 'classnames/bind'
import Posts from '@/components/Posts'
import MyProfilePic from '@/components/MyProfilePic'

const cx = classnames.bind(styles)

export const revalidate = 10;

export default function Home() {
  return (
    <div>
      <MyProfilePic />
      <p className={cx('desc')}>Hello and Welcome Home, I'm <span className={cx('author')}>Lucy</span></p>
      
      <Posts />
    </div>
  )
}

