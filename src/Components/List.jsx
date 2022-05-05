import React, { useEffect } from 'react';

/**
 * Metodo que permite renderizar en el navegador la tabla de datos de la database
 * @param {*} param0 
 * @returns Una tabla organizada para ser renderizada en el navegador de los datos almacenados en la database
 */
const List = ({ dispatch, state, url }) => {
      
        useEffect(() => {
          console.log("useeffect")
          fetch(url + "/todolist")
            .then(response => response.json())
            .then((list) => {
              dispatch({ type: "updateList", list })
            })
        }, [dispatch, state.list.length, url])
      
        const onDelete = (id) =>{
          fetch(url + "/" +id+ "/todo", {
            method : "DELETE"
          })
          .then((list) =>{
            dispatch({ type: "deleteItem", id})
          })
        };
      
        const onEdit = (todo) =>{
          dispatch({ type: "editItem", item: todo})
        }
      
        return (
          <div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>ISCOMPLETED?</th>
                </tr>
              </thead>
              <tbody>
                {state.list.length > 0 ? (
                  state.list.map((todo) => (
                    <tr key={todo.id}>
                      <td>{todo.id}</td>
                      <td>{todo.name}</td>
                      <td>{todo.isCompleted === true ? "Si" : "No"}</td>
                      <td><button onClick={() => onDelete(todo.id)}>Eliminar</button></td>
                      <td><button onClick={() => onEdit(todo)}>Editar</button></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3}>Not found data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )     
  }  

  export { List };