import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnUpdatedAtTableCompliments1639757446630 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("compliments", new TableColumn({
            name: "updated_at",
            type: "timestamp",
            default: "now()"
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("compliments", "updated_at");
    }

}
