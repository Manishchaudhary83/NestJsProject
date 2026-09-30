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

//get all expense of logged-in user
  async findAllByUser(userId: string){
    return await this.expensesRepository.find({
      where: {userId},
      order: {expenseDate: 'DESC'}
    })

  }

//get one expense of loggedin user according to their Id
async findById(id: string, userId: string){
  return await this.expensesRepository.findOne({
    where: {
      id,
      userId
    }
  })
}


//update expense
async updateExpense(id: string, userId: string, data: Partial<Expenses>){
  await this.expensesRepository.update({id, userId}, data)
  return await this.findById(id, userId);
}


//delete expense

async deleteExpense(id: string, userId:string ){
  await this.expensesRepository.delete({id, userId})

}

}
