import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entitly/user.entity';
import { Book } from './book/entities/book.entity';
import { BookModule } from './book/book.module';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mrKay',
      //password: 'oliver',
      database: 'school',
      entities: [User, Book],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    LoginModule,
    AdminModule,
    BookModule,
    UserModule
  ],
  //controllers: [UsersController],
  //providers: [UsersService],
})
export class AppModule {}