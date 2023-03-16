import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CategoryDetailEntity } from './CategoryDetail.entity';
import { CategoryDetailDto } from './CategoryDetail.dto';
//import { CategoryDetailRepository } from 'src/common/interfaces/ICategoryDetailRepository'
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CategoryDetailService {
  constructor(
    @InjectRepository(CategoryDetailEntity)
    private readonly categoryDetailRepository: Repository<CategoryDetailEntity>,
  ) {}

    getCategories(): Promise<CategoryDetailEntity[]> {
        return this.categoryDetailRepository.find();
    }

    getByCategoryDetailId(id: number) {
        return this.categoryDetailRepository.findOneById(id);
    }
      
    async createCategoryDetail(categoryDetailDetailDto: CategoryDetailDto): Promise<CategoryDetailDto> {
        return this.categoryDetailRepository.save(categoryDetailDetailDto);
    }

    async updateCategoryDetail(categoryDetailDto: CategoryDetailDto): Promise<CategoryDetailDto>{
        return this.categoryDetailRepository.preload(categoryDetailDto);
    }

    async updateCategoryDetailById(id: number, CategoryDetailDetailDto: CategoryDetailDto){
        const cateUpdate = await this.categoryDetailRepository.findOneById(id);
        return this.categoryDetailRepository.save({...cateUpdate, ...CategoryDetailDetailDto});
    }

    async deleteCategoryDetailById(id: number): Promise<DeleteResult> {
        // const deleted = 
        // console.log(deleted)
        return this.categoryDetailRepository.softDelete(id);

    //     const CategoryDetailDetail = await this.CategoryDetailRepository.findOne(id);
    //     if (!CategoryDetail) {
    //       throw new NotFoundException(`CategoryDetail with id ${id} not found`);
    //     }
    //     await this.CategoryDetailRepository.delete(CategoryDetail);
    //   }

    }
}