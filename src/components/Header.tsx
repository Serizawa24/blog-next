import styles from '@assets/Header.module.scss'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)
import Navbar from "./Navbar";
function Header() {
  return ( 
    <header className={cx('wrapper')}>
      <Navbar />
      <div>Auth</div>
    </header>
  );
}

export default Header;