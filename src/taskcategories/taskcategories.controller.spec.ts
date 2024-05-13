import { Test, TestingModule } from '@nestjs/testing';
import { TaskcategoriesController } from './taskcategories.controller';
import { TaskcategoriesService } from './taskcategories.service';

describe('TaskcategoriesController', () => {
  let controller: TaskcategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskcategoriesController],
      providers: [TaskcategoriesService],
    }).compile();

    controller = module.get<TaskcategoriesController>(TaskcategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
