import { EstimateCreateNestedManyWithoutProjectsInput } from "./EstimateCreateNestedManyWithoutProjectsInput";
import { InvoiceCreateNestedManyWithoutProjectsInput } from "./InvoiceCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  estimates?: EstimateCreateNestedManyWithoutProjectsInput;
  invoices?: InvoiceCreateNestedManyWithoutProjectsInput;
  status?: "Option1" | null;
  title?: string | null;
};
