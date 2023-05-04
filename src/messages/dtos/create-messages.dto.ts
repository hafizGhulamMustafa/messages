import { IsNumber, IsString } from "class-validator";

export class createMessagesDto{
    @IsString()
    name:string;

    @IsNumber
    age:number
    
    
}