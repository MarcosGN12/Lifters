import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Unique } from 'typeorm';

@Unique(['email'])
export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  password: string;
}
