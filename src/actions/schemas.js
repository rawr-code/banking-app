import { schema } from 'normalizr'

export const depositsSchema = new schema.Entity('deposits')
export const arrayOfDeposits = new schema.Array(depositsSchema)

export const withdrawsSchema = new schema.Entity('withdraws')
export const arrayOfWithdraws = new schema.Array(withdrawsSchema)

export const swapsSchema = new schema.Entity('swaps')
export const arrayOfSwaps = new schema.Array(swapsSchema)
