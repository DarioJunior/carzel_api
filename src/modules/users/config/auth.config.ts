import { z } from "zod";


const AuthConfigSchema = z.object({
  token: z.object({
    configSecret: z.string().default("secret"),
    expiresIn: z.string().default("15m")
  })
})

let authConfig: z.infer<typeof AuthConfigSchema> = {}

try {
  authConfig = AuthConfigSchema.parse({
    token: {
      configSecret: "secret",
      expiresIn: "15m"
    }
  })
} catch (error: any) {
  if (error instanceof z.ZodError) {
    console.error("ZOD Error na configuração do Secret Auth" + error.errors);
    throw new Error("ZOD Error na configuração do Secret Auth" + error.errors);
  }
}

export { authConfig }