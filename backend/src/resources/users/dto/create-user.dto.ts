import { IsEmail, IsNotEmpty } from 'class-validator';
import { Unique } from 'typeorm';

@Unique(['email'])
export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  passwordHash: string;
}
