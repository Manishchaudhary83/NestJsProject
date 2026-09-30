import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Expenses } from "./expense.entity.js";
import { ExpenseRepository } from "./expense.repository.js";
import { ExpenseService } from "./expense.service.js";
import { ExpenseController } from "./expense.controller.js";
import { AuthModule } from "../auth/auth.module.js";
import { AuthMiddleware } from "../auth/auth.middleware.js";
import { Usersmodule } from "../users/users.module.js";


@Module({
  imports: [TypeOrmModule.forFeature([Expenses]), AuthModule, Usersmodule],
  providers: [ExpenseRepository, ExpenseService],
  controllers: [ExpenseController]
})


export class ExpenseModule{}




