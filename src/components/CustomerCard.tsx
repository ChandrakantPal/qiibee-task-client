import { FC, FormEvent, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import dayjs from 'dayjs'

import classNames from 'classnames'
import { UserCircleIcon } from '@heroicons/react/outline'

import { Following } from '../type'

import Modal from './Modal'
import { useAppDispatch } from '../store/hooks'
import { setBrandLoyaltyPoint } from '../store/userSlice'

interface CustomerCardProp {
  firstName: string
  lastName: string
  following: Following[]
  joinDate: string
  refetch: () => void
  brandId: string
  customerId: string
}

const CustomerCard: FC<CustomerCardProp> = ({
  firstName,
  lastName,
  following,
  joinDate,
  refetch,
  brandId,
  customerId,
}) => {
  const [open, setOpen] = useState(false)
  const [points, setPoints] = useState(0)
  const [error, setError] = useState('')
  const dispatch = useAppDispatch()

  const [allocatePoints] = useMutation(ALOCATE_POINTS, {
    update: (_, { data }) => {
      console.log(data)
      dispatch(setBrandLoyaltyPoint(data.allocateLoyaltyPoint.loyaltyPoint))
      setPoints(0)
      setOpen(false)
      refetch()
    },
    onError: (err) => {
      console.log(err)
      setError('Something went wrong')
    },
  })

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault()
    allocatePoints({
      variables: {
        brandId,
        customerId,
        points,
      },
    })
  }

  const pointsAlreadyAlloted = following.filter(
    (brand) => brand.brandId === brandId && brand.loyaltyPoint > 0
  )
  return (
    <>
      <article className="justify-between hidden p-8 my-1 bg-white rounded-lg shadow-lg md:flex">
        <div className="object-contain w-8 mx-4 bg-gray-100 rounded-full md:p-4 md:w-36">
          <UserCircleIcon className="object-contain w-full text-gray-700" />
        </div>
        <div className="flex items-start justify-between flex-1">
          <div className="space-y-2 text-left">
            <div className="flex">
              <p className="text-base capitalize">
                {firstName} {lastName}
              </p>
            </div>
            <p className="text-sm text-gray-700">
              {following.length} following
            </p>
            <p className="text-xs text-gray-600">
              {dayjs(joinDate).format('DD MMMM YYYY')}
            </p>
          </div>
          {pointsAlreadyAlloted.length > 0 ? (
            <p className="text-sm">
              Points {pointsAlreadyAlloted[0].loyaltyPoint}
            </p>
          ) : (
            <button
              className="text-sm outline-none text-cerulean focus:outline-none"
              onClick={() => setOpen(true)}
            >
              Loyalty Reward
            </button>
          )}
        </div>
      </article>
      <article className="w-full p-8 mx-auto mb-4 bg-white rounded-lg shadow-lg md:hidden ">
        <UserCircleIcon className="object-contain w-1/2 mx-auto text-gray-700 md:w-1/3" />
        <header className="flex items-center justify-between p-2 leading-tight md:p-4">
          <h1 className="text-lg">
            <span className="flex text-sm text-black no-underline capitalize hover:underline md:text-base">
              {firstName} {lastName}
            </span>
          </h1>
        </header>
        <p className="mb-2 text-sm text-gray-700">
          {following.length} following
        </p>
        <footer className="flex items-center justify-between p-1 leading-none md:p-4">
          <p className="text-xs text-gray-600">
            {dayjs(joinDate).format('DD MMMM YYYY')}
          </p>
          <span className="no-underline text-grey-darker hover:text-red-dark">
            {pointsAlreadyAlloted.length > 0 ? (
              <p className="text-sm">
                Points {pointsAlreadyAlloted[0].loyaltyPoint}
              </p>
            ) : (
              <button
                className="text-sm outline-none text-cerulean focus:outline-none"
                onClick={() => setOpen(true)}
              >
                Loyalty Reward
              </button>
            )}
          </span>
        </footer>
      </article>
      {open && (
        <Modal close={() => setOpen(false)}>
          <div
            className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="w-full px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
              <div className="justify-center sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900"
                    id="modal-headline"
                  >
                    Allocate Loyalty Point
                  </h3>
                  <form onSubmit={handelSubmit}>
                    <input
                      type="number"
                      placeholder="Enter points"
                      value={points}
                      min="1"
                      onChange={(e) => setPoints(parseInt(e.target.value))}
                      className={classNames(
                        'w-full py-1 px-2 text-sm font-light transition duration-200 border border-black rounded outline-none focus:border-blue-500',
                        { 'border-red-500': error }
                      )}
                    />
                    <div className="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="submit"
                        className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-picton-blue hover:bg-picton-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-picton-blue sm:ml-3 sm:w-auto sm:text-sm bg-cerulean"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setOpen(false)}
                        className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default CustomerCard

const ALOCATE_POINTS = gql`
  mutation allocateLoyaltyPoint(
    $points: Int!
    $brandId: ID!
    $customerId: ID!
  ) {
    allocateLoyaltyPoint(
      points: $points
      brandId: $brandId
      customerId: $customerId
    ) {
      id
      brandname
      loyaltyPoint
      followers {
        customerId
        loyaltyPoint
        redeemed
      }
    }
  }
`
