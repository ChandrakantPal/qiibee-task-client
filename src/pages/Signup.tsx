import { gql, useMutation } from '@apollo/client'
import classNames from 'classnames'
import { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import Divider from '../components/Divider'
import InputGroup from '../components/InputGroup'

const Signup = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setuserType] = useState(() => 'customer')
  const [brandname, setBrandname] = useState('')
  const [brandsymbol, setBrandsymbol] = useState('')
  const [loyaltyPoint, setLoyaltyPoint] = useState(10)
  const [errors, setErrors] = useState<any>({})

  const [createCustomer] = useMutation(CREATE_NEW_CUSTOMER, {
    update: (_, { data: { registerCustomer: userData } }) => {
      // localStorage.setItem('token', userData.token)
      // dispatch('LOGIN', userData)
      // history.push('/')
      setEmail('')
      setPassword('')
      setFirstname('')
      setLastname('')
      console.log({ userData })
    },
    onError: (err) => {
      console.log(err.graphQLErrors[0].extensions.exception.errors)
      setErrors(err.graphQLErrors[0].extensions.exception.errors)
    },
  })
  const [createBrand] = useMutation(CREATE_NEW_BRAND, {
    update: (_, { data: { registerBrand: userData } }) => {
      // localStorage.setItem('token', userData.token)
      // dispatch('LOGIN', userData)
      // history.push('/')
      setEmail('')
      setPassword('')
      setBrandname('')
      setBrandsymbol('')
      setLoyaltyPoint(10)
      console.log({ userData })
    },
    onError: (err) => {
      console.log(err.graphQLErrors[0].extensions.exception.errors)
      setErrors(err.graphQLErrors[0].extensions.exception.errors)
    },
  })

  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    if (userType === 'brand') {
      createBrand({
        variables: {
          brandname,
          brandsymbol,
          email,
          password,
          loyaltyPoint,
        },
      })
    }
    if (userType === 'customer') {
      createCustomer({
        variables: {
          firstname,
          lastname,
          email,
          password,
        },
      })
    }
  }

  const changeFormToBrand = () => {
    setuserType('brand')
    setEmail('')
    setPassword('')
    setFirstname('')
    setLastname('')
  }

  const changeFormToCustomer = () => {
    setuserType('customer')
    setEmail('')
    setPassword('')
    setBrandname('')
    setBrandsymbol('')
    setLoyaltyPoint(10)
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
            Create your account
          </h4>
          <div className="flex flex-wrap">
            <form onSubmit={submitHandler}>
              <div className="flex flex-wrap">
                {userType === 'customer' && (
                  <>
                    <InputGroup
                      placeholder="First name"
                      type="text"
                      className="w-full px-5 pb-2 md:px-2 md:pb-8 md:w-1/2"
                      value={firstname}
                      setValue={setFirstname}
                      error={errors.firstname}
                    />
                    <InputGroup
                      placeholder="Last name"
                      type="text"
                      className="w-full px-5 pb-2 md:px-2 md:pb-8 md:w-1/2"
                      value={lastname}
                      setValue={setLastname}
                      error={errors.lastname}
                    />
                  </>
                )}
                {userType === 'brand' && (
                  <>
                    <InputGroup
                      placeholder="Brand name"
                      type="text"
                      className="w-full px-5 pb-2 md:px-2 md:pb-8 md:w-1/2"
                      value={brandname}
                      setValue={setBrandname}
                      error={errors.brandname}
                    />
                    <InputGroup
                      placeholder="Brand symbol"
                      type="text"
                      className="w-full px-5 pb-2 md:px-2 md:pb-8 md:w-1/2"
                      value={brandsymbol}
                      setValue={setBrandsymbol}
                      error={errors.brandsymbol}
                    />
                  </>
                )}
                <InputGroup
                  placeholder="Email"
                  type="email"
                  className="w-full px-5 pb-2 md:px-2 md:pb-8 md:w-1/2"
                  value={email}
                  setValue={setEmail}
                  error={errors.email}
                />
                <InputGroup
                  placeholder="Password"
                  type="password"
                  className="w-full px-5 pb-2 md:px-2 md:pb-8 md:w-1/2"
                  value={password}
                  setValue={setPassword}
                  error={errors.password}
                />
                {userType === 'brand' && (
                  <div className="w-full px-5 pb-2 md:px-2 md:pb-8 md:w-1/2">
                    <small>Brand Loyalty Point</small>
                    <input
                      type="number"
                      min="10"
                      max="1000"
                      value={loyaltyPoint}
                      onChange={(e) =>
                        setLoyaltyPoint(parseInt(e.target.value))
                      }
                      className={classNames(
                        'w-full px-2 py-1 text-sm font-light transition duration-200 border border-black rounded outline-none focus:border-blue-500',
                        {
                          'border-red-500':
                            loyaltyPoint < 10 || isNaN(loyaltyPoint),
                        }
                      )}
                    />
                    <small
                      className={classNames(
                        'block font-medium text-center text-gray-500 text-xs',
                        {
                          'text-red-600':
                            loyaltyPoint < 10 || isNaN(loyaltyPoint),
                        }
                      )}
                    >
                      Please add Loyalty Points in the range 10-1000
                    </small>
                  </div>
                )}
              </div>
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
              {userType === 'brand' ? (
                <div
                  onClick={changeFormToCustomer}
                  className="px-2 mt-2 text-sm cursor-pointer text-cerulean hover:text-cerulean-400"
                >
                  Create Customer account insted
                </div>
              ) : (
                <div
                  onClick={changeFormToBrand}
                  className="px-2 mt-2 text-sm cursor-pointer text-cerulean hover:text-cerulean-400"
                >
                  Create Brand account insted
                </div>
              )}
              <div className="flex items-center justify-between w-full mt-10">
                <Link
                  to="/login"
                  className="text-cerulean hover:text-cerulean-400"
                >
                  Login
                </Link>
                <button
                  type="submit"
                  className="px-3 py-2 text-center text-white rounded-lg outline-none bg-cerulean hover:bg-cerulean-700"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup

const CREATE_NEW_CUSTOMER = gql`
  mutation registerCustomer(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    registerCustomer(
      registerInput: {
        firstname: $firstname
        lastname: $lastname
        email: $email
        password: $password
      }
    ) {
      id
      email
      firstname
      lastname
      createdAt
      token
      following {
        brandId
        loyaltyPoint
      }
      totalloyaltyPoint
    }
  }
`
const CREATE_NEW_BRAND = gql`
  mutation registerBrand(
    $brandname: String!
    $brandsymbol: String!
    $email: String!
    $password: String!
    $loyaltyPoint: Int!
  ) {
    registerBrand(
      registerInput: {
        brandname: $brandname
        brandsymbol: $brandsymbol
        email: $email
        password: $password
        loyaltyPoint: $loyaltyPoint
      }
    ) {
      id
      brandname
      brandsymbol
      email
      followers {
        customerId
        loyaltyPoint
      }
      loyaltyPoint
      token
      createdAt
    }
  }
`
