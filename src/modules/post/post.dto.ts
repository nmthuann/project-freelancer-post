// import { IsNumber, IsString, IsArray, ValidateNested } from 'class-validator';
// import { Type } from 'class-transformer';
// import { PackageDto } from './package.dto';

import { PackageDto } from "./package.dto";

// export class PostDto {
//   @IsNumber()
//   readonly job_post_id: number;

//   @IsString()
//   readonly job_name: string;

//   @IsString()
//   readonly categoryDetail: string;

//   @IsNumber()
//   readonly vote: number;

//   @IsArray()
//   @ValidateNested({ each: true })
//   @Type(() => PackageDto)
//   readonly job_post_detail: PackageDto[];
// }
export class PostDto {
  job_post_id: number;
  job_name: string;
  categoryDetail: string;
  vote: number;
  job_post_detail: {
    profile_name: string;
    packages: PackageDto[];
  };
}

