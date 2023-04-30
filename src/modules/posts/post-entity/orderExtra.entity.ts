import { Check, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { PackageDetailEntity } from "./packageDetail.entity";

@Entity({name:'OrderExtras'})
export class OrderExtraEntity{
    @PrimaryGeneratedColumn()
    order_extra_id: number

    @OneToOne(() => PackageDetailEntity )
    @JoinColumn()
    packageDetail: PackageDetailEntity

    @Column({nullable: false})
    order_extra_price: number

    @Column({nullable: false})
    description: string

    @Column({nullable: false})
    extra_delivery_day: Date

    @Check(`"delivery_day" >= NOW()`)
    checkDeliveryDay(): boolean {
        return this.extra_delivery_day >= new Date();
    }
}