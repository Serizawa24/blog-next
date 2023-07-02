import { getPostsMeta } from "../../../../lib/posts";
import ListItem from "@/components/ListItem";
import Link from "next/link";

export const revalidate = 0
type Props = {
  params:{
    tag: string
  }
}

// export async function genetateStaticParams(){
//   const posts = await getPostsMeta() //deduped!
//   if(!posts) return []
//   const tags = new Set(posts.map(post => post.tags).flat())
//   return Array.from(tags).map((tag)=> ({tag}))
// }

export async function generateMetadata({params:{tag}}: Props){
  
  return {
    title: `Posts about ${tag}`
  }
}

export default async function Tag({params:{tag}}: Props) {
  const posts = await getPostsMeta()//deduped!
  if (!posts) return <p>No posts found</p>

  const tagPosts = posts.filter(post=>post.tags.includes(tag))

  if(!tagPosts.length) {
    return <p>No post for ${tag}</p>
  }

  return (
    <>
      <h2>Result: </h2>
      <ul>
        {tagPosts.map(post=><ListItem key={post.id} post={post}/>)}
      </ul>
    </>
  )
}