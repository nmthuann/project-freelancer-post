import { Body, Controller, Delete, Get, Param, Post, Put,
    Req, UsePipes, NestMiddleware, HttpCode, HttpStatus } from '@nestjs/common';
//import { JobPostDetailMiddleware } from 'src/middlewares/JobPostDetail.middleware';
import { TransformPipe } from 'src/pipes/tranform.pipe';
import { ValidatorPipe } from 'src/pipes/validator.pipe';
import { JobPostDetailDto } from './jobPostDetail.dto';
import { JobPostDetailService } from './jobPostDetail.service';
import { Request } from 'express';

// working with DTO
@Controller('job-post-detail') 
export class JobPostDetailController  {
   constructor(private jobPostDetailService: JobPostDetailService){}

   @Get('JobPostDetails')
   async getJobPostDetails(): Promise<JobPostDetailDto[]> {
       //console.log(this.JobPostDetailService.getCategories())
       return this.jobPostDetailService.getJobPostDetails();
   }
   
   @Get(':id')
   async getJobPostDetailById(@Param('id') id: number): Promise<JobPostDetailDto> {
       return this.jobPostDetailService.getByJobPostDetailId(id);
   }

   @Post()
   @UsePipes(new ValidatorPipe())
   async createJobPostDetail(@Body() JobPostDetail: JobPostDetailDto): Promise<JobPostDetailDto> {
       return this.jobPostDetailService.createJobPostDetail(JobPostDetail);
   }

   @Put(':id')
   async updateJobPostDetailById(@Param('id') id: number, @Body() JobPostDetailDto: JobPostDetailDto,): Promise<JobPostDetailDto> {
       return this.jobPostDetailService.updateJobPostDetailById(id, JobPostDetailDto);
   }

   @Delete(':id')
   @HttpCode(HttpStatus.NO_CONTENT)
   async deleteJobPostDetailbyId(@Param('id') id: number): Promise<void> {
       console.log(this.jobPostDetailService.deleteJobPostDetailById(id));
   }
}




   
   // @Get()
   // //@NestMiddleware(JobPostDetailMiddleware)
   // getJobPostDetailById(@Req() req: Request){
   //     const categories = this.JobPostDetailService.getCategories();
   //     return { message: 'Success', data: categories};
   // }