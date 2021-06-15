import { BriefcaseIcon, BadgeCheckIcon } from '@heroicons/react/outline'
import React from 'react'

const BrandCard: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full p-8 mx-auto my-4 bg-white shadow-xl md:w-1/2 rounded-xl">
      <div className="object-contain w-8 mx-4 bg-gray-200 rounded-full md:p-4 md:w-36">
        <BriefcaseIcon className="object-contain w-full" />
      </div>
      <div className="flex">
        <p className="text-base capitalize">brand inc.</p>
        <BadgeCheckIcon className="object-contain w-6 text-blue-500" />
      </div>
      <button className="text-sm">Follow</button>
    </div>
  )
}

export default BrandCard
