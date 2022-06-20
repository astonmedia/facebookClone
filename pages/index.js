import { getSession } from "next-auth/react"
import Head from "next/head"
import Header from "../components/Header"
import Login from "../components/Login"
import { useSession } from "next-auth/react"
import Sidebar from "../components/Sidebar"
import Feed from "../components/Feed"

export default function Home(props) {
  const { data: session, status } = useSession()
  if (!session) return <Login />
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main className='flex'>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context)
  return {
    props: {
      session,
    },
  }
}
