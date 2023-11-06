import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginService } from './login.service';
import { AdminService } from './admin.service';
import { User } from './entitly/user.entity';
import { DataSource } from 'typeorm';
import { UsersModule } from './users.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoginModule } from './login.module';
import { AdminModule } from './admin.modul';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Book } from './book/entities/book.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mrKay',
      database: 'school',
      entities: [User, Book],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../..', 'public'),
    }),
    UsersModule,
    LoginModule,
    AdminModule,
  ],
  //controllers: [UsersController],
  //providers: [UsersService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}