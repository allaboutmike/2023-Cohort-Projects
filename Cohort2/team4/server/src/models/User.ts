import { Table, Column, PrimaryKey, Model, Unique, AutoIncrement, DataType, AllowNull } from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: false })
class Users extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  declare user_id: number;
    
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(30))
  declare email: string;

  @AllowNull(false)
  @Column(DataType.STRING(30))
  declare first_name: string;

  @AllowNull(false)
  @Column(DataType.STRING(30))
  declare last_name: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  declare auth_key: string;
}

export default Users;