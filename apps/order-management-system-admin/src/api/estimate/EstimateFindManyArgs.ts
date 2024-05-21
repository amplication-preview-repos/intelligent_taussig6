import { EstimateWhereInput } from "./EstimateWhereInput";
import { EstimateOrderByInput } from "./EstimateOrderByInput";

export type EstimateFindManyArgs = {
  where?: EstimateWhereInput;
  orderBy?: Array<EstimateOrderByInput>;
  skip?: number;
  take?: number;
};
