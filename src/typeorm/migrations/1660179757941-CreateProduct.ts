import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProduct1660179757941 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //vamos criar a tabela de products
        await queryRunner.createTable(new Table({
            name: 'product',
            columns:[

                {
                    name:'id',
                    type:'uuid',
                    generationStrategy:'uuid',
                    default:'uuid_generate_v4()'
                },
                {
                    name:'name',
                    type:'varchar',

                },
                {
                    name:'quantity',
                    type:'int'
                },
                {
                    name:'price',
                    type:'decimal',
                    scale:2
                },
                {
                    name:'created_at',
                    type:'timestamp with time zone',
                    default:'now()'
                },
                {
                    name:'updated_at',
                    type:'timestamp with time zone',
                    default:'now()'
                }
            ]
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }
}
