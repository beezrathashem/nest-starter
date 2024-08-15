import { Test, TestingModule } from '@nestjs/testing';
import { GoogleadsService } from './googleads.service';

describe('GoogleadsService', () => {
  let service: GoogleadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleadsService],
    }).compile();

    service = module.get<GoogleadsService>(GoogleadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
