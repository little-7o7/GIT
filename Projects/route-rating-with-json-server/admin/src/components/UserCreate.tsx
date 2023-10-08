import React from 'react'
import { Create, SimpleForm, TextInput, required } from 'react-admin'

const UserCreate = (props: any) => {
  return (
    <Create title='Create a User' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput validate={required()} source='name' />
        <TextInput validate={required()} source='email' />
        <TextInput validate={required()} source='phone' />
      </SimpleForm>
    </Create>
  )
}

export default UserCreate
