export class CategoryDto {
    public readonly  category_id: number;
    public readonly category_name: string;
    public readonly  description: string;
    public readonly timestamp: Date;
    
    
    toString(){
        return JSON.stringify({
            category_id: this.category_id,
            category_name: this.category_name,
            description: this.description,
            timestamp: this.timestamp,
        })
    }
}