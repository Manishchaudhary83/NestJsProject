import { Column, CreateDateColumn, DeleteDateColumn, Entity,  OneToMany,  PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "./user-role.enum.js";
import { UserOrganization } from "./user-organization.entity.js";



@Entity('users')

export class User{

  @PrimaryGeneratedColumn('uuid')
  id:string

  @Column({name: 'first_name'})
  first_name: string

  @Column({name: 'last_name'})
  last_name: string

  // @Column({unique: true})
  // username: string


  @Column({unique: true})
  email: string

  @Column()
  password: string

  @Column({type:'enum', enum: UserRole, default: UserRole.USER})
  role: UserRole


@OneToMany(
  () => UserOrganization,
  (userOrganization) => userOrganization.user,
)
organizations: UserOrganization[]


  @CreateDateColumn({name: 'created_at', type: 'timestamptz'})
  createdAt: Date

  @UpdateDateColumn({name: 'updated_at', type: 'timestamptz'})
  updatedAt: Date

  @DeleteDateColumn({name: 'deleted_at', type: 'timestamptz', nullable: true})
  deletedAt: Date | null





}
