import * as bcrypt from 'bcrypt';

export async function encodePassword(rawPassword: string): Promise<string> {
  const saltOrRounds = await bcrypt.genSalt();
  const hash = await bcrypt.hash(rawPassword, saltOrRounds);
  return hash;
}
