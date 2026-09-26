import { Column,  CreateDateColumn,  DeleteDateColumn,  Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn,} from "typeorm";
import { UserOrganization } from "../users/user-organization.entity.js";


@Entity('organizations')

export class Organization{
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({unique: true})
  name:string

  @CreateDateColumn({name: 'created_at', type: 'timestamptz'})
  createdAt : Date

  @UpdateDateColumn({name: 'updated_at', type: 'timestamptz'})
  updatedAt: Date

@DeleteDateColumn({name: 'deleted_at', type: 'timestamptz', nullable:true})
  deletedAt : Date | null

@OneToMany(
  () => UserOrganization,
  (userOrganization) => userOrganization.organization,
)
users : UserOrganization[]

}
