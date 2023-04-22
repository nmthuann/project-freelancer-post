import { Body, Controller, Delete, Get, Param, Post, Put,
    Req, UsePipes, NestMiddleware, HttpCode, HttpStatus } from '@nestjs/common';
//import { JobPostMiddleware } from 'src/middlewares/JobPost.middleware';
import { TransformPipe } from 'src/common/pipes/tranform.pipe';
import { ValidatorPipe } from 'src/common/pipes/validator.pipe';
import { JobPostDto } from './jobPost.dto';
import { JobPostService } from './jobPost.service';
import { Request } from 'express';

// working with DTO
@Controller('job-post') 
export class JobPostController  {
   constructor(private jobPostService: JobPostService){}

   @Get('JobPosts')
   async getJobPosts(): Promise<JobPostDto[]> {
       //console.log(this.JobPostService.getCategories())
       return this.jobPostService.getJobPosts();
   }
   
   @Get(':id')
   async getJobPostById(@Param('id') id: number): Promise<JobPostDto> {
       return this.jobPostService.getJobPostById(id);
   }

   @Post()
   @UsePipes(new ValidatorPipe())
   async createJobPost(@Body() JobPost: JobPostDto): Promise<JobPostDto> {
       return this.jobPostService.createJobPost(JobPost);
   }

   @Put(':id')
   async updateJobPostById(@Param('id') id: number, @Body() JobPostDto: JobPostDto,): Promise<JobPostDto> {
       return this.jobPostService.updateJobPostById(id, JobPostDto);
   }

   @Delete(':id')
   @HttpCode(HttpStatus.NO_CONTENT)
   async deleteJobPostById(@Param('id') id: number): Promise<void> {
       console.log(this.jobPostService.deleteJobPostById(id));
   }
}




   
   // @Get()
   // //@NestMiddleware(JobPostMiddleware)
   // getJobPostById(@Req() req: Request){
   //     const categories = this.JobPostService.getCategories();
   //     return { message: 'Success', data: categories};
   // }