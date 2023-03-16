import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class ProfileEntity extends Document {
  @Prop({ required: true })
  profile_id: number;

  @Prop({ required: true })
  avatar: string;

  @Prop({ required: true })
  full_name: string;

  @Prop({ required: true })
  level_name: string;

  @Prop({ required: true })
  my_skill: string; //string[];

  @Prop({ required: true })
  occupation: string;
}

export const ProfileSchema = SchemaFactory.createForClass(ProfileEntity);
