import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EstimateListRelationFilter } from "../estimate/EstimateListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  estimates?: EstimateListRelationFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
