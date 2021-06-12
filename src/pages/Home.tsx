import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="relative w-full h-screen md:flex">
      {/* Sidebar */}
      <Sidebar />
      {/* content */}
      <div className="w-full h-full p-10 text-2xl font-bold">
        content goes here
      </div>
    </div>
  )
}

export default Home
