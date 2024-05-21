import { EstimateUpdateManyWithoutCustomersInput } from "./EstimateUpdateManyWithoutCustomersInput";
import { InvoiceUpdateManyWithoutCustomersInput } from "./InvoiceUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  email?: string | null;
  estimates?: EstimateUpdateManyWithoutCustomersInput;
  invoices?: InvoiceUpdateManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
};
