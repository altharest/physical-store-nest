import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  storeRoot() {
    return { message: 'Teste Physical Store' };
  }

  @Get(':id')
  storeByID(@Param('id') id: number) {
    return { message: `Loja de ID: ${id}.` };
  }
}
