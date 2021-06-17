import { Redirect } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import BrandCard from '../components/BrandCard'
import { useAppSelector } from '../store/hooks'

const Home = () => {
  const { userType, customer } = useAppSelector((state) => state.user)

  if (userType !== 'customer' || customer === null) {
    return <Redirect to="/login" />
  }
  return (
    <div className="relative w-full h-full md:flex">
      {/* Sidebar */}
      <div className="fixed h-full">
        <Sidebar />
      </div>
      {/* content */}
      <div className="w-full h-full font-semibold md:ml-64">
        <div className="h-8 bg-gradient-to-r from-cerulean to-pink-500"></div>
        <div className="container p-10 mx-auto text-center">
          <div className="w-full md:mx-auto md:space-y-2 lg:w-1/3">
            <BrandCard />
            <BrandCard />
            <BrandCard />
            <BrandCard />
            <BrandCard />
            <BrandCard />
            <BrandCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
