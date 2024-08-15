import { Module } from '@nestjs/common';
import { GoogleadsService } from './googleads.service';

@Module({
  providers: [GoogleadsService],
  exports: [GoogleadsService],
})
export class GoogleadsModule {}
