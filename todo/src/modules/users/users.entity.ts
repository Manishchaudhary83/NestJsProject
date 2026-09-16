import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('users')
export class Users{

@PrimaryGeneratedColumn('uuid')
id: string

@Column()
firstName: string

@Column()
lastName: string

@Column()
email: string

@Column()
password: string

@Column({ default: true })
isActive: boolean

}
