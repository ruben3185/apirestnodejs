import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
import { response } from 'express';
import { ReplaceSource } from 'webpack-sources';


@Controller('mensajes')
export class MensajesController {

    constructor(private mensajeServices: MensajesService){
            
    }

    @Post()
    create(@Body() createMensajeDto: CreateMensajeDto, @Res() response) {
        this.mensajeServices.createMensaje(createMensajeDto).then( mensaje => {
            response.status(HttpStatus.CREATED).json(mensaje);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error en la creacion del mensaje'});
        })

    }   
 
    @Get()
    getAll(@Res() response){   
        this.mensajeServices.getAll().then(mensajesList => { 
            response.status(HttpStatus.OK).json(mensajesList);
        }
        ).catch(()=>{
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al obtenr mensaje'});
        })
        
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto){
        return 'Mensaje creado!';
    }

    @Delete(':id')
    delete(){
        return 'Mensaje eliminado!';
    }

    
}
