import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { z } from 'zod';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModules } from './modules/users/users.module.js';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
        validationSchema:z.object({
        NODE_ENV : z
          .enum(['development', 'production', 'test'])
          .default('development'),
        PORT: z.coerce.number().default(3000),
        DB_NAME: z.string(),
        DB_PASSWORD: z.string(),
        DB_USER: z.string(),
        DB_HOST: z.string(),
        DB_PORT: z.coerce.number().default(5435)
      })
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow('DB_HOST'),
        port: Number(configService.getOrThrow("DB_PORT")),
        password: configService.getOrThrow("DB_PASSWORD"),
        database: configService.getOrThrow('DB_NAME'),
        username: configService.getOrThrow('DB_USER'),
        autoLoadEntities: true,
        synchronize: true

      })
    }),
    UserModules
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
