import { registerAs } from "@nestjs/config";

export default registerAs('database', () => ({
  port:Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD



}))
