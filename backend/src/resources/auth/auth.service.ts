import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ accessToken: string }> {
    const user = await this.usersService.findUser({ email });

    if (!user) {
      throw new UnauthorizedException('User not found for loging');
    }

    const isPasswordValid = await bcrypt.compare(pass, user.passwordHash ?? '');
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { id: user.id, email: user.email };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
