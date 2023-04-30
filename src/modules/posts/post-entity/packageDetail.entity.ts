import { Check, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PackageEntity } from "./package.entity";

@Entity({name:'PackageDetails'})
export class PackageDetailEntity {
    @PrimaryGeneratedColumn()
    package_detail_id: number

    @OneToOne(() => PackageEntity )
    @JoinColumn()
    package: PackageEntity

    @Column({nullable: false})
    unit_price: number

    @Column({nullable: false})
    revision: string

    @Column({nullable: false})
    delivery_day: Date

    @Check(`"delivery_day" >= NOW()`)
    checkDeliveryDay(): boolean {
        return this.delivery_day >= new Date();
    }
}