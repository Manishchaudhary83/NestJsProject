import { Module } from "@nestjs/common";

import { AuthService } from "./auth.service.js";
import { TokenService } from "./token.service.js";
import { AuthController } from "./auth.controller.js";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Usersmodule } from "../users/users.module.js";

import { AuthMiddleware } from "./auth.middleware.js";


@Module({
  imports:[Usersmodule,
       JwtModule.registerAsync({
      imports: [ConfigModule],

      inject: [ConfigService],

      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('app.jwtSecret'),
      }),
    }),

  ],
providers: [AuthService, TokenService, AuthMiddleware],
controllers: [AuthController],

exports: [AuthMiddleware]
})

export class AuthModule{}
