import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./users.service.js";
import { UserRepository } from "./users.repository.js";
import { CreateUserDto } from "./dto/create-user.dto.js";
import { User } from "./users.entity.js";

@Controller('users')

export class UsersControllers{
 constructor(private readonly userService : UserService){}

@Post('register')
async createUser(@Body() body:CreateUserDto):Promise <User>{
 return await this.userService.createUser(body)
}

}
