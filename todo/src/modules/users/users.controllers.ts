import { Body, Controller, Post, Get, Param, Put, Delete } from "@nestjs/common";
import { UserService } from "./users.service.js";
import { CreateUserDto } from "./dto/createUser.dto.js";
import { Users } from "./users.entity.js";
import { UpdateUserDto } from "./dto/updateUser.dto.js";


@Controller('/users')

export class UsersControllers{
    constructor(private readonly usersService: UserService){}

    @Post('register')
    async createUser(@Body() body:CreateUserDto):Promise <Users>{
        return await this.usersService.createUser(body)
    }

//get
@Get()
async findAll(){
    return  await this.usersService.findAll()
}


//get by id
@Get(':id')
async findOne(@Param('id') id: string){
    return await this.usersService.findOne(id)
}


//update
@Put(':id')
async updateUser(@Param('id') id:string, @Body() data: UpdateUserDto){
    return await this.usersService.updateUser(id, data)

}

@Delete(':id')
async deleteUser(@Param('id') id: string){
    return await this.usersService.deleteUser(id)
}


}
