export interface Brand {
  brandname: string
  brandsymbol: string
  createdAt?: string
  email: string
  followers: Follower[]
  id: string
  loyaltyPoint: number
  token?: string
}

export interface Follower {
  customerId: string
  loyaltyPoint: number
  redeemed?: boolean
}

export interface UserType {
  userType: 'brand' | 'customer'
}

export interface Customer {
  createdAt: string
  email: string
  firstname: string
  following: Following[]
  id: string
  lastname: string
  token?: string
  totalloyaltyPoint: number
}

export interface Following {
  brandId: string
  loyaltyPoint: number
  redeemed?: boolean
}
