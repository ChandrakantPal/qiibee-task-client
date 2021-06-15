import { Link } from 'react-router-dom'
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

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <aside className="absolute inset-y-0 left-0 w-64 h-full py-5 space-y-6 transition duration-200 ease-in-out transform -translate-x-full bg-white md:relative md:translate-x-0">
        <div className="flex flex-col justify-around h-18">
          <Link to="/" className="p-5">
            <span className="object-contain w-12 p-3 mr-2 text-center text-white rounded-full bg-gradient-to-b from-blue-500 to-pink-500">
              CP
            </span>
            Chandrakant Pal
          </Link>
          <Divider />
        </div>
        <nav>
          <Link
            to="/"
            className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean"
          >
            <AdjustmentsIcon className="object-contain w-5 mr-2" /> Set up
            Dashboard
          </Link>
          <Link
            to="/"
            className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean"
          >
            <ChipIcon className="object-contain w-5 mr-2" /> Overview
          </Link>
          <Link
            to="/"
            className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean"
          >
            <DatabaseIcon className="object-contain w-5 mr-2" />
            Loyalty Token
          </Link>
          <Link
            to="/"
            className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean"
          >
            <CodeIcon className="object-contain w-5 mr-2" /> Developers
          </Link>
          <Link
            to="/"
            className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean"
          >
            <TerminalIcon className="object-contain w-5 mr-2" /> Go to Sandbox
          </Link>
          <Link
            to="/"
            className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean"
          >
            <CogIcon className="object-contain w-5 mr-2" /> Admin
          </Link>
          <Link
            to="/"
            className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean"
          >
            <QuestionMarkCircleIcon className="object-contain w-5 mr-2" /> Help
            Center
          </Link>
        </nav>
      </aside>
      {open && (
        <>
          <aside className="fixed z-20 w-2/3 h-full py-5 space-y-6 text-sm transition duration-200 ease-in-out bg-white md:hidden">
            <div className="flex flex-col justify-around h-18">
              <Link to="/" className="p-5">
                <span className="object-contain w-12 p-3 mr-2 text-center text-white rounded-full bg-gradient-to-b from-blue-500 to-pink-500">
                  CP
                </span>
                Chandrakant Pal
              </Link>
              <Divider />
            </div>
            <nav>
              <Link
                to="/"
                className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean"
              >
                <AdjustmentsIcon className="object-contain w-5 mr-2" /> Set up
                Dashboard
              </Link>
              <Link
                to="/"
                className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean"
              >
                <ChipIcon className="object-contain w-5 mr-2" /> Overview
              </Link>
              <Link
                to="/"
                className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean"
              >
                <DatabaseIcon className="object-contain w-5 mr-2" />
                Loyalty Token
              </Link>
              <Link
                to="/"
                className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean"
              >
                <CodeIcon className="object-contain w-5 mr-2" /> Developers
              </Link>
              <Link
                to="/"
                className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean"
              >
                <TerminalIcon className="object-contain w-5 mr-2" /> Go to
                Sandbox
              </Link>
              <Link
                to="/"
                className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean"
              >
                <CogIcon className="object-contain w-5 mr-2" /> Admin
              </Link>
              <Link
                to="/"
                className="flex items-center px-4 py-2.5 transition duration-200 hover:text-cerulean"
              >
                <QuestionMarkCircleIcon className="object-contain w-5 mr-2" />{' '}
                Help Center
              </Link>
            </nav>
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
