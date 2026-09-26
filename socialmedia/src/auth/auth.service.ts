import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserRepository } from "../users/users.repository.js";
import { LoginDto } from "./dto/login.dto.js";
import bcrypt from "bcryptjs";
import { TokenService } from "./token.service.js";


@Injectable()
export class AuthService{
  constructor(private readonly userRepository: UserRepository,
    private readonly tokenService : TokenService
  ){}

  async loginUSer(data: LoginDto){

    const user = await this.userRepository.findByEmail(data.email)

    if(!user){
      throw new UnauthorizedException("Invalid email or password")
    }

    const validpassword = await bcrypt.compare(data.password, user.password)

    if(!validpassword){
      throw new UnauthorizedException("Invalid email or password")
    }


    const accessToken = await this.tokenService.generateToken(user)

    const refreshToken = await this.tokenService.generateRefreshToken(user)

    return{
      message: "User login successfully",
      accessToken,
      refreshToken,
      user
    }

  }


  async logout(){
    return  {
      message: "User logout successfully"
    }
  }
}
