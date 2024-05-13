import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskcategoryDto } from './create-taskcategory.dto';

export class UpdateTaskcategoryDto extends PartialType(CreateTaskcategoryDto) {}
