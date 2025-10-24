import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const duplicatedEmail = await this.userRepository.findOneBy(createUserDto);

    if (duplicatedEmail) {
      throw new ConflictException('This email has been already registered');
    }

    const user = new User();
    user.email = createUserDto.email;

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

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    const duplicatedEmail = await this.userRepository.findOneBy(updateUserDto);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (duplicatedEmail) {
      throw new ConflictException('Email already registered for other user');
    }

    if (updateUserDto.email) {
      user.email = updateUserDto.email;
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
}
