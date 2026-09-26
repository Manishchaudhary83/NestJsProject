import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString,  MinLength } from "class-validator";
import { UserRole } from "../user-role.enum.js";


export class CreateUserDto{

  @IsString()
  @IsNotEmpty()
  first_name: string

  @IsString()
  @IsNotEmpty()
  last_name: string

@IsNotEmpty()
@IsEmail({}, {message: "pease provide valid email address"})
email: string

@IsString()
@IsNotEmpty()
@MinLength(8, {message: "Password must be at least 8 characters"})
password: string

 @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}
