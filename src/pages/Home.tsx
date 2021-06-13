import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="relative w-full h-screen md:flex">
      {/* Sidebar */}
      <Sidebar />
      {/* content */}
      <div className="w-full h-full text-2xl font-bold">
        <div className="h-8 bg-gradient-to-r from-cerulean to-pink-500"></div>
        <div className="container p-10 mx-auto text-center">
          content goes here
        </div>
      </div>
    </div>
  )
}

export default Home
