import { Link } from 'react-router-dom'
import Divider from '../components/Divider'
import {
  AdjustmentsIcon,
  ChipIcon,
  DatabaseIcon,
  CodeIcon,
  TerminalIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline'

const Home = () => {
  return (
    <div className="relative flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 py-5 space-y-6 bg-white">
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
      {/* content */}
      <div className="flex-1 p-10 text-2xl font-bold">content goes here</div>
    </div>
  )
}

export default Home
