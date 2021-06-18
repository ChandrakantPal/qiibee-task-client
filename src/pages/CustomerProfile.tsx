import { Redirect } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import BrandCard from '../components/BrandCard'
import { UserCircleIcon } from '@heroicons/react/outline'
import { useAppSelector } from '../store/hooks'
import { gql, useQuery } from '@apollo/client'
import { Brand } from '../type'

const CustomerProfile = () => {
  const { userType, customer } = useAppSelector((state) => state.user)

  const { data, loading, error, refetch } = useQuery(GET_FOLLOWING, {
    variables: {
      customerId: customer.id,
    },
    fetchPolicy: 'cache-and-network',
  })

  if (userType !== 'customer' || customer === null) {
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
              <p className="text-xl capitalize">
                {customer.firstname} {customer.lastname}
              </p>
              <p>{customer.email}</p>
              <div className="flex justify-between w-full">
                <p>{customer.following.length} following</p>
                <p>{customer.totalloyaltyPoint} Points</p>
              </div>
            </div>
          </div>
          <div className="w-full md:mx-auto md:space-y-2 lg:w-108">
            <hr className="mb-4 border-gray-700" />
            {data?.getFollowing?.map((brand: Brand) => (
              <BrandCard
                key={brand.id}
                brandId={brand.id}
                brandName={brand.brandname}
                brandSymbol={brand.brandsymbol}
                customerId={customer.id}
                followers={brand.followers}
                loyaltyPoints={brand.loyaltyPoint}
                refetch={refetch}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerProfile

const GET_FOLLOWING = gql`
  query getFollowing($customerId: ID!) {
    getFollowing(customerId: $customerId) {
      id
      brandname
      brandsymbol
      email
      followers {
        customerId
        loyaltyPoint
        redeemed
      }
      loyaltyPoint
      createdAt
    }
  }
`
