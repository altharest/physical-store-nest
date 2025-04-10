import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GreetController } from './greet/greet.controller';

@Module({
  imports: [UsersModule],
  controllers: [AppController, GreetController],
  providers: [AppService],
})
export class AppModule {}
