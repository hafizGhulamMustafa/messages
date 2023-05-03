import { MessagesRepository } from "./messages.repository";

export class messagesService{
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

    create(content:string){
        return this.messagesRepo.create(content);
    }
}