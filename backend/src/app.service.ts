import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {
    this.configService.get('config.secret');
  }

  getHello(): string {
    return 'Hello World!';
  }
}
