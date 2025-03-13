import { PackageDto } from './package.dto';

export class PostDetailDto {
  profile_user: string;
  description: string;
  FAQ: string;
  packages: PackageDto[];
}

export class CreatePostDetailDto {
  profile_user: string;
  description: string;
  FAQ: string;
  packages: PackageDto[];

  constructor(
    profile_user: string,
    packages: PackageDto[],
    description: string,
    FAQ: string,
  ) {
    this.profile_user = profile_user;
    this.packages = packages;
    this.description = description;
    this.FAQ = FAQ;
  }
}
