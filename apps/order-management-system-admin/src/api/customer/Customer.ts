import { Estimate } from "../estimate/Estimate";
import { Invoice } from "../invoice/Invoice";

export type Customer = {
  createdAt: Date;
  email: string | null;
  estimates?: Array<Estimate>;
  id: string;
  invoices?: Array<Invoice>;
  name: string | null;
  phone: string | null;
  updatedAt: Date;
};
