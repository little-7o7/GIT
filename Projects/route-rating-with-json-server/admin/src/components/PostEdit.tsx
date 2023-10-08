import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput } from 'react-admin'

const PostEdit = (props: any) => {
  return (
    <Edit title='Edit Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='originUrl' />
        <DateInput disabled source='date' />
        <DateInput source='endDate' />
        <ReferenceInput source="userId" reference="clients">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput disabled type='number' source='count' />
      </SimpleForm>
    </Edit>
  )
}

export default PostEdit
