import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const IdentityEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="channel" source="channel" />
        <TextInput label="deviceToken" source="device_oken" />
      </SimpleForm>
    </Edit>
  );
};
