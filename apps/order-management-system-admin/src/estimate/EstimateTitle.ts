import { Estimate as TEstimate } from "../api/estimate/Estimate";

export const ESTIMATE_TITLE_FIELD = "id";

export const EstimateTitle = (record: TEstimate): string => {
  return record.id?.toString() || String(record.id);
};
