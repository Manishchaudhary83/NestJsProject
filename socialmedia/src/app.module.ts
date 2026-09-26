import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config.js';
import {validate} from './config/env.validation.js'
import { Usersmodule } from './users/users.module.js';
import { OrganizationModule } from './organizations/organization.module.js';
import { AuthModule } from './auth/auth.module.js';


@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal : true,
      load: [databaseConfig],
      validate

    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],


      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow('database.host'),
        port: configService.getOrThrow('database.port'),
        username: configService.getOrThrow('database.username'),
        password: configService.getOrThrow('database.password'),
        database: configService.getOrThrow('database.database'),
        autoLoadEntities: true,
        synchronize: true

      }),
    }),
    Usersmodule,
    OrganizationModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
