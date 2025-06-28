import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { Pedido } from '../../pedido/entities/pedido.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('decimal')
  precio: number;


  @ManyToOne(() => Categoria, (categoria) => categoria.productos, { eager: true })
  categoria: Categoria;

  @ManyToMany(() => Pedido, (pedido) => pedido.productos)
  pedidos: Pedido[];
}
