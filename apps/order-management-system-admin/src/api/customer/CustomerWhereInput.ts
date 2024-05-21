import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EstimateListRelationFilter } from "../estimate/EstimateListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";

export type CustomerWhereInput = {
  email?: StringNullableFilter;
  estimates?: EstimateListRelationFilter;
  id?: StringFilter;
  invoices?: InvoiceListRelationFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
