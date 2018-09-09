import React, {Component} from 'react';
import List from './components/List';
import users from './users';

const Content = () => (
  <List users={users} />
);
export default Content;
