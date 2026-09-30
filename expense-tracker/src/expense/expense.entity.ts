import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "../users/users.entity.js";


@Entity("expenses")

export class Expenses{

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column("decimal", { precision: 10, scale: 2 })
  amount: number

  @Column({nullable: true})
  description: string


  @Column({type: 'date'})
  expenseDate:string

  @Column()
userId: string

@ManyToOne(
    () => User
  )
@JoinColumn({name: 'userId'})
user: User

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
updatedAt: Date;
}
