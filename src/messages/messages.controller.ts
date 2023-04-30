import { Body, Controller , Get , Param, Post} from '@nestjs/common';
import { createMessagesDto } from './dtos/create-messages.dto';


@Controller('messages')
export class MessagesController {
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
