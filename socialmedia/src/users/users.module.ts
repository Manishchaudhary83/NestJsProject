import { Module } from "@nestjs/common";
import { OrganizationModule } from "../organizations/organization.module.js";
import { UsersControllers } from "./users.controllers.js";
import { UserService } from "./users.service.js";
import { UserRepository } from "./users.repository.js";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./users.entity.js";
import { UserOrganization } from "./user-organization.entity.js";


@Module({
  imports: [TypeOrmModule.forFeature([
    User,
    UserOrganization
  ]
  )],
  controllers:[UsersControllers],
  providers:[UserService, UserRepository],
  exports: [UserRepository, UserService]


})


export class Usersmodule{

}
