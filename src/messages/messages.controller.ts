import { Body, Controller , Get , Param, Post, NotFoundException} from '@nestjs/common';
import { createMessagesDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';



@Controller('messages')
export class MessagesController {
    messageService: MessagesService;

    constructor(){
        this.messageService = new MessagesService()
    }

    @Get()
    listMessages(){
        return this.messageService.findall()
    }

    @Post()
    createMessages(@Body() body:createMessagesDto){
        return this.messageService.create(body.name, body.age)
    }

    @Get('/:id')
    async getMessages( @Param('id') id:string) {
        const data = await this.messageService.findOne(id)
        if(data){
            return data
        }else{
            throw new NotFoundException('message not found')
        //     return {
        //         status: false,
        //         message: "no messages found"
        // }
    }
    }
}
