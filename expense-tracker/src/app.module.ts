import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {validate} from './config/env.validation.js'
import { Usersmodule } from './users/users.module.js';
import { AuthModule } from './auth/auth.module.js';
import databaseConfig from './config/database.config.js';
import { ExpenseModule } from './expense/expense.module.js';
import { AuthMiddleware } from './auth/auth.middleware.js';
import { ExpenseController } from './expense/expense.controller.js';
import appConfig from './config/app.config.js';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      load: [appConfig,databaseConfig],
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
AuthModule,
ExpenseModule,

  ],
  controllers: [],
  providers: [],
})



export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(ExpenseController)
  }
}


