import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { UsersRepository } from "../users/users.repository.js";
import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';



@Injectable()

export class AuthMiddleware implements NestMiddleware{

  constructor(private readonly configService: ConfigService,
    private readonly usersRepository: UsersRepository
  ){}

  async use(req:Request, res:Response, next:NextFunction){

    const authHeader = req.headers.authorization

    if(!authHeader){
      throw new UnauthorizedException("Authorization Header is missing")
    }
    const [type, token] = authHeader.split(' ')

    if(type !== 'Bearer' || !token){
      throw new UnauthorizedException("Invalid authorizatiuon format")
    }

    const secret = this.configService.getOrThrow<string>('JWT_SECRET')

    const decoded = jwt.verify(token, secret) as {
      userId: string,
      email: string
    }

    const user = await this.usersRepository.findById(
      decoded.userId
    )

    if(!user){
      throw new UnauthorizedException("User nomt found")
    }

    req.user = {
      userId: user.id
    }

    next()

  }


}
