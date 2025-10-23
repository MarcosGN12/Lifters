import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// Usaremos PartialType cuando queramos actualizar un objeto o solo unos atributos de su objeto
// de esta manera no tendremos obligacion de actualizar el objeto entero sino los atributos que queramos
// y no se nos exigiran todos
export class UpdateUserDto extends PartialType(CreateUserDto) {}
