import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    axios.get('https://project-sdh-server.onrender.com/items')
      .then(response => setItems(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('https://project-sdh-server.onrender.com/items', { name })
      .then(response => setItems([...items, response.data]))
      .catch(error => console.log(error));
    setName('');
  };

  const handleDelete = id => {
    axios.delete(`https://project-sdh-server.onrender.com/items/${id}`)
      .then(() => setItems(items.filter(item => item.id !== id)))
      .catch(error => console.log(error));
  };

  const handleUpdate = (id, newName) => {
    axios.put(`https://project-sdh-server.onrender.com/items/${id}`, { name: newName })
      .then(response => {
        const updatedItem = response.data;
        setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item));
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <h1>Scott's Amazing React+Flask CRUD Demo</h1>
      <ul>
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
      </form>
    </div>
  );
}

export default App;
