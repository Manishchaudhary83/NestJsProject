import { Body, Controller, Post } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto.js";
import { AuthService } from "./auth.service.js";


@Controller('auth')

export class AuthController{
  constructor(private readonly authService: AuthService){}
  @Post('login')

  async login(@Body() data: LoginDto){
    return await this.authService.loginUser(data)
  }
}
