import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity.js";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto.js";



@Injectable()

export class UserRepository{
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}


  async createUser(data:CreateUserDto){
    const user = this.userRepository.create(data)
    return await this.userRepository.save(user)
  }

  async findByEmail(email:string):Promise <User|null>{
    return await this.userRepository.findOne({
      where: {email:email}
    })
  }

  
}
