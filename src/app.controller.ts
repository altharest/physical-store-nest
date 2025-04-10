import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  hello() {
    return { message: 'Teste Physical Store' };
    // return this.appService.getHello();
  }
}
