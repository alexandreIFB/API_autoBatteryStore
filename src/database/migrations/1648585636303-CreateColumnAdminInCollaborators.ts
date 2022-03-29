import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class CreateColumnAdminInCollaborators1648585636303
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "collaborators",
      new TableColumn({
        name: "admin",
        type: "boolean",
        default: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("collaborators", "admin");
  }
}
