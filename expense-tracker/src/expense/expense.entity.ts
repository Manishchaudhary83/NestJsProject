import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("expenses")

export class Expenses{

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column("decimal", { precision: 10, scale: 2 })
  amount: number

  @Column()
  description: string

  @Column()
  expenseDate:string

  @CreateDateColumn()
  createdAt: Date

  @CreateDateColumn()
  updatedAt: Date
}
