import { Table, Column, PrimaryKey, Model, AutoIncrement, DataType, AllowNull } from 'sequelize-typescript';

@Table({ tableName: 'events', timestamps: false })
class Events extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
    event_id!: number;
    
  @AllowNull(true)
  @Column(DataType.STRING(255))
    name!: string | null;

  @AllowNull(true)
  @Column(DataType.STRING(255))
    short_description!: string | null;

  @AllowNull(true)
  @Column(DataType.BLOB)
    long_description!: Buffer | null;

  @AllowNull(true)
  @Column(DataType.STRING(255))
    city!: string | null;

  @AllowNull(true)
  @Column(DataType.STRING(255))
    state!: string | null;

  @AllowNull(true)
  @Column(DataType.STRING(255))
    country!: string | null;

  @AllowNull(true)
  @Column(DataType.STRING(255))
    address!: string | null;

  @AllowNull(false)
  @Column(DataType.DATE)
    start_time!: Date;

  @AllowNull(false)
  @Column(DataType.DATE)
    end_time!: Date;
    
  @AllowNull(true)
  @Column(DataType.INTEGER)
    host!: number | null;
}

export default Events;