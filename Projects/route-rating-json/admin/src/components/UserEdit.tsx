import React from 'react'
import { Edit, SimpleForm, TextInput, required } from 'react-admin'

const UserEdit = (props: any) => {
  return (
    <Edit title='Edit User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput validate={required()} source='name' />
        <TextInput validate={required()} source='email' />
        <TextInput validate={required()} source='phone' />
      </SimpleForm>
    </Edit>
  )
}

export default UserEdit
