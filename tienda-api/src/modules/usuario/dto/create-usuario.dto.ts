import { IsEmail, IsNotEmpty,  } from 'class-validator';

export class CreateUsuarioDto {
  nombre: string;
  email: string;
  contraseña: string;

 
}