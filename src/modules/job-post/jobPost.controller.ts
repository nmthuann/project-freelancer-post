import { Body, Controller, Delete, Get, Param, Post, Put,
    Req, UsePipes, NestMiddleware, HttpCode, HttpStatus, Inject } from '@nestjs/common';
//import { JobPostMiddleware } from 'src/middlewares/JobPost.middleware';
import { TransformPipe } from 'src/common/pipes/tranform.pipe';
import { ValidatorPipe } from 'src/common/pipes/validator.pipe';
import { JobPostDto } from './job-post/jobPost.dto';
import { JobPostService } from './jobPost.service';
import { Request } from 'express';
import { IJobPostService } from './jobPost.service.interface';
import { CreateJobPostDto } from './job-post/create-jobPost.dto';

// working with DTO
@Controller('job-post') 
export class JobPostController  {
   constructor(
    @Inject('IJobPostService')
    private jobPostService: IJobPostService){}

    @Post('create')
    async createJobPost(@Body() jobPost: JobPostDto): Promise<JobPostDto> {
       return await this.jobPostService.createOne(jobPost);
    }

    @Put('update/:id')
    async updateJobPostById(
    @Param('id') id: number, 
    @Body() jobPostDto: JobPostDto
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
}