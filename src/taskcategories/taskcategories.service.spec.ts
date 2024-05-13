import { Test, TestingModule } from '@nestjs/testing';
import { TaskcategoriesService } from './taskcategories.service';

describe('TaskcategoriesService', () => {
  let service: TaskcategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskcategoriesService],
    }).compile();

    service = module.get<TaskcategoriesService>(TaskcategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
