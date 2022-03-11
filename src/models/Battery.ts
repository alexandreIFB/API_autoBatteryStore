import { Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

class Battery {
  @PrimaryColumn()
  id?: string;

  @Column()
  c20_ah: number;

  @Column()
  polarity: string;

  @Column()
  cca_a: number;

  @Column()
  rc_min: number;

  @Column()
  warrantly_m: number;

  @Column()
  code: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Battery };
