import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileEntity } from './profile.entity';
import { ProfileDto } from './profile.dto';

@Controller('profiles')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  async findAll(): Promise<ProfileDto[]> {
    return this.profileService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<ProfileDto> { 
    return this.profileService.findById(id);
  }

  @Post()
  async create(@Body() profileDto: ProfileDto) {
    return this.profileService.create(profileDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() profile: ProfileDto){
    return this.profileService.update(id, profile);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.profileService.delete(id);
  }
}
