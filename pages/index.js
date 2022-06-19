import { getSession } from "next-auth/react"
import Head from "next/head"
import Header from "../components/Header"
import Login from "../components/Login"
import { useSession } from "next-auth/react"
import Sidebar from "../components/Sidebar"

export default function Home(props) {
  const { data: session, status } = useSession()
  if (!session) return <Login />
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header />

      <main className='flex'>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
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
