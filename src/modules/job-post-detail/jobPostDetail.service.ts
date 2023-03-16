import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { JobPostDetailEntity } from './jobPostDetail.entity';
import { JobPostDetailDto } from './jobPostDetail.dto';

@Injectable()
export class JobPostDetailService {
    constructor(
        @InjectRepository(JobPostDetailEntity)
        private readonly jobPostDetailRepository: Repository<JobPostDetailEntity>,
      ) {}
    
        getJobPostDetails(): Promise<JobPostDetailEntity[]> {
            return this.jobPostDetailRepository.find();
        }
    
        getByJobPostDetailId(id: number) {
            return this.jobPostDetailRepository.findOneById(id);
        }
          
        async createJobPostDetail(jobPostDetailDto: JobPostDetailDto): Promise<JobPostDetailDto> {
            return this.jobPostDetailRepository.save(jobPostDetailDto);
        }
    
        async updateJobPostDetail(jobPostDetailDto: JobPostDetailDto): Promise<JobPostDetailDto>{
            return this.jobPostDetailRepository.preload(jobPostDetailDto);
        }
    
        async updateJobPostDetailById(id: number, jobPostDetailDto: JobPostDetailDto){
            const cateUpdate = await this.jobPostDetailRepository.findOneById(id);
            return this.jobPostDetailRepository.save({...cateUpdate, ...jobPostDetailDto});
        }
    
        async deleteJobPostDetailById(id: number): Promise<DeleteResult> {
            // const deleted = 
            // console.log(deleted)
            return this.jobPostDetailRepository.softDelete(id);
    
        //     const category = await this.JobPostDetailRepository.findOne(id);
        //     if (!category) {
        //       throw new NotFoundException(`Category with id ${id} not found`);
        //     }
        //     await this.JobPostDetailRepository.delete(category);
        //   }
    
        }
}
