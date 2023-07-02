import { getPostsMeta } from "../../lib/posts"
import styles from '@assets/Posts.module.scss'
import classnames from 'classnames/bind'
const cx = classnames.bind(styles)
import ListItem from "./ListItem"
export default async function Posts() {
  const posts = await getPostsMeta();

  if (!posts) return <p>Sorry! no posts avaiable.</p>

  return (
    <section className={cx('wrapper')}>
      <h2 className={cx('title')}>
        Blog
      </h2>
      <ul className={cx('list')}>
        {posts.map(post=>(
          <ListItem key={post.id} post={post}/>
        ))}
      </ul>
    </section>
  )
}
