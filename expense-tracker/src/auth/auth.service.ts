import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersRepository } from "../users/users.repository.js";
import { LoginDto } from "./dto/login.dto.js";
import { TokenService } from "./token.service.js";
import bcrypt from "bcryptjs";


@Injectable()

export class AuthService{
 constructor(private readonly userRepository: UsersRepository,
  private readonly tokenService: TokenService
  ){}


 async loginUser(data: LoginDto){

  //check userr
  const user = await this.userRepository.findByEmail(data.email)

  if(!user){
    throw new UnauthorizedException("Invalid Email or password")
  }

//compare user password with hash password
  const passwordMatched = await bcrypt.compare(data.password, user.password)

  if(!passwordMatched){
    throw new UnauthorizedException("Invalid email or password")
  }


  //Generete access token
  const accessToken = await this.tokenService.generateAccessToken(user)

  const refreshToken = await this.tokenService.generateRefreshToken(user)

  return{
    message: "User login successfully",
    accessToken,
    refreshToken,
    user
  }

 }
}
