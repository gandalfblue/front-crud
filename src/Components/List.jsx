import React, { useEffect } from 'react';

const List = ({ dispatch, state, url }) => {
      
        useEffect(() => {
          console.log("useeffect")
          fetch(url + "/todolist")
            .then(response => response.json())
            .then((list) => {
              dispatch({ type: "updateList", list })
            })
        }, [state.list.length])
      
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