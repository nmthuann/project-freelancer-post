import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CategoryDetailEntity } from './categoryDetail.entity';
import { CategoryDetailDto } from './category-detail-dto/categoryDetail.dto';
//import { CategoryDetailRepository } from 'src/common/interfaces/ICategoryDetailRepository'
import { plainToInstance } from 'class-transformer';
import { BaseService } from '../bases/base.abstract';
import { ICategoryDetailService } from './ICategoryDetail.service';

@Injectable()
export class CategoryDetailService extends BaseService<CategoryDetailDto> implements ICategoryDetailService{
  constructor(
    @InjectRepository(CategoryDetailEntity)
    private readonly categoryDetailRepository: Repository<CategoryDetailEntity>,
  ) {
    super(categoryDetailRepository);
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
}




    // getCategories(): Promise<CategoryDetailEntity[]> {
    //     return this.categoryDetailRepository.find();
    // }

    // getByCategoryDetailId(id: number) {
    //     return this.categoryDetailRepository.findOneById(id);
    // }
      
    // async createCategoryDetail(categoryDetailDetailDto: CategoryDetailDto): Promise<CategoryDetailDto> {
    //     return this.categoryDetailRepository.save(categoryDetailDetailDto);
    // }

    // async updateCategoryDetail(categoryDetailDto: CategoryDetailDto): Promise<CategoryDetailDto>{
    //     return this.categoryDetailRepository.preload(categoryDetailDto);
    // }

    // async updateCategoryDetailById(id: number, CategoryDetailDetailDto: CategoryDetailDto){
    //     const cateUpdate = await this.categoryDetailRepository.findOneById(id);
    //     return this.categoryDetailRepository.save({...cateUpdate, ...CategoryDetailDetailDto});
    // }

    // async deleteCategoryDetailById(id: number): Promise<DeleteResult> {
    //     return this.categoryDetailRepository.softDelete(id);
    // }