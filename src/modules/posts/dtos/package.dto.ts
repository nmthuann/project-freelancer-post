export interface PackageDto {
  package_id: number;
  package_name: string;
  package_detail: {
    revision: string;
    delivery_day: Date;
    unit_price: number;
  };
}

export class PackageDetailDto {
  revision: string;
  delivery_day: Date;
  unit_price: number;
}
