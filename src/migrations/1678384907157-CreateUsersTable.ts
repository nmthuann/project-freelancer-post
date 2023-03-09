import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersTable1678384907157 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Categories',
            columns: [
              {
                name: 'category_id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'category_name',
                type: 'varchar',
                isNullable: false
              },
              {
                name: 'description',
                type: 'varchar',
              },
              {
                name: 'createdAt',
                type: 'datetime',
                default: 'now()',
                isNullable: true,
              },
            ],
          }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
