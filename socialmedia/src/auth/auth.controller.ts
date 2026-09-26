import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { LoginDto } from "./dto/login.dto.js";
import { JwtAuthGuard } from "../guard/jwt-auth.guard.js";

@Controller('auth')

export class AuthController{
  constructor(private readonly authService: AuthService){}

  @Post('login')
  async login(@Body() user:LoginDto){
    return await this.authService.loginUSer(user)
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(){
    return this.authService.logout()
  }
}
