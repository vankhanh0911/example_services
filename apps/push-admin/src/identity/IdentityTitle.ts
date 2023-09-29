import { Identity as TIdentity } from "../api/identity/Identity";

export const IDENTITY_TITLE_FIELD = "channel";

export const IdentityTitle = (record: TIdentity): string => {
  return record.channel?.toString() || String(record.id);
};
