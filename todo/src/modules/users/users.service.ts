import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import * as bcrypt from "bcryptjs";
import { CreateUserDto } from "./dto/createUser.dto.js";
import { UpdateUserDto } from './dto/updateUser.dto.js';
import { UserRepository } from "./user.repository.js";


@Injectable()

export class UserService {
    constructor(private readonly userRepo: UserRepository) { }

    async createUser(data: CreateUserDto) {
        const isUserAlready = await this.userRepo.findByEmail(data.email);
        if (isUserAlready) {
            throw new ConflictException('A user with this email already exists.');

        }

        const hashpassword = await bcrypt.hash(data.password, 10)

        const newUser = await this.userRepo.createUser({ ...data, password: hashpassword })

        return newUser
    }



//getall

async findAll(){
    return this.userRepo.findAll()
}


//find by id
async findOne(id:string){
    return await this.userRepo.findOne(id);
}

//upate

async updateUser(id: string, update: UpdateUserDto){
    const user = await this.userRepo.findOne(id)

    if(!user){
        throw new NotFoundException("User not found")
    }

    return await this.userRepo.updateUser(id, update)
}

//delete
async deleteUser(id: string){
const user = await this.userRepo.findOne(id)

    if(!user){
        throw new NotFoundException("User not found")
    }

     await this.userRepo.deleteUser(id)
     return{
        message: "User deleted successfully"
     }
}

}



