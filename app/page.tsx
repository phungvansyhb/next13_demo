import Button from '@/shared/components/Button'
// import { getServerSession } from 'next-auth'

export default async function Home() {
  // const session = await getServerSession()
  // console.log(session)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button />
      </div>
    </main>
  )
}
