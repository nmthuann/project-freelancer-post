import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Inject,
} from '@nestjs/common';
import { JobPostDetailDto } from './dtos/job-post-detail.dto';
import { IJobPostDetailService } from './job-post-detail.service.interface';

// working with DTO
@Controller('job-post-detail')
export class JobPostDetailController {
  constructor(
    @Inject('IJobPostDetailService')
    private readonly jobPostDetailService: IJobPostDetailService,
  ) {}

  @Post('create')
  async createJobPostDetail(
    @Body() jobPostDetail: JobPostDetailDto,
  ): Promise<JobPostDetailDto> {
    return await this.jobPostDetailService.createOne(jobPostDetail);
  }

  @Put('update/:id')
  async updateJobPostDetailById(
    @Param('id') id: number,
    @Body() JobPostDetailDto: JobPostDetailDto,
  ): Promise<JobPostDetailDto> {
    return await this.jobPostDetailService.updateOneById(id, JobPostDetailDto);
  }

  @Delete('delete/:id')
  async deleteJobPostDetailbyId(@Param('id') id: number): Promise<void> {
    console.log(await this.jobPostDetailService.deleteOneById(id));
  }

  @Get('JobPostDetails')
  async getJobPostDetails(): Promise<JobPostDetailDto[]> {
    //console.log(this.JobPostDetailService.getCategories())
    return await this.jobPostDetailService.getAll();
  }

  @Get(':id')
  async getJobPostDetailById(
    @Param('id') id: number,
  ): Promise<JobPostDetailDto> {
    return await this.jobPostDetailService.getOneById(id);
  }
}
