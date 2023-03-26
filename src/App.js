import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import MyBooks from "./components/MyBooks";
import HomePage from "./components/HomePage";
import Home from "./components/Home";
import About from "./components/About";
import NewBookForm from "./components/NewBookForm";

function App() {
  // const [items, setItems] = useState([]);
  // const [name, setName] = useState('');

  // useEffect(() => {
  //   axios.get('http://localhost:8000/items')
  //     .then(response => setItems(response.data))
  //     .catch(error => console.log(error));
  // }, []);

  // const handleNameChange = event => {
  //   setName(event.target.value);
  // };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   axios.post('http://localhost:8000/items', { name })
  //     .then(response => setItems([...items, response.data]))
  //     .catch(error => console.log(error));
  //   setName('');
  // };

  // const handleDelete = id => {
  //   axios.delete(`http://localhost:8000/items/${id}`)
  //     .then(() => setItems(items.filter(item => item.id !== id)))
  //     .catch(error => console.log(error));
  // };

  // const handleUpdate = (id, newName) => {
  //   axios.put(`http://localhost:8000/items/${id}`, { name: newName })
  //     .then(response => {
  //       const updatedItem = response.data;
  //       setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
  //     })
  //     .catch(error => console.log(error));
  // };

  const [books, setBooks] = useState([])
  const [users, setUsers] = useState([])
  const [currentUser, setCurrentUser] = useState('')

  
  const addBookToState = bookObj => {
    setBooks( [ ...books, bookObj ] )
  }

  const addUserToState = userObj => {
    setUsers( [ ...users, userObj ] )
  }


  function checkOutBook(book) {

    const updatedBooks = books.map(bookObj => {
      if ((bookObj.id) === (book.id)) {
        bookObj.owner = currentUser;
        return bookObj;
      } else {
        return bookObj;
      }
    });

     fetch(`http://localhost:8000/books/${book.id}`, {
        method: 'PATCH',
        headers: {
         'Content-type': 'application/json',
        },
        body: JSON.stringify({
          owner: currentUser
      }),
      });
      
      setBooks(updatedBooks);
  }

  function returnBook(book) {
    
    const updatedBooks = books.map(bookObj => {
      if ((bookObj.owner === currentUser) && (currentUser !== "") && (bookObj.id === book.id)) {
        console.log('Changing the owner in upDatedBooks');
        console.log(bookObj.owner);
        console.log(currentUser);
        bookObj.owner = "";
        return bookObj;
      } else {
        return bookObj;
      }
    });

     fetch(`http://localhost:8000/books/${book.id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          owner: ""
      }),
      });
      
      setBooks(updatedBooks);
  }

  return (
    <div>
      {/* <ul>
        {items.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => {
              const newName = prompt('Enter the new name:', item.name);
              if (newName !== null) {
                handleUpdate(item.id, newName);
              }
            }}>Update</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleNameChange} />
        <button type="submit">Add</button>
      </form> */}      
        <Header currentUser={currentUser}/>
        <Switch>
          <Route exact path="/login">
            <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          </Route>
            <Route exact path="/mybooks">
          <MyBooks books={books} setBooks={setBooks} currentUser={currentUser} returnBook={returnBook}/>
          </Route>
          <Route exact path="/newbook">
            <NewBookForm addBookToState={addBookToState}/>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/home">
            <Home users={users} setUsers={setUsers} />
          </Route>
          <Route exact path="/">
            <HomePage books={books} setBooks={setBooks} currentUser={currentUser} checkOutBook={checkOutBook} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
