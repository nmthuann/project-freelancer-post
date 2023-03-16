// import { IsString, IsNumber, IsDateString, ValidateNested } from 'class-validator';
// import { Type } from 'class-transformer';

// class PackageDetailDto {
//   @IsString()
//   readonly Revision: string;

//   @IsDateString()
//   readonly DeliveryDay: Date;

//   @IsNumber()
//   readonly unit_price: number;
// }

// export class PackageDto {
//   @IsNumber()
//   readonly package_id: number;

//   @IsString()
//   readonly package_name: string;

//   @ValidateNested({ each: true })
//   @Type(() => PackageDetailDto)
//   readonly packageDetail: PackageDetailDto[];
// }
export class PackageDto {
  package_id: number;
  package_name: string;
  packageDetail: {
    revision: string;
    deliveryDay: Date;
    unit_price: number;
  };
}