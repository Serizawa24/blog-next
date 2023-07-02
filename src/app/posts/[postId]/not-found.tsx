import Link from "next/link";

export default function notFound() {

  return (
    <>
      <h1>post not existed!</h1>
      <Link href='/'>Back to home</Link>
    </>
  )
}
