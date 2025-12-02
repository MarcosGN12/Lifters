import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  secret: process.env.JWT_SECRET,
}));
