import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mensaje} from './entities/mensaje.entity';
import { CreateMensajeDto } from './dto/create-mensaje-dto';
 
@Injectable()
export class MensajesService {

    constructor(
        @InjectRepository(Mensaje)
        private readonly mensajeRepository: Repository<Mensaje>,
    ){}

    async getAll(){
        return  await this.mensajeRepository.find();
    }

    async createMensaje(mensajeNuevo: CreateMensajeDto){
        const nuevo = new Mensaje();
        nuevo.mensaje = mensajeNuevo.mensaje;
        nuevo.nick = mensajeNuevo.nick;  

        return this.mensajeRepository.save(nuevo);
    }


    async updateMasaje(idMensaje: number, mensjaeActulizar: CreateMensajeDto){
        const mensajeUpdate = await this.mensajeRepository.findOne(idMensaje);
        mensajeUpdate.nick = mensjaeActulizar.nick;
        mensajeUpdate.nick = mensjaeActulizar.mensaje;

        return this.mensajeRepository.save(mensajeUpdate);
        
    }

    async deleteMesaje(idMensaje: number){
        return await this.mensajeRepository.delete(idMensaje);
    }
}
