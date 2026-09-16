import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "./users.entity.js";
import { UsersControllers } from "./users.controllers.js";
import { UserRepository } from "./user.repository.js";
import { UserService } from "./users.service.js";


@Module({
    imports:[TypeOrmModule.forFeature([Users])],
    controllers:[UsersControllers],
    providers:[UserRepository, UserService],
    exports:[UserService]
})


export class UserModules{

}