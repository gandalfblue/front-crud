
import React, { Fragment, useContext } from 'react'
import { List } from './Components/List';
import { TodoForm } from './Components/TodoForm';
import { Store } from './Context/Context';

function App() {

  const { dispatch, state, URL } = useContext(Store);

  return (
    <Fragment>
      <TodoForm 
        dispatch={dispatch}
        state={ state }
        url={ URL}
      />
      <List
      dispatch={dispatch}
        state={ state }
        url={ URL }
      />
      </Fragment>
  );
}

export default App;
