import { Body, Controller, Post } from "@nestjs/common";
import { ExpenseService } from "./expense.service.js";
import { ExpenseDto } from "./dto/expense.dto.js";


@Controller('expense')

export class ExpenseController{
  constructor(private readonly expenseService: ExpenseService){}

  @Post()
  async createExpense(@Body() data:ExpenseDto){

    return await this.expenseService.createExpense(data)
  }
}
