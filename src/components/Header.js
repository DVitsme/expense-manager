import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import { formatPrice } from '../helpers';

const expenseHeader = ({ expenses }) => {
  const amount = expenses.reduce((acc, cur) => {
    return (acc += cur.price);
  }, 0);
  return (
    <div style={{ paddingTop: '1em' }}>
      {{ amount } === 0 ? (
        <Header as="h2" color="teal" textAlign="center">
          <Icon name="money bill alternate outline" size="big" />
          Expense Manager
        </Header>
      ) : (
        <Header as="h2" color="teal" textAlign="center">
          <Icon name="money bill alternate outline" size="big" />
          Total Amount Spent: {formatPrice(amount)}
        </Header>
      )}
    </div>
  );
};

export default expenseHeader;
