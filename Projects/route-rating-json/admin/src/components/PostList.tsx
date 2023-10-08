import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  UrlField,
  ReferenceField,
  TextInput
} from 'react-admin'

const PostList = (props: any) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <UrlField source='originUrl' />
        <DateField source='date' />
        <DateField source='endDate' />
        <ReferenceField source="userId" reference="clients">
          <span>
            <TextField source="name" /> <TextField source="phone" />
          </span>
        </ReferenceField>
        <TextField source='count' />
        <EditButton basePath='/posts' />
        <DeleteButton basePath='/posts' />
      </Datagrid>
    </List>
  )
}

export default PostList
