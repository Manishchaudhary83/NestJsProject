import { Controller, Post, Body } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto.js";
import { UsersService } from "./users.service.js";


@Controller('user')

export class UserController{
  constructor(private readonly usersService: UsersService){}
  @Post('register')
  async createUser(@Body() data: CreateUserDto){
    return await this.usersService.createUser(data)
  }
}
