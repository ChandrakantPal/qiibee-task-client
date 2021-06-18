import { Redirect } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import BrandCard from '../components/BrandCard'
import { useAppSelector } from '../store/hooks'
import { gql, useQuery } from '@apollo/client'
import { Brand } from '../type'

const Home = () => {
  const { userType, customer } = useAppSelector((state) => state.user)

  const { data, error, loading, refetch } = useQuery(GET_BRANDS, {
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
          <div className="w-full md:mx-auto md:space-y-2 lg:w-1/3">
            {data?.getBrands?.map((brand: Brand) => (
              <BrandCard
                key={brand.id}
                brandName={brand.brandname}
                brandSymbol={brand.brandsymbol}
                startDate={brand.createdAt}
                followers={brand.followers}
                loyaltyPoints={brand.loyaltyPoint}
                brandId={brand.id}
                customerId={customer.id}
                refetch={refetch}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

const GET_BRANDS = gql`
  query {
    getBrands {
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
