

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileSchema, ProfileEntity } from './profile.entity';
import { ProfileController } from './profile.cotroller';
import { ProfileService } from './profile.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: ProfileEntity.name, schema: ProfileSchema }])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
