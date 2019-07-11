import React, { useContext } from 'react'
import {
  useReducer,
} from 'react'
import reducer from './reducer'

export const LibraryContext = React.createContext(null);

const App = () => {
  const initialState = [
    {title: 'The Hobbit', author: 'J.R.R. Tolkien', isbn: '1'},
    {title: 'The Bible', author: 'Various', isbn: '2'}
  ]

  const [state, dispatch] = useReducer(reducer, initialState); // eslint-disable-line

  return (
    <div className="container">
      <h1>CRUD Library App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Book</h2>
        </div>
        <div className="flex-large">
          <h2>View Books</h2>
          <LibraryContext.Provider value={{dispatch, state}}>
            <BooksTable />
          </LibraryContext.Provider>
        </div>
      </div>
    </div>
  )
}

const BooksTable = () => {
  const {state, dispatch} = useContext(LibraryContext);

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
        {state.map(book => (
          <tr>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button" onClick={() => dispatch({action: 'DELETE', payload: book.isbn})}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App