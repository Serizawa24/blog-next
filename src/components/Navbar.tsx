import styles from '@assets/Navbar.module.scss'
import classnames from 'classnames/bind'
import Link from 'next/link'
import { FaYoutube,FaTwitter,FaFacebook } from 'react-icons/fa'
const cx = classnames.bind(styles)
export default function Navbar() {
  return (
    <nav className={cx('wrapper')}>
      <Link  className={cx('home')} href='/'>Home</Link>
      <div 
        className={cx('social')}
      >
        <Link className={cx('social-icon')} href='https://facebook.com' target='_blank'>
          <FaFacebook />
        </Link>
        <Link className={cx('social-icon')} href='https://twitter.com' target='_blank'>
          <FaTwitter />
        </Link>
        <Link className={cx('social-icon')} href='https://youtube.com' target='_blank'>
          <FaYoutube />
        </Link>

      </div>
    </nav>
  )
}
