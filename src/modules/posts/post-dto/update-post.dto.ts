import { PackageDto } from "./package.dto";

export class UpdatePostDto {
  post_id: number;
  description: string;
  FAQ: string;
  packages: PackageDto[];
}

  //category_detail: string;
  // post_detail: {
  //   profile_name: string;
    
  // };