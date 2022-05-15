import Head from 'next/head'
import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <Link href='/home'> Home </Link>
      <h1>Hello World</h1>
    </div>
  )
}
