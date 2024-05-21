import { Customer } from "../customer/Customer";
import { Project } from "../project/Project";

export type Invoice = {
  amount: number | null;
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  project?: Project | null;
  updatedAt: Date;
};
