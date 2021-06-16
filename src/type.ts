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
  token: string
  totalloyaltyPoint: string
}

export interface Following {
  brandId: string
  loyaltyPoint: number
}
