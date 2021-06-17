import Sidebar from '../components/Sidebar'
import BrandCard from '../components/BrandCard'
import { UserCircleIcon } from '@heroicons/react/outline'

const CustomerProfile = () => {
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
          <div className="flex flex-wrap justify-center p-5 mx-auto mb-2 md:justify-evenly lg:w-108">
            <UserCircleIcon className="object-contain w-24 text-gray-700" />
            <div className="flex-1 ml-2 space-y-2 text-left">
              <p className="text-xl">Chandrakant pal</p>
              <p>chandrakant@email.com</p>
              <div className="flex justify-between w-full">
                <p>10 following</p>
                <p>100 Points</p>
              </div>
            </div>
          </div>
          <div className="w-full md:mx-auto md:space-y-2 lg:w-108">
            <hr className="mb-4 border-gray-700" />
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

export default CustomerProfile
