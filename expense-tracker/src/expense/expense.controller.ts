import { Body, Controller, Delete, Get, Param, Post, Put, Req } from "@nestjs/common";
import { ExpenseService } from "./expense.service.js";
import { ExpenseDto } from "./dto/expense.dto.js";
import { User } from "../users/users.decorator.js";
import { UpdateExpenseDto } from "./dto/update-expense.dto.js";



@Controller('expense')

export class ExpenseController{
  constructor(private readonly expenseService: ExpenseService){}

  @Post('create')
  async createExpense(@Body() data:ExpenseDto,
@User('userId') userId:string){

    return await this.expenseService.createExpense(data, userId)
  }

  @Get('')
  async getAllExpense(@User('userId') userId: string){
    return await this.expenseService.getAllExpense(userId)
  }

  @Get(':id')
  async getExpenseById(
    @User('userId') userId: string,
    @Param('id') id:string
){
return await this.expenseService.getExpenseById(id, userId)
}

//update
@Put(':id')
async UpdateExpenseDto(
  @User('userId') userId:string,
  @Param('id') id:string,
  @Body() data: UpdateExpenseDto
){
  return this.expenseService.updateExpense(id, userId, data)
}

//delete expense
@Delete(':id')
async deleteExpenses(
  @User('userId') userId:string,
  @Param('id') id:string
){
return this.expenseService.deleteExpense(id, userId)

}


}
