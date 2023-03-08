import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createJobPostTable1678256670675 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "JobPosts",
            columns: [
                {
                    name: 'job_post_id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'category_detail_id',
                    type: 'int',
                    foreignKeyConstraintName: 'CategoryDetail',
                },
                {
                    name: "job_post_name",
                    type: "nvarchar",
                },
                {
                    name: 'timestamp',
                    type: 'datetime',
                    default: 'now()',
                },
                {
                    name: "vote",
                    type: "int",
                },
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("JobPosts");
    }

}


// Create a table in mySql's Database