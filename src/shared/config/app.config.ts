import 'dotenv/config'
import { z } from 'zod'

const appConfigSchema = z.object({
  PORT: z.union([z.string(), z.number()]).transform((port) => Number(port)).default(3000)
})

let appConfig: z.infer<typeof appConfigSchema> = {}

try {
  appConfig = appConfigSchema.parse({
    PORT: process.env.PORT
  })
} catch (error) {
  if (error instanceof z.ZodError) {
    console.error(error.errors)
  }
}

export { appConfig }