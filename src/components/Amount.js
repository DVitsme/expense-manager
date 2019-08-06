import React from 'react';

const Amount = ({ expenses }) => {
  const amount = expenses.reduce((acc, cur) => {
    return (acc += cur.amount);
  }, 0);
  return (
    <div>
      <h2>Total Amount Spent: ${amount}</h2>
    </div>
  );
};

export default Amount;
