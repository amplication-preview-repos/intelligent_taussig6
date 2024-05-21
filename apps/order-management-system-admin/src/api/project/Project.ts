import { Estimate } from "../estimate/Estimate";
import { Invoice } from "../invoice/Invoice";

export type Project = {
  createdAt: Date;
  description: string | null;
  estimates?: Array<Estimate>;
  id: string;
  invoices?: Array<Invoice>;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
