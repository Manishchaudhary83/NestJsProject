import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')

export class User{

  @PrimaryGeneratedColumn('uuid')
  id:string

  @Column()
  fullName: string

  @Column()
  email: string

  @Column()
  password: string

}
