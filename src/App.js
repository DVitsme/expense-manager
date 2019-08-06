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
    charge: 'food',
    amount: 2000,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos!'
  },
  {
    id: uuid(),
    charge: 'gas',
    amount: 3000,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos!'
  },
  {
    id: uuid(),
    charge: 'internet',
    amount: 5000,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos!'
  }
];

function App() {
  const [expenses, setExpenses] = useState(dummyData);
  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 1200 }}>
        <Segment stacked>
          <Alert />
          <Header expenses={expenses} />
          <main>
            <Form />
            <List expenses={expenses} />
          </main>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}

export default App;
