import Link from "next/link"
import styles from '@assets/ListItem.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)
type Props = {
  post: Meta
}

export default function ListItem({post}: Props) {
  const {id,title,date} = post
  
  return (
    <li className={cx('wrapper')}>
      <Link className={cx('title')} href={`/posts/${id}`}>{title}</Link>
      <br/>
      <p className={cx('date')}>{date}</p>
    </li>
  )
}