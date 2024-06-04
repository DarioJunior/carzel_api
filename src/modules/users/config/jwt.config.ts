import { z } from "zod";



const JWTConfigSchema = z.object({
  algorithm: z.string().default("HS256")
})

let jwtConfig: z.infer<typeof JWTConfigSchema> = {}

try {
  jwtConfig = JWTConfigSchema.parse({
    algorithm: "HS256"
  })
} catch (error: any) {
  if (error instanceof z.ZodError) {
    console.error("ZOD Error na configuração do HASH JWT" + error.errors);
    throw new Error("ZOD Error na configuração do HASH JWT" + error.errors);
  }
}

export { jwtConfig }