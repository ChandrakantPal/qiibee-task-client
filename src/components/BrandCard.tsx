import { gql, useMutation } from '@apollo/client'
import { BriefcaseIcon, BadgeCheckIcon } from '@heroicons/react/outline'
import dayjs from 'dayjs'
import { FC } from 'react'
import { useAppDispatch } from '../store/hooks'
import { setTotalLoyaltyPoint, setUserCustomer } from '../store/userSlice'
import { Follower } from '../type'

interface BrandCardProp {
  brandName?: string
  brandSymbol?: string
  startDate?: string
  followers?: Follower[]
  loyaltyPoints?: number
  brandId?: string
  customerId?: string
  refetch?: () => void
}

const BrandCard: FC<BrandCardProp> = ({
  brandName,
  brandSymbol,
  startDate,
  followers,
  loyaltyPoints,
  brandId,
  customerId,
  refetch,
}) => {
  const dispatch = useAppDispatch()

  const [followBrand] = useMutation(FOLLOW_BRAND, {
    update: (_, { data }) => {
      console.log({ data })
      const userData = JSON.parse(localStorage.getItem('user'))
      userData.customer = data.followBrand
      localStorage.setItem('user', JSON.stringify(userData))
      dispatch(setUserCustomer(data.followBrand))
      refetch()
    },
    onError: (err) => {
      console.error(err)
    },
  })

  const [redeemPoints] = useMutation(REDEEM_POINT, {
    update: (_, { data }) => {
      console.log({ data })
      const userData = JSON.parse(localStorage.getItem('user'))
      userData.customer = data.redeemPoint
      localStorage.setItem('user', JSON.stringify(userData))
      dispatch(setUserCustomer(data.redeemPoint))
      dispatch(setTotalLoyaltyPoint(data.redeemPoint.totalloyaltyPoint))
      refetch()
    },
    onError: (err) => {
      console.error(err)
    },
  })

  const handleRedeem = () => {
    redeemPoints({
      variables: {
        brandId,
        customerId,
      },
    })
  }

  const handleFollow = () => {
    followBrand({
      variables: {
        brandId,
        customerId,
      },
    })
  }

  const followingAlready = followers.filter(
    (follower) => follower.customerId === customerId
  )

  console.log({ followingAlready })

  return (
    <>
      <article className="justify-between hidden p-8 my-1 bg-white rounded-lg shadow-lg md:flex">
        <div className="object-contain w-8 mx-4 bg-gray-100 rounded-full md:p-4 md:w-36">
          <BriefcaseIcon className="object-contain w-full text-gray-700" />
        </div>
        <div className="flex items-start justify-between flex-1">
          <div className="space-y-2 text-left">
            <div className="flex">
              <p className="text-base capitalize">{brandName}</p>
              <BadgeCheckIcon className="object-contain w-6 ml-1 text-blue-500" />
            </div>
            <p className="text-sm text-gray-700">{brandSymbol}</p>
            <p className="text-sm text-gray-700">
              {followers.length} followers
            </p>
            <p className="text-xs text-gray-600">
              {dayjs(startDate).format('DD MMMM YYYY')}
            </p>
          </div>
          {followingAlready.length > 0 ? (
            followingAlready[0].loyaltyPoint > 0 &&
            !followingAlready[0].redeemed ? (
              <button
                className="text-sm outline-none text-cerulean focus:outline-none"
                onClick={handleRedeem}
              >
                Redeem {followingAlready[0].loyaltyPoint} Points
              </button>
            ) : (
              <p className="text-sm">Following</p>
            )
          ) : (
            <button
              className="text-sm outline-none text-cerulean focus:outline-none"
              onClick={handleFollow}
            >
              Follow
            </button>
          )}
        </div>
      </article>
      <article className="w-full p-8 mx-auto mb-4 bg-white rounded-lg shadow-lg md:hidden ">
        <BriefcaseIcon className="object-contain w-1/2 mx-auto text-gray-700 md:w-1/3" />
        <header className="flex items-center justify-between p-2 leading-tight md:p-4">
          <h1 className="text-lg">
            <span className="flex text-sm text-black no-underline capitalize hover:underline md:text-base">
              {brandName}
              <BadgeCheckIcon className="object-contain w-5 ml-1 text-blue-500 md:w-6" />
            </span>
            <span className="flex items-center text-black no-underline hover:underline">
              <p className="text-sm">{brandSymbol}</p>
            </span>
          </h1>
        </header>
        <p className="mb-2 text-sm text-gray-700">
          {followers.length} followers
        </p>
        <footer className="flex items-center justify-between p-1 leading-none md:p-4">
          <p className="text-xs text-gray-600">
            {dayjs(startDate).format('DD MMMM YYYY')}
          </p>
          <span className="no-underline text-grey-darker hover:text-red-dark">
            {followingAlready.length > 0 ? (
              followingAlready[0].loyaltyPoint > 0 &&
              !followingAlready[0].redeemed ? (
                <button
                  className="text-sm outline-none text-cerulean focus:outline-none"
                  onClick={handleRedeem}
                >
                  Redeem {followingAlready[0].loyaltyPoint} Points
                </button>
              ) : (
                <p className="text-sm">Following</p>
              )
            ) : (
              <button
                className="text-sm outline-none text-cerulean focus:outline-none"
                onClick={handleFollow}
              >
                Follow
              </button>
            )}
          </span>
        </footer>
      </article>
    </>
  )
}

export default BrandCard

const FOLLOW_BRAND = gql`
  mutation followBrand($brandId: ID!, $customerId: ID!) {
    followBrand(brandId: $brandId, customerId: $customerId) {
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

const REDEEM_POINT = gql`
  mutation redeemPoint($customerId: ID!, $brandId: ID!) {
    redeemPoint(customerId: $customerId, brandId: $brandId) {
      id
      email
      firstname
      lastname
      createdAt
      token
      following {
        brandId
        loyaltyPoint
        redeemed
      }
      totalloyaltyPoint
    }
  }
`
