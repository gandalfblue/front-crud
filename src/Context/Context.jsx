import React, { createContext, useReducer } from 'react';
import { Reducer } from '../Reducer/Reducer.jsx';

const URL = 'http://localhost:8080/api'

const initialState = {
  list: [],
  item: {}
}

/**
 * Metodo que permite crear un contexto de los datos en la database y eventos del proyecto
 */
const Store = createContext(initialState);   

  const StoreProvider = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, initialState);
  
    return( 
    <Store.Provider 
      value=
      {{ 
        state,
        dispatch,
        URL
      }}>
      {children}
    </Store.Provider>
    )
  }

  export { StoreProvider, Store };
  