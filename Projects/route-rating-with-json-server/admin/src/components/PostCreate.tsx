import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, ReferenceInput, SelectInput, required } from 'react-admin'

const PostCreate = (props: any) => {
  const date = new Date();
  console.log(date.getUTCFullYear());

  return (
    <Create title='Create a Post' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput validate={required()} source='originUrl' />
        <DateInput disabled source='date' defaultValue={date} />
        <DateInput source='endDate' defaultValue={date} validate={required()} />
        <ReferenceInput source="userId" reference="clients"  validate={required()}>
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput disabled type='number' source='count' defaultValue={0} />
      </SimpleForm>
    </Create>
  )
}

export default PostCreate
