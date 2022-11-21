import { router } from '../trpc'
import { cardRouter } from './card'

export const appRouter = router({
  card: cardRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
