import { IsDateString, IsNumber, ArrayNotEmpty, IsArray } from 'class-validator';

export class CreatePedidoDto {
  @IsDateString()
  fecha: Date;

  @IsNumber()
  usuarioId: number;

  @IsArray()
  @ArrayNotEmpty()
  productosIds: number[];

  @IsNumber()
  total: number;
}

