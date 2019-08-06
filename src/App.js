import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import Alert from './components/Alert';
import uuid from 'uuid';
import Amount from './components/Amount';

const dummyData = [
  {
    id: uuid(),
    charge: 'food',
    amount: 2000
  },
  {
    id: uuid(),
    charge: 'gas',
    amount: 3000
  },
  {
    id: uuid(),
    charge: 'internet',
    amount: 5000
  }
];

function App() {
  const [expenses, setExpenses] = useState(dummyData);
  return (
    <div className="App">
      <Alert />
      <h1>Expense Manager</h1>
      <main>
        <Form />
        <List expenses={expenses} />
      </main>
      <Amount expenses={expenses} />
    </div>
  );
}

export default App;
