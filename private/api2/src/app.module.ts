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
import { Book } from './book/entities/book.entity';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      // password: 'mrKay',
      password: 'oliver',
      database: 'school',
      entities: [User, Book],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    LoginModule,
    AdminModule,
    BookModule
  ],
  //controllers: [UsersController],
  //providers: [UsersService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}