import { OrderLine } from "./order-line.model";
import { Partner } from "./partner.model";

export type SaleOrder = {
    orderReference: string
    orderDate: Date | string
    note?: string | null
    userId: number
    partner: Partner
    orderLines?: OrderLine[]
};
