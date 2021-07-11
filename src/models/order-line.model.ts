import { PurchaseOrder } from "./purchase-order.model";
import { SaleOrder } from "./sale-order.model";

export type OrderLine = {
    quantity:  number | string
    sales?: SaleOrder
    purchaseOrders?: PurchaseOrder
  }