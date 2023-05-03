import { Body, Controller , Get , Param, Post} from '@nestjs/common';
import { createMessagesDto } from './dtos/create-messages.dto';
import { messagesService } from './messages.service';


@Controller('messages')
export class MessagesController {
    messageService: messagesService;
    @Get()
    listMessages(){
        return 'HELLO MESSAGE'
    }

    @Post()
    createMessages(@Body() body:createMessagesDto){
        console.log(body)
    }

    @Get('/:id')
    getMessages( @Param('id') id:string){
        console.log(id)
    }
}
