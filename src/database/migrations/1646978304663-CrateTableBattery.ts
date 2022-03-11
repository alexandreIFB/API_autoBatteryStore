import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CrateTableBattery1646978304663 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "batterys",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "c20_ah",
            type: "int",
            isNullable: false,
          },
          {
            name: "polarity",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "cca_a",
            type: "int",
            isNullable: false,
          },
          {
            name: "rc_min",
            type: "int",
            isNullable: false,
          },
          {
            name: "warrantly_m",
            type: "int",
            isNullable: false,
          },
          {
            name: "code",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("batterys");
  }
}
