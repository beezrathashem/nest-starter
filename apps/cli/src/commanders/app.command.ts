import { GoogleadsService } from '@app/googleads';
import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';

@Injectable()
export class AppCommand {
  constructor(private google: GoogleadsService) {}

  @Command({
    command: 'app:command',
  })
  async pexels() {
    console.log('hello!');
    return this.google.getGoogleAds();
  }
}
