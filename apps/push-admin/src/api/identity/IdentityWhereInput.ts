import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type IdentityWhereInput = {
  channel?: StringNullableFilter;
  device_oken?: StringNullableFilter;
  id?: StringFilter;
};
