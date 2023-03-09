export class CategoryDto {
    private _category_id: number;
    private _category_name: string;
    private _description: string;
    private _timestamp: Date;

    public get category_id(): number {
        return this._category_id;
    }
    public set category_id(value: number) {
        this._category_id = value;
    }
   
    public get category_name(): string {
        return this._category_name;
    }
    public set category_name(value: string) {
        this._category_name = value;
    }
    
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    
    public get timestamp(): Date {
        return this._timestamp;
    }
    public set timestamp(value: Date) {
        this._timestamp = value;
    }
    
    toString(): string{
        return JSON.stringify({
            category_id: this.category_id,
            category_name: this.category_name,
            description: this.description,
            timestamp: this.timestamp,
        })
    }
}