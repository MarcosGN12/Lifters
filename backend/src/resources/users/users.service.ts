import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const duplicatedEmail = await this.userRepository.findOneBy({ email: createUserDto.email });

    if (duplicatedEmail) {
      throw new ConflictException('This email has been already registered');
    }

    const user = this.createUserEntity(createUserDto);

    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();

    if (users.length == 0) {
      throw new NotFoundException('Users not found');
    }

    return users;
  }

  async findOne(id: number): Promise<User | null> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findOneUserByEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const duplicatedEmail = await this.userRepository.findOneBy({ email: updateUserDto.email });

    if (duplicatedEmail) {
      throw new ConflictException('Email already registered for other user');
    }

    if (updateUserDto.email) {
      user.email = updateUserDto.email;
    }

    if (updateUserDto.username) {
      user.username = updateUserDto.username;
    }

    if (updateUserDto.password) {
      user.password = updateUserDto.password;
    }

    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.userRepository.remove(user);
  }

  private createUserEntity(createUserDto: CreateUserDto): User {
    const user = new User();
    user.email = createUserDto.email;
    user.username = createUserDto.username;
    user.password = createUserDto.password;

    return user;
  }
}
