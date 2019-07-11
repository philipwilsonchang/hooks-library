import React, { useContext } from 'react'
import LibraryContext from './App'

const BooksTable = (props) => {

  const dispatch = useContext(LibraryContext);
  console.log(dispatch);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.library.map(book => (
          <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button" onClick={() => dispatch({action: 'DELETE', payload: book.id})}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable