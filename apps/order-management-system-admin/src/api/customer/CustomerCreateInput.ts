import { EstimateCreateNestedManyWithoutCustomersInput } from "./EstimateCreateNestedManyWithoutCustomersInput";
import { InvoiceCreateNestedManyWithoutCustomersInput } from "./InvoiceCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  email?: string | null;
  estimates?: EstimateCreateNestedManyWithoutCustomersInput;
  invoices?: InvoiceCreateNestedManyWithoutCustomersInput;
  name?: string | null;
  phone?: string | null;
};
