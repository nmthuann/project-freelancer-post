import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProfileEntity } from './profile.entity';
import { ProfileDto } from './profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(ProfileEntity.name) 
    private profileModel: Model<ProfileEntity>,
  ) {}

  async create(profileDto: ProfileDto): Promise<ProfileDto> {
    const createdProfile = new this.profileModel(profileDto);
    return createdProfile.save();
  }

  async findAll(): Promise<ProfileDto[]> {
    return this.profileModel.find().exec();
  }

  async findById(profile_id: number): Promise<ProfileDto> {
    return this.profileModel.findOne({ profile_id }).exec();
  }

  async update(
    profile_id: number,
    profileDto: ProfileDto,
  ): Promise<ProfileEntity | null> {
    const updatedProfile = await this.profileModel.findOneAndUpdate(
      { profile_id },
      profileDto,
      { new: true },
    ).exec();
    return updatedProfile;
  }

  async delete(profile_id: number){
    return this.profileModel.deleteOne({ profile_id }).exec();
  }
}
