import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { Categoria } from '../categoria/entities/categoria.entity';

import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto, Categoria]) 
  ],
  controllers: [ProductoController],
  providers: [ProductoService],
  exports: [TypeOrmModule],
})
export class ProductoModule {}

