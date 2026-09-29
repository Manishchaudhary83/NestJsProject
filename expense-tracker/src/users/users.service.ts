import { ConflictException, Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository.js";
import { CreateUserDto } from "./dto/create-user.dto.js";
import bcrypt from "bcryptjs";


@Injectable()

export class UsersService{
  constructor(private readonly userRepository: UsersRepository){}

  async createUser(data:CreateUserDto){
    const userexists = await this.userRepository.findByEmail(data.email)

    if(userexists){
      throw new ConflictException("User already exists")
    }

    const hashPassword = await bcrypt.hash(data.password, 10)

    const newUser = await this.userRepository.createUser({
      ...data, password:hashPassword
    })

    return newUser


  }

}
