import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Producto } from '../producto/entities/producto.entity';
import { Usuario } from '../usuario/entities/usuario.entity'; // 👈 Agregado

import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pedido, Usuario, Producto]) // 👈 Agrega Usuario y Producto aquí
  ],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}
