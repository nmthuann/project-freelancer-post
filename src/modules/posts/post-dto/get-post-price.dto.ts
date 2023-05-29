import { PostDetailDto } from "./post.dto";

export class GetPostPriceDto {
  post_name: string;
  category_detail_name: string;
  vote: number;
  price: number;
}