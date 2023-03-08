import { Test, TestingModule } from '@nestjs/testing';
import { JobPostService } from './JobPost.service';

describe('JobPostService', () => {
  let service: JobPostService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobPostService],
    }).compile();

    service = module.get<JobPostService>(JobPostService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
