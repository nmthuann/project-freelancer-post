export class JobPostDto {
    public readonly  job_post_id: number;
    public readonly category_detail_id: number;
    public readonly job_post_name: string;
    public readonly timestamp: Date;
    public readonly  vote: number;
    
    toString(){
        return JSON.stringify({
            job_post_id: this.job_post_id,
            category_detail_id: this.category_detail_id,
            job_post_name: this.job_post_name,
            timestampe: this.timestamp,
            vote: this.vote
        })
    }
}