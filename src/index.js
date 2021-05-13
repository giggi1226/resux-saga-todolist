import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { Button, TextField } from '@material-ui/core'
import {action, store} from './sagas/main'
import {Provider, useSelector} from 'react-redux'
import './index.css';

const TodoList = () => {
  const repos = useSelector(state => state)
  const repos2 = repos.repos
  let urls = repos2 ? repos2.map(repo => repo.html_url) : null

  return (
    <div>
      <Button onClick={() => action('FETCH_REPOS')}>View Repos</Button>
      {urls ? urls.map(url => <div>{url}</div>) : ''}
    </div>
  );
}

// ========================================

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);
