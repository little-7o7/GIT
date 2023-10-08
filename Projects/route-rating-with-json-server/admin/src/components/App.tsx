import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-json-server';
import PostList from './PostList';
import UserList from './UserList';
import PostEdit from './PostEdit';
import PostCreate from './PostCreate';
import UserEdit from './UserEdit';
import UserCreate from './UserCreate';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TableRowsIcon from '@mui/icons-material/TableRows';

const dataProvider = simpleRestProvider('http://localhost:3333');

const App = () => {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={TableRowsIcon} />
            <Resource name="clients" list={UserList} edit={UserEdit} create={UserCreate} icon={PeopleAltIcon} />
            <Resource name="users" list={ListGuesser} icon={SupervisorAccountIcon} />
        </Admin>
    )
}

export default App;