import { Link } from 'react-router-dom'
import Divider from '../components/Divider'

const Home = () => {
  return (
    <div className="relative flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 space-y-6 bg-white">
        <div className="flex flex-col justify-around h-18">
          <Link to="/" className="p-5">
            <span className="object-contain w-12 p-3 mr-2 text-center text-white rounded-full bg-gradient-to-b from-blue-500 to-pink-500">
              CP
            </span>
            Chandrakant Pal
          </Link>
          <Divider />
        </div>
        <nav>nav</nav>
      </aside>
      {/* content */}
      <div className="flex-1 p-10 text-2xl font-bold">content goes here</div>
    </div>
  )
}

export default Home
