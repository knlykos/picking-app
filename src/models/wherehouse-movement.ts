export type WherehouseMovement = {
  date: Date | string;
  serialNumber: string;
  movType: number;
  from: number;
  to: number;
  done: boolean;
  unitOfMessure: number;
  company: number;
  status: number;
};
