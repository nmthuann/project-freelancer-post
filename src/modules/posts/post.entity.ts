import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

class PackageDetail {
  @Prop({ required: true })
  revision: string;

  @Prop({ required: true })
  delivery_day: number;

  @Prop({ required: true })
  unit_price: number;
}

class Package {
  @Prop({ required: true })
  package_id: number;

  @Prop({ required: true })
  package_name: string;

  @Prop({ required: true })
  package_detail: PackageDetail;
}

class PostDetail {
  @Prop()
  profile_user: string;
  @Prop()
  description: string;
  @Prop()
  FAQ: string;
  @Prop({ type: [Package] })
  packages: Package[];
}

@Schema({ timestamps: true })
export class Post extends Document {
  @Prop({ required: true })
  post_id: number;

  @Prop({ required: true })
  post_name: string;

  @Prop({ required: true })
  category_detail_name: string;

  @Prop({ default: 0 })
  vote: number;

  @Prop()
  post_detail: PostDetail;
}
export const PostSchema = SchemaFactory.createForClass(Post);
