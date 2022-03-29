import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("collaborators")
class Collaborator {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  telNumber: string;

  @Column()
  cpf: string;

  @Column()
  password: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Collaborator };
