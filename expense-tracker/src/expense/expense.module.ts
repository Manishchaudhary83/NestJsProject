import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Expenses } from "./expense.entity.js";
import { ExpenseRepository } from "./expense.repository.js";
import { ExpenseService } from "./expense.service.js";
import { ExpenseController } from "./expense.controller.js";


@Module({
  imports: [TypeOrmModule.forFeature([Expenses])],
  providers: [ExpenseRepository, ExpenseService],
  controllers: [ExpenseController]
})

export class ExpenseModule{}
