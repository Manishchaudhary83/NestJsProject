import { IsNotEmpty, IsString, Length } from "class-validator";


export class CreateUsersDto{

  @IsString()
  @IsNotEmpty()
  @Length(3, 20, {message : "fullname must be 3 to 20 chracters"})
  fullName: string

  @IsNotEmpty()
  
  email: string

}

