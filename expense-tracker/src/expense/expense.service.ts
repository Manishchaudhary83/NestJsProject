import { Injectable, NotFoundException } from "@nestjs/common";
import { ExpenseRepository } from "./expense.repository.js";
import { ExpenseDto } from "./dto/expense.dto.js";
import { Expenses } from "./expense.entity.js";
import { UpdateExpenseDto } from "./dto/update-expense.dto.js";



@Injectable()

export class ExpenseService{
  constructor(private readonly expensesRepository: ExpenseRepository){}

  //create expense
  async createExpense(data: ExpenseDto,  userId: string){
    return this.expensesRepository.createExpense({...data, userId})
  }

//get expense
async getAllExpense(userId: string){
  return await this.expensesRepository.findAllByUser(userId)
}

//get one expense
async getExpenseById(id: string, userId:string){
  const expense = await this.expensesRepository.findById(id, userId)

  if(!expense){
  throw new NotFoundException("Expenmse not found")
}
return expense

}


//update expense

async updateExpense(id: string, userId:string, data:UpdateExpenseDto){
  const expense = await this.expensesRepository.findById(id, userId,)
    if(!expense){
  throw new NotFoundException("Expenmse not found")
}
const updatedExpense = await this.expensesRepository.updateExpense(id, userId, data)
return{
  message: 'Update Expense Successfully',
  updatedExpense
}
}

//Delete expense

async deleteExpense(id: string, userId:string){
    const expense = await this.expensesRepository.findById(id, userId,)
    if(!expense){
  throw new NotFoundException("Expenmse not found")
}
 await this.expensesRepository.deleteExpense(id, userId)

 return{
  message: "Expense deleted successfully"
 }
}
}

