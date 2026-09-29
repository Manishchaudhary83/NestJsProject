import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Expenses } from "./expense.entity.js";
import { Repository } from "typeorm";



@Injectable()

export class ExpenseRepository{
  constructor(@InjectRepository(Expenses) private readonly expensesRepository: Repository<Expenses>){}

  async createExpense(data: Partial<Expenses>){

    const expense = await this.expensesRepository.create(data)
    return await this.expensesRepository.save(expense)
  }
}
