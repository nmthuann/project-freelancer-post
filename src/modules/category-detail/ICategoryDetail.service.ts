import { DeleteResult } from "typeorm";
import { IBaseService } from "src/modules/bases/base.interface";
import { BaseService } from "../bases/base.abstract";
import { CategoryDetailDto } from "./category-detail-dto/categoryDetail.dto";

export interface ICategoryDetailService extends BaseService<CategoryDetailDto> {
    getIdByCategoryDetailName(name: string): Promise<number>;
}