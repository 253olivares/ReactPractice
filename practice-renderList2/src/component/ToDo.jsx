import React from "react"

export default function ToDo({id, createdAt}){
    return(
      <React.Fragment>
        <tr>
          <td>{id}</td>
          <td>
            <input />
          </td>
          <td>{createdAt}</td>
        </tr>
      </React.Fragment>
    )
  };