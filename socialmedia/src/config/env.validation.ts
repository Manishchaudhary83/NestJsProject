import { plainToInstance } from "class-transformer";
import { IsNumber, IsString,  IsNotEmpty, IsNumberString, validateSync } from "class-validator";
import { error } from "console";


class EnvironmentVariables{

  @IsString()
  @IsNotEmpty()
  DB_HOST: string

  @IsNumberString()
  DB_PORT: string

  @IsNotEmpty()
  @IsString()
  DB_USER: string

  @IsNotEmpty()
  @IsString()
  DB_PASSWORD: string

  @IsNotEmpty()
  @IsString()
  DB_NAME: string

}

export function validate(config: Record <string, unknown>){

  const validatedConfig = plainToInstance(
    EnvironmentVariables, config
  )

  const errors = validateSync(validatedConfig, {skipMissingProperties : false})

  if(errors.length > 0){
    throw new Error(`Environment validation failed ${errors}.map((error) => error.property).join(',')`,
  )
  }
  return validatedConfig


}
