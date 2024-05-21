import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type InvoiceCreateInput = {
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  project?: ProjectWhereUniqueInput | null;
};
