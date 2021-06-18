import { Link, useHistory } from 'react-router-dom'
import Divider from './Divider'
import {
  AdjustmentsIcon,
  ChipIcon,
  DatabaseIcon,
  CodeIcon,
  TerminalIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  MenuAlt4Icon,
  XIcon,
} from '@heroicons/react/outline'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setLogout } from '../store/userSlice'

const Sidebar = () => {
  const [open, setOpen] = useState(false)

  const dispatch = useAppDispatch()

  const history = useHistory()

  const { userType, brand, customer } = useAppSelector((state) => state.user)

  const logoutHanlder = () => {
    dispatch(setLogout())
    history.push('/login')
  }

  return (
    <>
      <aside className="absolute inset-y-0 left-0 w-64 h-full py-5 space-y-6 transition duration-200 ease-in-out transform -translate-x-full bg-white md:relative md:translate-x-0">
        <div className="flex flex-col justify-around h-18">
          <Link to="/" className="p-5">
            <span className="object-contain w-12 p-3 mr-2 text-center text-white capitalize rounded-full bg-gradient-to-b from-blue-500 to-pink-500">
              {userType === 'brand'
                ? `${brand.brandname.charAt(0)} ${brand.brandsymbol.charAt(0)}`
                : `${customer.firstname.charAt(0)} ${customer.lastname.charAt(
                    0
                  )}`}
            </span>
            {userType === 'brand'
              ? brand.brandname
              : `${customer.firstname} ${customer.lastname}`}
          </Link>
          <Divider />
        </div>
        <nav>
          <div className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean">
            <AdjustmentsIcon className="object-contain w-5 mr-2" /> Set up
            Dashboard
          </div>
          <div className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean">
            <ChipIcon className="object-contain w-5 mr-2" /> Overview
          </div>
          <div className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean">
            <DatabaseIcon className="object-contain w-5 mr-2" />
            Loyalty Token
          </div>
          <div className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean">
            <CodeIcon className="object-contain w-5 mr-2" /> Developers
          </div>
          <div className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean">
            <TerminalIcon className="object-contain w-5 mr-2" /> Go to Sandbox
          </div>
          <div className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean">
            <CogIcon className="object-contain w-5 mr-2" /> Admin
          </div>
          <div className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean">
            <QuestionMarkCircleIcon className="object-contain w-5 mr-2" /> Help
            Center
          </div>
        </nav>
        <div className="flex items-center justify-between w-full p-5">
          <button
            className="outline-none text-cerulean focus:outline-none"
            onClick={logoutHanlder}
          >
            Logout
          </button>
          {userType === 'customer' && (
            <Link to="/customer" className="text-cerulean">
              My Account
            </Link>
          )}
        </div>
      </aside>
      {open && (
        <>
          <aside className="fixed z-20 w-2/3 h-full py-5 space-y-6 text-sm transition duration-200 ease-in-out bg-white md:hidden">
            <div className="flex flex-col justify-around h-18">
              <Link to="/" className="p-5">
                <span className="object-contain w-12 p-3 mr-2 text-center text-white rounded-full bg-gradient-to-b from-blue-500 to-pink-500">
                  {userType === 'brand'
                    ? `${brand.brandname.charAt(0)} ${brand.brandsymbol.charAt(
                        0
                      )}`
                    : `${customer.firstname.charAt(
                        0
                      )} ${customer.lastname.charAt(0)}`}
                </span>
                {userType === 'brand'
                  ? brand.brandname
                  : `${customer.firstname} ${customer.lastname}`}
              </Link>
              <Divider />
            </div>
            <nav>
              <div className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean">
                <AdjustmentsIcon className="object-contain w-5 mr-2" /> Set up
                Dashboard
              </div>
              <div className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean">
                <ChipIcon className="object-contain w-5 mr-2" /> Overview
              </div>
              <div className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean">
                <DatabaseIcon className="object-contain w-5 mr-2" />
                Loyalty Token
              </div>
              <div className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean">
                <CodeIcon className="object-contain w-5 mr-2" /> Developers
              </div>
              <div className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean">
                <TerminalIcon className="object-contain w-5 mr-2" /> Go to
                Sandbox
              </div>
              <div className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean">
                <CogIcon className="object-contain w-5 mr-2" /> Admin
              </div>
              <div className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean">
                <QuestionMarkCircleIcon className="object-contain w-5 mr-2" />{' '}
                Help Center
              </div>
            </nav>
            <div className="flex items-center justify-between w-full p-5 mt-auto">
              <button
                className="outline-none text-cerulean focus:outline-none"
                onClick={logoutHanlder}
              >
                Logout
              </button>
              {userType === 'customer' && (
                <Link to="/customer" className="text-cerulean">
                  My Account
                </Link>
              )}
            </div>
          </aside>
        </>
      )}
      <button
        type="button"
        className="fixed z-50 block w-16 h-16 p-5 text-white bg-gray-900 rounded-full outline-none bottom-4 right-4 md:hidden focus:outline-none"
        onClick={() => setOpen((prevOpen) => !prevOpen)}
      >
        <span className="sr-only">Open site navigation</span>
        {open ? (
          <XIcon className="object-contain w-5" />
        ) : (
          <MenuAlt4Icon className="object-contain w-5" />
        )}
      </button>
    </>
  )
}

export default Sidebar
