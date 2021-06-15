import { gql, useLazyQuery } from '@apollo/client'
import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Divider from '../components/Divider'
import InputGroup from '../components/InputGroup'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  const history = useHistory()

  const [loginUser] = useLazyQuery(LOGIN_USER, {
    onError: (err) => {
      setErrors(err.graphQLErrors[0].extensions.errors)
    },
    onCompleted: (data) => {
      console.log({ data })

      // localStorage.setItem('token', data.login.token)
      // history.push('/')
    },
  })

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    loginUser({ variables: { email, password } })
  }

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
        <Divider />
        <div className="p-5 md:p-10">
          <h4 className="mb-4 text-lg font-bold md:mb-10 md:text-xl">
            Log in to your account
          </h4>
          <div className="flex flex-wrap">
            <form onSubmit={submitHandler}>
              <InputGroup
                placeholder="Email"
                type="email"
                className="w-full px-5 pb-2 md:px-2 md:pb-8"
                value={email}
                setValue={setEmail}
                error={errors}
              />
              <InputGroup
                placeholder="Password"
                type="password"
                className="w-full px-5 pb-2 md:px-2 md:pb-8 "
                value={password}
                setValue={setPassword}
                error={errors}
              />

              <div className="flex items-center justify-between w-full mt-10">
                <Link
                  to="/signup"
                  className="text-cerulean hover:text-cerulean-400"
                >
                  Signup
                </Link>
                <button
                  type="submit"
                  className="px-3 py-2 text-center text-white rounded-lg outline-none bg-cerulean hover:bg-cerulean-700"
                >
                  login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

const LOGIN_USER = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userType
      customer {
        id
        email
        firstname
        lastname
        createdAt
        following {
          brandId
          loyaltyPoint
        }
        totalloyaltyPoint
        token
      }
      brand {
        id
        email
        brandname
        brandsymbol
        createdAt
        followers {
          customerId
          loyaltyPoint
        }
        loyaltyPoint
        token
      }
    }
  }
`
