import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // vaciar los parametros de los metodos y meterlos en objetos externos en una carpeta swagger
  @Post()
  @ApiOperation({
    description: 'Create an user',
  })
  @ApiBody({
    type: CreateUserDto,
    description: 'Create an user using CreateUserDto',
    examples: {
      example: {
        value: {
          email: 'marcos1@gmail.com',
        },
      },
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Created user successfully',
  })
  @ApiResponse({
    status: 409,
    description: 'This email has been already registered',
  })
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({
    description: 'Get all users information',
  })
  @ApiResponse({
    status: 200,
    description: 'Found users',
  })
  @ApiResponse({
    status: 404,
    description: 'Not users found',
  })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    description: 'Get one user information',
  })
  @ApiResponse({
    status: 200,
    description: 'Found user',
  })
  @ApiResponse({
    status: 404,
    description: 'Failed to get user information',
  })
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({
    description: 'Update an user',
  })
  @ApiBody({
    type: UpdateUserDto,
    description: 'Update an user using UpdateUserDto',
    examples: {
      example: {
        value: {
          email: 'marcos@gmail.com',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Updated user successfully',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found for update',
  })
  @ApiResponse({
    status: 409,
    description: 'Email already registered',
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({
    description: 'Delete one user',
  })
  @ApiResponse({
    status: 200,
    description: 'Deleted user',
  })
  @ApiResponse({
    status: 404,
    description: 'User not found to delete',
  })
  remove(@Param('id') id: string): Promise<User> {
    return this.usersService.remove(+id);
  }
}
