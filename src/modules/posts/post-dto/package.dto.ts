export interface PackageDto {
  package_id: number;
  package_name: string;
  package_detail: {
    revision: string;
    delivery_day: Date;
    unit_price: number;
  };

  // constructor(
  //   package_id: number, 
  //   package_name: string,
  //   package_detail: PackageDetailDto
  // ){
  //   this.package_id = package_id;
  //   this.package_name = package_name;
  //   this.package_detail = package_detail;
  // }
}

class PackageDetailDto{
  revision: string;
  delivery_day: Date;
  unit_price: number;

  // constructor(
  //   revision: string,
  //   delivery_day: Date,
  //   unit_price: number,
  // ){
  //   this.revision = revision;
  //   this.delivery_day = delivery_day;
  //   this.unit_price = unit_price;
  // }
}