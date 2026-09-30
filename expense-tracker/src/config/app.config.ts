import { registerAs } from "@nestjs/config";

export default registerAs('app', () => ({
  port: Number(process.env.PORT),
  jwtSecret: process.env.JWT_SECRET,
}))
