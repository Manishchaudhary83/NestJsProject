import { ConflictException, Injectable } from "@nestjs/common";
import { UserRepository } from "./users.repository.js";
import { CreateUserDto } from "./dto/create-user.dto.js";
import bcrypt from "bcryptjs";




@Injectable()

export class UserService{
  constructor(private readonly userRepository : UserRepository){}

  async createUser(data:CreateUserDto){
    const existingUser = await this.userRepository.findByEmail(data.email)

    if(existingUser){
       throw new ConflictException("User already exists")
    }

    const hashpassword = await bcrypt.hash(data.password, 10)

    const newUser = await this.userRepository.createUser({...data, password:hashpassword})

    return newUser
  }
}
