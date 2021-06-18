import { Redirect } from 'react-router-dom'
import { UserCircleIcon } from '@heroicons/react/outline'
import { useAppSelector } from '../store/hooks'
import { gql, useQuery } from '@apollo/client'
import { Customer } from '../type'
import Sidebar from '../components/Sidebar'
import CustomerCard from '../components/CustomerCard'

const BrandProfile = () => {
  const { userType, brand } = useAppSelector((state) => state.user)

  const { data, loading, error, refetch } = useQuery(GET_FOLLOWERS, {
    variables: {
      brandId: brand.id,
    },
    fetchPolicy: 'cache-and-network',
  })

  console.log({ data, error, loading })

  if (userType !== 'brand' || brand === null) {
    return <Redirect to="/login" />
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        Loading...
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-screen h-screen">
        `Error ${error}`
      </div>
    )
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
          <div className="flex flex-wrap justify-center p-5 mx-auto mb-2 md:justify-evenly lg:w-108">
            <UserCircleIcon className="object-contain w-24 text-gray-700" />
            <div className="flex-1 ml-2 space-y-2 text-left">
              <p className="text-xl capitalize">{brand.brandname}</p>
              <small>{brand.brandsymbol}</small>
              <p>{brand.email}</p>
              <div className="flex justify-between w-full">
                <p>{brand.followers.length} following</p>
                <p>{brand.loyaltyPoint} Points Balance</p>
              </div>
            </div>
          </div>
          <div className="w-full md:mx-auto md:space-y-2 lg:w-108">
            <hr className="mb-4 border-gray-700" />
            {data?.getFollowers?.map((customer: Customer) => (
              <CustomerCard
                key={customer.id}
                firstName={customer.firstname}
                lastName={customer.lastname}
                joinDate={customer.createdAt}
                following={customer.following}
                customerId={customer.id}
                brandId={brand.id}
                refetch={refetch}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandProfile

const GET_FOLLOWERS = gql`
  query getFollowers($brandId: ID!) {
    getFollowers(brandId: $brandId) {
      id
      email
      firstname
      lastname
      createdAt
      following {
        brandId
        loyaltyPoint
        redeemed
      }
      totalloyaltyPoint
    }
  }
`
