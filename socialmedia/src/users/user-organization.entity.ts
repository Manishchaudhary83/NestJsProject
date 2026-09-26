import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,

  Unique,
} from 'typeorm';
import type { Relation } from 'typeorm';

import { User } from './users.entity.js';
import { Organization } from '../organizations/organization.entity.js';

@Entity('user_organizations')
@Unique(['user', 'organization'])
export class UserOrganization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(
    () => User,
    (user) => user.organizations,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'user_id' })
  user: Relation<User>;

  @ManyToOne(
    () => Organization,
    (organization) => organization.users,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'organization_id' })
  organization: Relation<Organization>;
}
