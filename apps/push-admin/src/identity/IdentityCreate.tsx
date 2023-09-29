import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const IdentityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="channel" source="channel" />
        <TextInput label="deviceToken" source="device_oken" />
      </SimpleForm>
    </Create>
  );
};
