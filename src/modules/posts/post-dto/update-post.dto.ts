import { PackageDto } from "./package.dto";

export class Update_PostDto {
  job_post_id: number;
  job_name: string;
  categoryDetail: string;
  //vote: number;
  job_post_detail: {
    profile_name: string;
    packages: PackageDto[];
    description: string;
    FAQ: string;
  };
}

