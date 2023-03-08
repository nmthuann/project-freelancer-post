import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createCategoryTable1678259199310 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Categories",
            columns: [
                {
                    name: 'category_id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: "category_name",
                    type: "nvarchar",
                    isNullable: false,
                },
                {
                    name: "description",
                    type: "nvarchar",
                },
                {
                    name: 'timestamp',
                    type: 'datetime',
                    default: 'now()',
                },
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Categoies");
    }

}
