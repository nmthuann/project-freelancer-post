import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CategoryDetailEntity } from './categoryDetail.entity';
import { CategoryDetailDto } from './categoryDetail.dto';
//import { CategoryDetailRepository } from 'src/common/interfaces/ICategoryDetailRepository'
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CategoryDetailService {
  constructor(
    @InjectRepository(CategoryDetailEntity)
    private readonly categoryDetailRepository: Repository<CategoryDetailEntity>,
    @InjectRepository(CategoryDetailEntity)
    private readonly jobPostRepository: Repository<CategoryDetailEntity>,
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

    async getIdByCategoryDetailName(name: string): Promise<number> {
      const categoryDetail = await this.categoryDetailRepository.findOneBy({
        category_detail_name: name ,
      });
    
      if (!categoryDetail) {
        throw new NotFoundException(`Category detail with name ${name} not found`);
      }
    
      return categoryDetail.category_detail_id;
    }




    // async payment(order: Order): Promise<boolean>{

    //   // đợi kết quả của 
    //   return true
    // }
}