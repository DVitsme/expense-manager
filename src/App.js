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
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

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
      // handle edit product rather than adding item to list
      if (edit) {
        let tempExpense = expenses.map(item => {
          // create a copy of the array and only change the item with the same id
          return item.id === id ? { ...item, expense, price, desc } : item;
          // done this way to so the postion of the item in the array does not change
        });
        // update list state with newly changed array
        setExpenses(tempExpense);
        setEdit(false);
      } else {
        const singleExpense = { id: uuid(), expense, price, desc };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: 'Success', text: 'item added' });
      }
      // reset form
      setExpense('');
      setPrice('');
      setDesc('');
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
    const foundItem = expenses.find(item => item.id === id);
    let { expense, price, desc } = foundItem;
    setExpense(expense);
    setPrice(price);
    setDesc(desc);
    setEdit(true);
    setId(id);
  };
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 1200 }}>
        {alert.show && <Alert type={alert.type} text={alert.text} />}
        <Segment stacked>
          <Header expenses={expenses} edit={edit} />
          <main>
            <Form
              expense={expense}
              desc={desc}
              price={price}
              handlePrice={handlePrice}
              handleExpense={handleExpense}
              handleDesc={handleDesc}
              handleSubmit={handleSubmit}
              edit={edit}
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
