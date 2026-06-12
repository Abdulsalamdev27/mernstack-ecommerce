export class AppError extends Error{
    public readonly statusCode: number;

    constructor(statusCode: number,message: string){
        super(message)
        this.statusCode = statusCode
    }
}


// how to throw the error
//throw new AppError()