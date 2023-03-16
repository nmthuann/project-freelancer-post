import { Body, Controller, Delete, Get, Param, Post, Put,
    Req, UsePipes, NestMiddleware, HttpCode, HttpStatus } from '@nestjs/common';
//import { JobPostMiddleware } from 'src/middlewares/JobPost.middleware';
import { TransformPipe } from 'src/pipes/tranform.pipe';
import { ValidatorPipe } from 'src/pipes/validator.pipe';
import { JobPostDto } from './JobPost.dto';
import { JobPostService } from './JobPost.service';
import { Request } from 'express';

// working with DTO
@Controller('job-post') 
export class JobPostController  {
   constructor(private JobPostService: JobPostService){}

   @Get('JobPosts')
   async getJobPosts(): Promise<JobPostDto[]> {
       //console.log(this.JobPostService.getCategories())
       return this.JobPostService.getJobPosts();
   }
   
   @Get(':id')
   async getJobPostById(@Param('id') id: number): Promise<JobPostDto> {
       return this.JobPostService.getJobPostById(id);
   }

   @Post()
   @UsePipes(new ValidatorPipe())
   async createJobPost(@Body() JobPost: JobPostDto): Promise<JobPostDto> {
       return this.JobPostService.createJobPost(JobPost);
   }

   @Put(':id')
   async updateJobPostById(@Param('id') id: number, @Body() JobPostDto: JobPostDto,): Promise<JobPostDto> {
       return this.JobPostService.updateJobPostById(id, JobPostDto);
   }

   @Delete(':id')
   @HttpCode(HttpStatus.NO_CONTENT)
   async deleteJobPostById(@Param('id') id: number): Promise<void> {
       console.log(this.JobPostService.deleteJobPostById(id));
   }
}




   
   // @Get()
   // //@NestMiddleware(JobPostMiddleware)
   // getJobPostById(@Req() req: Request){
   //     const categories = this.JobPostService.getCategories();
   //     return { message: 'Success', data: categories};
   // }