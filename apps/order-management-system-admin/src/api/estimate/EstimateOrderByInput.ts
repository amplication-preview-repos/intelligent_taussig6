import { SortOrder } from "../../util/SortOrder";

export type EstimateOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
};
