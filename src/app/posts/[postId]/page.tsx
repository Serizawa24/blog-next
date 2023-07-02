import Link from "next/link";
import { getPostsMeta,getPostByName } from "../../../../lib/posts";
import {notFound} from 'next/navigation'
import styles from '@assets/Posts.module.scss'
import classnames from 'classnames/bind'
import "highlight.js/styles/github-dark.css";

const cx = classnames.bind(styles)
type Props = {
  params:{
    postId: string,
  }
}
export const revalidate = 0

export async function generateStaticParams() {
  const posts = await getPostsMeta() //deduped!

  if (!posts) return []

  return posts.map((post) => ({
      postId: post.id
  }))
}
export async function generateMetadata({params: { postId}}: Props) {
  
  const post = await getPostByName(`${postId}.mdx`) //dedupe!
  
  if(!post) return {
    title:'Post not Found'
  }

  return {
    title: post.meta.title
  }
}

export default async function Post({params: { postId}}: Props) {
  
  const post = await getPostByName(`${postId}.mdx`)
  
  if(!post) notFound()

  const {meta,content} = post
  
  const tags = meta.tags.map((tag,i)=>(
    <Link className={cx('tag-item')} key={i} href={`/tags/${tag}`}>{tag}</Link>
  ))

  return (
    <main className={cx('wrapper')}>
      <h1 className={cx('title')}>
        {meta.title}
      </h1>
      <p className={cx('date')}>
        {meta.date}
      </p>
      <article className={cx('article')}>
        {content}
      </article>
      <section className={cx('section')}>
        <h3>Related:</h3>
        <div className={cx('tag')}>
          {tags}
        </div>
      </section>
      <p>
        <Link href={"/"} >Back to homepage</Link>
      </p>
    </main>
  )
}
