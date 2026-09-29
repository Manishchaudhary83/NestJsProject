
import { plainToInstance } from 'class-transformer';
import { IsNotEmpty, IsNumberString, IsString, validateSync} from 'class-validator';


export class EnvironmentVariables{

  @IsString()
  @IsNotEmpty()
  DB_HOST:string


  @IsNumberString()
  DB_PORT: string


  @IsString()
  @IsNotEmpty()
  DB_NAME:string


@IsString()
@IsNotEmpty()
  DB_USER : string

  @IsString()
  @IsNotEmpty()
  DB_PASSWORD: string

  @IsString()
  @IsNotEmpty()
  JWT_SECRET: string;


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



