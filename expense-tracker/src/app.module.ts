import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {validate} from './config/env.validation.js'
import { Usersmodule } from './users/users.module.js';
import { AuthModule } from './auth/auth.module.js';
import databaseConfig from './config/database.config.js';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load: [databaseConfig],
      validate
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: (ConfigService: ConfigService) => ({
        type: 'postgres',
        host: ConfigService.getOrThrow('database.host'),
        port: ConfigService.getOrThrow('database.port'),
        database: ConfigService.getOrThrow('database.database'),
        username:ConfigService.getOrThrow('database.username'),
        password:ConfigService.getOrThrow('database.password'),
        autoLoadEntities:true,
        synchronize:true

      })
    }),
Usersmodule,
AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


