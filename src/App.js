import React, { useState } from 'react';
import List from './components/List';
import Form from './components/Form';
import Alert from './components/Alert';
import uuid from 'uuid';
import Header from './components/Header';
import { Grid, Segment } from 'semantic-ui-react';

const dummyData = [
  {
    id: uuid(),
    expense: 'food',
    price: 2000,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos!'
  },
  {
    id: uuid(),
    expense: 'gas',
    price: 3000,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos!'
  },
  {
    id: uuid(),
    expense: 'internet',
    price: 5000,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos!'
  }
];

function App() {
  const [expenses, setExpenses] = useState(dummyData);
  const [expense, setExpense] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [alert, setAlert] = useState({ show: false });

  const handleExpense = e => {
    setExpense(e.target.value);
  };
  const handlePrice = e => {
    setPrice(parseInt(e.target.value));
  };
  const handleDesc = e => {
    setDesc(e.target.value);
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (expense !== '' && price > 0) {
      const singleExpense = { id: uuid(), expense, price, desc };
      setExpenses([...expenses, singleExpense]);
      handleAlert({ type: 'Success', text: 'item added' });
    } else {
      handleAlert({
        type: 'That Did Not Work',
        text: 'Neither the name nor the price can be empty.'
      });
    }
  };
  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: 'Success', text: 'All Products Deleted' });
  };
  const handleDelete = id => {
    let updatedExpenses = expenses.filter(item => item.id !== id);
    // console.log(updatedExpenses);
    setExpenses(updatedExpenses);
    handleAlert({ type: 'Success', text: 'Product Deleted' });
  };
  const handleEdit = id => {
    console.log(`item edited ${id}`);
  };
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 1200 }}>
        {alert.show && <Alert type={alert.type} text={alert.text} />}
        <Segment stacked>
          <Header expenses={expenses} />
          <main>
            <Form
              expense={expense}
              desc={desc}
              price={price}
              handlePrice={handlePrice}
              handleExpense={handleExpense}
              handleDesc={handleDesc}
              handleSubmit={handleSubmit}
            />
            <List
              expenses={expenses}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              clearItems={clearItems}
            />
          </main>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default App;
