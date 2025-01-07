import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Get(':compensation')
  findUnique(@Param('compensation') compensation: number) {
    return this.appService.findUnique(compensation);
  }
}
