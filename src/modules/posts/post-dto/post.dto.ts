// import { PackageDto } from "./package.dto";
// import { PostDetailDto } from "./postDetail.dto";
// export interface PostDto {
//   post_name: string;
//   category_detail_name: string;
//   vote: number;
//   post_detail: {
//     profile_user: string;
//     description: string;
//     FAQ: string;
//     packages: PackageDto[];
//   };  
// }


export class PackageDetailDto{
    revision: string;
    delivery_day: Date;
    unit_price: number;
}

export class PackageDto {
  package_id: number;
  package_name: string;
  package_detail: PackageDetailDto;
}

export class PostDetailDto{
  profile_user: string;
  description: string;
  FAQ: string;
  packages: PackageDto[];
}

export class PostDto {
  post_name: string;
  category_detail_name: string;
  vote: number;
  post_detail: PostDetailDto;
}





// export class CreatePostDto implements PostDto {
//   post_name: string;
//   category_detail_name: string;
//   post_detail: PostDetailDto;
//   constructor(
//     post_name: string,
//     category_detail_name: string,
//     post_detail: PostDetailDto
//   ){
//     this.post_name = post_name;
//     this.category_detail_name = category_detail_name;
//     this.post_detail = post_detail;
//   }
// }





// export class CreatePostDetailDto{
//     profile_user: string;
//     description: string;
//     FAQ: string;
//     packages: PackageDto[];

//     constructor( 
//         profile_user: string, 
//         packages: PackageDto[],
//         description: string,
//         FAQ: string
//     ){
//         this.profile_user = profile_user;
//         this.packages = packages;
//         this.description = description;
//         this.FAQ = FAQ;
//     }
// }



// export class CreatePostDto {
//   post_name: string;
//   category_detail_name: string;
//   post_detail: PostDetailDto;
//   vote: number;
//   constructor(
//     post_name: string,
//     category_detail_name: string,
//     post_detail: PostDetailDto
//   ){
//     this.post_name = post_name;
//     this.category_detail_name = category_detail_name;
//     this.post_detail = post_detail;
//   }
  
// }