import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { JobPostEntity } from './jobPost.entity';
import { JobPostDto } from './jobPost.dto';

@Injectable()
export class JobPostService {
    constructor(
        @InjectRepository(JobPostEntity)
        private readonly jobPostRepository: Repository<JobPostEntity>,
      ) {}
    
        getJobPosts(): Promise<JobPostEntity[]> {
            return this.jobPostRepository.find();
        }
    
        getJobPostById(id: number) {
            return this.jobPostRepository.findOneById(id);
        }
          
        async createJobPost(jobPostDto: JobPostDto): Promise<JobPostDto> {
            return this.jobPostRepository.save(jobPostDto);
        }
    
        async updateJobPost(jobPostDto: JobPostDto): Promise<JobPostDto>{
            return this.jobPostRepository.preload(jobPostDto);
        }
    
        async updateJobPostById(id: number, jobPostDto: JobPostDto){
            const cateUpdate = await this.jobPostRepository.findOneById(id);
            return this.jobPostRepository.save({...cateUpdate, ...jobPostDto});
        }
    
        async deleteJobPostById(id: number): Promise<DeleteResult> {
            // const deleted = 
            // console.log(deleted)
            return this.jobPostRepository.softDelete(id);
    
        //     const category = await this.jobPostRepository.findOne(id);
        //     if (!category) {
        //       throw new NotFoundException(`Category with id ${id} not found`);
        //     }
        //     await this.jobPostRepository.delete(category);
        //   }
    
        }
}
