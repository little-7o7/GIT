import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
  TextInput
} from 'react-admin'

const UserList = (props: any) => {
  const clientsFilters = [
    <TextInput label="Search" source="q" alwaysOn />,
  ];
  
  return (
    <List {...props} filters={clientsFilters}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='name' />
        <EmailField source='email' />
        <TextField source='phone' />
        <EditButton basePath='/users' />
        <DeleteButton basePath='/users' />
      </Datagrid>
    </List>
  )
}

export default UserList
