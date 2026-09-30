import { PartialType } from "@nestjs/mapped-types";
import { ExpenseDto } from "./expense.dto.js";


export class UpdateExpenseDto extends PartialType(ExpenseDto){

}
