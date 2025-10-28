import { User } from 'src/resources/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  userId: number;

  @ManyToOne(() => User, (user) => user.exercises, {
    onDelete: 'CASCADE',
  })
  user: User;
}
