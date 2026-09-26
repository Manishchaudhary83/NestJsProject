import { Injectable } from "@nestjs/common";
import { User } from "../users/users.entity.js";
import { JwtService } from "@nestjs/jwt";


@Injectable()

export class TokenService{
  constructor (private readonly jwtService : JwtService ){}
  async generateToken(user:User){
    const payload = {
      userId: user.id,
      email: user.email
    }
    return await this. jwtService.signAsync(payload, {expiresIn: '15m'})
  }

  async generateRefreshToken(user: User){
    const payload = {
      userId: user.id
    }

    return await this.jwtService.signAsync(payload, {expiresIn: '7d'})
  }

}
