import { useState } from 'react'
import InputGroup from '../components/InputGroup'

const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-full mx-4 bg-white rounded-lg shadow-xl md:mx-0 md:w-108">
        <div className="flex items-center p-2">
          <img
            src="https://dashboard.qiibee.com/static/media/qbx.9a4017b3.png"
            alt="logo"
            className="object-contain w-5"
          />
          <p className="px-2 text-sm">Welcome to the qiibee Dashboard</p>
        </div>
        <div className="h-0.5 bg-gradient-to-r from-blue-500 to-pink-500" />
        <div className="p-5 md:p-10">
          <h4 className="mb-4 text-lg font-bold md:mb-10 md:text-xl">
            Create your account
          </h4>
          <div className="flex flex-wrap">
            <InputGroup
              placeholder="First name"
              type="text"
              className="w-full px-5 pb-2 md:px-2 md:pb-8 md:w-1/2"
              value={firstName}
              setValue={setFirstName}
            />
            <InputGroup
              placeholder="Last name"
              type="text"
              className="w-full px-5 pb-2 md:px-2 md:pb-8 md:w-1/2"
              value={lastName}
              setValue={setLastName}
            />
            <InputGroup
              placeholder="Email"
              type="email"
              className="w-full px-5 pb-2 md:px-2 md:pb-8 md:w-1/2"
              value={email}
              setValue={setEmail}
            />
            <InputGroup
              placeholder="Password"
              type="password"
              className="w-full px-5 pb-2 md:px-2 md:pb-8 md:w-1/2"
              value={password}
              setValue={setPassword}
            />
            <div className="flex items-center mb-2">
              <input type="checkbox" className="ml-2 rounded" />
              <label className="ml-2 text-xs">
                I would like to receive the qiibee loyalty newsletter
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="ml-2 rounded" />
              <label className="ml-2 text-xs">
                I hereby accept the Terms & Conditions and Privacy Policy
              </label>
            </div>
            <div className="flex items-center justify-between w-full mt-10">
              <p className="text-blue-500">Login</p>
              <button className="px-3 py-2 text-center text-white rounded-lg outline-none bg-cerulean hover:bg-cerulean-700">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
