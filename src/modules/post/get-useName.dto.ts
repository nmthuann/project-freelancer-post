export class GetUserNameDto{
    constructor(public readonly userName: string){}

    toString(){
        return JSON.stringify({
            userName: this.userName,
        })
    }
}