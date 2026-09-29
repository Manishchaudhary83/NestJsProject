import { Module } from "@nestjs/common"
import { UserController } from "./users.controller.js"
import { UsersRepository } from "./users.repository.js"
import { UsersService } from "./users.service.js"
import { TypeOrmModule } from "@nestjs/typeorm"
import { User } from "./users.entity.js"

@Module({
   imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UsersService, UsersRepository],
  exports: [UsersRepository]

})

export class Usersmodule{}


