import { EstimateUpdateManyWithoutProjectsInput } from "./EstimateUpdateManyWithoutProjectsInput";
import { InvoiceUpdateManyWithoutProjectsInput } from "./InvoiceUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  estimates?: EstimateUpdateManyWithoutProjectsInput;
  invoices?: InvoiceUpdateManyWithoutProjectsInput;
  status?: "Option1" | null;
  title?: string | null;
};
