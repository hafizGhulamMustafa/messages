import { MessagesRepository } from "./messages.repository";

export class MessagesService{
messagesRepo : MessagesRepository
    constructor(){
        this.messagesRepo = new MessagesRepository()
    }

    findOne(id : string){
        return this.messagesRepo.findOne(id)
    } 

    findall(){
        return this.messagesRepo.findAll()
    }

    create(name:string, age:number){
        return this.messagesRepo.create(name, age);
    }
}