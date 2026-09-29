import { Injectable } from "@nestjs/common";
import { ExpenseRepository } from "./expense.repository.js";



@Injectable()

export class ExpenseService{
  constructor(private readonly expensesRepository: ExpenseRepository){}

  async createExpense(data: any){
    return this.expensesRepository.createExpense(data)
  }
}

