import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Producto } from '../producto/entities/producto.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async create(dto: CreatePedidoDto): Promise<Pedido> {
    const usuario = await this.usuarioRepository.findOneBy({ id: dto.usuarioId });
    if (!usuario) throw new NotFoundException(`Usuario ${dto.usuarioId} no encontrado`);

    const productos = await this.productoRepository.findByIds(dto.productosIds);
    if (!productos.length) throw new NotFoundException(`Productos no encontrados`);

    const pedido = this.pedidoRepository.create({
      fecha: new Date(dto.fecha),
      usuario,
      productos,
    });

    return this.pedidoRepository.save(pedido);
  }

  findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find({
      relations: ['usuario', 'productos'],
    });
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOne({
      where: { id },
      relations: ['usuario', 'productos'],
    });

    if (!pedido) throw new NotFoundException(`Pedido ${id} no encontrado`);
    return pedido;
  }

  async update(id: number, dto: UpdatePedidoDto): Promise<Pedido> {
    const pedido = await this.findOne(id);

    if (dto.usuarioId) {
      const usuario = await this.usuarioRepository.findOneBy({ id: dto.usuarioId });
      if (!usuario) throw new NotFoundException(`Usuario ${dto.usuarioId} no encontrado`);
      pedido.usuario = usuario;
    }

    if (dto.productosIds) {
      const productos = await this.productoRepository.findByIds(dto.productosIds);
      if (!productos.length) throw new NotFoundException(`Productos no encontrados`);
      pedido.productos = productos;
    }

    if (dto.fecha) {
      pedido.fecha = new Date(dto.fecha);
    }

    return this.pedidoRepository.save(pedido);
  }

  async remove(id: number): Promise<void> {
    const pedido = await this.findOne(id);
    await this.pedidoRepository.remove(pedido);
  }
}


