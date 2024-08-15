import { GoogleadsModule } from '@app/googleads';
import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { AppCommand } from './commanders/app.command';

@Module({
  imports: [GoogleadsModule, CommandModule],
  providers: [AppCommand],
})
export class AppModule {}
