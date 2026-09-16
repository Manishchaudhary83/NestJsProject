import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "./users.entity.js";
import { CreateUserDto } from './dto/createUser.dto.js';
import { UpdateUserDto } from './dto/updateUser.dto.js';


@Injectable()

export class UserRepository {
    constructor(@InjectRepository(Users) private userRepo: Repository<Users>) { }


    createUser(data: CreateUserDto) {
        const user = this.userRepo.create(data)
        return this.userRepo.save(user)
    }

       findByEmail(email:string):Promise<Users|null>{
        return this.userRepo.findOne({
            where: {email:email}
        })
    }


    findAll():Promise<Users[]>{
       return this.userRepo.find({
        where:{},
        skip: 0,
        take: 10,
       })
    }

      findOne(id: string): Promise<Users|null>{
        return  this.userRepo.findOne({
            where: {id}
        })
    }



    // findAndCount(): Promise<[Users[], number]>{
    //     return this.userRepo.findAndCount()
    // }



    //update
    updateUser(id: string, data: UpdateUserDto){
        this.userRepo.update(id, data)
        return this.userRepo.findOne({
            where: {id}
        })
    }


    //delete
    deleteUser(id: string){
        return this.userRepo.delete(id)
    }
}
