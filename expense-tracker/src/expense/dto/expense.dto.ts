import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";


export class ExpenseDto{

  @IsString()
  @IsNotEmpty()
  title:string


  @IsNumber()
  @Min(0.01)
  amount: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  expenseDate: string;

}
