import { SortOrder } from "../../util/SortOrder";

export type InvoiceOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
};
