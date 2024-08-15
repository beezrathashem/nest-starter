import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleadsService {
  getGoogleAds(): string {
    return 'hi!';
  }
}
