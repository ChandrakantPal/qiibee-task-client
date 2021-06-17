import { BriefcaseIcon, BadgeCheckIcon } from '@heroicons/react/outline'
import React from 'react'

const BrandCard: React.FC = () => {
  return (
    <>
      <article className="justify-between hidden p-8 my-1 bg-white rounded-lg shadow-lg md:flex">
        <div className="object-contain w-8 mx-4 bg-gray-100 rounded-full md:p-4 md:w-36">
          <BriefcaseIcon className="object-contain w-full text-gray-700" />
        </div>
        <div className="flex items-start justify-between flex-1">
          <div className="space-y-2 text-left">
            <div className="flex">
              <p className="text-base capitalize">brand inc.</p>
              <BadgeCheckIcon className="object-contain w-6 ml-1 text-blue-500" />
            </div>
            <p className="text-sm text-gray-700">Brand Symbol</p>
            <p className="text-xs text-gray-600">11/11/2020</p>
          </div>
          <button className="text-sm">Follow</button>
        </div>
      </article>
      <article className="w-full p-8 mx-auto mb-4 bg-white rounded-lg shadow-lg md:hidden ">
        <BriefcaseIcon className="object-contain w-1/2 mx-auto text-gray-700 md:w-1/3" />
        <header className="flex items-center justify-between p-2 leading-tight md:p-4">
          <h1 className="text-lg">
            <span className="flex text-sm text-black no-underline hover:underline md:text-base">
              Brand Inc{' '}
              <BadgeCheckIcon className="object-contain w-5 ml-1 text-blue-500 md:w-6" />
            </span>
          </h1>
          <p className="text-xs text-gray-600">11/1/19</p>
        </header>
        <footer className="flex items-center justify-between p-1 leading-none md:p-4">
          <span className="flex items-center text-black no-underline hover:underline">
            <p className="text-sm">Brand Symbol</p>
          </span>
          <span className="no-underline text-grey-darker hover:text-red-dark">
            <span className="text-sm text-cerulean">Follow</span>
          </span>
        </footer>
      </article>
    </>
  )
}

export default BrandCard
