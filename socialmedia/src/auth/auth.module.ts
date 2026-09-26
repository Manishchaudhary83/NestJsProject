import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { AuthController } from "./auth.controller.js";
import { Usersmodule } from "../users/users.module.js";
import { TokenService } from "./token.service.js";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "../strategies/jwt.strategy.js";


@Module({
  imports: [Usersmodule,
    PassportModule,
        JwtModule.registerAsync({
      imports: [ConfigModule],

      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('JWT_SECRET'),
      }),
    }),
  ],
  providers: [AuthService, TokenService, JwtStrategy],
  controllers: [AuthController],
  exports: []
})

export class AuthModule{}
