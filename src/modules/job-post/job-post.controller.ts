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
import { JobPostDto } from './dtos/job-post.dto';
import { IJobPostService } from './job-post.service.interface';

//  working with DTO
@Controller('job-post')
export class JobPostController {
  constructor(
    @Inject('IJobPostService')
    private readonly jobPostService: IJobPostService,
  ) {}

  @Post('create')
  async createJobPost(@Body() jobPost: JobPostDto): Promise<JobPostDto> {
    return await this.jobPostService.createOne(jobPost);
  }

  @Put('update/:id')
  async updateJobPostById(
    @Param('id') id: number,
    @Body() jobPostDto: JobPostDto,
  ): Promise<JobPostDto> {
    return await this.jobPostService.updateOneById(id, jobPostDto);
  }

  @Delete('delete/:id')
  async deleteJobPostById(@Param('id') id: number): Promise<void> {
    console.log(await this.jobPostService.deleteOneById(id));
  }

  @Get('JobPosts')
  async getJobPosts(): Promise<JobPostDto[]> {
    //console.log(this.JobPostService.getCategories())
    return await this.jobPostService.getAll();
  }

  @Get(':id')
  async getJobPostById(@Param('id') id: number): Promise<JobPostDto> {
    return await this.jobPostService.getOneById(id);
  }

  @Get('get-posts/:id')
  async getPostsByCategoryDetailId(
    @Param('id') id: number,
  ): Promise<JobPostDto[]> {
    return await this.jobPostService.getPostsByCategoryDetailId(id);
  }
}
