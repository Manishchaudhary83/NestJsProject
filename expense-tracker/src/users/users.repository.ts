import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto.js";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./users.entity.js";
import { Repository } from "typeorm";

@Injectable()

export class UsersRepository{
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}

  async createUser(data: CreateUserDto){
    const user = this.userRepository.create(data)
    return await this.userRepository.save(user)
  }

  async findByEmail(email: string):Promise <User|null>{
    return this.userRepository.findOne({
      where: {email:email}
    })
  }

  async findById(id:string): Promise<User|null>{
    return this.userRepository.findOne({
      where: {id}
    })

  }
}



 